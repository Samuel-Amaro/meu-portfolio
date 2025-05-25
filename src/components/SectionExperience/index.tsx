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
                Como desenvolvedor front-end na Cantto, atuei em uma startup de
                desenvolvimento de software cujo core é um SaaS (Software as a
                Service) voltado para o mercado imobiliário. O produto é
                projetado para atender tanto corretores autônomos quanto
                imobiliárias, proporcionando ferramentas modernas para gestão e
                organização de processos imobiliários. Tive a responsabilidade
                de construir interfaces para o SaaS utilizando tecnologias de
                ponta e práticas de desenvolvimento ágeis. Utilizei tecnologias
                como{" "}
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
                Atuei como desenvolvedor front-end, contribuindo para a
                manutenção e evolução dos sistemas internos da empresa. Minhas
                responsabilidades incluiam em refatorar e modernizar interfaces,
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
                Colaborei com designers e desenvolvedores back-end para garantir
                a entrega de produtos de alta qualidade dentro dos prazos
                estabelecidos.
              </li>
              <li>
                Contribui com revisões de código, testes e correções de bugs.
              </li>
              <li>
                Atuei na refatoração de componentes e fluxos existentes,
                alinhando-os a um novo padrão de design moderno e funcional, em
                colaboração com o time de UX/UI.
              </li>
              <li>
                Para consumir APIs de forma otimizada, utilizei ferramentas como
                Axios e React Query (useQuery).
              </li>
              <li>
                {" "}
                Sou responsável por aplicar o Design System proprietário da
                empresa, garantindo consistência visual e técnica em todos os
                projetos.
              </li>
            </ul>
          </article>
          <aside>
            <p className={styles.sectionExperiencedate}>Set/2024 - Mar/2025</p>
          </aside>
        </div>
        <div className={styles.sectionExperienceContainer}>
          <article>
            <h3 className={`heading3 ${styles.sectionExperienceCargo}`}>
              Desenvolvedor Front-End
            </h3>
            <h4 className={`heading4 ${styles.sectionExperienceEmpresa}`}>
              <a
                href="https://febrafar.com.br/"
                target="_blank"
                rel="external"
                className={styles.sectionLink}
              >
                Febrafar
              </a>
            </h4>
            <ul className={styles.sectionExperienceList}>
              <li>
                Atuo como Desenvolvedor Front-End, contribuindo nos produtos
                internos do grupo. Utilizo tecnologias como Svelte/SvelteKit,
                Tailwind CSS, TypeScript e um Design System proprietário. Minhas
                principais responsabilidades incluem implementação de
                interfaces, manutenção de funcionalidades, correção de bugs e
                revisão de código, sempre com foco em qualidade, usabilidade e
                performance.
              </li>
            </ul>
          </article>
          <aside>
            <p className={styles.sectionExperiencedate}>Mar/2025 - Presente</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
