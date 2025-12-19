import { useEffect, useState } from "react";

export default function Home() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch("/api/links")
      .then(res => res.json())
      .then(data => setLinks(data));
  }, []);

  return (
    <div className="container">
      <h1>🚀 Pamula Sai Bhargav</h1>
      <p>IIT Patna | Math & Computing</p>

      <div className="cards">
        {links.map((link, idx) => (
          <a key={idx} href={link.url} target="_blank" className="card">
            <span>{link.icon}</span>
            <h3>{link.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
