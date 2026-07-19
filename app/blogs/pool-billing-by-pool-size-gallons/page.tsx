import BlogShell from '../blog-shell';

export const metadata = {
  title: 'Pricing and Billing Pool Service by Pool Type, Size, and Gallons | PoolBossPro',
  description: 'Use PoolBossPro pool profiles to price and bill weekly cleaning by pool type, size, and gallons so every invoice matches the real work.',
};

export default function Page() {
  return (
    <BlogShell>
      <article className="blog-article">
        <p className="blog-meta">PoolBossPro Blog &mdash; Pool Invoicing &amp; Billing</p>
        <p className="blog-silo-pill" style={{margin:'10px 0 0'}}><a href="/pool-invoicing-software" style={{display:'inline-block',background:'#0d9488',color:'#fff',padding:'4px 14px',borderRadius:'999px',fontSize:'13px',fontWeight:600,textDecoration:'none'}}>&larr; More on Pool Invoicing &amp; Billing</a></p>
        <h1>Pricing and Billing Pool Service by Pool Type, Size, and Gallons</h1>
        <p>
          A 12,000-gallon vinyl above-ground pool and a 35,000-gallon plaster pool with a spa, a salt
          system, and a heater are not the same job &mdash; so they should never carry the same price. Yet
          plenty of pool service companies bill a flat &quot;weekly cleaning&quot; rate across the whole route
          and quietly lose money on the big, complicated pools while overcharging the small simple ones.
          The fix is to price and bill by the things that actually drive your labor and chemical cost:
          pool type, surface size, and total gallons. PoolBossPro stores all of that on the property profile
          and pulls it straight onto the invoice, so the number on the bill reflects the real water you service.
        </p>

        <h2>Capture pool type, size, and gallons on the property profile</h2>
        <p>
          Every customer in PoolBossPro has a pool/property profile, and that profile is where pricing
          starts. You record pool type (in-ground gunite, plaster, fiberglass, vinyl, or above-ground),
          the surface dimensions, the gallon count, and the equipment on site &mdash; pump, filter, heater,
          salt cell, automation, and any water features. Gallons matter because they determine how much
          chlorine, acid, and stabilizer it takes to hold your chemistry, and pool type matters because a
          plaster finish brushes and chemically behaves very differently from fiberglass or vinyl. Once
          that data lives on the profile, you are no longer guessing at the desk &mdash; you are pricing from
          the documented size of the body of water your tech actually cleans every week.
        </p>

        <h2>Build pricing tiers around gallons and complexity</h2>
        <p>
          The cleanest way to bill by size is to define tiers and attach a base weekly rate to each one.
          A small pool under 15,000 gallons sits in one tier, a mid-size pool in another, and a large
          pool over 30,000 gallons in a third, with add-ons layered on top for a spa, a heater, a salt
          system, or a heavy-debris property under trees. PoolBossPro lets you store these rates so the
          office quotes consistently instead of pricing from memory. If you want the full method for
          turning pool type, gallons, and equipment into a single repeatable rate sheet, read{' '}
          <a href="/blogs/build-pool-service-price-book">Build a Pool Service Price Book So Every Tech Bills the Same</a>{' '}
          &mdash; it pairs directly with the size-based billing approach described here.
        </p>

        <h2>Tie chemistry usage back to gallons</h2>
        <p>
          Water chemistry is where size-based pricing earns its keep. Your tech logs chlorine, pH,
          alkalinity, cyanuric acid, salt, and phosphate readings in PoolBossPro on every visit, and the
          chemicals needed to correct those readings scale with gallons. A pH or alkalinity adjustment on
          a 35,000-gallon pool burns far more acid than the same correction on a 12,000-gallon pool. When
          your base rate is built on gallons, the larger chemical cost on big pools is already covered, and
          your chemistry logs give you the proof. Over a few weeks the readings show exactly which pools
          consume the most product, so you can confirm your tiers are priced right instead of eating the
          difference on the heavy users.
        </p>

        <h2>Carry the right price onto the invoice automatically</h2>
        <p>
          Because pricing is attached to the profile, invoicing stops being a manual lookup. When a recurring
          weekly cleaning is completed on the route, PoolBossPro generates the invoice at that pool&apos;s
          stored rate &mdash; size tier plus any equipment add-ons &mdash; with no one rekeying numbers. If a green-to-clean
          recovery, a filter clean, or an equipment repair happens on top of the weekly service, the tech adds
          that line and it bills alongside the base rate. With card-on-file payments, the charge runs the same
          day the work is done, and the customer gets a text confirming the visit and the amount. Billing by
          gallons only pays off if the price reaches the invoice without friction, and that is exactly what the
          profile-to-invoice flow handles.
        </p>

        <h2>Keep the route and the route&apos;s billing in sync</h2>
        <p>
          Pricing by size also keeps your route economics honest. When dispatch builds the day and assigns
          stops, each pool carries its own value, so you can see whether a tech&apos;s route is loaded with
          high-gallon, high-revenue pools or a string of small accounts. The Job Board makes one-off work &mdash;
          openings, closings, green-to-clean jobs, equipment swaps &mdash; visible so it gets scheduled, completed,
          and billed instead of slipping through. Reporting then rolls revenue up by pool size and by tech, so
          you can spot a large pool that is still priced at a small-pool rate and correct it before it costs you
          another season. The whole loop &mdash; profile, chemistry, dispatch, and{' '}
          <a href="/pool-invoicing-software">pool invoicing &amp; billing</a> &mdash; runs on the same gallon-aware data.
        </p>

        <h2>Repricing as pools change</h2>
        <p>
          Pools do not stay the same forever. A customer adds a heater, converts to salt, resurfaces, or you
          inherit an account that was underpriced for years. Because the rate lives on the profile, you update
          the equipment or tier once and every future invoice reflects it &mdash; no hunting through old quotes. That
          makes annual rate reviews fast: pull the report, find the pools whose size or equipment no longer
          matches their price, adjust the profile, and let the next billing cycle carry the corrected number. Over
          a full route, pricing by pool type, size, and gallons is the difference between a margin you can predict
          and one you only discover at year-end.
        </p>

        <div className="blog-cta-box">
          <h3>Price every pool by the water it actually holds</h3>
          <p>PoolBossPro stores pool type, size, gallons, and equipment on each profile and bills the matching rate automatically.</p>
          <a href="https://my.poolbosspro.com">Start Free Trial</a>
          <div className="hero-trust">No credit card required &nbsp;&middot;&nbsp; 14-day free trial &nbsp;&middot;&nbsp; <b>$99/mo</b> after</div>
        </div>
        <div className="blog-keywords">Keywords: pool service billing software, pool invoicing software, pool size pricing, water chemistry logging, pool service route scheduling, card-on-file pool payments</div>
      </article>
    </BlogShell>
  );
}
