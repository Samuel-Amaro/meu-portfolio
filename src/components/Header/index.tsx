"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faUser,
  faUserGraduate,
  faClipboardList,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import Switch from "../Switch";
import Link from "next/link";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useActivatedScroll from "@/hooks/useActivatedScroll";

export default function Header() {
  //searchparams acionara nova renderizações
  const searchParams = useSearchParams();

  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    //a cada nova re-renderização acionada por params, obtemos o hash atualizado
    setCurrentHash(window.location.hash);
  }, [searchParams]);

  const itemActivatedScroll = useActivatedScroll("sobre");

  return (
    <header className={styles.header}>
      <FontAwesomeIcon
        icon={faCode}
        width={30}
        height={30}
        className={styles.headerLogo}
      />
      <nav className={styles.headerNav} aria-label="Navegação Principal">
        <ul className={styles.headerList}>
          <li>
            <Link
              href="#sobre"
              target="_self"
              rel="next"
              title="Seção Sobre"
              className={
                currentHash === "#sobre" || itemActivatedScroll === "sobre"
                  ? `${styles.headerNavLink} ${styles.headerNavLinkActive}`
                  : styles.headerNavLink
              }
              aria-current={currentHash === "#sobre"}
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
              href="#educacao"
              target="_self"
              rel="next"
              title="Seção Educação"
              className={
                currentHash === "#educacao" ||
                itemActivatedScroll === "educacao"
                  ? `${styles.headerNavLink} ${styles.headerNavLinkActive}`
                  : styles.headerNavLink
              }
              aria-current={currentHash === "#educacao"}
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
              target="_self"
              rel="next"
              title="Seção Skills"
              className={
                currentHash === "#skills" || itemActivatedScroll === "skills"
                  ? `${styles.headerNavLink} ${styles.headerNavLinkActive}`
                  : styles.headerNavLink
              }
              aria-current={currentHash === "#skills"}
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
              href="#projetos"
              target="_self"
              rel="next"
              title="Seção Projetos"
              className={
                currentHash === "#projetos" ||
                itemActivatedScroll === "projetos"
                  ? `${styles.headerNavLink} ${styles.headerNavLinkActive}`
                  : styles.headerNavLink
              }
              aria-current={currentHash === "#projetos"}
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
