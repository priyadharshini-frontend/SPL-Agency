import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "Luxury Fashion Store",
      category: "Ecommerce Website",
      image: "/project1.jpg",
    },
    {
      title: "Real Estate Landing Page",
      category: "Lead Generation",
      image: "/project2.jpg",
    },
    {
      title: "Fitness Brand Website",
      category: "UI/UX Design",
      image: "/project3.jpg",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative py-28 px-6 overflow-hidden bg-muted/20"
    >

      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          className="text-center max-w-3xl mx-auto space-y-5"
          data-aos="fade-up"
        >

          <div className="
            inline-flex px-4 py-2 rounded-full
            border bg-background/60
            backdrop-blur text-sm
          ">
            Featured Projects
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Work that delivers real impact
          </h2>

          <p className="text-muted-foreground text-lg">
            We create high-performing websites and digital experiences
            designed to help businesses grow faster online.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="mt-20 grid lg:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="
                group relative overflow-hidden
                rounded-3xl border
                bg-background/60
                backdrop-blur-xl
                hover:shadow-2xl
                transition-all duration-500
              "
            >

              {/* Image */}
              <div className="relative overflow-hidden h-[300px]">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/20
                  to-transparent
                " />

              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 text-white w-full">

                <p className="text-sm text-white/70">
                  {project.category}
                </p>

                <div className="flex items-center justify-between mt-2">

                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <div className="
                    w-10 h-10 rounded-full
                    bg-white/10 backdrop-blur
                    flex items-center justify-center
                    group-hover:translate-x-1
                    transition
                  ">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}