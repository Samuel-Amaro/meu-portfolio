import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className="description">
        © 2023 -{" "}
        <a
          href="https://www.linkedin.com/in/samuel-amaro/"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          Samuel Amaro
        </a>
      </p>
    </footer>
  );
}
