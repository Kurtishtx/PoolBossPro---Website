import BlogShell from '../blog-shell';

export const metadata = {
  title: 'How Pool Chemical Tracking Software Calculates Dosing by Pool Gallons | PoolBossPro',
  description: 'See how PoolBossPro uses the pool gallon count on each property profile to calculate exact chlorine, acid, and stabilizer doses for every stop.',
};

export default function Page() {
  return (
    <BlogShell>
      <article className="blog-article">
        <p className="blog-meta">PoolBossPro Blog &mdash; Pool Chemical Tracking Software</p>
        <p className="blog-silo-pill" style={{margin:'10px 0 0'}}><a href="/pool-chemical-software" style={{display:'inline-block',background:'#0d9488',color:'#fff',padding:'4px 14px',borderRadius:'999px',fontSize:'13px',fontWeight:600,textDecoration:'none'}}>&larr; More on Pool Chemical Tracking Software</a></p>
        <h1>How Pool Chemical Tracking Software Calculates Dosing by Pool Gallons</h1>
        <p>Every pool tech learns the same hard lesson early on&mdash;the same scoop of chlorine that perfectly shocks a 12,000-gallon backyard pool barely touches a 40,000-gallon resort spa. Dosing is not a habit you can carry from stop to stop. It is math, and that math changes the second the pool size changes. PoolBossPro takes the volume off your shoulders by storing the gallon count on every pool profile and doing the calculation for you, right on the screen, the moment you log a test result.</p>

        <h2>The Gallon Count Lives on the Pool Profile</h2>
        <p>It all starts with the property profile. When you set up a customer, you record the pool type (plaster, vinyl, fiberglass, gunite), the surface area, the average depth, and&mdash;most importantly&mdash;the total gallons. If you only know length, width, and depth, PoolBossPro estimates the volume for you so you are never guessing in the field. That number becomes the anchor for every chemical calculation that follows. You enter it once, and the software remembers it for the life of the account, so a new tech covering the route on a sick day doses the pool exactly the way your senior guy would.</p>

        <h2>Log the Water Chemistry, Get the Dose Back</h2>
        <p>On site, you test the water and type the readings into the water chemistry log: free chlorine, pH, total alkalinity, cyanuric acid, salt, and phosphates. PoolBossPro compares each reading against the target range for that specific pool and, using the stored gallon count, tells you exactly how much product to add. Need to raise free chlorine by 2 ppm in a 22,000-gallon pool? The app returns the precise ounces of liquid chlorine or pounds of cal-hypo&mdash;no mental gymnastics, no dosing chart taped to the truck dashboard. The bigger the pool, the bigger the dose, and the software scales it automatically every time.</p>

        <h2>pH, Alkalinity, Stabilizer, and Salt All Scale Too</h2>
        <p>Chlorine is only the headline. The same volume-based engine handles muriatic acid to drop a high pH, sodium bicarb to bump total alkalinity, cyanuric acid to rebuild a stabilizer level that rain has washed out, and the salt you add to a saltwater system to reach the generator&apos;s target. Because the gallon count drives all of it, a 15,000-gallon pool and a 35,000-gallon pool sitting on the same street get completely different dose sheets&mdash;and both are correct. That is the entire point of tracking dosing by gallons instead of by guesswork.</p>

        <h2>Why Gallon-Accurate Dosing Saves Money and Callbacks</h2>
        <p>Under-dosing leaves a pool cloudy or green and earns you a callback you do not get paid for. Over-dosing burns through chemical inventory, irritates swimmers, and can etch plaster or stain a vinyl liner. Both mistakes cost you. When dosing is calculated from real gallons instead of a tech&apos;s gut feel, you pour the right amount the first time. Over a route of forty or fifty pools a day, trimming even a few ounces of wasted product per stop adds up to real dollars at the end of the month&mdash;and far fewer green-to-clean recovery jobs that you have to redo on your own dime.</p>

        <h2>It Plugs Into Your Whole Route</h2>
        <p>The dosing engine does not live in a vacuum&mdash;it runs inside the same system you already use to schedule recurring weekly cleanings, claim stops off the Job Board, and dispatch crews along an optimized route. As a tech moves through the day, every pool pulls up its own profile, its own gallon count, and its own dose recommendation in sequence. If you are still getting your accounts loaded, the walkthrough in <a href="/blogs/setting-up-pool-chemical-tracking-software-first-week">Setting Up Pool Chemical Tracking Software in Your First Week</a> shows you how to capture pool sizes and equipment fast so the dosing math is ready before your first service run. You can dig into the full toolset on the <a href="/pool-chemical-software">pool chemical tracking software</a> hub.</p>

        <h2>Every Dose Becomes a Record</h2>
        <p>When the dose is logged, it is not just a number on a screen&mdash;it becomes a permanent service record tied to that pool. The owner gets an automatic text confirming the visit and the readings, so they see the chlorine, pH, and salt levels for the pool they pay you to maintain. The history feeds your reporting, so you can spot a pool that keeps demanding extra acid or burning stabilizer and flag the underlying problem before it turns into an algae bloom. And because the visit is documented, your invoicing stays clean: the work is proven, the customer trusts the numbers, and the card on file gets charged without a single awkward phone call. Volume-accurate dosing is where good water chemistry and a profitable route finally meet.</p>

        <div className="blog-cta-box">
          <h3>Dose every pool right the first time with PoolBossPro</h3>
          <p>PoolBossPro stores each pool&apos;s gallon count and calculates exact chemical doses from your water tests, so every stop on the route gets balanced fast.</p>
          <a href="https://my.poolbosspro.com">Start Free Trial</a>
          <div className="hero-trust">No credit card required &nbsp;&middot;&nbsp; 14-day free trial &nbsp;&middot;&nbsp; <b>$99/mo</b> after</div>
        </div>
        <div className="blog-keywords">Keywords: pool chemical tracking software, pool dosing calculator, water chemistry logging app, pool service software, pool route scheduling software, chlorine dosing by gallons</div>
      </article>
    </BlogShell>
  );
}
