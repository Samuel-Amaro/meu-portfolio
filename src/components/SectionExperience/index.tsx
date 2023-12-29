import styles from "./styles.module.css";

export default function SectionExperience() {
  return (
    <section className="section" id="experiencia">
      <h2 className={`heading2 ${styles.sectionExperienceTitle}`}>
        Experiência
      </h2>
      <div className={styles.sectionExperienceContainer}>
        <article>
          <h3 className={`heading3 ${styles.sectionExperienceCargo}`}>
            Desenvolvedor Front-End
          </h3>
          <h4 className={`heading4 ${styles.sectionExperienceEmpresa}`}>
            Cantto
          </h4>
          <p className={styles.sectionExperienceDescription}>
            Atuando como desenvolvedor Front-End construindo UIs com as seguintes ferramentas/tecnologias: Svelte, SvelteKit, TypeScript, Git, GitHub, GitFlow, HTML, CSS, PostCSS
          </p>
        </article>
        <aside>
          <p className={styles.sectionExperiencedate}>
            nov 2023 - o momento
          </p>
        </aside>
      </div>
    </section>
  );
}
