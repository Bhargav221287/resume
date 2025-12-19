import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import SkillBadge from "../components/SkillBadge";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold">Pamula Sai Bhargav</h1>
      <p className="text-slate-400 mt-2">IIT Patna • Mathematics & Computing • CPI: 6.17</p>

      <div className="flex gap-4 mt-4">
        <a href="https://github.com/Bhargav221287">GitHub</a>
        <a href="https://www.linkedin.com/in/sai-bhargav-2301mc24/">LinkedIn</a>
        <a href="https://codeforces.com/profile/Sai-Bhargav">Codeforces</a>
      </div>

      <Section title="Skills">
        <div className="flex flex-wrap gap-2">
          {["C/C++","Python","Git","GitHub","HTML","SQL","Linux","VS Code","Pandas","Scikit-Learn","MySQL"]
            .map(s => <SkillBadge key={s} skill={s} />)}
        </div>
      </Section>

      <Section title="Projects">
        <ProjectCard
          title="Sky Reserve – Airline Management System"
          tech="Python, PHP, MySQL"
          link="https://github.com/Bhargav221287/Sky-Reserve-Airline-mangement-system"
          desc={["Full-stack airline booking system","Admin & user dashboards","Secure login"]}
        />
      </Section>
    </main>
  );
}
