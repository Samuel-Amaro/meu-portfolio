import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faLink,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Project } from "@/types/projects";
import styles from "./styles.module.css";

type SlideProjectsProps = {
  items: Project[];
  currentProjec: number;
  setCurrentProject: (index: number) => void;
};

export default function SlideShowProjects({
  items,
  currentProjec,
  setCurrentProject,
}: SlideProjectsProps) {
  function nextSlide() {
    const newCurrentProject = (currentProjec + 1) % items.length;
    setCurrentProject(newCurrentProject);
  }

  function previousSlide() {
    const newPreviousCurrentProject =
      currentProjec === 0 ? items.length - 1 : currentProjec - 1;
    setCurrentProject(newPreviousCurrentProject);
  }

  return (
    <article className={styles.container} aria-live="polite">
      <h4 className={`heading4 ${styles.containerTitle}`}>
        <span>{currentProjec}</span>
        <span>/</span>
        <span>{items.length}</span>
      </h4>
      <div className={styles.containerFlow}>
        <Image
          src={`/images/${items[currentProjec].image}`}
          alt={`Ilustração Projeto ${items[currentProjec].name}`}
          width={391}
          height={295}
          className={styles.containerImage}
        />
        <div className={styles.containerText}>
          <h2 className={`${styles.containerName}`}>
            {items[currentProjec].name}
          </h2>
          <p className={styles.containerDescription}>
            {items[currentProjec].description}
          </p>
        </div>
      </div>
      {items[currentProjec].tecnologys.length > 0 && (
        <ul className={styles.containerList}>
          {items[currentProjec].tecnologys.map((tec, index) => (
            <li key={index} className={styles.containerListItem}>
              {tec.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
      <div className={styles.containerLinks}>
        <Link
          href={items[currentProjec].repository}
          target="_blank"
          rel="external"
          title="Visualizar Repósitorio Projeto"
          aria-label="Visualizar Repósitorio Projeto"
          className={styles.containerLink}
        >
          <FontAwesomeIcon
            icon={faGithub}
            width={24}
            height={24}
            className={styles.containerLinkIcon}
          />
        </Link>
        <Link
          href={items[currentProjec].url}
          target="_blank"
          rel="external"
          title="Visualizar Projeto"
          aria-label="Visualizar Projeto"
          className={styles.containerLink}
        >
          <FontAwesomeIcon
            icon={faLink}
            width={24}
            height={24}
            className={styles.containerLinkIcon}
          />
        </Link>
      </div>
      <div className={styles.containerBtns}>
        <button
          type="button"
          title="Ir para o proximo projeto"
          aria-label="Ir para o proximo projeto"
          onClick={() => previousSlide()}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" ||
              event.key === "" ||
              event.key === "ArrowLeft"
            )
              previousSlide();
          }}
          className={styles.containerBtn}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            width={24}
            height={24}
            className={styles.containerBtnIcon}
          />
        </button>
        <button
          type="button"
          title="Retornar ao projeto anterior"
          aria-label="Retornar ao projeto anterior"
          onClick={() => nextSlide()}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" ||
              event.key === "" ||
              event.key === "ArrowRight"
            )
              nextSlide();
          }}
          className={styles.containerBtn}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            width={24}
            height={24}
            className={styles.containerBtnIcon}
          />
        </button>
      </div>
    </article>
  );
}
