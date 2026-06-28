import BlogShell from '../blog-shell';

export const metadata = {
  title: 'Running Green-to-Clean Recovery Jobs in Pool Business Software | PoolBossPro',
  description: 'How pool business software runs green-to-clean recovery jobs &mdash; scheduling, chemistry logging, multi-visit tracking, and billing &mdash; so swampy pools turn a profit.',
};

export default function Page() {
  return (
    <BlogShell>
      <article className="blog-article">
        <p className="blog-meta">PoolBossPro Blog &mdash; Pool Business Software</p>
        <p className="blog-silo-pill" style={{margin:'10px 0 0'}}><a href="/pool-business-software" style={{display:'inline-block',background:'#0d9488',color:'#fff',padding:'4px 14px',borderRadius:'999px',fontSize:'13px',fontWeight:600,textDecoration:'none'}}>&larr; More on Pool Business Software</a></p>
        <h1>Running Green-to-Clean Recovery Jobs in Pool Business Software</h1>

        <p>A green-to-clean is the most profitable job a pool company can run and the easiest one to lose money on. The customer calls with a swamp &mdash; an opaque green or black pool that has not seen chlorine in months &mdash; and they want it swimmable by the weekend. The work is real: shock, brush, filter runs, multiple chemistry corrections, and two or three return trips before the water clears. Run it on a clipboard and the trips blur together, the chemicals go untracked, and you bill a flat &quot;cleaning&quot; that does not cover half your labor. Run it inside <a href="/pool-business-software">pool business software</a> and every visit, reading, and dose is captured against one job that you can price and close out for what it actually cost.</p>

        <h2>Quote the Recovery as Its Own Job, Not a Cleaning</h2>
        <p>The first thing the software does is keep a green-to-clean separate from a recurring weekly clean. When the call comes in, you create a recovery job tied to the property profile &mdash; the pool type, size in gallons, and the equipment on the pad &mdash; so the system already knows it is a 22,000-gallon plaster pool with a sand filter before a tech ever shows up. That profile drives the quote. A recovery is billed as a recovery: a recovery service fee plus chemicals plus the return visits it will take, not a single weekly clean rate. Building it as a distinct job means the labor across every trip rolls up to one line you can actually price, instead of disappearing into a route you bill at the same flat number every week.</p>

        <h2>Schedule the First Trip and Build in the Returns</h2>
        <p>Recoveries are never one visit, and the schedule has to reflect that. From the Job Board you assign the first trip to a tech with capacity and slot it into the route by drive time, so the swamp does not blow up an already full day. Then you plan the follow-ups. The software lets you set return visits two or three days out &mdash; the natural rhythm of a green-to-clean as the water clears and the filter does its work &mdash; and each return carries the same job and property profile forward. The tech who runs the second trip sees exactly what was done on the first: what was dosed, what the readings were, and what still needs to happen. Nothing gets re-diagnosed from scratch, and no return trip falls off the calendar because someone forgot to write it down.</p>

        <h2>Log Every Chemistry Reading as the Water Clears</h2>
        <p>A green-to-clean lives and dies on water chemistry, and the recovery is really a chemistry log over time. At each visit the tech records free chlorine, pH, total alkalinity, cyanuric acid, salt, and phosphate straight into the job on a phone. On a swamp that first reading is brutal &mdash; zero chlorine, sky-high phosphate, a pH the test can barely read &mdash; and that is exactly the point. The history shows the pool climbing back: chlorine holding after the second shock, phosphate dropping, alkalinity settling into range. That record tells the tech when the pool is genuinely recovered instead of guessing, and it tells the customer the same thing with hard numbers. When the chemistry finally lands in spec across the board, the recovery is done &mdash; and you have a logged trail proving it.</p>

        <h2>Capture Chemicals So They Land on the Invoice</h2>
        <p>Chemicals are where recovery profit quietly bleeds out. A green-to-clean can burn through cases of shock, gallons of liquid chlorine, phosphate remover, clarifier, and acid across three trips, and if the tech does not record what went in the pool, none of it gets billed. The software fixes this by letting techs add chemicals to the job as they dose, visit by visit, so every product used is attached to the recovery. When it comes time to invoice, those chemicals flow onto the bill automatically alongside the labor and service fee. You are no longer eating two hundred dollars of shock because nobody wrote it on the slip &mdash; the job carries its own materials cost and the customer pays for what their pool actually consumed.</p>

        <h2>Keep the Customer in the Loop by Text</h2>
        <p>A nervous customer staring at a green pool will call your office every afternoon unless you get ahead of them. Automated customer texts handle that. As the tech completes each recovery visit, the software fires a text letting the owner know the crew came, the pool was treated, and the next trip is scheduled &mdash; turning three days of silence and anxiety into a steady stream of updates. That communication does two things: it cuts the &quot;is it done yet&quot; phone calls that tie up your office, and it sets the expectation that this is a multi-visit job, not a single magic-wand visit. By the time the water is blue, the customer has watched the progress and understands exactly why the bill is what it is.</p>

        <h2>Bill It, Collect It, and Convert to Recurring</h2>
        <p>When the chemistry clears, you close the recovery and the invoice is already most of the way built &mdash; service fee, logged labor across every trip, and the chemicals captured at each visit. With a card on file you charge it immediately instead of mailing a statement and chasing it for a month, which matters on a job this size. Then you do the smart thing: convert the customer to a recurring weekly route. The property profile and chemistry history are already in the system, so adding them to a weekly clean is a couple of clicks, and the pool you just rescued becomes monthly revenue. Recovery is also a doorway to repair work &mdash; a green pool often means a failing pump or filter &mdash; and the same job-based workflow covers it, as laid out in <a href="/blogs/pool-business-software-equipment-repair-jobs">Managing Equipment Repair Jobs With Pool Business Software</a>.</p>

        <div className="blog-cta-box">
          <h3>Turn green pools into your most profitable &mdash; and best-billed &mdash; jobs.</h3>
          <p>PoolBossPro runs green-to-clean recoveries end to end: multi-visit scheduling, water chemistry logging, chemical capture, customer texts, and card-on-file invoicing in one place.</p>
          <a href="https://my.poolbosspro.com">Start Free Trial</a>
        </div>

        <div className="blog-keywords">
          Keywords: pool business software, green to clean software, pool recovery job software, pool service invoicing software, water chemistry logging software, pool maintenance scheduling software
        </div>
      </article>
    </BlogShell>
  );
}
