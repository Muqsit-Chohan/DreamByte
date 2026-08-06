import React from "react";
import { Quote, Users } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import HeroSection from "../components/HeroSection";
import trivsIncLogo from "../assets/trivsinclogo.png";
import rhrLogo from "../assets/rhrlogo.png";
import blvkLogo from "../assets/blvklogo.png";
import arowaiLogo from "../assets/arowailogo.png";
import dreambyteLogo from "../assets/dreambytelogo.jpg";

const HOME_STYLES = `
@keyframes stats-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes testimonials-marquee-up {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}

@keyframes testimonials-marquee-down {
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
}

.logo-marquee-shell {
  box-shadow: 0 16px 60px -34px rgba(15, 23, 42, 0.45);
}

.stats-marquee-track {
  animation: stats-marquee 32s linear infinite;
  width: max-content;
  min-width: max-content;
  will-change: transform;
}

.stats-marquee:hover .stats-marquee-track {
  animation-play-state: paused;
}

.testimonial-track-up {
  animation: testimonials-marquee-up 38s linear infinite;
  will-change: transform;
}

.testimonial-track-down {
  animation: testimonials-marquee-down 44s linear infinite;
  will-change: transform;
}

.testimonials-shell {
  box-shadow: 0 18px 64px -36px rgba(15, 23, 42, 0.28);
}

.testimonial-column {
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 12%,
    black 88%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 12%,
    black 88%,
    transparent 100%
  );
}

.testimonial-column:hover .testimonial-track-up,
.testimonial-column:hover .testimonial-track-down {
  animation-play-state: paused;
}
`;

const MARQUEE_ITEMS = [
  {
    src: trivsIncLogo,
    alt: "Trivs Inc logo",
  },
  {
    src: rhrLogo,
    alt: "RHR logo",
  },
  {
    src: blvkLogo,
    alt: "BLVK logo",
  },
  {
    src: arowaiLogo,
    alt: "Arowai logo",
  },
];

const LOOPED_MARQUEE_ITEMS = [
  ...MARQUEE_ITEMS,
  ...MARQUEE_ITEMS,
  ...MARQUEE_ITEMS,
  ...MARQUEE_ITEMS,
];

const TESTIMONIALS = [
  {
    quote:
      "DreamByte moved quickly, communicated clearly, and turned the product direction into something shippable without the usual back-and-forth.",
    name: "A. Khan",
    role: "Founder, SaaS startup",
  },
  {
    quote:
      "The UI polish and AI workflow design made the whole platform feel much more premium than we expected from the first release.",
    name: "M. Ahmed",
    role: "Product Lead, B2B software",
  },
  {
    quote:
      "They understood the brief fast, handled the build cleanly, and kept the delivery process calm and organized.",
    name: "S. Malik",
    role: "Operations Manager, Services company",
  },
  {
    quote:
      "We got a team that could think like product people, not just implementors. That saved us a lot of time.",
    name: "R. Hussain",
    role: "Co-founder, Digital agency",
  },
  {
    quote:
      "The final experience felt sharp, modern, and ready for clients on day one. That was the difference for us.",
    name: "T. Rehman",
    role: "Director, Logistics company",
  },
  {
    quote:
      "Good engineering, strong visual taste, and enough speed to keep the momentum going. Exactly what we needed.",
    name: "H. Javed",
    role: "Founder, AI tools studio",
  },
];

const LOOPED_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS];

function ClientLogoItem({ src, alt }) {
  return (
    <div className="flex shrink-0 items-center justify-center px-5 sm:px-6 lg:px-7">
      <img
        src={src}
        alt={alt}
        className="h-9 w-auto max-w-[140px] object-contain opacity-100 brightness-0 transition duration-300 dark:brightness-100 dark:opacity-95 dark:grayscale"
      />
    </div>
  );
}

