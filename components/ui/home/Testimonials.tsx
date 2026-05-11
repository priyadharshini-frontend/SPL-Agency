import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Ecommerce Founder",
      image: "/client1.jpg",
      review:
        "Their team completely transformed our online presence. We saw a huge increase in conversions after launch.",
    },
    {
      name: "David Miller",
      role: "Startup Owner",
      image: "/client2.jpg",
      review:
        "Professional design, smooth development, and excellent communication throughout the project.",
    },
    {
      name: "Priya Sharma",
      role: "Marketing Consultant",
      image: "/client3.jpg",
      review:
        "The website feels premium and performs incredibly fast. Clients now trust our brand more.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-28 px-6 overflow-hidden bg-background"
    >

      {/* Background Glow */}
      <div className="absolute left-0 top-20 w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full" />

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
            Client Testimonials
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Trusted by growing brands worldwide
          </h2>

          <p className="text-muted-foreground text-lg">
            Businesses choose us because we focus on real results,
            modern design, and long-term growth.
          </p>

        </div>

        {/* Testimonials Grid */}
        <div className="mt-20 grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="
                group relative overflow-hidden
                rounded-3xl border
                bg-muted/30
                backdrop-blur-xl
                p-8
                hover:shadow-2xl
                transition-all duration-500
              "
            >

              {/* Stars */}
              <div className="flex gap-1 mb-6 text-yellow-500">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 fill-yellow-500"
                    />
                  ))}
              </div>

              {/* Review */}
              <p className="text-muted-foreground leading-relaxed text-lg">
                “{item.review}”
              </p>

              {/* Bottom */}
              <div className="flex items-center gap-4 mt-8">

                {/* Avatar */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden border">

                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />

                </div>

                {/* Info */}
                <div>
                  <h4 className="font-semibold">
                    {item.name}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}