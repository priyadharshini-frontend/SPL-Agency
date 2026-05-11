import {
  CheckCircle2,
  TrendingUp,
  Users,
  Rocket,
} from "lucide-react";

export default function WhyUs() {
  const features = [
    "Conversion-focused design systems",
    "Fast & SEO optimized websites",
    "Modern UI/UX experiences",
    "Growth-driven marketing strategy",
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden bg-muted/20"
    >

      {/* Glow Background */}
      <div className="absolute right-0 top-20 w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8" data-aos="fade-right">

          {/* Small Badge */}
          <div className="inline-flex px-4 py-2 rounded-full border bg-background/60 backdrop-blur text-sm">
            Why Businesses Choose Us
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            We build digital experiences that drive{" "}
            <span className="text-primary">
              real business growth
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our focus is not just beautiful design — we create
            websites and marketing systems engineered to convert
            visitors into customers.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4">

            {features.map((item, i) => (
              <div
                key={i}
                className="
                  flex items-start gap-3
                  p-4 rounded-2xl
                  border bg-background/60
                  backdrop-blur-xl
                "
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-1" />

                <span className="text-sm leading-relaxed">
                  {item}
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="relative"
          data-aos="fade-left"
        >

          {/* Main Card */}
          <div className="
            relative overflow-hidden
            rounded-3xl border
            bg-background/70
            backdrop-blur-xl
            p-8 md:p-10
            shadow-2xl
          ">

            {/* Top */}
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Results we focus on
              </p>

              <h3 className="text-3xl font-bold">
                More leads. More sales. More growth.
              </h3>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">

              <div className="
                rounded-2xl border
                bg-muted/30 p-6
                space-y-3
              ">
                <TrendingUp className="text-primary w-8 h-8" />

                <h4 className="text-3xl font-bold">
                  3X
                </h4>

                <p className="text-sm text-muted-foreground">
                  Higher conversion rates
                </p>
              </div>

              <div className="
                rounded-2xl border
                bg-muted/30 p-6
                space-y-3
              ">
                <Users className="text-primary w-8 h-8" />

                <h4 className="text-3xl font-bold">
                  100+
                </h4>

                <p className="text-sm text-muted-foreground">
                  Happy business clients
                </p>
              </div>

            </div>

            {/* Bottom CTA Box */}
            <div className="
              mt-8 rounded-2xl
              bg-primary text-primary-foreground
              p-6 flex items-start gap-4
            ">
              <Rocket className="w-8 h-8 shrink-0" />

              <div>
                <h4 className="font-semibold text-lg">
                  Built for scaling businesses
                </h4>

                <p className="text-sm opacity-80 mt-1">
                  We create websites and campaigns designed
                  to grow with your business.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}