import Image from "next/image";

const stats = [
  { value: "€800k", label: "Peak Revenue" },
  { value: "4", label: "Countries" },
  { value: "13", label: "Years" },
  { value: "∞", label: "Community" },
];

export default function Spineo() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Spineo</h2>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-14 shadow-sm">
          <Image
            src="/spineo-store.png"
            alt="Spineo online store"
            fill
            className="object-cover object-top"
          />
        </div>

        <p className="text-xl text-gray-700 leading-relaxed mb-10">
          Built Slovakia&apos;s most recognized inline skating brand from the
          ground up. Scaled to 4 countries, created a thriving community hub,
          and managed complex operations across e-commerce, inventory, and
          retail.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <a
          href="/spineo-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-colors duration-200"
        >
          Read Full Story
        </a>
      </div>
    </section>
  );
}
