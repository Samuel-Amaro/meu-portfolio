"use client";

import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

export default function Modal({
  children,
  onClose,
  isOpen,
  className,
}: {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
  className?: string;
}) {
  const refDialog = useRef<HTMLDialogElement | null>(null);

  function handleClose() {
    if (refDialog.current) {
      refDialog.current.close();
    }
    onClose();
  }

  function handleClickBackdropModal(
    event: React.MouseEvent<HTMLDialogElement, MouseEvent>,
  ) {
    if (
      refDialog.current?.contains(event.target as Node) &&
      (refDialog.current as HTMLDialogElement) !== event.target
    ) {
      return;
    }

    handleClose();
  }

  useEffect(() => {
    if (refDialog.current) {
      if (isOpen) {
        document.body.classList.add("has-dialog");
        refDialog.current.showModal();
      } else {
        refDialog.current.close();
        document.body.classList.remove("has-dialog");
      }
    }

    return () => {
      document.body.classList.remove("has-dialog");
    };
  }, [isOpen]);

  return (
    <dialog
      ref={refDialog}
      onClose={handleClose}
      onClick={handleClickBackdropModal}
      className={styles.modal}
    >
      <button
        type="button"
        title="Fechar Modal"
        aria-label="Fechar Modal"
        onClick={() => handleClose()}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === "") handleClose();
        }}
        className={styles.modalButton}
      >
        X
      </button>
      {children}
    </dialog>
  );
}
