import { Helmet } from "react-helmet-async";

const canonical = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : undefined;

export default function About() {
  return (
    <main className="container mx-auto px-4 py-12">
      <Helmet>
        <title>About SEVIC | Scientific Vision Centre</title>
        <meta name="description" content="SEVIC is a non-profit established in 2013 serving North Eastern India across education, health, senior care, child protection, skilling, and more." />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      <header className="max-w-3xl">
        <h1 className="font-heading text-3xl font-bold">About Scientific Vision Centre (SEVIC)</h1>
        <p className="mt-3 text-muted-foreground">
          Established on 1 March 2013 in New Delhi and registered under the Societies Registration Act XXI of 1860 (Govt. of NCT of Delhi), SEVIC is a Non-Governmental, Non-Political, Non-Religious, Non-Sectarian, Non-Profit Organisation dedicated to the welfare of people across the North Eastern states of India.
        </p>
      </header>

      <section className="mt-10 grid gap-8 md:grid-cols-2">
        <article className="card-elevated rounded-xl p-6">
          <h2 className="font-semibold">Our Mission</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We work to uplift communities through Education, Health, Senior Citizen Care, Child Protection, Tribal Welfare, Rehabilitation, Vocational Training, Library & Industrial facilities, Micro-credit, Games & Sports, Culture and more.
          </p>
        </article>
        <article className="card-elevated rounded-xl p-6">
          <h2 className="font-semibold">Where We Work</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Our focus is the North Eastern Region of India with strong partnerships with state Social Welfare Departments and local communities.
          </p>
        </article>
      </section>

      <section className="mt-10 grid gap-8 md:grid-cols-2">
        <article className="rounded-xl border p-6">
          <h3 className="font-semibold">Head Office</h3>
          <p className="mt-2 text-sm text-muted-foreground">269-A, Upper Ground Floor, Arjun Nagar, Safdarjung Enclave, New Delhi-110029</p>
        </article>
        <article className="rounded-xl border p-6">
          <h3 className="font-semibold">Regional Office</h3>
          <p className="mt-2 text-sm text-muted-foreground">Wangbal Maning Leikai, Thoubal District, Manipur-795138</p>
        </article>
      </section>
    </main>
  );
}
