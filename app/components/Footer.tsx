export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-top">
          <a href="/" className="site-footer-brand">
            <span>💧</span>
            <span>PoolBossPro</span>
          </a>
          <div className="site-footer-cols">
            <div className="site-footer-col">
              <h4>Product</h4>
              <a href="/features">Features</a>
              <a href="/pricing">Pricing</a>
              <a href="https://my.poolbosspro.com" target="_blank" rel="noreferrer">Log In</a>
            </div>
            <div className="site-footer-col">
              <h4>Solutions</h4>
              <a href="/pool-service-software">Pool Service Software</a>
              <a href="/pool-scheduling-software">Pool Scheduling Software</a>
              <a href="/pool-cleaning-software">Pool Cleaning Software</a>
              <a href="/pool-chemical-software">Pool Chemical Tracking Software</a>
              <a href="/pool-business-software">Pool Business Software</a>
              <a href="/pool-maintenance-software">Pool Maintenance Software</a>
              <a href="/pool-route-software">Pool Route &amp; Dispatch Software</a>
              <a href="/pool-invoicing-software">Pool Invoicing &amp; Billing</a>
            </div>
            <div className="site-footer-col">
              <h4>Compare</h4>
              <a href="/vs-jobber">vs. Jobber</a>
              <a href="/vs-servicetitan">vs. ServiceTitan</a>
              <a href="/vs-serviceautopilot">vs. Service AutoPilot</a>
              <a href="/vs-housecallpro">vs. Housecall Pro</a>
            </div>
            <div className="site-footer-col">
              <h4>Resources</h4>
              <a href="/blogs">Blog</a>
            </div>
            <div className="site-footer-col">
              <h4>BossPro Family</h4>
              <a href="https://industrybosspro.com">IndustryBossPro — All-in-One Field Service Software</a>
            </div>
          </div>
        </div>
        <div className="site-footer-bottom">
          © {new Date().getFullYear()} PoolBossPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
