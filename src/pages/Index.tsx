import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/hero-sevic.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HeartHandshake, Users, School, Shield, ShieldPlus } from "lucide-react";

const canonical = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : undefined;

export default function Index() {
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

      <section className="relative overflow-hidden">
        <div className="container mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-enter">
            <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
              Scientific Vision Centre (SEVIC)
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
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
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
              {[
                { label: 'Senior Homes Approved', value: '3+' },
                { label: 'Youth Trained', value: '250' },
                { label: 'Job Placements', value: '225' },
                { label: 'De-Addiction Centres', value: '2' },
              ].map((stat) => (
                <div key={stat.label} className="card-elevated rounded-lg p-4">
                  <div className="text-2xl font-semibold text-primary">{stat.value}</div>
                  <div className="mt-1 text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="SEVIC community care across North East India — seniors, children, and youth skilling"
              loading="eager"
              className="w-full rounded-xl border object-cover shadow-xl"
            />
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
    </main>
  );
}
