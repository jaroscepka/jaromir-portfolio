"use client";

import { useEffect, useState } from "react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jaroscepka/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jaroscepka/",
  },
];

export default function Contact() {
  // Email is only assembled client-side so bots scraping static HTML can't find it
  const [emailHref, setEmailHref] = useState<string>("#");

  useEffect(() => {
    const user = atob("amFyb3NjZXBrYQ==");   // jaroscepka
    const domain = atob("Z21haWwuY29t");       // gmail.com
    setEmailHref(`mailto:${user}@${domain}`);
  }, []);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Let&apos;s Connect</h2>

        <p className="text-xl text-gray-600 leading-relaxed mb-14 max-w-xl mx-auto">
          Open to conversations about building things, exploring new directions,
          or just grabbing coffee to talk about cycling and speed skating.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href={emailHref}
            className="px-8 py-3 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-colors duration-200"
          >
            Email
          </a>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex justify-center mb-14">
          <a
            href="/spineo-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-200"
          >
            Download CV
          </a>
        </div>

        <p className="text-gray-400 text-sm">Bratislava, Slovakia</p>
      </div>
    </section>
  );
}
