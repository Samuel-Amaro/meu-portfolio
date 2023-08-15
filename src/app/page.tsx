import Image from "next/image";
import styles from "./page.module.css";
import SectionAbout from "@/components/SectionAbout/index";

export default function Home() {
  return (
    <main className={styles.main}>
      <SectionAbout />
    </main>
  );
}
