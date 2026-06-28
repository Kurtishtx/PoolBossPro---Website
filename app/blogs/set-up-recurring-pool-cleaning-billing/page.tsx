import BlogShell from '../blog-shell';

export const metadata = {
  title: 'How to Set Up Recurring Pool Cleaning Billing in PoolBossPro | PoolBossPro',
  description: 'Set up recurring weekly pool cleaning billing in PoolBossPro with card-on-file payments, route-based scheduling, and automatic invoices that bill themselves.',
};

export default function Page() {
  return (
    <BlogShell>
      <article className="blog-article">
        <p className="blog-meta">PoolBossPro Blog &mdash; Pool Invoicing &amp; Billing</p>
        <p className="blog-silo-pill" style={{margin:'10px 0 0'}}><a href="/pool-invoicing-software" style={{display:'inline-block',background:'#0d9488',color:'#fff',padding:'4px 14px',borderRadius:'999px',fontSize:'13px',fontWeight:600,textDecoration:'none'}}>&larr; More on Pool Invoicing &amp; Billing</a></p>
        <h1>How to Set Up Recurring Pool Cleaning Billing in PoolBossPro</h1>
        <p>
          Weekly pool cleaning is the most predictable revenue a pool service business has, yet it
          is shockingly easy to under-bill it. A stop gets skipped, a card on file expires, or
          somebody forgets to send the monthly statement, and that recurring income quietly leaks
          out the side door. PoolBossPro fixes that by turning every recurring route stop into a
          billing event that fires on its own. In this guide we&apos;ll walk through setting up
          recurring pool cleaning billing from scratch so your accounts pay themselves like
          clockwork.
        </p>

        <h2>Start With a Clean Pool Profile</h2>
        <p>
          Recurring billing in PoolBossPro is tied to the pool, not just the customer, so the first
          step is building an accurate property profile. Open the customer record and add their
          pool: pool type (in-ground gunite, vinyl liner, fiberglass, or above-ground), the size in
          gallons, the surface, and the equipment list &mdash; pump, filter, heater, salt cell,
          and automation. The profile is also where you store gate codes, dog notes, and access
          instructions for the crew. Why does this matter for billing? Because the price you set on
          the profile becomes the default line item on every recurring invoice. A 25,000-gallon
          saltwater pool with a heater and a green-to-clean history can carry a higher weekly rate
          than a small fiberglass plunge pool, and PoolBossPro remembers that automatically.
        </p>

        <h2>Build the Recurring Service and Route Stop</h2>
        <p>
          Next, attach a recurring service plan to the pool. Choose the frequency &mdash; most
          accounts run weekly, but PoolBossPro also handles bi-weekly and seasonal cadences for
          openings and closings. Set the day of week and the crew or route the stop belongs to.
          This is where recurring scheduling and billing become one system: the same plan that puts
          the pool on your dispatch board every Tuesday is the plan that generates the invoice.
          When you build the route, each stop already knows its price, its water chemistry checklist,
          and its customer. The Job Board shows the tech exactly which pools they own that day, and
          routing keeps drive time tight so you&apos;re billing for service instead of windshield
          time.
        </p>

        <h2>Choose Your Billing Cycle</h2>
        <p>
          Now decide how the money actually moves. PoolBossPro supports two common recurring models.
          The first is per-visit invoicing, where every completed cleaning generates its own invoice
          the moment the tech closes out the stop. The second &mdash; and the favorite of most
          established pool pros &mdash; is monthly flat-rate billing, where the customer pays one
          predictable amount on the same date each month regardless of whether the month has four or
          five service weeks. Pick the cycle per account, because a residential maintenance customer
          and a commercial property manager often want different things. Either way, the system
          counts the visits, applies the rate from the pool profile, and assembles the invoice with
          no manual math. If you&apos;re still deciding whether this is worth the switch, our
          breakdown of {' '}
          <a href="/blogs/pool-service-invoicing-software-vs-spreadsheets">Pool Service Invoicing Software vs. Spreadsheets: Why Pool Pros Make the Switch</a>
          {' '}lays out exactly where manual tracking falls apart at scale.
        </p>

        <h2>Add a Card on File and Turn On Autopay</h2>
        <p>
          Recurring billing only saves you time if you&apos;re not chasing checks. During onboarding,
          send the customer a secure link to store a card on file. Once a card is saved, switch the
          account to autopay, and PoolBossPro charges the saved card automatically every time a
          recurring invoice is generated &mdash; the night the visit closes for per-visit accounts,
          or on the billing date for monthly accounts. The customer gets a receipt by text and
          email, and the payment lands in your account without a single phone call. If a card
          declines or expires, the system flags the account on your dashboard so you can text the
          customer a quick update-card link before it becomes thirty days past due. That early
          warning is the difference between a five-minute fix and a write-off.
        </p>

        <h2>Let Water Chemistry and Visit Notes Back Up Every Charge</h2>
        <p>
          One quiet benefit of billing through the same platform your crew works in is that every
          invoice is backed by proof of service. When a tech completes a recurring stop, they log
          the water chemistry &mdash; chlorine, pH, alkalinity, cyanuric acid, salt, and phosphate
          &mdash; right on the visit. They check off the tasks they performed and snap photos of the
          pool. So when a customer questions a charge, you&apos;re not arguing from memory. You can
          show that the pool was serviced on the billed date, the chemistry was tested and balanced,
          and the water was crystal clear. That paper trail kills disputes fast and makes upsells
          &mdash; a needed acid wash, a failing salt cell, a green-to-clean recovery &mdash; easy to
          justify and add to the next invoice as a one-time line item alongside the recurring fee.
        </p>

        <h2>Watch the Reports and Tighten the Leaks</h2>
        <p>
          Once recurring billing is running, the reporting view becomes your control panel. You can
          see monthly recurring revenue, which accounts are on autopay versus manual pay, aging
          balances, and which pools generated extra one-time charges this period. If you spot a stop
          that got serviced but never billed, the system tells you, because the completed visit and
          the invoice are linked. Review this weekly for a few minutes and you&apos;ll catch the
          small leaks before they add up to real money. For a deeper look at how invoicing,
          payments, and recurring plans all fit together, explore the full {' '}
          <a href="/pool-invoicing-software">pool invoicing &amp; billing</a> hub.
        </p>

        <div className="blog-cta-box">
          <h3>Put Your Recurring Pool Billing on Autopilot</h3>
          <p>
            PoolBossPro handles route-based scheduling, water chemistry logging, and card-on-file
            recurring billing so your weekly cleaning accounts pay themselves.
          </p>
          <a href="https://my.poolbosspro.com">Start Free Trial</a>
        </div>

        <div className="blog-keywords">Keywords: recurring pool cleaning billing software, pool service invoicing, card-on-file pool payments, route-based pool scheduling, water chemistry logging app, pool maintenance billing automation</div>
      </article>
    </BlogShell>
  );
}
