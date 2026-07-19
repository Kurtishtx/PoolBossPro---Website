import BlogShell from '../blog-shell';

export const metadata = {
  title: 'How to Schedule and Dispatch a Green-to-Clean Recovery as a Multi-Visit Job | PoolBossPro',
  description: 'How pool route software schedules a green-to-clean as a multi-visit job, dispatches the return trips, and logs water chemistry on every pass.',
};

export default function Page() {
  return (
    <BlogShell>
      <article className="blog-article">
        <p className="blog-meta">PoolBossPro Blog &mdash; Pool Route & Dispatch Software</p>
        <p className="blog-silo-pill" style={{margin:'10px 0 0'}}><a href="/pool-route-software" style={{display:'inline-block',background:'#0d9488',color:'#fff',padding:'4px 14px',borderRadius:'999px',fontSize:'13px',fontWeight:600,textDecoration:'none'}}>&larr; More on Pool Route &amp; Dispatch Software</a></p>
        <h1>How to Schedule and Dispatch a Green-to-Clean Recovery as a Multi-Visit Job</h1>

        <p>The phone rings, a homeowner sends a photo of a swamp where their pool used to be, and you quote a green-to-clean recovery. The hard part is not the chlorine math &mdash; it is the scheduling. A recovery is never one stop. It is three or four return trips spaced by chlorine demand and filter run time, each one squeezed into a route that is already full of weekly cleanings. Run that on a notepad and you forget the second pass, send a tech across town for a single stop, and lose the chemistry trail that proves the pool is actually recovering. Pool route and dispatch software treats the recovery as a single multi-visit job, drops each return trip onto the right day, and keeps every chemistry reading in one record so nothing slips.</p>

        <h2>Create the Recovery as One Multi-Visit Job</h2>
        <p>Start by building the green-to-clean as its own job tied to the pool&apos;s property profile, not as a string of loose stops you hope to remember. You set the expected number of return visits &mdash; say four passes over eight days &mdash; and the software lays each one on the calendar with its own date, assigned tech, and chemistry log. The Job Board then carries the recovery as an open project until the water reads clear and balanced. Because all the visits hang off one job, the office can see at a glance that pass two happened, pass three is scheduled for Thursday, and a fourth pass may still be needed. That single-job structure is the difference between a controlled recovery and a pile of sticky notes that lose a return trip.</p>

        <h2>Dispatch Each Return Trip Onto the Right Day</h2>
        <p>Recovery visits are time-sensitive in a way weekly cleanings are not. The next pass has to land when chlorine demand and filter run time say so, not whenever the schedule happens to be light. The dispatch and routing tools place each return visit on the correct day and slot it into a tech&apos;s existing route so the truck is not making a special trip for one pool. If the recovery sits across town from your normal cleaning cluster, the map shows you that and lets you batch it with nearby stops or hand it to whichever crew is already working that side of the area. When a pass runs long and the tech cannot get to the next account, you drag the recovery&apos;s remaining visits to another day and the board updates without a phone tree of confused texts.</p>

        <h2>Log Water Chemistry on Every Pass</h2>
        <p>A recovery lives and dies by the chemistry record. On the first visit the tech logs the starting numbers &mdash; free chlorine near zero, pH off the scale, alkalinity and cyanuric acid unreadable until the water clears, phosphates feeding the algae, salt for the chlorine generator. PoolBossPro keeps a running chemistry log on the pool profile for chlorine, pH, alkalinity, cyanuric acid, salt, and phosphate, so each return pass shows the trend instead of a lone snapshot. The tech can see free chlorine jumped after the last shock and held, that phosphates are finally dropping, and that pH settled into range. That history is how you prove the pool is genuinely recovering rather than guessing from how green the water still looks &mdash; and it is the record that justifies the next return trip you dispatch.</p>

        <h2>Keep the Customer Calm With Automatic Texts</h2>
        <p>A homeowner watching a swamp in the backyard is an anxious customer, and silence between visits is how you lose them to the next company they call. The software fires automatic texts when the tech is on the way and when each pass is complete, so the customer knows the crew showed up and the recovery is moving. You can add a short note &mdash; &quot;water cleared up a lot today, one more shock Thursday and you should be swimmable&quot; &mdash; that goes out without the office typing a fresh message for every account. That steady drip of updates keeps a recovery customer from shopping competitors while they wait, and it sets up the conversion to a recurring weekly stop once the pool is clean.</p>

        <h2>Bill the Full Cost and Settle on the Card on File</h2>
        <p>Recovery jobs lose money when the labor and chemicals get undercounted. Three jugs of liquid chlorine Monday, two more Wednesday, a bag of shock and a phosphate remover Friday, plus the hours of brushing and vacuuming on every pass &mdash; if that is not captured per visit, the invoice becomes a guess. The software lets the tech log chemicals and time on each return trip, and those line items roll into the recovery&apos;s invoice across all the visits. When you close the job, you bill the real cost instead of the flat number you quoted before you knew how green the pool was, and the customer&apos;s card on file settles it the moment the work wraps. The recovery becomes a profit center, not a favor you do at a loss. Recoveries are also a natural companion to seasonal work, so it helps to run them on the same board as your <a href="/blogs/manage-pool-openings-closings-route-software">How to Manage Pool Openings and Closings Alongside Weekly Cleaning Routes</a> jobs.</p>

        <h2>Close the Job and Convert to a Recurring Route Stop</h2>
        <p>When the water finally reads clear and balanced &mdash; chlorine in range, pH settled, alkalinity and cyanuric where they belong, phosphates knocked down &mdash; you close the recovery and the software hands you a complete record: every chemistry reading, every chemical, every hour billed. That record is your best sales pitch. You show the before-and-after chemistry, offer a weekly maintenance plan so the pool never goes green again, and enroll the customer on a recurring route stop with one click. From there the same <a href="/pool-route-software">pool route &amp; dispatch software</a> that scheduled the recovery now handles the weekly cleaning, the chemistry logging, and the billing &mdash; turning a one-time emergency into a long-term recurring account that pays you every week.</p>

        <div className="blog-cta-box">
          <h3>Run every green-to-clean as a dispatched multi-visit job, start to finish.</h3>
          <p>PoolBossPro schedules the recovery, routes each return trip, logs water chemistry on every pass, and bills the full cost on the card on file &mdash; then converts the clean pool to a recurring route stop.</p>
          <a href="https://my.poolbosspro.com">Start Free Trial</a>
          <div className="hero-trust">No credit card required &nbsp;&middot;&nbsp; 14-day free trial &nbsp;&middot;&nbsp; <b>$99/mo</b> after</div>
        </div>

        <div className="blog-keywords">
          Keywords: pool route software, pool dispatch software, green to clean scheduling, multi-visit pool job software, water chemistry logging software, pool service crew routing
        </div>
      </article>
    </BlogShell>
  );
}
