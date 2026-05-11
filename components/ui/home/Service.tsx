import {
  Megaphone,
  Camera,
  Globe,
  PenTool,
  Search,
  Palette,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Meta Ads",
      desc: "High-converting ad campaigns built to generate leads and scale revenue.",
      icon: <Megaphone className="w-6 h-6" />,
    },
    {
      title: "Shoot & Editing",
      desc: "Premium cinematic shoots and engaging edits crafted for modern brands.",
      icon: <Camera className="w-6 h-6" />,
    },
    {
      title: "Website Development",
      desc: "Fast, scalable, and visually premium websites designed for conversions.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Content Creation",
      desc: "Creative social content that builds engagement and audience trust.",
      icon: <PenTool className="w-6 h-6" />,
    },
    {
      title: "SEO Optimization",
      desc: "Strategic SEO systems that improve visibility and organic growth.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: "Branding & Designing",
      desc: "Strong visual identity systems that make your brand memorable.",
      icon: <Palette className="w-6 h-6" />,
    },
  ];

  return (
    <section
      id="services"
      className="relative py-32 px-6 overflow-hidden bg-background"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div
          className="max-w-3xl mx-auto text-center space-y-6"
          data-aos="fade-up"
        >

          <div className="
            inline-flex items-center
            px-4 py-2 rounded-full
            border bg-background/60
            backdrop-blur text-sm
          ">
            Our Expertise
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Services designed to{" "}
            <span className="text-primary">
              scale your brand
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            We blend creativity, strategy, and technology
            to build powerful digital experiences.
          </p>

        </div>

        {/* Services */}
        <div className="mt-24 space-y-6">

          {services.map((service, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="
                group relative overflow-hidden
                border-b border-border/50
                py-10
                transition-all duration-500
              "
            >

              {/* Hover Background */}
              <div className="
                absolute inset-0
                scale-y-0 group-hover:scale-y-100
                origin-bottom
                transition-transform duration-500
                bg-muted/30
                rounded-3xl
              " />

              <div className="
                relative z-10
                grid lg:grid-cols-[120px_1fr_120px]
                items-center gap-8
              ">

                {/* Left Number */}
                <div className="
                  text-5xl md:text-6xl
                  font-bold text-primary/20
                  group-hover:text-primary/40
                  transition
                ">
                  0{i + 1}
                </div>

                {/* Center Content */}
                <div className="space-y-4">

                  <div className="
                    flex items-center gap-4
                  ">

                    <div className="
                      w-14 h-14 rounded-2xl
                      bg-primary/10
                      text-primary
                      flex items-center justify-center
                      group-hover:scale-110
                      transition
                    ">
                      {service.icon}
                    </div>

                    <h3 className="
                      text-2xl md:text-4xl
                      font-semibold
                      group-hover:translate-x-2
                      transition
                    ">
                      {service.title}
                    </h3>

                  </div>

                  <p className="
                    text-muted-foreground
                    text-lg max-w-2xl
                    leading-relaxed
                  ">
                    {service.desc}
                  </p>

                </div>

                {/* Right Large Icon */}
                <div className="
                  hidden lg:flex
                  items-center justify-center
                  text-primary/10
                  scale-[2.5]
                  group-hover:scale-[3]
                  group-hover:text-primary/20
                  transition duration-500
                ">
                  {service.icon}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}