import BlogShell from '../blog-shell';

export const metadata = {
  title: 'Moving Your Customer List Into Pool Cleaning Software Without Losing Data | PoolBossPro',
  description: 'How to import your pool service customer list into PoolBossPro cleanly, keeping addresses, pool profiles, water chemistry history, and billing intact.',
};

export default function Page() {
  return (
    <BlogShell>
      <article className="blog-article">
        <p className="blog-meta">PoolBossPro Blog &mdash; Pool Cleaning Software</p>
        <p className="blog-silo-pill" style={{margin:'10px 0 0'}}><a href="/pool-cleaning-software" style={{display:'inline-block',background:'#0d9488',color:'#fff',padding:'4px 14px',borderRadius:'999px',fontSize:'13px',fontWeight:600,textDecoration:'none'}}>&larr; More on Pool Cleaning Software</a></p>
        <h1>Moving Your Customer List Into Pool Cleaning Software Without Losing Data</h1>
        <p>
          Your customer list is the most valuable thing your pool service owns. Every address, gate code, pool size, and
          last chlorine reading represents years of route knowledge that lives in a spreadsheet, a billing app, or your
          head. The fear of losing that data is the number one reason owners put off switching to real pool cleaning
          software. The good news is that a clean import is mostly about preparation, not luck. Done right, you move
          every recurring stop, pool profile, and balance owed into PoolBossPro without a single account falling through
          the cracks.
        </p>

        <h2>Start With a Clean Export From Wherever You Are Now</h2>
        <p>
          Before you import anything, you have to export it. Most pool techs are coming from one of three places: a
          spreadsheet, an old billing tool like QuickBooks, or sticky notes and memory. If you are on a spreadsheet,
          you are already most of the way there &mdash; you just need to get the columns in order. If you are exporting
          from another app, look for a &quot;customers&quot; or &quot;contacts&quot; CSV export. Pull that file down and open it before
          you touch PoolBossPro. The goal at this stage is simply to see everything in one place so you can spot the
          gaps: missing phone numbers, accounts with no service address, or duplicates where one pool got entered twice.
        </p>

        <h2>Get Your Columns Right: Customer, Property, and Pool</h2>
        <p>
          Pool service data has three layers, and mixing them up is where most messy imports go wrong. The first layer
          is the customer &mdash; a name, a phone number for texts, an email for invoices, and a billing address. The
          second is the property where you actually do the work, which may differ from the billing address for
          snowbirds, rentals, or property managers. The third is the pool itself: type (in-ground gunite, vinyl liner,
          fiberglass, above-ground), size in gallons, and the equipment on it. PoolBossPro keeps these as linked
          records, so one customer can own two homes and each home can carry its own pool profile. When you prep your
          spreadsheet, give each of those a clear column. A row that crams &quot;Smith, 20k gal, Hayward pump&quot; into one
          cell will not map cleanly, and you will spend your first week untangling it instead of running stops.
        </p>

        <h2>Bring Over Pool Profiles and Equipment, Not Just Addresses</h2>
        <p>
          A lot of owners import names and addresses and call it done. That is a missed opportunity. The details that
          make a route profitable &mdash; pool gallons, the filter type, the chlorinator model, the gate code, the dog in
          the backyard &mdash; are exactly the notes a new tech needs on day one. Map those into the pool and property
          profile fields during import so they travel with the account. When a crew member opens a stop in PoolBossPro,
          they should see the same context you carry in your head: this is a 25,000-gallon plaster pool on a salt
          system with a cartridge filter, and the customer wants a text before arrival. That context is what lets you
          hand a route to someone else without riding along.
        </p>

        <h2>Decide What Water Chemistry History to Carry Forward</h2>
        <p>
          Here is the honest part: you usually cannot import a full season of chlorine, pH, alkalinity, cyanuric, salt,
          and phosphate readings from a spreadsheet in a clean way, because most older tools never logged them
          consistently in the first place. That is fine. The water chemistry logging in PoolBossPro starts paying off
          the moment your first service is recorded, building a trend line per pool from there forward. What you should
          carry over is the baseline: the pool&apos;s typical chlorine and stabilizer targets, any chronic issue like high
          cyanuric or a phosphate problem, and notes on a green-to-clean recovery you fought through last summer. Drop
          those into the pool profile as starting notes so nothing institutional gets lost, then let the software build
          the real chemistry history going forward.
        </p>

        <h2>Reconcile Balances and Card-on-File Before You Cut Over</h2>
        <p>
          The riskiest data to move is money. If a customer owes you for two missed visits, or pays monthly by card on
          file, that has to land correctly or you will be chasing it for weeks. Treat billing as its own import pass.
          Bring in each account&apos;s recurring price and service frequency so invoicing and the route schedule line up
          from day one. For card-on-file customers, you will re-collect their payment details inside PoolBossPro &mdash;
          you should never move raw card numbers between systems, and the software is built to capture them securely so
          billing keeps running without a gap. Set a clean cutover date: run your old billing through the end of a
          billing cycle, then start the next cycle entirely inside PoolBossPro so no invoice gets sent twice.
        </p>

        <h2>Verify Against the Map, Then Go Live</h2>
        <p>
          Once the import is in, do not trust the count &mdash; trust the map. Open your stops on the routing view and
          look for accounts sitting in the wrong town, addresses that failed to geocode, or a recurring weekly pool
          that somehow landed as a one-time job. Fixing ten misplaced pins now is far cheaper than a tech driving 40
          minutes to a green pool that was never on the right route day. Spot-check a handful of accounts end to end:
          customer texts enabled, pool profile filled, price set, next service scheduled. When those line up, you are
          live. For a full walkthrough of those first days, see{' '}
          <a href="/blogs/pool-cleaning-software-getting-started-first-week">Your First Week on Pool Cleaning Software: A Setup Roadmap</a>,
          and if you are still comparing options, the overview of{' '}
          <a href="/pool-cleaning-software">pool cleaning software</a> covers what to look for before you commit.
        </p>

        <div className="blog-cta-box">
          <h3>Move Your Pool Route Without Losing a Single Stop</h3>
          <p>PoolBossPro imports your customers, pool profiles, and recurring schedule so your route, water chemistry logging, and card-on-file billing run from day one.</p>
          <a href="https://my.poolbosspro.com">Start Free Trial</a>
          <div className="hero-trust">No credit card required &nbsp;&middot;&nbsp; 14-day free trial &nbsp;&middot;&nbsp; <b>$99/mo</b> after</div>
        </div>

        <div className="blog-keywords">Keywords: pool cleaning software, import pool service customer list, pool route scheduling software, water chemistry logging, pool service invoicing software, card-on-file pool billing</div>
      </article>
    </BlogShell>
  );
}
