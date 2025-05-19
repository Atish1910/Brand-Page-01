import img from "../public/img/logo.png";

function Navbar() {
  return (
    <>
      <div className="container-fluid bg-nav">
        <div className="container">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <a className="navbar-brand" href="">
                <img src={img} className="logo_01" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-center "
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="">
                      Menu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Location
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <button className="btn btn-danger">Login</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
