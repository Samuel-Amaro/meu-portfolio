import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Project as TypeProject } from "@/types/projects";
import styles from "./styles.module.css";

type SlideProjectsProps = {
  items: TypeProject[];
  currentProjec: number;
};

export default function SlideShowProjects({
  items,
  currentProjec,
}: SlideProjectsProps) {
  return (
    <article className={styles.container} aria-live="polite">
      <Project datas={items[currentProjec]} />
    </article>
  );
}

function Project({
  datas,
}: {
  datas: {
    image: string;
    name: string;
    description: string;
    tecnologys: string[];
    repository: string;
    url: string;
  };
}) {
  return (
    <div className={styles.project}>
      <div className={styles.containerFlow}>
        <img
          src={`/images/${datas.image}`}
          alt={`Ilustração Projeto ${datas.name}`}
          width={391}
          height={295}
          className={styles.containerImage}
          decoding="async"
          title={`Ilustração Projeto ${datas.name}`}
        />
        <div className={styles.containerText}>
          <h2 className={`${styles.containerName}`}>{datas.name}</h2>
          <p className={styles.containerDescription}>{datas.description}</p>
        </div>
      </div>
      {datas.tecnologys.length > 0 && (
        <ul className={styles.containerList}>
          {datas.tecnologys.map((tec, index) => (
            <li key={index} className={styles.containerListItem}>
              {tec.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
      <div className={styles.containerLinks}>
        <Link
          href={datas.repository}
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
          href={datas.url}
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
    </div>
  );
}
