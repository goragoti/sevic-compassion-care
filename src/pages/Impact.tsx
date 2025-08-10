import { Helmet } from "react-helmet-async";

const canonical = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : undefined;

export default function Impact() {
  return (
    <main className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Impact & Projects | SEVIC</title>
        <meta name="description" content="See SEVIC's impact: approved senior homes, inaugurations, shelters, de-addiction centres, and youth placements." />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      <h1 className="font-heading text-3xl font-bold">Impact & Projects</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Highlights of our work recognised by government and communities across the North East.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="card-elevated rounded-xl p-6">
          <h2 className="font-semibold">Senior Citizens Homes — Approved</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            3 homes approved by the Ministry of Social Justice & Empowerment (Govt. of India):
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Wokha district, Nagaland</li>
            <li>Khowai district, Tripura</li>
            <li>Gomati district, Tripura</li>
          </ul>
        </article>

        <article className="rounded-xl border p-6">
          <h2 className="font-semibold">Presidential Inauguration — 2 May 2025</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Senior Citizens Home in Wokha, Nagaland was among five Homes inaugurated by the Hon’ble President of India (virtual).
          </p>
        </article>

        <article className="rounded-xl border p-6">
          <h2 className="font-semibold">Shelter for Urban Homeless</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Operating in Khowai District, Tripura under TULM & DAY-NULM.
          </p>
        </article>

        <article className="rounded-xl border p-6">
          <h2 className="font-semibold">De-Addiction Centres</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            2 Drug De-Addiction Centres operating in Sikkim; expansion planned to other NE states.
          </p>
        </article>

        <article className="card-elevated rounded-xl p-6">
          <h2 className="font-semibold">Skill Development & Placements</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>250 youth trained on Food & Beverages Service Assistant under Hero India</li>
            <li>225 youth placed across cities in India and Japan</li>
          </ul>
        </article>
      </div>
    </main>
  );
}
