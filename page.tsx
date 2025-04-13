
'use client';
import { useEffect, useState } from "react";
import { CheckCircle, Circle } from "lucide-react";

const lessons = [
  "Was ist Trading?",
  "EMA verstehen & einrichten",
  "Volumenanalyse",
  "Trend erkennen",
  "Chartmuster: SKS",
  "Mindset & Emotionen",
  "Stop-Loss setzen",
  "Trade-Journal führen",
  "Backtesting Basics",
  "Vom Paper zu Echtgeld",
  "Finanzziele & Strategie"
];

export default function Home() {
  const [progress, setProgress] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("haiProgress");
      return saved ? JSON.parse(saved) : Array(lessons.length).fill(false);
    }
    return Array(lessons.length).fill(false);
  });

  useEffect(() => {
    localStorage.setItem("haiProgress", JSON.stringify(progress));
  }, [progress]);

  const toggleLesson = (index: number) => {
    const updated = [...progress];
    updated[index] = !updated[index];
    setProgress(updated);
  };

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Der Weg des Hais</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            onClick={() => toggleLesson(index)}
            className={`border rounded-lg p-4 cursor-pointer flex items-center justify-between ${
              progress[index] ? "bg-green-100" : "hover:shadow"
            }`}
          >
            <div className="flex items-center gap-2 font-medium">
              <span className="text-blue-600">
                {progress[index] ? <CheckCircle /> : <Circle />}
              </span>
              {lesson}
            </div>
            <span className="text-2xl">🦈</span>
          </div>
        ))}
      </div>
    </main>
  );
}
