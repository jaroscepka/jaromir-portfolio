import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 py-16">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Text — left */}
        <div>
          <p className="text-lg text-gray-500 mb-4">Hey, I&apos;m</p>
          <h1 className="text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Jaromír<br />Ščepka
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            13 years building Korcule.com &amp; Spineo into Slovakia&apos;s leading skate brand. Now on parental leave — exploring AI tools and figuring out what&apos;s next.
          </p>
        </div>

        {/* Photo — right, fills half the container */}
        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
          <Image
            src="/jaromir.jpg"
            alt="Jaromír Ščepka in front of Spineo store"
            fill
            className="object-cover object-[center_10%]"
            priority
          />
        </div>

      </div>
    </section>
  );
}
