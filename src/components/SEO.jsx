import { useEffect } from "react";
import { faqs, routeMeta, site } from "../data.js";
import { BASE_PATH, withBasePath } from "../paths.js";

function upsertMeta(selector, createAttrs, valueAttr, value) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    Object.entries(createAttrs).forEach(([key, attrValue]) => element.setAttribute(key, attrValue));
    document.head.appendChild(element);
  }

  element.setAttribute(valueAttr, value);
}

function upsertCanonical(href) {
  let element = document.head.querySelector("link[rel='canonical']");

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function getSiteUrl() {
  const configuredUrl = typeof __SITE_URL__ === "string" ? __SITE_URL__ : "";
  if (configuredUrl) return configuredUrl;
  if (typeof window === "undefined") return "";
  return `${window.location.origin}${BASE_PATH}`;
}

function absolutizeUrl(siteUrl, path) {
  if (!path) return siteUrl;
  if (/^https?:\/\//i.test(path)) return path;
  return `${siteUrl}${withBasePath(path)}`;
}

function buildSchema(path, meta, siteUrl) {
  const canonical = `${siteUrl}${path === "/" ? "" : path}`;
  const schema = meta.schema
    ? {
        ...meta.schema,
        ...(meta.schema.image ? { image: absolutizeUrl(siteUrl, meta.schema.image) } : {}),
      }
    : null;
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: siteUrl,
    email: site.email,
    logo: absolutizeUrl(siteUrl, "/assets/brand-logo.svg"),
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/features?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  const page = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: meta.title,
    description: meta.description,
    url: canonical,
    isPartOf: { "@type": "WebSite", name: site.name, url: siteUrl },
  };
  const faqSchema =
    path === "/" || path === "/forms"
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null;

  return [organization, website, page, schema].concat(faqSchema ? [faqSchema] : []).filter(Boolean);
}

export function SEO({ path }) {
  useEffect(() => {
    const aliases = {
      "/page-two": "/forms",
      "/financial": "/ambassadors",
      "/sales-agenda": "/helper-team",
    };
    const cleanPath = aliases[path] || path;
    const meta = routeMeta[cleanPath] || routeMeta["/"];
    const siteUrl = getSiteUrl();
    const canonical = `${siteUrl}${cleanPath === "/" ? "" : cleanPath}`;
    const imageUrl = absolutizeUrl(siteUrl, site.ogImage);

    document.title = meta.title;
    upsertMeta("meta[name='description']", { name: "description" }, "content", meta.description);
    upsertMeta("meta[name='keywords']", { name: "keywords" }, "content", meta.keywords);
    upsertMeta("meta[property='og:title']", { property: "og:title" }, "content", meta.title);
    upsertMeta("meta[property='og:description']", { property: "og:description" }, "content", meta.description);
    upsertMeta("meta[property='og:type']", { property: "og:type" }, "content", "website");
    upsertMeta("meta[property='og:url']", { property: "og:url" }, "content", canonical);
    upsertMeta("meta[property='og:image']", { property: "og:image" }, "content", imageUrl);
    upsertMeta("meta[name='twitter:card']", { name: "twitter:card" }, "content", "summary_large_image");
    upsertMeta("meta[name='twitter:title']", { name: "twitter:title" }, "content", meta.title);
    upsertMeta("meta[name='twitter:description']", { name: "twitter:description" }, "content", meta.description);
    upsertCanonical(canonical);

    let script = document.head.querySelector("script[data-schema='hopes-safety']");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.schema = "hopes-safety";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(buildSchema(cleanPath, meta, siteUrl));
  }, [path]);

  return null;
}
