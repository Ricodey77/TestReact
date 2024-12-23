function Footer() {
  return (
    <footer className="py-5" style={{ 'background': '#00143f48','borderRadius': '8px','boxShadow': '0 4px 20px rgba(0, 0, 0, 0.1)'}}>
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 text-light">
            <h5 className="fw-bold text-light">Ukraine</h5>
            <p >
              Designed and built with all the love in the world by the Ukraine team
              with the help of our contributors.
            </p>
            <p>Vacation licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.0.2.</p>
            <p>Analytics by Fandom.</p>
          </div>

          {/* Column 2 */}
          <div className="col-md-2">
            <h5 className="fw-bold text-light">Links</h5>
            <ul className="list-unstyled text-light">
              <li>Home</li>
              <li>Docs</li>
              <li>Examples</li>
              <li>Themes</li>
              <li>Blog</li>
              <li>Swag Store</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-2">
            <h5 className="fw-bold text-light">Guides</h5>
            <ul className="list-unstyled text-light">
              <li>Getting started</li>
              <li>Starter template</li>
              <li>Parcel</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-2">
            <h5 className="fw-bold text-light">Projects</h5>
            <ul className="list-unstyled text-light">
              <li>Ukraine 5</li>
              <li>Ukraine 4</li>
              <li>Icons</li>
              <li>RFS</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="col-md-2">
            <h5 className="fw-bold text-light">Community</h5>
            <ul className="list-unstyled text-light">
              <li>Issues</li>
              <li>Discussions</li>
              <li>Corporate sponsors</li>
              <li>Open Collective</li>
              <li>Stack Overflow</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
