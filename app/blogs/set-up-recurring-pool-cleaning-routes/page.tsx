import BlogShell from '../blog-shell';

export const metadata = {
  title: 'How to Set Up Recurring Weekly Pool Cleaning Routes in PoolBossPro | PoolBossPro',
  description: 'A step-by-step guide to building recurring weekly pool cleaning routes in PoolBossPro so visits auto-generate, crews stay routed, and nothing slips.',
};

export default function Page() {
  return (
    <BlogShell>
      <article className="blog-article">
        <p className="blog-meta">PoolBossPro Blog &mdash; Pool Maintenance Software</p>
        <p className="blog-silo-pill" style={{margin:'10px 0 0'}}><a href="/pool-maintenance-software" style={{display:'inline-block',background:'#0d9488',color:'#fff',padding:'4px 14px',borderRadius:'999px',fontSize:'13px',fontWeight:600,textDecoration:'none'}}>&larr; More on Pool Maintenance Software</a></p>
        <h1>How to Set Up Recurring Weekly Pool Cleaning Routes in PoolBossPro</h1>
        <p>
          Recurring weekly service is the backbone of a healthy pool route. The trouble is that most pool pros still
          build their week by hand &mdash; a whiteboard, a spreadsheet, a stack of sticky notes &mdash; and one missed
          Tuesday turns into a green pool and an angry phone call. PoolBossPro fixes that by letting you build a route
          once and letting the software regenerate it every single week, automatically. This guide walks you through
          setting up recurring weekly pool cleaning routes from scratch so your stops show up on their own, your crews
          stay tightly routed, and you always know what is on the schedule.
        </p>

        <h2>Start With a Clean Pool Profile</h2>
        <p>
          Before a stop can land on a route, the property needs a profile. In PoolBossPro every account stores the
          details that actually matter for service: pool type (in-ground gunite, vinyl, fiberglass, or above-ground),
          approximate size in gallons, the equipment on site (pump, filter, heater, salt cell, automation), and gate
          codes or access notes. A tech who has never been to the property can pull up the profile and know exactly
          what they are walking into. Take ten minutes per account to fill these in &mdash; gallons especially, because
          your dosing math during water chemistry balancing depends on it. If you want a broader picture of why this
          property data is the foundation of everything else, read{' '}
          <a href="/blogs/what-is-pool-maintenance-software">What Pool Maintenance Software Actually Does for a Pool Service Business</a>,
          which lays out how the pieces connect.
        </p>

        <h2>Create the Recurring Service</h2>
        <p>
          With the profile built, attach a recurring service to the account. Choose a weekly frequency, set the price
          per visit, and pick the day the customer should normally be serviced &mdash; say, every Wednesday. This is the
          key difference between PoolBossPro and a plain calendar app: you are not creating fifty-two individual
          appointments, you are creating one rule. The software then auto-generates each week&apos;s visit on the right
          day, week after week, with no further input from you. When the season ends and you do pool closings, you pause
          the recurrence; when you reopen in spring, you resume it. The recurring service also carries the visit
          checklist &mdash; skim, brush, vacuum, empty baskets, test and balance water &mdash; so every tech runs the
          same routine.
        </p>

        <h2>Build the Route on the Map</h2>
        <p>
          Now group those weekly stops into tight, drivable routes. PoolBossPro plots every account on a map so you can
          see your Wednesday customers as pins and assign them to a crew in geographic order instead of zig-zagging
          across town. Drag stops between days to balance the load &mdash; if Wednesday is overstuffed and Thursday is
          thin, move a cluster over and the recurrence updates going forward. Good routing is the single biggest lever
          on a pool company&apos;s drive time and fuel cost, and getting it right once pays off every week the route
          repeats. The goal is a route a tech can run top to bottom without backtracking.
        </p>

        <h2>Dispatch Crews and Use the Job Board</h2>
        <p>
          Once routes are set, dispatch is a few taps. Each morning your crews open their day on their phone and see an
          ordered list of stops with addresses, pool profiles, and access notes already loaded. As they complete each
          pool, the visit is marked done and drops off the board, so the office can watch the day progress in real time.
          The Job Board is also where overflow lives &mdash; a green-to-clean recovery, an equipment repair call, or a
          one-off vacuum that does not belong on a recurring route. You can park those jobs on the board and assign them
          to whichever crew has room, then dispatch them to the right tech without rebuilding the whole day. Recurring
          routes give you the predictable base; the Job Board absorbs everything else.
        </p>

        <h2>Log Water Chemistry at Every Stop</h2>
        <p>
          A pool cleaning route is not just driving and skimming &mdash; the real service is the water. At each visit
          your tech logs chemistry directly in PoolBossPro: free chlorine, pH, total alkalinity, cyanuric acid, and for
          salt pools the salt level and phosphate readings. The app keeps a running history per pool, so when a
          customer&apos;s pH keeps drifting or chlorine demand spikes, the pattern is right there instead of buried in a
          paper logbook. That history is gold for diagnosing problems, defending what you dosed, and showing customers
          you are managing their water on purpose. Because chemistry is tied to the gallons in the pool profile, your
          team can dose with confidence on every recurring stop.
        </p>

        <h2>Turn Completed Visits Into Money</h2>
        <p>
          The last piece is getting paid. When a recurring visit is marked complete, PoolBossPro can generate the
          invoice and charge the card on file automatically &mdash; no chasing checks, no end-of-month invoice marathon.
          Customers get a text confirming their pool was serviced, which cuts down on &quot;did you come this week?&quot;
          calls and quietly reinforces the value of the route. Reporting then rolls it all up: revenue per route day,
          which customers are due, and how each crew is performing. Set up your recurring weekly routes once, and
          PoolBossPro keeps the visits flowing, the water logged, and the payments collected. See everything it can do
          on the{' '}
          <a href="/pool-maintenance-software">pool maintenance software</a> overview.
        </p>

        <div className="blog-cta-box">
          <h3>Build Your Weekly Pool Routes in Minutes</h3>
          <p>PoolBossPro auto-generates recurring weekly visits, routes your crews on a map, logs water chemistry, and charges cards on file so nothing slips.</p>
          <a href="https://my.poolbosspro.com">Start Free Trial</a>
        </div>
        <div className="blog-keywords">Keywords: recurring pool cleaning route software, pool service scheduling software, pool route dispatch, water chemistry logging app, pool maintenance software, pool service invoicing software</div>
      </article>
    </BlogShell>
  );
}
