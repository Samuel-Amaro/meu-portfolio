"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function BtnPageUp() {
  const [btnUpIsVisible, setBtnUpIsVisible] = useState(false);

  function handleScroll() {
    if (window.scrollY > 0) {
      setBtnUpIsVisible(true);
    } else {
      setBtnUpIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    btnUpIsVisible && (
      <button
        type="button"
        aria-label="Ir para o topo"
        title="Ir para o topo"
        className={styles.link}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            window.scrollTo(0, 0);
          }
        }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    )
  );
}
