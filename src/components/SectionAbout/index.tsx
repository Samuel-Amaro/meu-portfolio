"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import styles from "./styles.module.css";
import FrontMentor from "../Icons/FrontMentor";
import useMatchMedia from "@/hooks/useMatchMedia";

export default function SectionAbout() {
  const mobileContent = (
    <div className={styles.sectionContainerDatas}>
      {useMatchMedia({
        mobileContent: (
          <div className={styles.sectionContainerProfile}>
            <div className={styles.sectionCamadaBg}>
              <div className={styles.sectionCamadaLayer}>
                <img
                  src="/images/profile.png"
                  alt="Imagen de perfil de samuel amaro com camiseta branca com riscos na cor preta e rosto sorridente"
                  width={300}
                  height={300}
                  className={styles.sectionProfile}
                  title="Imagen de perfil de samuel amaro"
                />
              </div>
            </div>
          </div>
        ),
        desktopContent: null,
        mediaQuery: "(min-width: 800px)",
      })}
      <p className={styles.sectionPresentation}>
        <span className={styles.sectionRectangule}></span>
        <span className={styles.sectionPresentationText}>MEU NOME É</span>
      </p>
      <h1 className={`heading1 ${styles.sectionName}`}>
        Samuel <span className={styles.sectionNameColor}>Amaro</span>
      </h1>
      <address className={styles.sectionDatas}>
        Formosa/Goiás ·{" "}
        <a
          href="mailto:samuelamaro96746313@gmail.com"
          target="_self"
          rel="author"
          className={styles.sectionLink}
          aria-label="Link para email de Samuel Amaro"
        >
          samuelamaro96746313@gmail.com
        </a>{" "}
        · Desenvolvedor Front-End
      </address>
      <p className={styles.sectionDescription}>
        Desenvolvedor de software com experiência profissional em
        Desenvolvimento Front-End, especializado na criação de interfaces de
        usuário modernas, responsivas e acessíveis. Trabalho com tecnologias
        como <strong>HTML, CSS, JavaScript/TypeScript</strong> e frameworks como{" "}
        <strong>SvelteKit, Next.js</strong>. Utilizo práticas ágeis de
        desenvolvimento, incluindo{" "}
        <strong>
          feature branch, integração contínua (CI), entrega contínua (CD) e
          GitHub Workflow.
        </strong>{" "}
        Minha experiência inclui revisão de código, resolução de bugs e
        otimização de performance. Comprometido em entregar soluções de alta
        qualidade, sou um profissional colaborativo e motivado, sempre em busca
        de novas tecnologias e abordagens para impulsionar a eficiência e
        aprimorar minhas habilidades.
      </p>
      <ul className={styles.sectionList}>
        <li className={styles.sectionItemList}>
          <Link
            className={styles.sectionItemLink}
            target="_blank"
            rel="noreferrer"
            title="Link Para Media Social Linkedin"
            aria-label="Link Para media Social Linkedin"
            href="https://www.linkedin.com/in/samuel-amaro/"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className={styles.sectionItemLinkIcon}
            />
          </Link>
        </li>
        <li className="social-medias__item">
          <Link
            className={styles.sectionItemLink}
            target="_blank"
            rel="noreferrer"
            title="Link Para Media Social GitHub"
            aria-label="Link Para media Social GitHub"
            href="https://github.com/Samuel-Amaro"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className={styles.sectionItemLinkIcon}
            />
          </Link>
        </li>
        {/* <li className="social-medias__item">
          <Link
            className={styles.sectionItemLink}
            target="_blank"
            rel="noreferrer"
            title="Link Para Media Social Plataforma de desafio de codificação Front-End Mentor"
            aria-label="Link Para media Social Plataforma de desafio de codificação Front-End Mentor"
            href="https://www.frontendmentor.io/profile/Samuel-Amaro"
          >
            <FrontMentor className={styles.sectionItemLinkIcon} />
          </Link>
        </li> */}
      </ul>
      {/*<a
        className={styles.sectionBtn}
        href={"#curriculo"}
        target="_blank"
        rel="noreferrer"
        download="curriculo"
        type="application/pdf"
        aria-label="Link para Curriculo de Samuel"
        title="Link para Curriculo de Samuel"
      >
        Currículo(PDF)
    </a>*/}
    </div>
  );
  const desktopContent = (
    <>
      {mobileContent}
      <div className={styles.sectionContainerProfile}>
        <div className={styles.sectionCamadaBg}>
          <div className={styles.sectionCamadaLayer}>
            <img
              src="/images/profile.png"
              alt="Imagen de perfil de samuel amaro com camiseta branca com riscos na cor preta e rosto sorridente"
              width={300}
              height={300}
              className={styles.sectionProfile}
              title="Imagen de perfil de samuel amaro"
            />
          </div>
        </div>
      </div>
    </>
  );
  return (
    <section className={`section ${styles.section}`} id="sobre">
      {useMatchMedia({
        mobileContent: mobileContent,
        desktopContent: desktopContent,
        mediaQuery: "(min-width: 800px)",
      })}
    </section>
  );
}
