"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faUser,
  faFile,
  faUserGraduate,
  faClipboardList,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import Switch from "../Switch";
import Link from "next/link";
import styles from "./styles.module.css";

export type DataOptionsFocus = "first" | "last";

//TODO: USAR MENU DO LINKEDLND COMO EXPIRAÇÃO
//TODO: ADD STYLES

export default function Header() {
  return (
    <header className={styles.header}>
      <FontAwesomeIcon
        icon={faCode}
        width={30}
        height={30}
        className={styles.headerLogo}
      />
      <nav className={styles.headerNav}>
        <ul className={styles.headerList}>
          <li>
            <Link
              href="#sobre"
              title="Section Sobre"
              className={styles.headerNavLink}
            >
              <FontAwesomeIcon
                icon={faUser}
                className={styles.headerNavLinkIcon}
              />
              <span className={styles.headerTextLink}>Sobre</span>
            </Link>
          </li>
          <li>
            <Link
              href="#experiencia"
              title="Section Experiência"
              className={styles.headerNavLink}
            >
              <FontAwesomeIcon
                icon={faFile}
                className={styles.headerNavLinkIcon}
              />
              <span className={styles.headerTextLink}>Experiência</span>
            </Link>
          </li>
          <li>
            <Link
              href="#educacao"
              title="Section Educação"
              className={styles.headerNavLink}
            >
              <FontAwesomeIcon
                icon={faUserGraduate}
                className={styles.headerNavLinkIcon}
              />
              <span className={styles.headerTextLink}>Educação</span>
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              title="Section Skills"
              className={styles.headerNavLink}
            >
              <FontAwesomeIcon
                icon={faClipboardList}
                className={styles.headerNavLinkIcon}
              />
              <span className={styles.headerTextLink}>Skills</span>
            </Link>
          </li>
          <li>
            <Link
              href="#interesses"
              title="Section Interesses"
              className={styles.headerNavLink}
            >
              <FontAwesomeIcon
                icon={faList}
                className={styles.headerNavLinkIcon}
              />
              <span className={styles.headerTextLink}>Interesses</span>
            </Link>
          </li>
          <li>
            <Link
              href="#projetos"
              title="Section Projetos"
              className={styles.headerNavLink}
            >
              <FontAwesomeIcon
                icon={faCode}
                className={styles.headerNavLinkIcon}
              />
              <span className={styles.headerTextLink}>Projetos</span>
            </Link>
          </li>
        </ul>
      </nav>
      <Switch />
    </header>
  );
}
