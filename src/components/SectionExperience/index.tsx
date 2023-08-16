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
            Cargo Exercido - link empresa
          </h3>
          <h4 className={`heading4 ${styles.sectionExperienceEmpresa}`}>
            Nome empresa/instituição
          </h4>
          <p className={styles.sectionExperienceDescription}>
            uma descrição resumindo as tarefas, rotina diaria, ferramentas, onde
            atuo, oque resolveu, etc... um resumo da experiencia
          </p>
        </article>
        <aside>
          <p className={styles.sectionExperiencedate}>
            {"data inicio"} - {"data sáida"}
          </p>
        </aside>
      </div>
    </section>
  );
}
