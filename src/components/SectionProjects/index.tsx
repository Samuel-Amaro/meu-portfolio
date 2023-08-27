"use client";

import { Project } from "@/types/projects";
import useSWR from "swr";
import ShowMore from "../ShowMore";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./styles.module.css";
import { Fragment, useEffect, useState } from "react";

//TODO: CONSTRUIR ESTA SECTION
//TODO: REFATORAR A PARTE ONDE OBTER OS DADOS DOS PROJETOS, E AS TECNOLOGIAS QUE O PROJETO USA
//TODO: VER ONDE PODE MELHORAR
//TODO: CONSTRUIR UMA PAGINATION AO CLICAR EM UM BUTTOM PARA MOSTRAR OS PROJECTS DE ACORDO COM O CLIQUE
//TODO: CRIAR UM SEARCH PARAMS LIMIT PARA FAZER PAGINAÇÃÕ, CRIAR UM LOADER, E SKELETON DO CARD DO PROJECT
//TODO: A CADA CLIQUE NO BUTTON ADD UM SEARCH PARAMS LIMIT COM O VALOR DA QTD DE ITENS
//TODO: CARD DE PROJECT VAI SER IMAGEN, LINKS, BUTTON MODAL PARA MOSTRAR DETALHES(IMAGE, TEXT), LISTA DE TECNOLOGIAS

type Result = { projects: Project[]; totalProjects: number };

async function fetchProjects(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Ocorreu um erro ao buscar dados sobre projects no client: ${response.statusText}`,
    );
  }

  const datas: Project[] = await response.json();
  return datas;
}

export default function SectionProjects() {
  const [data, setData] = useState<Project[]>([]);
  const [limit, setLimit] = useState(15);
  const [loading, setLoading] = useState(false);

  async function getProjects() {
    setLoading(true);
    try {
      const result = await fetchProjects("/api");
      setData(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProjects();
  }, [limit]);

  return (
    <section className={`section`} id="projetos">
      <h2 className={`heading2`}>Projetos</h2>
      <p className={styles.sectionProjectsDescription}>
        Portefólio, com projetos desenvolvidos para fins de prática em
        determinadas tecnologias/estudo. Cada card de projeto possui um link
        para visualização do projeto e um link para o repositório do projeto com
        a sua respectiva implementação.
      </p>
      <div className={styles.sectionProjectsList}>
        {data.length > 0 ? (
          <>
            {data.slice(0, limit).map((project) => {
              return (
                <Fragment key={project.id}>
                  <CardProject
                    srcImage={project.image}
                    name={project.name}
                    repository={project.repository}
                    url={project.url}
                    tecnologys={project.tecnologys}
                  />
                </Fragment>
              );
            })}
            {loading && <h4>Carregando Projetos</h4>}
            <ShowMore
              pageNumber={limit / 15}
              isNext={limit > data.length}
              setLimit={(newLimit: number) => {
                setLimit(newLimit);
              }}
            />
          </>
        ) : (
          !loading && (
            <section className={`section`} id="projetos">
              <h2 className={`heading2`}>Projetos</h2>
              <p>
                oops, não podemos mostrar os projetos no momento, mas se quiser
                pode acessar o GitHub:{" "}
                <a
                  href="https://github.com/Samuel-Amaro"
                  rel="external"
                  target="_blank"
                  title="Ir para o GitHub Samuel Amaro"
                  aria-label="Ir para o GitHub Samuel Amaro"
                >
                  GitHub Samuel Amaro
                </a>
              </p>
            </section>
          )
        )}
      </div>
    </section>
  );
}

function CardProject({
  srcImage,
  name,
  repository,
  url,
  tecnologys,
}: {
  srcImage: string;
  name: string;
  repository: string;
  url: string;
  tecnologys: string[];
}) {
  return (
    <div className={styles.card}>
      <Image
        src={`/images/${srcImage}`}
        alt="Imagem ilustração de projeto"
        width={391}
        height={295}
        className={styles.cardImage}
      />
      <h3 className={`heading4 ${styles.cardTitle}`}>{name}</h3>
      <div className={styles.cardContainerBtns}>
        <Link
          href={repository}
          target="_blank"
          rel="external"
          title="Visualizar Repósitorio Projeto"
          aria-label="Visualizar Repósitorio Projeto"
          className={styles.cardLink}
        >
          <FontAwesomeIcon
            icon={faGithub}
            width={24}
            height={24}
            className={styles.cardLinkIcon}
          />
        </Link>
        <Link
          href={url}
          target="_blank"
          rel="external"
          title="Visualizar Projeto"
          aria-label="Visualizar Projeto"
          className={styles.cardLink}
        >
          <FontAwesomeIcon
            icon={faLink}
            width={24}
            height={24}
            className={styles.cardLinkIcon}
          />
        </Link>
        <button
          type="button"
          title="Mais detalhes sobre o projeto"
          aria-label="Mais detalhes sobre o projeto"
          className={styles.cardBtnInfo}
        >
          <FontAwesomeIcon
            icon={faCircleInfo}
            width={24}
            height={24}
            className={styles.cardLinkIcon}
          />
        </button>
      </div>
      <ul className={styles.cardListTecnology}>
        {tecnologys.map((tec, index) => (
          <li key={index} className={styles.cardListItem}>
            {tec.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
}
