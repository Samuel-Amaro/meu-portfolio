"use client";

import { useEffect, useState } from "react";

export default function useActivatedScroll(firstIdItemActiveScroll: string) {
  const [idItemActiveScroll, setIdItemActiveScroll] = useState(
    firstIdItemActiveScroll,
  );

  useEffect(() => {
    function onActiveItemScroll() {
      document.querySelectorAll("section").forEach((e) => {
        if (window.pageYOffset >= e.offsetTop) {
          setIdItemActiveScroll(e.id);
        }
      });
    }

    window.addEventListener("scroll", onActiveItemScroll);

    return () => {
      window.removeEventListener("scroll", onActiveItemScroll);
    };
  }, []);

  return idItemActiveScroll;
}
