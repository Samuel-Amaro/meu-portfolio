import styles from "./styles.module.css";

export default function SectionEducation() {
  return (
    <section id="educacao" className={`section`}>
      <h2 className={`heading2 ${styles.sectionEducationTitle}`}>Educação</h2>
      <div className={styles.sectionEducationContainer}>
        <article>
          <h3 className={`heading3 ${styles.sectionEducationCargo}`}>
            Instituto Federal de Goiás Câmpus Formosa
          </h3>
          <h4 className={`heading4 ${styles.sectionEducationEmpresa}`}>
            Graduação - tecnologia
          </h4>
          <p className={styles.sectionEducationDescription}>
            Superior de Tecnologia em Análise e Desenvolvimento de Sistemas
          </p>
        </article>
        <aside>
          <p className={styles.sectionEducationdate}>
            Março 2019 - Dezembro 2021
          </p>
        </aside>
      </div>
    </section>
  );
}
