export default function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 border-b border-slate-700">{title}</h2>
      {children}
    </section>
  );
}
