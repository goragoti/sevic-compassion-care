import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-background">
      <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-xl">Scientific Vision Centre (SEVIC)</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Non-Governmental, Non-Political, Non-Religious, Non-Sectarian, Non-Profit organisation serving across North Eastern States of India since 2013.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="story-link" to="/services">Services</Link></li>
            <li><Link className="story-link" to="/impact">Impact</Link></li>
            <li><Link className="story-link" to="/about">About</Link></li>
            <li><Link className="story-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <address className="mt-3 not-italic text-sm text-muted-foreground">
            <div>
              <span className="font-medium text-foreground">Head Office:</span><br/>
              269-A, Upper Ground Floor, Arjun Nagar, Safdarjung Enclave, New Delhi-110029
            </div>
            <div className="mt-2">
              <span className="font-medium text-foreground">Regional Office:</span><br/>
              Wangbal Maning Leikai, Thoubal District, Manipur-795138
            </div>
            <div className="mt-2">
              Phone: 8974921330 / 7005611087<br/>
              Email: <a className="story-link" href="mailto:sevicdelhi@gmail.com">sevicdelhi@gmail.com</a>
            </div>
          </address>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Scientific Vision Centre (SEVIC). All rights reserved.
      </div>
    </footer>
  );
}
