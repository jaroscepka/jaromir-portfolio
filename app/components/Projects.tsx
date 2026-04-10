"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Caravan Rental Platform",
    description:
      "Building a Next.js platform for caravan rentals across Europe. Focusing on user experience and operational simplicity.",
    status: "In Progress",
  },
  {
    id: 2,
    title: "AI Tools & Automation",
    description:
      "Exploring AI tools to automate workflows and build smarter products. Learning, experimenting, and discovering what's possible.",
    status: "Learning",
  },
  {
    id: 3,
    title: "This Portfolio",
    description:
      "Building portfolio v2. Learning Next.js, Tailwind, and modern web development practices.",
    status: "Building",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % projects.length);
  const prev = () => setCurrent((current - 1 + projects.length) % projects.length);

  const project = projects[current];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Current Projects</h2>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 mb-8 min-h-52">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-3">
            {project.status}
          </p>
          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={prev}
            className="px-6 py-3 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-colors duration-200"
          >
            ← Previous
          </button>

          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to project ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === current ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="px-6 py-3 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-colors duration-200"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
