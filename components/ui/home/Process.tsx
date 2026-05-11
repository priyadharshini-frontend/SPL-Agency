import {
  Search,
  PenTool,
  Rocket,
  ArrowRight,
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-7 h-7" />,
      title: "Strategy & Research",
      desc: "We analyze your business, audience, and competitors to build a strong digital growth strategy.",
    },
    {
      number: "02",
      icon: <PenTool className="w-7 h-7" />,
      title: "Design & Development",
      desc: "We craft premium UI/UX experiences and develop fast, scalable websites with modern technologies.",
    },
    {
      number: "03",
      icon: <Rocket className="w-7 h-7" />,
      title: "Launch & Growth",
      desc: "After launch, we optimize performance and marketing funnels to maximize conversions and growth.",
    },
  ];

  return (
    <section
      id="process"
      className="relative py-32 px-6 overflow-hidden bg-background"
    >

      {/* Background Glow */}
      <div className="absolute left-0 top-20 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          className="text-center max-w-3xl mx-auto space-y-5"
          data-aos="fade-up"
        >

          <div className="
            inline-flex items-center
            px-4 py-2 rounded-full
            border bg-background/60
            backdrop-blur text-sm
          ">
            Our Process
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            A streamlined process designed for{" "}
            <span className="text-primary">
              business growth
            </span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            From strategy to launch, we create high-performing
            digital experiences that help brands grow faster online.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative mt-24">

          {/* Center Line */}
          <div className="
            hidden lg:block
            absolute left-1/2 top-0
            -translate-x-1/2
            w-[2px] h-full
            bg-border
          " />

          <div className="space-y-16">

            {steps.map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                className={`
                  relative grid lg:grid-cols-2 gap-10 items-center
                  ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
                `}
              >

                {/* Empty Side */}
                <div className="hidden lg:block" />

                {/* Card */}
                <div
                  className="
                    relative group
                    rounded-3xl border
                    bg-muted/30
                    backdrop-blur-xl
                    p-8 md:p-10
                    hover:shadow-2xl
                    transition-all duration-500
                  "
                >

                  {/* Step Number */}
                  <div className="
                    absolute -top-5 left-8
                    px-4 py-2 rounded-full
                    bg-primary text-primary-foreground
                    text-sm font-semibold
                    shadow-lg
                  ">
                    STEP {item.number}
                  </div>

                  {/* Glow */}
                  <div className="
                    absolute inset-0 opacity-0
                    group-hover:opacity-100
                    transition duration-500
                    bg-gradient-to-br
                    from-primary/10
                    to-transparent
                  " />

                  <div className="relative z-10 space-y-6">

                    {/* Icon */}
                    <div className="
                      w-16 h-16 rounded-2xl
                      bg-primary/10
                      text-primary
                      flex items-center justify-center
                      group-hover:scale-110
                      transition
                    ">
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {item.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {item.desc}
                    </p>

                    {/* CTA */}
                    <button className="
                      flex items-center gap-2
                      text-primary font-medium
                    ">
                      Learn More
                      <ArrowRight className="
                        w-4 h-4
                        group-hover:translate-x-1
                        transition
                      " />
                    </button>

                  </div>

                </div>

                {/* Timeline Dot */}
                <div className="
                  hidden lg:flex
                  absolute left-1/2 top-1/2
                  -translate-x-1/2 -translate-y-1/2
                  w-6 h-6 rounded-full
                  border-4 border-background
                  bg-primary shadow-lg
                " />

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}