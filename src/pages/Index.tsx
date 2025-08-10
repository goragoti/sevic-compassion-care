import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HeartHandshake, Users, School, Shield, ShieldPlus } from "lucide-react";

const canonical = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : undefined;

const galleryPhotos = [
  "/photo_2025-08-10_23-00-21.jpg",
  "/photo_2025-08-10_23-00-26.jpg",
  "/photo_2025-08-10_23-00-32.jpg",
  "/photo_2025-08-10_23-00-37.jpg",
  "/photo_2025-08-10_23-00-42.jpg",
  "/photo_2025-08-10_23-00-48.jpg",
  "/photo_2025-08-10_23-00-53.jpg",
  "/photo_2025-08-10_23-15-57.jpg",
];

function useSlideshow(images: string[], interval = 3000) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images.length, interval]);
  return index;
}

export default function Index() {
  // Slideshow index for hero background
  const slideIdx = useSlideshow(galleryPhotos, 3000);

  // For animating metrics
  const [metricsVisible, setMetricsVisible] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (metricsRef.current) {
        const rect = metricsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight) setMetricsVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      <Helmet>
        <title>SEVIC — Scientific Vision Centre | Serving North East India</title>
        <meta name="description" content="SEVIC serves seniors, children, tribal communities, urban homeless, de-addiction, and youth skilling across North East India." />
        {canonical && <link rel="canonical" href={canonical} />}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Scientific Vision Centre (SEVIC)',
            url: typeof window !== 'undefined' ? window.location.origin : undefined,
            email: 'sevicdelhi@gmail.com',
            telephone: '+91-8974921330',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '269-A, Upper Ground Floor, Arjun Nagar, Safdarjung Enclave',
              addressLocality: 'New Delhi',
              postalCode: '110029',
              addressCountry: 'IN'
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section with slideshow background */}
      <section className="relative overflow-hidden">
        {/* Slideshow background */}
        <div className="absolute inset-0 z-0">
          {galleryPhotos.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${slideIdx === idx ? "opacity-100" : "opacity-0"}`}
              style={{ transitionProperty: "opacity" }}
              draggable={false}
            />
          ))}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-enter">
            <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl text-white drop-shadow">
              Scientific Vision Centre (SEVIC)
            </h1>
            <p className="mt-4 text-lg text-muted-foreground text-white/90 drop-shadow">
              A non-profit dedicated to Education, Health, Senior Care, Child Protection, Tribal Welfare, Urban Homeless Services, De-Addiction, and Youth Skilling across the North Eastern states of India.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg" className="hover-scale">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-scale">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            {/* Metrics with animation */}
            <div
              className="mt-8 grid grid-cols-2 gap-4 text-sm md:grid-cols-4"
              ref={metricsRef}
            >
              {[
                { label: 'Senior Homes Approved', value: '3+' },
                { label: 'Youth Trained', value: '250' },
                { label: 'Job Placements', value: '225' },
                { label: 'De-Addiction Centres', value: '2' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`card-elevated rounded-lg p-4 transition-all duration-700
                    ${metricsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                  `}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="text-2xl font-semibold text-primary">{stat.value}</div>
                  <div className="mt-1 text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="font-heading text-2xl font-semibold md:text-3xl">What we do</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          We work with governments and communities to deliver quality care and opportunities across the region.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Senior Citizen Care', desc: 'Homes providing shelter, protection, care, food, and awareness on geriatric care across the North East.', icon: HeartHandshake },
            { title: 'Child Protection', desc: 'CCI for girls (50 capacity) in Khowai, Tripura; programs with Social Welfare Departments in Manipur.', icon: Shield },
            { title: 'Tribal Education', desc: 'Residential schools in remote areas to provide basic education to underprivileged tribal students.', icon: School },
            { title: 'Urban Homeless', desc: 'Shelter for Urban Homeless in Khowai District under TULM & DAY-NULM.', icon: Users },
            { title: 'De‑Addiction', desc: 'Two Drug De-Addiction Centres in Sikkim with plans to expand across North East.', icon: ShieldPlus },
            { title: 'Youth Skilling & Jobs', desc: 'Skill development and placements; 250 trained under Hero India with 225 placements in India and Japan.', icon: Users },
          ].map(({ title, desc, icon: Icon }) => (
            <article key={title} className="card-elevated rounded-xl p-6 transition hover:shadow-lg">
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* Photo Gallery Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="font-heading text-2xl font-semibold md:text-3xl text-center mb-4">Our Work in Pictures</h2>
        <p className="mb-8 text-center text-muted-foreground max-w-2xl mx-auto">
          Glimpses of our community outreach, events, and the people we serve across North East India.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryPhotos.map((src, idx) => (
            <div key={src} className="overflow-hidden rounded-xl shadow-lg bg-white border flex flex-col items-center">
              <img
                src={src}
                alt={`SEVIC event photo ${idx + 1}`}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
