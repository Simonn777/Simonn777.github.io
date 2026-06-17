"use client";

import { useEffect } from "react";

const SCROLL_OFFSET = 80;

function scrollToHash(hash: string, behavior: ScrollBehavior = "smooth") {
  if (!hash || hash === "#") {
    return;
  }

  const target = document.getElementById(decodeURIComponent(hash.slice(1)));

  if (!target) {
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;

  window.scrollTo({
    behavior,
    top: Math.max(top, 0),
  });
}

export function HashScroller() {
  useEffect(() => {
    const handleHashChange = () => {
      window.requestAnimationFrame(() => scrollToHash(window.location.hash));
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element
        ? event.target.closest<HTMLAnchorElement>("a[href^='#']")
        : null;

      if (!target) {
        return;
      }

      const hash = target.getAttribute("href");

      if (!hash || hash === "#") {
        return;
      }

      event.preventDefault();
      window.history.pushState(null, "", hash);
      scrollToHash(hash);
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("hashchange", handleHashChange);

    if (window.location.hash) {
      window.setTimeout(() => scrollToHash(window.location.hash, "auto"), 80);
    }

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return null;
}
