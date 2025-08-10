import { Helmet } from "react-helmet-async";
import { HeartHandshake, Users, School, Shield, ShieldPlus, Building2 } from "lucide-react";

const canonical = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : undefined;

const services = [
  {
    title: 'Service for Senior Citizens',
    icon: HeartHandshake,
    details: [
      'Senior Citizens Homes providing shelter, protection, care, food and a homely environment',
      'Awareness programs on geriatric care and common issues of senior citizens',
      'Homes set up across the North Eastern states',
      '3 homes approved by the Ministry of Social Justice & Empowerment (GoI) — 1 in Wokha (Nagaland), 2 in Khowai & Gomati (Tripura)',
      'Wokha Senior Citizens Home inaugurated by the Hon’ble President of India on 2 May 2025 (virtual)'
    ],
  },
  {
    title: 'Service for Children in Need of Care & Protection',
    icon: Shield,
    details: [
      'Child Care Institute for Girls (capacity 50) in Khowai, Tripura',
      'Working with State Social Welfare Department, Govt. of Tripura',
      'Multiple awareness programs on Child Protection in Manipur with Social Welfare Department'
    ],
  },
  {
    title: 'Service towards Tribal Communities of NER',
    icon: School,
    details: [
      'Multiple residential schools for the welfare of tribal students across the region',
      'Reaching remote areas to provide basic education to underprivileged, orphaned and economically backward children'
    ],
  },
  {
    title: 'Service for the Urban Homeless',
    icon: Building2,
    details: [
      'Shelter for Urban Homeless in Khowai District, Tripura under TULM & DAY-NULM'
    ],
  },
  {
    title: 'Service for Drug & Substance Abused',
    icon: ShieldPlus,
    details: [
      'Two Drug De-Addiction Centres in Sikkim',
      'Plans to expand to other North Eastern states'
    ],
  },
  {
    title: 'Skilling Youth & Job Placement',
    icon: Users,
    details: [
      'Skill development programs with multiple companies',
      '250 youth trained on Food & Beverages Service Assistant under Hero India',
      '225 youth placed across cities in India and Japan'
    ],
  }
];

export default function Services() {
  return (
    <main className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Services | SEVIC</title>
        <meta name="description" content="Senior care, child protection, tribal education, urban homeless support, de-addiction, and youth skilling by SEVIC." />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      <h1 className="font-heading text-3xl font-bold">Our Services</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        We design and deliver programs that serve people in need of care and protection across the North Eastern Region of India.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {services.map(({ title, icon: Icon, details }) => (
          <article key={title} className="card-elevated rounded-xl p-6">
            <div className="flex items-start gap-3">
              <div className="rounded-md bg-primary/10 p-2 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-semibold">{title}</h2>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
