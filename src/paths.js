const rawBasePath = typeof __BASE_PATH__ === "string" ? __BASE_PATH__ : "/";

export const BASE_PATH = rawBasePath === "/" ? "" : rawBasePath.replace(/\/+$/, "");

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
