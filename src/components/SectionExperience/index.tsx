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
            <a href="https://cantto.com.br/" target="_blank" rel="external" className={styles.sectionLink}>Cantto</a>
          </h4>
          <p className={styles.sectionExperienceDescription}>
            Como desenvolvedor front-end na Cantto, tenho a responsabilidade de construir interfaces para o aprimoramento do nosso SaaS (Software as a Service) utilizando tecnologias de ponta e práticas de desenvolvimento ágeis.
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