function StatsMarquee() {
  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="logo-marquee-shell stats-marquee relative overflow-hidden  ">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/90 to-transparent dark:from-[#0b1117] dark:via-[#0b1117]/90" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/90 to-transparent dark:from-[#0b1117] dark:via-[#0b1117]/90" />
          <div className="stats-marquee-track flex min-w-max items-center gap-10 sm:gap-12 lg:gap-14">
            {LOOPED_MARQUEE_ITEMS.map((item, index) => (
              <ClientLogoItem
                key={`${item.alt}-${index}`}
                src={item.src}
                alt={item.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, name, role }) {
  return (
    <article className="bg-white/70 p-6 text-left backdrop-blur-xl dark:bg-white/5">
      <Quote className="h-5 w-5 text-teal-600 dark:text-teal-300" />
      <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
        {quote}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-700 text-sm font-bold text-white dark:from-white dark:to-slate-300 dark:text-slate-900">
          {name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            {name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{role}</p>
        </div>
      </div>
    </article>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="purple" className="mb-4 w-fit mx-auto flex items-center justify-center gap-1.5">
            <Quote className="w-4 h-4 mr-2" />
            Client Feedback
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 font-heading">
            What people say after shipping with us
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            A quick snapshot of the kind of collaboration and delivery clients
            usually mention when they work with DreamByte.
          </p>
        </div>

        <div className="testimonials-shell mt-12 relative grid grid-cols-1 gap-6 overflow-hidden rounded-[2rem] bg-transparent p-0 backdrop-blur-xl lg:grid-cols-3">

          <div className="testimonial-column relative h-[34rem] overflow-hidden">
            <div className="testimonial-track-up flex flex-col gap-4">
              {LOOPED_TESTIMONIALS.map((item, index) => (
                <TestimonialCard
                  key={`left-${item.name}-${index}`}
                  quote={item.quote}
                  name={item.name}
                  role={item.role}
                />
              ))}
            </div>
          </div>

          <div className="testimonial-column relative hidden h-[34rem] overflow-hidden lg:block">
            <div className="testimonial-track-down flex flex-col gap-4">
              {LOOPED_TESTIMONIALS.slice().reverse().map((item, index) => (
                <TestimonialCard
                  key={`center-${item.name}-${index}`}
                  quote={item.quote}
                  name={item.name}
                  role={item.role}
                />
              ))}
            </div>
          </div>

          <div className="testimonial-column relative hidden h-[34rem] overflow-hidden lg:block">
            <div className="testimonial-track-up flex flex-col gap-4">
              {LOOPED_TESTIMONIALS.map((item, index) => (
                <TestimonialCard
                  key={`right-${item.name}-${index}`}
                  quote={item.quote}
                  name={item.name}
                  role={item.role}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage({ _onSelectFounder, setCurrentPage, theme, toggleTheme }) {
  const HomeCta = () => (
    <section id="contact" className="py-20 sm:py-24">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 font-heading">
          Have a vision? Let’s build it together.
        </h2>
        <div className="mt-8">
          <Button
            variant="primary"
            size="lg"
            onClick={() => setCurrentPage("contact")}
            className="btn-glow-teal"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: HOME_STYLES }} />
      {/* Hero Section */}
        <HeroSection setCurrentPage={setCurrentPage} theme={theme} toggleTheme={toggleTheme} />

      <StatsMarquee />

      {/* Pre-Projects CTA */}
      <section className="py-16 bg-transparent">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 font-heading">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Let's talk about your idea and how we can bring it to life.
          </p>
          <div className="mt-8">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setCurrentPage("contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <ProjectsSection
        limit={4}
        showViewAll={true}
        setCurrentPage={setCurrentPage}
      />
      <ServicesSection isTeaser={true} setCurrentPage={setCurrentPage} />

      <TestimonialsSection />

      {/* About Us Summary Section */}
      <section id="about" className="py-20 sm:py-24 bg-transparent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="purple" className="mb-4 w-fit mx-auto flex items-center justify-center gap-1.5">
            <Users className="w-4 h-4 mr-2 " />
            Who We Are
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 font-heading">
            A Small Team of Passionate Builders
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            DreamByte is a Karachi-based software studio founded on the
            principle of crafting high-quality, impactful digital products. We
            are a collective of engineers, designers, and strategists who love
            to build. Our focus is on creating AI-powered software and immersive
            experiences that solve real-world problems and delight users.
          </p>
          <div className="mt-8">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setCurrentPage("about")}
            >
              More About Us
            </Button>
          </div>
        </div>
      </section>

      <HomeCta />
    </>
  );
}
