import styles from "./page.module.css";
import SectionAbout from "@/components/SectionAbout/index";
import LineDiviser from "@/components/LineDiviser";
import SectionEducation from "@/components/SectionEducation";
import SectionSkills from "@/components/SectionSkills";
import SectionProjects from "@/components/SectionProjects";
import SectionExperience from "@/components/SectionExperience";

export default function Home() {
  return (
    <main className={styles.main}>
      <SectionAbout />
      <LineDiviser />
      <SectionEducation />
      <LineDiviser />
      <SectionExperience />
      <LineDiviser />
      <SectionSkills />
    </main>
  );
}
