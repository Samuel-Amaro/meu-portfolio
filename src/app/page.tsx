import styles from "./page.module.css";
import SectionAbout from "@/components/SectionAbout/index";
import LineDiviser from "@/components/LineDiviser";
import SectionEducation from "@/components/SectionEducation";

export default function Home() {
  return (
    <main className={styles.main}>
      <SectionAbout />
      <LineDiviser />
      <SectionEducation />
    </main>
  );
}
