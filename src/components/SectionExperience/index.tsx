import styles from "./styles.module.css";

export default function SectionExperience() {
  return (
    <section className="section" id="experiencia">
      <h2 className={`heading2 ${styles.sectionExperienceTitle}`}>
        Experiência
      </h2>
      <div className={styles.sectionExperienceWrapper}>
        <div className={styles.sectionExperienceContainer}>
          <article>
            <h3 className={`heading3 ${styles.sectionExperienceCargo}`}>
              Desenvolvedor Front-End
            </h3>
            <h4 className={`heading4 ${styles.sectionExperienceEmpresa}`}>
              <a
                href="https://cantto.com.br/"
                target="_blank"
                rel="external"
                className={styles.sectionLink}
              >
                Cantto
              </a>
            </h4>
            <ul className={styles.sectionExperienceList}>
              <li>
                Fui Responsável pela construção de interfaces, incluindo
                páginas, componentes e integração com APIs de serviços back-end,
                focando na construção de um SaaS (Software as a Service).
                Utilizei tecnologias de ponta como{" "}
                <strong>
                  Svelte, SvelteKit, TypeScript, PostCSS, HTML, CSS, além de Git
                  e GitHub Feature Branch Workflow
                </strong>
                .
              </li>
              <li>
                Colabororei com designers e desenvolvedores back-end para
                garantir a entrega de produtos de alta qualidade dentro dos
                prazos estabelecidos.
              </li>
              <li>
                Contribui com revisões de código, testes e correções de bugs.
              </li>
            </ul>
          </article>
          <aside>
            <p className={styles.sectionExperiencedate}>Nov/2023 - Ago/2024</p>
          </aside>
        </div>
        <div className={styles.sectionExperienceContainer}>
          <article>
            <h3 className={`heading3 ${styles.sectionExperienceCargo}`}>
              Desenvolvedor Front-End
            </h3>
            <h4 className={`heading4 ${styles.sectionExperienceEmpresa}`}>
              <a
                href="https://saudeblue.com/"
                target="_blank"
                rel="external"
                className={styles.sectionLink}
              >
                Blue
              </a>
            </h4>
            <ul className={styles.sectionExperienceList}>
              <li>
                Atuo como desenvolvedor front-end, contribuindo para a
                manutenção e evolução dos sistemas internos da empresa. Minhas
                responsabilidades incluem refatorar e modernizar interfaces,
                utilizando tecnologias de ponta para oferecer uma experiência
                mais eficiente, moderna e minimalista aos usuários. Utilizei
                tecnologias de ponta como{" "}
                <strong>
                  React, React Router Dom(SPA), TypeScript, Tailwind CSS, HTML,
                  CSS, além de Git e GitHub Feature Branch Workflow
                </strong>
                .
              </li>
              <li>
                Colaboro com designers e desenvolvedores back-end para garantir
                a entrega de produtos de alta qualidade dentro dos prazos
                estabelecidos.
              </li>
              <li>
                Contribuo com revisões de código, testes e correções de bugs.
              </li>
              <li>
                Sou responsavel por refatoração de componentes e fluxos
                existentes para alinhá-los a um design mais moderno e funcional.
              </li>
              <li>
                Para consumir APIs de forma otimizada, utilizo ferramentas como
                Axios e React Query (useQuery).
              </li>
              <li>
                {" "}
                Sou responsavel também para aplicar o Design System proprietário
                da empresa, promovendo consistência visual e técnica nos
                projetos.
              </li>
            </ul>
          </article>
          <aside>
            <p className={styles.sectionExperiencedate}>Set/2024 - Presente</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
