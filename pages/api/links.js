export default function handler(req, res) {
  res.status(200).json([
    {
      title: "GitHub",
      url: "https://github.com/Bhargav221287",
      icon: "🐙"
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/sai-bhargav-2301mc24/",
      icon: "💼"
    },
    {
      title: "Codeforces",
      url: "https://codeforces.com/profile/Sai-Bhargav",
      icon: "⚔️"
    },
    {
      title: "Sky Reserve – Airline System",
      url: "https://github.com/Bhargav221287/Sky-Reserve-Airline-mangement-system",
      icon: "✈️"
    },
    {
      title: "Poker Hand Detector (ML)",
      url: "https://github.com/Bhargav221287/ML-project-sem-4",
      icon: "🃏"
    },
    {
      title: "Movie Recommendation System",
      url: "https://github.com/Bhargav221287/movie-recomdation-system",
      icon: "🎬"
    }
  ]);
}
