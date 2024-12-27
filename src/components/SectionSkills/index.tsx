import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faCss3Alt,
  faHtml5,
  faJs,
  faGitAlt,
  faReact,
  faNpm,
  faFigma,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUniversalAccess,
  faCheck,
  // faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import BemCSS from "../Icons/BemCSS";
import {
  SiReactrouter,
  SiTypescript,
  SiVite,
  SiNextdotjs,
  SiJest,
  SiTestinglibrary,
  SiSvelte,
  // SiBun,
  // SiPostgresql,
  // SiDocker,
} from "react-icons/si";
import IconSWR from "../Icons/IconSWR";
import IconCSSModules from "../Icons/CSSModules";
import ReactHookForm from "../Icons/ReactHookForm";
// import IconVitest from "../Icons/IconVitest";
// import Drizzle from "../Icons/Drizzle";
// import ElysiaJS from "../Icons/ElysiaJS";

export default function SectionSkills() {
  return (
    <section id="skills" className={`section`}>
      <h2 className={`heading2`}>Skills</h2>
      <h3 className={`heading4 ${styles.sectionSkillsSubtitle}`}>
        Linguagens de programação & ferramentas
      </h3>
      <ul className={styles.sectionSkillsListTools}>
        <li className={styles.sectionSkillsToolsItem}>
          <FontAwesomeIcon
            icon={faGithub}
            className={styles.sectionSkillsIcon}
            width={48}
            height={48}
          />
          <span className={styles.sectionSkillsContentText}>GitHub</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <FontAwesomeIcon
            icon={faHtml5}
            className={styles.sectionSkillsIcon}
            width={48}
            height={48}
          />
          <span className={styles.sectionSkillsContentText}>HTML5</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <FontAwesomeIcon
            icon={faCss3Alt}
            className={styles.sectionSkillsIcon}
            width={48}
            height={48}
          />
          <span className={styles.sectionSkillsContentText}>CSS3</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <FontAwesomeIcon
            icon={faGitAlt}
            className={styles.sectionSkillsIcon}
            width={48}
            height={48}
          />
          <span className={styles.sectionSkillsContentText}>Git</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <FontAwesomeIcon
            icon={faJs}
            className={styles.sectionSkillsIcon}
            width={48}
            height={48}
          />
          <span className={styles.sectionSkillsContentText}>JS-es6+</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <FontAwesomeIcon
            icon={faReact}
            className={styles.sectionSkillsIcon}
            width={48}
            height={48}
          />
          <span className={styles.sectionSkillsContentText}>React.JS</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <FontAwesomeIcon
            icon={faNpm}
            className={styles.sectionSkillsIcon}
            width={48}
            height={48}
          />
          <span className={styles.sectionSkillsContentText}>NPM</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <BemCSS className={styles.sectionSkillsIcon} />
          <span className={styles.sectionSkillsContentText}>bem</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <FontAwesomeIcon
            icon={faUniversalAccess}
            className={styles.sectionSkillsIcon}
            width={48}
            height={48}
          />
          <span className={styles.sectionSkillsContentText}>Acessibility</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <SiReactrouter className={styles.sectionSkillsIcon} />
          <span className={styles.sectionSkillsContentText}>
            react-router-dom
          </span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <SiTypescript className={styles.sectionSkillsIcon} />
          <span className={styles.sectionSkillsContentText}>TypeScript</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <SiVite className={styles.sectionSkillsIcon} />
          <span className={styles.sectionSkillsContentText}>Vite</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <FontAwesomeIcon
            icon={faFigma}
            className={styles.sectionSkillsIcon}
          />
          <span className={styles.sectionSkillsContentText}>Figma</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <SiNextdotjs className={styles.sectionSkillsIcon} />
          <span className={styles.sectionSkillsContentText}>Next.JS</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <IconSWR className={styles.sectionSkillsIcon} />
          <span className={styles.sectionSkillsContentText}>SWR</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <IconCSSModules className={styles.sectionSkillsIcon} />
          <span className={styles.sectionSkillsContentText}>CSS Modules</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <ReactHookForm className={styles.sectionSkillsIcon} />
          <span className={styles.sectionSkillsContentText}>
            React Hook Form
          </span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <SiJest className={styles.sectionSkillsIcon} />
          <span className={styles.sectionSkillsContentText}>Jest</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <SiTestinglibrary className={styles.sectionSkillsIcon} />
          <span className={styles.sectionSkillsContentText}>
            Testing Library
          </span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <SiSvelte className={styles.sectionSkillsIcon} />
          <span className={styles.sectionSkillsContentText}>Svelte</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <SiSvelte className={styles.sectionSkillsIcon} />
          <span className={styles.sectionSkillsContentText}>SvelteKit</span>
        </li>
        {/* <li className={styles.sectionSkillsToolsItem}>
          <IconVitest className={styles.sectionSkillsIcon} />
          <span className={styles.sectionSkillsContentText}>Vitest</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <FontAwesomeIcon
            icon={faNode}
            className={styles.sectionSkillsIcon}
            width={48}
            height={48}
          />
          <span className={styles.sectionSkillsContentText}>Node.JS</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <SiBun className={styles.sectionSkillsIcon} />
          <span className={styles.sectionSkillsContentText}>BUN.JS</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <FontAwesomeIcon
            icon={faDatabase}
            className={styles.sectionSkillsIcon}
            width={48}
            height={48}
          />
          <span className={styles.sectionSkillsContentText}>SQL</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <SiPostgresql className={styles.sectionSkillsIcon} />
          <span className={styles.sectionSkillsContentText}>PostGreSQL</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <SiDocker className={styles.sectionSkillsIcon} />
          <span className={styles.sectionSkillsContentText}>Docker</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <Drizzle className={styles.sectionSkillsIcon} />
          <span className={styles.sectionSkillsContentText}>Drizzle ORM</span>
        </li>
        <li className={styles.sectionSkillsToolsItem}>
          <ElysiaJS className={styles.sectionSkillsIcon} />
          <span className={styles.sectionSkillsContentText}>ElysiaJS</span>
        </li> */}
      </ul>
      <h3 className={`heading4 ${styles.sectionSkillsHeading3}`}>
        Fluxo de trabalho
      </h3>
      <ul className={styles.sectionSkillsWorkflow}>
        <li className={styles.sectionSkillsWorkflowItemList}>
          <p className={styles.sectionSkillsWorkflowItem}>
            <FontAwesomeIcon icon={faCheck} />
            Mobile-First Design
          </p>
        </li>
        <li className={styles.sectionSkillsWorkflowItemList}>
          <p className={styles.sectionSkillsWorkflowItem}>
            <FontAwesomeIcon icon={faCheck} />
            RWD(Responsive Web Design)
          </p>
        </li>
        <li className={styles.sectionSkillsWorkflowItemList}>
          <p className={styles.sectionSkillsWorkflowItem}>
            <FontAwesomeIcon icon={faCheck} />
            POO (programação orientada a objetos)
          </p>
        </li>
        <li className={styles.sectionSkillsWorkflowItemList}>
          <p className={styles.sectionSkillsWorkflowItem}>
            <FontAwesomeIcon icon={faCheck} />
            Desenvolvimento Ágil e Scrum
          </p>
        </li>
        <li className={styles.sectionSkillsWorkflowItemList}>
          <p className={styles.sectionSkillsWorkflowItem}>
            <FontAwesomeIcon icon={faCheck} />
            Noções de componentização
          </p>
        </li>
        <li className={styles.sectionSkillsWorkflowItemList}>
          <p className={styles.sectionSkillsWorkflowItem}>
            <FontAwesomeIcon icon={faCheck} />
            Familiaridade com ferramenta Figma
          </p>
        </li>
        <li className={styles.sectionSkillsWorkflowItemList}>
          <p className={styles.sectionSkillsWorkflowItem}>
            <FontAwesomeIcon icon={faCheck} />
            Testes Automatizados
          </p>
        </li>
        <li className={styles.sectionSkillsWorkflowItemList}>
          <p className={styles.sectionSkillsWorkflowItem}>
            <FontAwesomeIcon icon={faCheck} />
            Git Feature Branch Workflow
          </p>
        </li>
        <li className={styles.sectionSkillsWorkflowItemList}>
          <p className={styles.sectionSkillsWorkflowItem}>
            <FontAwesomeIcon icon={faCheck} />
            CI/CD (GitHub Actions / Vercel)
          </p>
        </li>
        <li className={styles.sectionSkillsWorkflowItemList}>
          <p className={styles.sectionSkillsWorkflowItem}>
            <FontAwesomeIcon icon={faCheck} />
            TDD / MVC
          </p>
        </li>
        {/* <li className={styles.sectionSkillsWorkflowItemList}>
          <p className={styles.sectionSkillsWorkflowItem}>
            <FontAwesomeIcon icon={faCheck} />
            API Rest
          </p>
        </li> */}
      </ul>
      <h3 className={`heading4 ${styles.sectionSkillsHeading3}`}>
        Soft Skills
      </h3>
      <ul className={styles.sectionSkillsSoft}>
        <li className={styles.sectionSkillsSoftItemList}>
          <p className={styles.sectionSkillsSoftItem}>
            <FontAwesomeIcon icon={faCheck} />
            Trabalho em Equipe
          </p>
        </li>
        <li className={styles.sectionSkillsSoftItemList}>
          <p className={styles.sectionSkillsSoftItem}>
            <FontAwesomeIcon icon={faCheck} />
            Aprendizado rápido
          </p>
        </li>
        <li className={styles.sectionSkillsSoftItemList}>
          <p className={styles.sectionSkillsSoftItem}>
            <FontAwesomeIcon icon={faCheck} />
            Raciocínio Lógico
          </p>
        </li>
        <li className={styles.sectionSkillsSoftItemList}>
          <p className={styles.sectionSkillsSoftItem}>
            <FontAwesomeIcon icon={faCheck} />
            Resolução de Problemas
          </p>
        </li>
        <li className={styles.sectionSkillsSoftItemList}>
          <p className={styles.sectionSkillsSoftItem}>
            <FontAwesomeIcon icon={faCheck} />
            Detalhista é Flexível
          </p>
        </li>
        <li className={styles.sectionSkillsSoftItemList}>
          <p className={styles.sectionSkillsSoftItem}>
            <FontAwesomeIcon icon={faCheck} />
            Mentalidade de aprendizado contínuo e disposição para aprender novas
            tecnologias e conceitos de programação
          </p>
        </li>
        <li className={styles.sectionSkillsSoftItemList}>
          <p className={styles.sectionSkillsSoftItem}>
            <FontAwesomeIcon icon={faCheck} />
            Auto gerenciável e autodidata.
          </p>
        </li>
      </ul>
    </section>
  );
}
