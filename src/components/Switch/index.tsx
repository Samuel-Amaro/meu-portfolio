"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { useThemeContext } from "@/context/ThemeContext";
import styles from "./styles.module.css";

export default function Switch() {
  const themeContext = useThemeContext();

  function toggleStatus(
    event:
      | React.PointerEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>,
  ) {
    let state = "";
    if (event.currentTarget.getAttribute("aria-checked") === "true") {
      state = "false";
    } else {
      state = "true";
    }
    event.currentTarget.setAttribute("aria-checked", state);
  }

  return (
    <div
      className={styles.switch}
      role="switch"
      aria-checked={themeContext.theme === "light" ? false : true}
      onPointerDown={(event) => {
        toggleStatus(event);
        themeContext.toggleTheme(
          event.currentTarget.getAttribute("aria-checked") === "true"
            ? "dark"
            : "light",
        );
      }}
      aria-label="Alternador de esquema de cores desde site"
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          toggleStatus(event);
          themeContext.toggleTheme(
            event.currentTarget.getAttribute("aria-checked") === "true"
              ? "dark"
              : "light",
          );
        }
      }}
      tabIndex={0}
    >
      <div className={styles.switchIcons}>
        <span className={styles.switchIcon}>
          <FontAwesomeIcon icon={faMoon} className={styles.switchIcon} />
        </span>
        <span className={styles.switchIcon}>
          <FontAwesomeIcon icon={faSun} className={styles.switchIcon} />
        </span>
      </div>
      <span
        className={styles.switchControler}
        title="Controlador esquema de cores usado neste site"
        tabIndex={0}
      ></span>
    </div>
  );
}
