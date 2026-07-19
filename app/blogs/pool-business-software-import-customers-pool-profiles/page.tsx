import BlogShell from '../blog-shell';

export const metadata = {
  title: 'Pool Business Software Setup: Importing Customers and Building Pool Profiles | PoolBossPro',
  description: 'How to import your pool service customers and build complete pool profiles in PoolBossPro so routing, water chemistry logging, and billing work from day one.',
};

export default function Page() {
  return (
    <BlogShell>
      <article className="blog-article">
        <p className="blog-meta">PoolBossPro Blog &mdash; Pool Business Software</p>
        <p className="blog-silo-pill" style={{margin:'10px 0 0'}}><a href="/pool-business-software" style={{display:'inline-block',background:'#0d9488',color:'#fff',padding:'4px 14px',borderRadius:'999px',fontSize:'13px',fontWeight:600,textDecoration:'none'}}>&larr; More on Pool Business Software</a></p>
        <h1>Pool Business Software Setup: Importing Customers and Building Pool Profiles</h1>

        <p>The fastest way to stall a software rollout is to treat the customer import as a one-time data dump and move on. For a pool service company, the import is not just names and addresses &mdash; it is the foundation that every recurring route, every water chemistry log, and every invoice is built on. Get the import and pool profiles right, and the rest of PoolBossPro works the way it should from the first week. Skip the detail, and your crews end up texting you from the driveway asking how many gallons the pool holds and whether it&apos;s chlorine or salt. This guide walks through importing your existing customer list and building the pool profiles that make the whole system run.</p>

        <h2>Start With a Clean Customer List</h2>
        <p>Before you import anything, get your existing list into one place. Most pool pros are pulling from a spreadsheet, a notebook, or a previous tool, and the data is uneven &mdash; some accounts have phone numbers, some don&apos;t, some have gate codes buried in a notes column. Spend an hour cleaning it up. At minimum you want the customer name, service address, billing address if different, phone number for texts, and email. PoolBossPro accepts a standard spreadsheet import, so map your columns to the matching fields and bring everyone in at once rather than typing accounts in by hand. If you run a few hundred weekly cleaning accounts, that single import saves days of data entry and gets your route-based scheduling populated immediately.</p>

        <h2>Build a Real Pool Profile, Not Just an Address</h2>
        <p>A service address tells a tech where to drive. A pool profile tells them what they&apos;re walking up to. This is where pool service software earns its keep, and it&apos;s the step most owners rush. For each property, the profile should capture the pool type (chlorine or salt), the surface (plaster, vinyl liner, fiberglass), the approximate size in gallons, and the equipment on site &mdash; pump make and model, filter type, heater, salt cell, and any automation. When a tech opens a stop on their phone, that profile loads instantly, so a substitute who has never been to the property knows the pool holds 18,000 gallons, runs a salt system, and has a cartridge filter that was last cleaned six weeks ago. That context is the difference between a confident visit and a guessing game.</p>

        <h2>Why the Profile Drives Everything Downstream</h2>
        <p>The reason to invest in detailed profiles up front is that nearly every other feature reads from them. Recurring route-based scheduling uses the address and service day to slot each pool into the right weekly run. Crew dispatch and routing group nearby properties so a tech isn&apos;t crossing town between stops. The water chemistry log pre-fills the pool&apos;s gallons so dosing math for chlorine, pH, alkalinity, cyanuric acid, salt, and phosphate is calculated against the actual volume instead of a guess. Invoicing pulls the rate tied to that property. None of that works well if the profile is half-empty. Build it once, correctly, and the software does the repetitive thinking for the rest of the relationship. If you want the broader rollout sequence, the related guide <a href="/blogs/pool-business-software-getting-started-setup">Setting Up Pool Business Software: A Step-by-Step First-Week Plan</a> lays out the order to tackle each piece.</p>

        <h2>Attach Equipment Details and Site Notes</h2>
        <p>Equipment details belong in the profile, not in a tech&apos;s memory. Log the pump horsepower, the filter type and last-cleaned date, the heater model, and the salt cell so that when something fails, you already have the part numbers in front of you to quote a repair. Site notes matter just as much: gate codes, dog on property, the spot where the hose bib is, whether the equipment pad is around back. These details turn an unfamiliar stop into a routine one and let you cover for a sick tech without a string of phone calls. The same notes carry into a green-to-clean recovery job or a seasonal opening or closing, where the crew needs to know exactly what equipment they&apos;re bringing back online.</p>

        <h2>Connect Billing and Card-on-File at Import</h2>
        <p>While you have each account open, set up the billing side. Assign the recurring rate for the weekly cleaning plan and, where you can, get a card on file so invoicing and payment happen automatically after service. Pool service runs on recurring revenue, and chasing checks every month is the fastest way to bleed hours. With card-on-file payments tied to the profile, a completed visit can generate the invoice and charge the card without you touching it. Customer texts go out the same way &mdash; a confirmation that the pool was serviced and the water tested, pulled from the same record. Doing this during import means your cash flow is automated before you ever build your first full week of routes.</p>

        <h2>Verify, Then Go Live</h2>
        <p>Once everyone is imported and profiled, run a spot check before you turn crews loose. Open a handful of accounts and confirm the gallons, pool type, equipment, and rate look right, then load a sample route on the map and make sure the stops group sensibly. Pull up the water chemistry screen on one pool and confirm the dosing recommendations match the volume you entered. A short verification pass catches the import quirks &mdash; a missing phone number, a pool tagged as the wrong type &mdash; before they cost a tech a wasted trip. With clean data and complete profiles in place, your reporting becomes trustworthy too, so you can see route revenue, overdue stops, and chemistry trends without second-guessing the numbers underneath them. This setup work is also what makes the rest of your <a href="/pool-business-software">pool business software</a> feel effortless instead of fragile.</p>

        <div className="blog-cta-box">
          <h3>Import your pool accounts once and let the software run the route.</h3>
          <p>PoolBossPro turns clean customer imports and detailed pool profiles into automated routing, water chemistry logging, and card-on-file billing for your service business.</p>
          <a href="https://my.poolbosspro.com">Start Free Trial</a>
          <div className="hero-trust">No credit card required &nbsp;&middot;&nbsp; 14-day free trial &nbsp;&middot;&nbsp; <b>$99/mo</b> after</div>
        </div>

        <div className="blog-keywords">
          Keywords: pool business software setup, import pool service customers, pool profiles software, pool service software setup, pool maintenance software, pool cleaning business software
        </div>
      </article>
    </BlogShell>
  );
}
