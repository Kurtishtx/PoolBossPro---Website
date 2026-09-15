'use client';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import SignupModal from '../components/SignupModal';
import HeroDemo from '../components/HeroDemo';

/* Canada landing page — long-form, homepage-depth. The Canadian season argument:
   two scheduling avalanches a year (openings in May, closings before freeze-up)
   with a flat-out weekly route grind in between, and customers billed in CAD.
   Footer and DemoPopup come from app/layout.tsx — do not render them here. */

const seasonCards = [
  { icon: '🇨🇦', title: 'Customer billing in Canadian dollars', body: 'Set your country to Canada in Company Info and the entire billing side follows: every invoice, card-on-file charge, and Pay Now link goes out in CAD through your own Canadian Stripe account. Your customers never see a USD line item or a conversion fee on their statement.' },
  { icon: '☀️', title: 'Opening season, handled in batches', body: 'Every account on your books needs an opening inside the same few May weeks. The waiting list shows exactly who is still due, and you can schedule a whole neighbourhood of openings in one pass instead of dialling your way down a spreadsheet.' },
  { icon: '🗺️', title: 'Weekly routes in drive order', body: 'June through August is a route business. Pin every stop on the live map, drag them into drive order, and hand each tech a day that makes sense on Canadian streets — fewer kilometres between pools, more pools before dark.' },
  { icon: '🧪', title: 'A chemistry log on every pool', body: 'Chlorine, pH, alkalinity, salt and stabilizer recorded at every visit, with dosing and the tech’s name attached. When a customer asks why the water turned in week three, the answer is in the service history, not in somebody’s memory.' },
  { icon: '📱', title: 'Photos and notes from the truck', body: 'Techs run their day from their phones: stop list, gate codes, equipment notes, water readings, and before-and-after photos that land on the visit record the moment they are taken. Proof of service without a single call to the office.' },
  { icon: '❄️', title: 'Closings before the freeze', body: 'Winterizations pile up on a deadline the weather sets, not you. Track every pool still open as the nights get cold, schedule closings straight to the dispatch board, and invoice each one in CAD the day the cover goes on.' },
];

const faqs = [
  {
    q: 'Does PoolBossPro actually work for pool companies in Canada?',
    a: 'Yes. Scheduling, routing, pool and customer records, estimates, invoicing, the tech app and the customer app all work in Canada today. You connect your own Canadian Stripe account and your customers are billed in Canadian dollars.',
  },
  {
    q: 'Will my customers be charged in Canadian dollars?',
    a: 'Yes. Set your country to Canada on the Company Info page and every invoice, card charge, and payment link bills in CAD automatically. Your customers see plain Canadian dollars on their statements — no conversion, no surprises.',
  },
  {
    q: 'Can it handle openings and closings, not just weekly service?',
    a: 'That is half the reason a Canadian pool company needs software at all. Every account needs an opening and a closing every single year, and they all land inside the same few weeks. The waiting list shows who is still due, and you schedule them in batches straight to the dispatch board — then switch back to weekly route mode for the summer.',
  },
  {
    q: 'What does the subscription itself cost?',
    a: 'One plan, $59 USD a month, every feature included — unlimited users, unlimited pools, no add-on modules. The subscription bills in US dollars and your bank converts. We would rather tell you that plainly here than have you discover it on a statement.',
  },
  {
    q: 'Does the automated texting work in Canada?',
    a: 'It works once your Canadian sending number is registered with the carriers — a registration step we set up with you during onboarding, not something that is live the minute you sign up. Email alerts and customer-app notifications work everywhere from day one.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes — 14 days with full access and no credit card to start. Pick Canada as your country during setup and your very first customer invoice goes out in Canadian dollars.',
  },
];

