import { useEffect } from "react";
import { faqs, routeMeta, site } from "../data.js";

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

function buildSchema(path, meta) {
  const canonical = `${site.url}${path === "/" ? "" : path}`;
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    logo: `${site.url}/assets/brand-logo.svg`,
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/features?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  const page = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: meta.title,
    description: meta.description,
    url: canonical,
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
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

  return [organization, website, page, meta.schema].concat(faqSchema ? [faqSchema] : []).filter(Boolean);
}

export function SEO({ path }) {
  useEffect(() => {
    const cleanPath = path === "/page-two" ? "/forms" : path;
    const meta = routeMeta[cleanPath] || routeMeta["/"];
    const canonical = `${site.url}${cleanPath === "/" ? "" : cleanPath}`;
    const imageUrl = `${site.url}${site.ogImage}`;

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
    script.textContent = JSON.stringify(buildSchema(cleanPath, meta));
  }, [path]);

  return null;
}
