import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const canonical = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : undefined;

export default function Contact() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Message sent", description: "Thanks for reaching out. We'll get back to you soon." });
      (e.target as HTMLFormElement).reset();
    }, 800);
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Contact | SEVIC</title>
        <meta name="description" content="Contact Scientific Vision Centre (SEVIC) — head and regional office addresses, phone, and email." />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      <h1 className="font-heading text-3xl font-bold">Contact Us</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <section>
          <h2 className="font-semibold">Get in touch</h2>
          <form onSubmit={onSubmit} className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium">Your Name</label>
              <input required name="name" className="mt-1 w-full rounded-md border bg-background px-3 py-2" placeholder="Full name" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input required type="email" name="email" className="mt-1 w-full rounded-md border bg-background px-3 py-2" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea required name="message" className="mt-1 w-full rounded-md border bg-background px-3 py-2" rows={5} placeholder="How can we help?" />
            </div>
            <button disabled={submitting} className="btn-hero inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium disabled:opacity-50">
              {submitting ? 'Sending…' : 'Send message'}
            </button>
          </form>
        </section>

        <section className="space-y-6">
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Head Office</h3>
            <p className="mt-2 text-sm text-muted-foreground">269-A, Upper Ground Floor, Arjun Nagar, Safdarjung Enclave, New Delhi-110029</p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Regional Office</h3>
            <p className="mt-2 text-sm text-muted-foreground">Wangbal Maning Leikai, Thoubal District, Manipur-795138</p>
          </div>
          <div className="rounded-xl border p-6 text-sm text-muted-foreground">
            Phone: 8974921330 / 7005611087<br/>
            Email: <a className="story-link" href="mailto:sevicdelhi@gmail.com">sevicdelhi@gmail.com</a>
          </div>
        </section>
      </div>
    </main>
  );
}