export default function Page() {
  const openTrial = (el: HTMLElement) => { (window as any).__openSignup?.(1, el); };

  /* FAQPage structured data, built from the same array rendered below so the two never drift. */
  useEffect(() => {
    const ID = 'canada-faq-ld';
    if (document.getElementById(ID)) return;
    const s = document.createElement('script');
    s.id = ID;
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
    document.head.appendChild(s);
    return () => { document.getElementById(ID)?.remove(); };
  }, []);

  return (
    <>
      <Navbar onTrialClick={openTrial} />

      {/* ═══ PRICE + LIVE DEMO — same top-of-fold order as the homepage ═══ */}
      <div style={{ background: 'linear-gradient(135deg, #0f1720 0%, #1f2937 60%, #263445 100%)', padding: 'clamp(76px,7vw,80px) clamp(14px,4vw,40px) 0', textAlign: 'center' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(22px,3vw,32px)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', color: '#fff' }}>
            <span style={{ fontSize: 'clamp(30px,4.6vw,46px)', fontWeight: 800, lineHeight: 1 }}>$59<span style={{ fontSize: '.46em', fontWeight: 700, color: 'rgba(255,255,255,.6)' }}>/month</span></span>
            <span style={{ fontSize: 'clamp(16px,2.2vw,22px)', fontWeight: 800, color: 'var(--orange)' }}>&middot; 14-Day Free Trial</span>
          </div>
          <div style={{ color: 'rgba(255,255,255,.6)', fontSize: '13px', fontWeight: 600, marginTop: '7px', letterSpacing: '.3px' }}>No credit card required &middot; Cancel anytime &middot; Bills your customers in CAD</div>
        </div>
        <HeroDemo />
      </div>

      {/* ═══ HERO ═══ */}
      <div className="hero" style={{ paddingTop: 'clamp(44px,5vw,60px)' }}>
        <div className="hero-badge">Works in Canada &middot; CAD Invoicing Built In</div>
        <h1>Pool Service Software<br /><span>Built for the Canadian Season</span></h1>
        <p className="hero-sub">A Canadian pool season is twelve weeks of flat-out with a scheduling avalanche on either end &mdash; every account needs an opening in a few frantic May weeks and a closing before the first hard freeze. PoolBossPro runs both modes from one dashboard, and bills your customers in Canadian dollars while it does it. The demo above is the real software &mdash; go click it.</p>
        <div className="hero-btns">
          <a href="#" onClick={(e) => { e.preventDefault(); openTrial(e.currentTarget as HTMLElement); }} className="btn-primary">Start Your 14-Day Free Trial</a>
          <div className="hero-trust">No sales call &nbsp;&middot;&nbsp; No credit card &nbsp;&middot;&nbsp; <b>from $59/mo</b> flat, everything included</div>
        </div>
      </div>

      {/* ═══ THE SEASON ARGUMENT — dark band with six cards ═══ */}
      <div className="premium-band">
        <h2>A Short Season Punishes Slow Scheduling.<br /><span>Your Software Has to Run Two Modes.</span></h2>
        <p>In Phoenix, pool software only has to repeat the same week fifty-two times. In Canada it has to survive May, when every customer wants their pool open at once; carry a weekly route grind through June, July and August; and then land every winterization before the weather ends the argument. PoolBossPro is built to switch between the twice-a-year avalanche and the summer route rhythm without you rebuilding your schedule from scratch each time.</p>
        <div className="premium-grid">
          {seasonCards.map(c => (
            <div className="premium-card" key={c.title}>
              <div className="premium-card-icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ OPENINGS & CLOSINGS DEEP DIVE ═══ */}
      <section>
        <div className="highlight-row">
          <div className="highlight-text">
            <span className="section-label">The Twice-a-Year Avalanche</span>
            <h2>Every Pool Needs an Opening.<br />Every Pool Needs a Closing.</h2>
            <p>Twice a year, your entire customer list turns into a job list overnight. The companies that win those weeks are the ones that can see the whole pile and schedule it in batches &mdash; not the ones re-sorting a spreadsheet at 10pm.</p>
            <ul className="check-list">
              <li>Waiting list shows every account still due for an opening or a winterization</li>
              <li>Schedule a whole area at once and drop it straight to the dispatch board</li>
              <li>Openings and closings are just service types &mdash; price them, route them, invoice them</li>
              <li>Each visit lands on the pool&apos;s permanent service history with photos and notes</li>
              <li>Invoice or charge the card on file in CAD the day the work is done</li>
              <li>When the rush ends, the same board runs your weekly summer routes</li>
            </ul>
          </div>
          <div className="highlight-visual">
            <div style={{ color: 'rgba(255,255,255,.45)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Waiting List &mdash; Spring Openings</div>
            <div className="mock-item">
              <div className="mock-dot orange"></div>
              <div><div className="mock-label">14 Lakeshore Cres &mdash; Tremblay, S.</div><div className="mock-sub">Pool Opening &middot; 68,000 L</div></div>
              <div className="mock-badge">Due</div>
            </div>
            <div className="mock-item">
              <div className="mock-dot orange"></div>
              <div><div className="mock-label">22 Birchwood Dr &mdash; Patel, R.</div><div className="mock-sub">Pool Opening + Filter Clean &middot; 90,000 L</div></div>
              <div className="mock-badge">Due</div>
            </div>
            <div className="mock-item">
              <div className="mock-dot green"></div>
              <div><div className="mock-label">8 Fairway Ct &mdash; Nguyen, T.</div><div className="mock-sub">Pool Opening &middot; 54,000 L</div></div>
              <div className="mock-badge green-badge">Scheduled</div>
            </div>
            <div className="stat-grid" style={{ marginTop: '14px' }}>
              <div className="stat-cell"><div className="stat-val">37</div><div className="stat-lbl">Openings Still Due</div></div>
              <div className="stat-cell"><div className="stat-val">12</div><div className="stat-lbl">Scheduled This Week</div></div>
              <div className="stat-cell full"><div className="stat-val">Schedule the whole neighbourhood in one pass</div><div className="stat-lbl">Straight to the dispatch board</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WEEKLY ROUTES DEEP DIVE ═══ */}
      <section style={{ background: 'var(--light-bg)' }}>
        <div className="highlight-row reverse">
          <div className="highlight-text">
            <span className="section-label">June Through August</span>
            <h2>The Summer Is a Route.<br />Run It in Drive Order.</h2>
            <p>Once the openings are done, the season becomes a rhythm: the same pools, every week, until Labour Day. Margin lives in route density &mdash; the fewer kilometres between stops, the more pools a tech clears before dark.</p>
            <ul className="check-list">
              <li>Every stop pinned on a live map, built into routes that follow the roads</li>
              <li>Drag-and-drop stop ordering &mdash; hand each tech a day in drive order</li>
              <li>Waiting list totals show pools and visits per service type before you book</li>
              <li>Mark complete, skipped, or rescheduled with one tap from the truck</li>
              <li>Rain day? Shift the day&apos;s stops without unravelling the rest of the week</li>
              <li>Day summary: stops, pools, litres of water, and revenue at a glance</li>
            </ul>
          </div>
          <div className="highlight-visual">
            <div style={{ color: 'rgba(255,255,255,.45)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Tuesday Route &mdash; 11 Stops</div>
            <div className="mock-item">
              <div className="mock-dot green"></div>
              <div><div className="mock-label">31 Riverbend Rd &mdash; Roy, C.</div><div className="mock-sub">Weekly Maintenance &middot; 72,000 L</div></div>
              <div className="mock-badge green-badge">Done</div>
            </div>
            <div className="mock-item" style={{ borderColor: 'rgba(13,148,136,.5)' }}>
              <div className="mock-dot orange"></div>
              <div><div className="mock-label">45 Aspen Gate &mdash; MacLeod, D.</div><div className="mock-sub">Weekly Maintenance &middot; 58,000 L</div></div>
              <div className="mock-badge">In Progress</div>
            </div>
            <div className="mock-item">
              <div className="mock-dot blue"></div>
              <div><div className="mock-label">62 Meadowlark Ave &mdash; Singh, H.</div><div className="mock-sub">Chemical-Only Visit &middot; 49,000 L</div></div>
              <div className="mock-badge blue-badge">Up Next</div>
            </div>
            <div className="stat-grid" style={{ marginTop: '14px' }}>
              <div className="stat-cell"><div className="stat-val">11</div><div className="stat-lbl">Stops Today</div></div>
              <div className="stat-cell"><div className="stat-val">6</div><div className="stat-lbl">Done by Noon</div></div>
              <div className="stat-cell full"><div className="stat-val">Reordered into drive order in seconds</div><div className="stat-lbl">Fewer kilometres, more pools</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHEMISTRY DEEP DIVE ═══ */}
      <section>
        <div className="highlight-row">
          <div className="highlight-text">
            <span className="section-label">Water Chemistry</span>
            <h2>Every Reading, Every Dose,<br />On the Pool Forever.</h2>
            <p>A pool company&apos;s real product is water that stays clear &mdash; and the record that proves it. Techs log readings and dosing from their phones at the stop, and every number lands on that pool&apos;s permanent history.</p>
            <ul className="check-list">
              <li>Chlorine, pH, alkalinity, salt and stabilizer logged per visit</li>
              <li>Chemicals added recorded with amounts and the tech&apos;s name</li>
              <li>Full service history per pool &mdash; readings, visits, photos, notes</li>
              <li>Print-ready service reports for any pool in one click</li>
              <li>Before-and-after photos attached to the visit from the truck</li>
              <li>Equipment notes on the pool profile so the next tech knows the quirks</li>
            </ul>
          </div>
          <div className="highlight-visual">
            <div style={{ color: 'rgba(255,255,255,.45)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Visit Log &mdash; 45 Aspen Gate</div>
            <div className="stat-grid">
              <div className="stat-cell"><div className="stat-val">2.5</div><div className="stat-lbl">Free Chlorine (ppm)</div></div>
              <div className="stat-cell"><div className="stat-val">7.5</div><div className="stat-lbl">pH</div></div>
              <div className="stat-cell"><div className="stat-val">95</div><div className="stat-lbl">Alkalinity (ppm)</div></div>
              <div className="stat-cell"><div className="stat-val">45</div><div className="stat-lbl">Stabilizer (ppm)</div></div>
              <div className="stat-cell full"><div className="stat-val">Dosed: 2 kg shock &middot; 1 L algaecide</div><div className="stat-lbl">Logged by the tech at the stop</div></div>
              <div className="stat-cell full"><div className="stat-val">📸 2 photos attached to this visit</div><div className="stat-lbl">On the pool&apos;s history permanently</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CAD BILLING DEEP DIVE ═══ */}
      <section style={{ background: 'var(--light-bg)' }}>
        <div className="highlight-row reverse">
          <div className="highlight-text">
            <span className="section-label">Billing in Canadian Dollars</span>
            <h2>Your Customers Pay in CAD.<br />Not a Setting Buried in a Forum.</h2>
            <p>Most US pool platforms treat Canadian billing as an afterthought you discover after you have imported your whole customer list. In PoolBossPro it is one field: set your country to Canada in Company Info, connect your own Canadian Stripe account, and the entire money side runs in Canadian dollars.</p>
            <ul className="check-list">
              <li>Every invoice, card charge, and Pay Now link goes out in CAD</li>
              <li>Card on file &mdash; charge after each visit or roll the month into one invoice</li>
              <li>Estimates priced and accepted in CAD, converted to invoices in one click</li>
              <li>Automated payment follow-ups chase unpaid invoices for you</li>
              <li>Your own Canadian Stripe account &mdash; the money goes straight to you</li>
              <li>Payment history per customer, per pool, per season</li>
            </ul>
          </div>
          <div className="highlight-visual">
            <div style={{ color: 'rgba(255,255,255,.45)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Invoice &mdash; Weekly Maintenance</div>
            <div className="mock-item">
              <div className="mock-dot green"></div>
              <div><div className="mock-label">Weekly Maintenance &mdash; July</div><div className="mock-sub">4 visits &middot; card on file</div></div>
              <div className="mock-badge green-badge">$260.00 CAD</div>
            </div>
            <div className="mock-item">
              <div className="mock-dot green"></div>
              <div><div className="mock-label">Pool Opening &mdash; May 12</div><div className="mock-sub">Paid via Pay Now link</div></div>
              <div className="mock-badge green-badge">$395.00 CAD</div>
            </div>
            <div className="mock-item">
              <div className="mock-dot orange"></div>
              <div><div className="mock-label">Filter Clean &mdash; Aug 2</div><div className="mock-sub">Follow-up #2 sent automatically</div></div>
              <div className="mock-badge">$180.00 CAD</div>
            </div>
            <div style={{ marginTop: '14px', background: 'rgba(255,255,255,.07)', borderRadius: '6px', padding: '12px 14px', textAlign: 'center' }}>
              <div style={{ color: '#fff', fontSize: '13px', fontWeight: 700 }}>Country: Canada &middot; Currency: CAD</div>
              <div style={{ color: 'rgba(255,255,255,.42)', fontSize: '11px', marginTop: '2px' }}>Set once in Company Info</div>
            </div>
          </div>
        </div>

        {/* Real product screenshot — an actual Stripe payment page generated by the platform
            for a Canada-set company. Unedited; caption stays within what the image shows. */}
        <figure style={{ maxWidth: '860px', margin: '72px auto 0', textAlign: 'center' }}>
          <img
            src="/cad-checkout.png"
            alt="Stripe payment page generated by the platform: Hamann Lawn Care — Invoice #459 for CA$9.74, with card fields and a Pay button"
            style={{ width: '100%', maxWidth: '100%', height: 'auto', borderRadius: '14px', border: '1.5px solid var(--border)', boxShadow: '0 16px 48px rgba(15,23,32,.14)' }}
          />
          <figcaption style={{ color: 'var(--muted)', fontSize: '13px', marginTop: '14px', lineHeight: 1.6 }}>
            A real payment page from the platform &mdash; a Canada-set company&apos;s customer pays in Canadian dollars. (The founder&apos;s own company.)
          </figcaption>
        </figure>
      </section>

      {/* ═══ THREE APPS ═══ */}
      <section>
        <div className="centered" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-label">One System, Three Apps</span>
          <h2 className="section-title">The Office, the Truck, and the Customer&apos;s Couch</h2>
          <p className="section-sub">Everything shares one backend, so a stop your tech finishes at 2:15 shows up in the office at 2:15 &mdash; and on the customer&apos;s phone right after.</p>
          <div className="steps-grid">
            <div className="step-box">
              <div className="step-circle">1</div>
              <h3>The office</h3>
              <p>Scheduling, the waiting list, the route map, estimates, invoicing, and chemistry reports. Where the season gets planned and the money gets collected.</p>
            </div>
            <div className="step-box">
              <div className="step-circle">2</div>
              <h3>The tech app</h3>
              <p>Today&apos;s stops in drive order, gate codes, equipment notes, water readings, dosing, and before-and-after photos &mdash; built for someone standing on a pool deck, not at a desk.</p>
            </div>
            <div className="step-box">
              <div className="step-circle">3</div>
              <h3>The customer app</h3>
              <p>Your customers see their visits, service reports and invoices, pay in CAD with a card on file, and pick which notifications they want. No app store, no password.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT "DEMO" MEANS EVERYWHERE ELSE ═══ */}
      <div className="vs-band">
        <div className="vs-inner" style={{ textAlign: 'center' }}>
          <span className="section-label">The Difference</span>
          <h2 className="section-title">Most &ldquo;Demos&rdquo; Are a Phone Call</h2>
          <p className="section-sub" style={{ margin: '0 auto 44px' }}>
            Search for pool service software and every demo button asks for your name, your number, and a slot on someone&rsquo;s calendar. Ours is the thing at the top of this page &mdash; it is already running.
          </p>
          <table className="vs-table">
            <thead>
              <tr>
                <th></th>
                <th className="sbp-col">PoolBossPro</th>
                <th className="other-col">Typical pool software</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>See the software</td><td className="sbp-col">Right now</td><td className="other-col">After a scheduled call</td></tr>
              <tr><td>Give your phone number</td><td className="sbp-col">Never</td><td className="other-col">Required</td></tr>
              <tr><td>Credit card</td><td className="sbp-col">Never</td><td className="other-col">Often, for the trial</td></tr>
              <tr><td>Data in the demo</td><td className="sbp-col">A full pool company</td><td className="other-col">Empty, or a slide deck</td></tr>
              <tr><td>Tech &amp; customer apps</td><td className="sbp-col">Both, live</td><td className="other-col">Screenshots</td></tr>
              <tr><td>Sales follow-up</td><td className="sbp-col">None</td><td className="other-col">Expect it</td></tr>
            </tbody>
          </table>
          <p className="vs-note">No form stands between you and the demo above. There is nothing to fill in.</p>
        </div>
      </div>

      {/* ═══ PRICING ═══ */}
      <section id="pricing">
        <div className="centered" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-label">Simple Pricing</span>
          <h2 className="section-title">One Plan. Everything Included.</h2>
          <p className="section-sub">No tiers, no per-user fees, no modules to unlock. A short season leaves no room for software that nickel-and-dimes you through it.</p>
        </div>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <div className="price-card">
            <div className="featured-badge">Everything Included</div>
            <div className="price-tier">One Plan. No Surprises.</div>
            <div className="price-amount"><sup>$</sup>99</div>
            <div className="price-period">per month (USD) &middot; your customers are billed in CAD</div>
            <ul className="price-features">
              <li>Unlimited clients, pools, employees &amp; users</li>
              <li>Opening &amp; closing scheduling plus weekly routes</li>
              <li>Live route map with drag-and-drop drive order</li>
              <li>Water chemistry logging &amp; service reports</li>
              <li>Estimates, invoices &amp; Stripe payments in CAD</li>
              <li>Tech mobile app &amp; branded customer app</li>
              <li>Automated email alerts from day one</li>
              <li>500 texts/month included, sent and received (Canadian number registered during onboarding)</li>
            </ul>
            <button className="price-btn price-btn-primary" onClick={(e) => openTrial(e.currentTarget)}>Start Your 14-Day Free Trial</button>
          </div>
        </div>
        <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '28px' }}>The subscription bills in US dollars and your bank converts &mdash; your customers only ever see Canadian dollars. No contracts. Cancel anytime.</p>
      </section>

      {/* ═══ FAQ ═══ */}
      <div style={{ background: 'var(--light-bg)', padding: '96px 40px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <span className="section-label">Questions</span>
            <h2 className="section-title">PoolBossPro in Canada</h2>
          </div>
          <div style={{ marginTop: '48px' }}>
            {faqs.map(f => (
              <div key={f.q} style={{ borderBottom: '1px solid var(--border)', padding: '22px 0' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text)', marginBottom: '10px' }}>{f.q}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.7 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ CTA ═══ */}
      <div className="cta-band">
        <h2>The Season Is Short. Set Up Before It Starts.</h2>
        <p>
          The demo is the same software you get. from $59/month with every feature included, a 14-day free trial with no card up front &mdash; and your customers billed in Canadian dollars from the very first invoice.
        </p>
        <button className="btn-primary" onClick={(e) => openTrial(e.currentTarget)}>
          Start Your 14-Day Free Trial
        </button>
      </div>

      <SignupModal />
    </>
  );
}
