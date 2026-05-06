const rawBasePath = typeof __BASE_PATH__ === "string" ? __BASE_PATH__ : "/";

export const BASE_PATH = rawBasePath === "/" ? "" : rawBasePath.replace(/\/+$/, "");
export const USE_HASH_ROUTES = Boolean(BASE_PATH);

export function withBasePath(path = "/") {
  if (!path || /^(https?:|mailto:|tel:|#)/i.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}` || "/";
}

export function withoutBasePath(path = "/") {
  if (!BASE_PATH || !path.startsWith(BASE_PATH)) return path || "/";
  const stripped = path.slice(BASE_PATH.length) || "/";
  return stripped.startsWith("/") ? stripped : `/${stripped}`;
}

export function withRoutePath(path = "/") {
  if (!path || /^(https?:|mailto:|tel:|#)/i.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!USE_HASH_ROUTES) return withBasePath(normalized);
  return `${BASE_PATH}/#${normalized}`;
}

export function getCurrentRoutePath() {
  if (USE_HASH_ROUTES) {
    const hashPath = window.location.hash.replace(/^#/, "");
    if (hashPath) return hashPath.startsWith("/") ? hashPath : `/${hashPath}`;
  }
  return withoutBasePath(window.location.pathname);
}
