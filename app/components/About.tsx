const interests = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5L9 10l-3 2H2m7-2h8l2 7.5" />
      </svg>
    ),
    title: "Cycling",
    description:
      "Data-driven approach to training and performance. I track metrics, optimize routes, and love the simplicity of moving on two wheels.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M6 4v16M18 4v16M3 8h3M18 8h3M3 16h3M18 16h3M6 12h12" />
      </svg>
    ),
    title: "Strength Training",
    description:
      "Tracking, optimization, measurable progress. There's something satisfying about building strength systematically.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M13 2L4.5 13.5H12L11 22l8.5-11.5H12L13 2z" />
      </svg>
    ),
    title: "Former Speed Skater",
    description:
      "Multiple national Slovak marathon champion. Competitive skating shaped who I am — the drive, discipline, and love for speed.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "New Parent",
    description:
      "On parental leave right now. Being intentional about time — with family, learning, and exploring what's next.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
      </svg>
    ),
    title: "Learning AI Tools",
    description:
      "Curious, not dogmatic. Exploring how AI can help build better things, faster.",
  },
];

export default function About() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 leading-tight">
          But Spineo isn&apos;t the whole story. Here&apos;s what actually drives me.
        </h2>

        <div className="space-y-12">
          {interests.map((item) => (
            <div key={item.title} className="flex gap-5 items-start">
              <div className="mt-1 shrink-0 text-black">{item.icon}</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
