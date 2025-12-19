export default function ProjectCard({ title, tech, desc, link }) {
  return (
    <a href={link} target="_blank" className="block bg-slate-900 p-5 rounded-xl">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-slate-400">{tech}</p>
      <ul className="list-disc list-inside mt-2">
        {desc.map((d,i) => <li key={i}>{d}</li>)}
      </ul>
    </a>
  );
}
