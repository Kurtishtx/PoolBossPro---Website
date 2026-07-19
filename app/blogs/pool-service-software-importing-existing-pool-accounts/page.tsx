import BlogShell from '../blog-shell';

export const metadata = {
  title: 'Importing Your Existing Pool Accounts Into Pool Service Software | PoolBossPro',
  description: 'Move your existing pool cleaning accounts into PoolBossPro fast: pool profiles, recurring routes, water chemistry history, and card-on-file payments without losing data.',
};

export default function Page() {
  return (
    <BlogShell>
      <article className="blog-article">
        <p className="blog-meta">PoolBossPro Blog &mdash; Pool Service Software</p>
        <p className="blog-silo-pill" style={{margin:'10px 0 0'}}><a href="/pool-service-software" style={{display:'inline-block',background:'#0d9488',color:'#fff',padding:'4px 14px',borderRadius:'999px',fontSize:'13px',fontWeight:600,textDecoration:'none'}}>&larr; More on Pool Service Software</a></p>
        <h1>Importing Your Existing Pool Accounts Into Pool Service Software</h1>
        <p>Switching to new software is the part every pool pro dreads. You already have a book of weekly cleaning customers, a stack of pool profiles in your head, and a payment routine that mostly works. The fear is that moving everything over means weeks of typing and a real chance you drop a stop or lose a customer&apos;s history. PoolBossPro is built so that importing your existing pool accounts is a one-time setup that takes hours, not weeks &mdash; and once it&apos;s done, your recurring routes, water chemistry logs, invoicing, and customer texts all run from one place.</p>

        <h2>Start With a Clean Customer List</h2>
        <p>The fastest way to bring your book over is a simple spreadsheet. Whether your accounts currently live in QuickBooks, a generic CRM, or a notebook on your truck, you can export or type them into a single sheet with one row per customer. The columns that matter most are name, service address, phone, email, billing day, and your weekly rate. PoolBossPro maps those columns to fields during import, so you confirm once and the whole list loads at the same time. Phone and email matter more than you think, because they are what power automated customer texts and card-on-file billing later. If a number is missing, the customer simply won&apos;t get reminders until you add it, so it&apos;s worth cleaning the list before you upload.</p>

        <h2>Build Out Pool and Property Profiles</h2>
        <p>A pool cleaning account is more than a name and an address &mdash; it&apos;s a body of water with its own quirks. As you import, PoolBossPro creates a property profile for each stop where you record pool type (plaster, vinyl, fiberglass), gallons, whether it&apos;s a salt or chlorine system, the filter and pump model, heater details, and gate codes or dog notes. You don&apos;t have to fill every field on day one. Drop in what you know during the import, then let your techs finish the profiles on their first visit to each pool. Within a cycle or two, every account carries the equipment and access details your crew needs, so a fill-in tech can service a pool exactly the way the regular route runner does.</p>

        <h2>Recreate Your Recurring Routes</h2>
        <p>Most pool accounts are weekly, and the real value of importing is turning that flat list into living, route-based schedules. In PoolBossPro you assign each customer a service frequency and a day, and the software generates the recurring visits automatically &mdash; no re-entering stops every week. From there you group accounts into routes and let route-based dispatch sequence them in driving order so your crew isn&apos;t crossing town twice. Anything that needs a one-off visit, like a green-to-clean recovery or a pool opening, lands on the Job Board where you can assign it to whoever has room that day. If you want a step-by-step on standing the whole system up, our guide on <a href="/blogs/pool-service-software-first-week-setup-guide">Setting Up Pool Service Software in Your First Week: A Practical Guide</a> walks through the same setup in order.</p>

        <h2>Carry Over Water Chemistry History</h2>
        <p>The hardest data to recreate from scratch is water chemistry, because it tells the story of each pool over time. If you have past readings, you can import them into each pool&apos;s chemistry log so your baseline for chlorine, pH, alkalinity, cyanuric acid, salt, and phosphate is there from the first visit. Even if you don&apos;t have historical numbers, your techs start logging readings on visit one, and the trend lines build quickly. Having that history in the profile means a tech can open a pool, see that the cyanuric acid has been creeping up for a month, and act on it instead of guessing. It also protects you in a dispute, because every dose and every reading is time-stamped against the right property.</p>

        <h2>Connect Invoicing and Card-on-File Payments</h2>
        <p>Bringing accounts over is also the moment to fix how you get paid. As each customer imports, you can attach their rate and billing schedule, then invite them to save a card on file. After that, recurring invoices generate automatically when the weekly visit is marked complete, and payments run against the card without you chasing checks. Customers who prefer to pay each invoice get a text with a pay link instead. The payoff is that the same import that loads your route also wires up your cash flow, so the week you go live you&apos;re billing cleanly instead of reconstructing who owes what.</p>

        <h2>Verify, Then Go Live</h2>
        <p>Before you flip the switch, spend an hour spot-checking the import. Pull up a route and confirm the stops are in the right order, open a handful of pool profiles to make sure gallons and equipment look right, and send yourself a test reminder text to confirm the customer messaging reads the way you want. Run reporting on your account count and total recurring revenue and compare it to your old numbers &mdash; if they match, you know nothing fell out during the move. Once it checks out, you can lean on PoolBossPro the way it&apos;s designed: as the single hub that connects your pool service business from scheduling through payment. To see how it all fits together, explore the rest of our <a href="/pool-service-software">pool service software</a> resources.</p>

        <div className="blog-cta-box">
          <h3>Bring Your Whole Pool Book Over in an Afternoon</h3>
          <p>PoolBossPro imports your existing accounts, builds your recurring routes, and wires up water chemistry logging, invoicing, and customer texts in one place.</p>
          <a href="https://my.poolbosspro.com">Start Free Trial</a>
          <div className="hero-trust">No credit card required &nbsp;&middot;&nbsp; 14-day free trial &nbsp;&middot;&nbsp; <b>$99/mo</b> after</div>
        </div>
        <div className="blog-keywords">Keywords: pool service software, import pool accounts, recurring pool route scheduling, water chemistry logging, pool service invoicing, card-on-file pool payments</div>
      </article>
    </BlogShell>
  );
}
