import BlogShell from '../blog-shell';

export const metadata = {
  title: 'How to Route and Track Pool Equipment Repair Calls Between Cleaning Stops | PoolBossPro',
  description: 'Use PoolBossPro to slot pool equipment repair calls into existing cleaning routes, dispatch the right tech, and track parts, photos, and invoices.',
};

export default function Page() {
  return (
    <BlogShell>
      <article className="blog-article">
        <p className="blog-meta">PoolBossPro Blog &mdash; Pool Route &amp; Dispatch Software</p>
        <p className="blog-silo-pill" style={{margin:'10px 0 0'}}><a href="/pool-route-software" style={{display:'inline-block',background:'#0d9488',color:'#fff',padding:'4px 14px',borderRadius:'999px',fontSize:'13px',fontWeight:600,textDecoration:'none'}}>&larr; More on Pool Route &amp; Dispatch Software</a></p>
        <h1>How to Route and Track Pool Equipment Repair Calls Between Cleaning Stops</h1>
        <p>Every pool service company runs into the same friction. Your techs are humming through a tight weekly cleaning route when a customer texts that their pump is screaming, the heater won&apos;t fire, or the salt cell quit reading. Now you have a repair call that doesn&apos;t fit neatly into anybody&apos;s day. Squeeze it in wrong and you blow up the rest of the route, send a tech across town twice, or let the repair sit for a week while the water turns. PoolBossPro is built to absorb those repair calls cleanly &mdash; slotting them into the route that already passes nearby, dispatching the right person, and tracking the parts and labor so the job actually gets invoiced.</p>

        <h2>Why Repair Calls Break a Cleaning Route</h2>
        <p>A weekly cleaning route is predictable on purpose. Each pool gets its window, the drive times are tuned, and the day ends when the last stop is done. A repair call is the opposite. It shows up unscheduled, it takes an unknown amount of time, and it may need a part you don&apos;t have on the truck. If you handle it by gut feel &mdash; calling whichever tech answers first &mdash; you usually pull someone off a productive cleaning loop and add forty-five minutes of windshield time. Multiply that by a busy summer and you&apos;ve lost real route capacity. The fix is treating repairs as schedulable work that respects the geography your crews are already covering, instead of a fire drill that interrupts it.</p>

        <h2>Drop the Repair Onto the Job Board</h2>
        <p>When a repair call comes in, it lands on the PoolBossPro Job Board as an unassigned job tied to the customer&apos;s pool profile. You capture the symptom, the equipment involved &mdash; pump, filter, heater, salt cell, automation panel &mdash; and any photos the customer texted. Because the job is attached to the property record, your tech already knows the pool type, the gallons, the existing equipment models, and the history of prior repairs before they ever pull into the driveway. The Job Board gives you one place to see every open repair across the company, so nothing slips behind a string of cleaning stops. Instead of a sticky note on the office desk, the call is a tracked, visible job from the second it&apos;s logged.</p>

        <h2>Route It to the Crew Already Nearby</h2>
        <p>This is where PoolBossPro earns its keep. The dispatch view shows you each crew&apos;s route for the day on the map, so when a repair drops in you can see which tech is already cleaning pools in that neighborhood. Assign the repair to the crew whose loop runs past the address and it becomes a short detour instead of a cross-town round trip. You can wedge it between two cleaning stops, tack it onto the end of the closest route, or hand it to a dedicated repair tech if the fix needs specialized hands. The point is that routing decisions are made against real positions on a map, not guesses. Pairing repairs with the nearest cleaning route is the same discipline that makes multi-visit work efficient &mdash; the kind of sequencing covered in <a href="/blogs/schedule-green-to-clean-recovery-dispatch">How to Schedule and Dispatch a Green-to-Clean Recovery as a Multi-Visit Job</a>, where one account spans several trips and routing has to stay tight.</p>

        <h2>Track Parts, Labor, and Photos on the Job</h2>
        <p>A repair isn&apos;t done when the tech leaves &mdash; it&apos;s done when it&apos;s documented and billed. In PoolBossPro the tech logs what was diagnosed, what parts went in, and how much labor it took, right on the job record. Before-and-after photos attach to the same job, which protects you on warranty questions and gives the customer proof the work happened. If the repair affects water chemistry &mdash; say a tech replaces a salt cell or rebuilds a chlorinator &mdash; the chlorine, pH, alkalinity, cyanuric, salt, and phosphate readings get logged in the same chemistry record you keep for the weekly service, so the pool&apos;s history stays in one continuous timeline. Nothing about the repair lives in a separate notebook that gets lost.</p>

        <h2>Invoice the Repair Without a Second Pass</h2>
        <p>Because parts and labor are captured on the job, the invoice practically builds itself. PoolBossPro rolls the documented line items into a bill the moment the repair is marked complete, and if the customer has a card on file the charge runs automatically &mdash; no separate billing run, no waiting for the office to circle back. The customer gets a text confirming the repair and the charge, which closes the loop and cuts down on &quot;what was this for?&quot; calls. Repairs are some of the highest-margin work a pool company does, and the easiest revenue to lose track of when it&apos;s handled off the books between cleaning stops. Tying the invoice to the job is how you make sure every repair you perform is a repair you get paid for.</p>

        <h2>See the Pattern in Your Reporting</h2>
        <p>Once repair calls flow through the same system as cleaning, your reporting starts telling you things. You can see which pools generate the most repair tickets, which equipment types fail most often, and how much repair revenue each route produces on top of recurring cleaning. That helps you spot a customer whose aging heater is due for a quote, decide whether a route needs a dedicated repair day, and price your service plans with eyes open. Handling repairs inside your routing software instead of around it turns scattered emergency calls into a measured, profitable part of the business. To see how the routing and dispatch pieces fit together across every kind of job, explore PoolBossPro&apos;s <a href="/pool-route-software">pool route &amp; dispatch software</a>.</p>

        <div className="blog-cta-box">
          <h3>Run repairs and cleaning from one route</h3>
          <p>PoolBossPro slots repair calls into your existing cleaning routes, dispatches the closest crew, and turns logged parts and labor into paid invoices automatically.</p>
          <a href="https://my.poolbosspro.com">Start Free Trial</a>
          <div className="hero-trust">No credit card required &nbsp;&middot;&nbsp; 14-day free trial &nbsp;&middot;&nbsp; <b>$99/mo</b> after</div>
        </div>
        <div className="blog-keywords">Keywords: pool service software, pool route &amp; dispatch software, pool repair scheduling, crew dispatch software, pool equipment repair tracking, pool service invoicing</div>
      </article>
    </BlogShell>
  );
}
