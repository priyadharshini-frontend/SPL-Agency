import {
  TrendingUp,
  Users,
  Globe,
  Star,
} from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "300%",
      label: "Average Growth",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "120+",
      label: "Happy Clients",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "15+",
      label: "Countries Served",
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "5.0",
      label: "Client Rating",
    },
  ];

  return (
    <section
      className="relative py-28 px-6 overflow-hidden bg-background"
      id="stats"
    >

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          className="text-center max-w-3xl mx-auto space-y-5"
          data-aos="fade-up"
        >

          <div className="
            inline-flex px-4 py-2
            rounded-full border
            bg-background/60
            backdrop-blur
            text-sm
          ">
            Trusted by Growing Businesses
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Real results that help businesses scale faster
          </h2>

          <p className="text-muted-foreground text-lg">
            We combine strategy, design, and performance marketing
            to deliver measurable business growth.
          </p>

        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="
                group relative overflow-hidden
                rounded-3xl border
                bg-muted/30
                backdrop-blur-xl
                p-8 text-center
                hover:shadow-2xl
                transition-all duration-500
              "
            >

              {/* Glow */}
              <div className="
                absolute inset-0 opacity-0
                group-hover:opacity-100
                transition
                bg-gradient-to-br
                from-primary/10
                to-transparent
              " />

              {/* Icon */}
              <div className="
                relative z-10
                w-16 h-16 mx-auto
                rounded-2xl
                bg-primary/10
                flex items-center justify-center
                text-primary
                mb-6
              ">
                {item.icon}
              </div>

              {/* Number */}
              <h3 className="relative z-10 text-5xl font-bold">
                {item.number}
              </h3>

              {/* Label */}
              <p className="relative z-10 mt-3 text-muted-foreground">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}