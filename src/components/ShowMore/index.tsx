"use client";

import styles from "./styles.module.css";

export default function ShowMore({
  pageNumber,
  isNext,
  setLimit,
}: {
  pageNumber: number;
  isNext: boolean;
  setLimit: (newLimit: number) => void;
}) {

  return (
    !isNext && (
      <button
        type="button"
        title="Mostrar mais"
        aria-label="Mostrar mais"
        onClick={() => {
          setLimit((pageNumber + 1) * 15);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "") {
            setLimit((pageNumber + 1) * 15);
          }
        }}
        className={styles.button}
      >
        Mostrar Mais
      </button>
    )
  );
}
