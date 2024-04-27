"use client";

import { Project } from "@/types/projects";
import ShowMore from "../ShowMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./styles.module.css";
import { Fragment, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../Modal";
import SlideShowProjects from "../SlideShowProjects";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

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

  function openModal(index: number) {
    setCurrentProject(index);
    setModalIsOpen(true);
  }

  function nextSlide() {
    const newCurrentProject = (currentProject + 1) % data.length;
    setCurrentProject(newCurrentProject);
  }

  function previousSlide() {
    const newPreviousCurrentProject =
      currentProject === 0 ? data.length - 1 : currentProject - 1;
    setCurrentProject(newPreviousCurrentProject);
  }

  useEffect(() => {
    getProjects();
  }, [limit]);

  return (
    <>
      <section className={`section`} id="projetos">
        <h2 className={`heading2`}>Projetos</h2>
        <p className={styles.sectionProjectsDescription}>
          Portefólio, com projetos desenvolvidos para fins de prática em
          determinadas tecnologias/estudo. Cada card de projeto possui um link
          para visualização do projeto e um link para o repositório do projeto
          com a sua respectiva implementação.
        </p>
        {data.length > 0 ? (
          <>
            <div className={styles.sectionProjectsList} aria-live="polite">
              {data.slice(0, limit).map((project, index) => {
                return (
                  <Fragment key={project.id}>
                    <CardProject
                      srcImage={project.image}
                      name={project.name}
                      repository={project.repository}
                      url={project.url}
                      openModal={openModal}
                      index={index}
                    />
                  </Fragment>
                );
              })}
              {loading && <h4>Carregando Projetos</h4>}
            </div>
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
      </section>
      {modalIsOpen &&
        createPortal(
          <Modal
            isOpen={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            className={styles.sectionProjectsModal}
          >
            <h4 className={`heading4 ${styles.containerTitle}`}>
              <span>{currentProject}</span>
              <span>/</span>
              <span>{data.length}</span>
            </h4>
            <SlideShowProjects items={data} currentProjec={currentProject} />
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
          </Modal>,
          document.body,
        )}
    </>
  );
}

function CardProject({
  srcImage,
  name,
  repository,
  url,
  openModal,
  index,
}: {
  srcImage: string;
  name: string;
  repository: string;
  url: string;
  openModal: (index: number) => void;
  index: number;
}) {
  return (
    <div className={styles.card}>
      <img
        src={`/images/${srcImage}`}
        alt={`Imagem ilustração do projeto ${name}`}
        width={391}
        height={295}
        className={styles.cardImage}
        decoding="async"
        title={`Imagem ilustração do projeto ${name}`}
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
          onClick={() => openModal(index)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === "") openModal(index);
          }}
        >
          <FontAwesomeIcon
            icon={faCircleInfo}
            width={24}
            height={24}
            className={styles.cardLinkIcon}
          />
        </button>
      </div>
    </div>
  );
}
