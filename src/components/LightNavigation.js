import React from "react";
import Sidebar from "../Sidebar.js/Sidebar";

const LightNavigation = () => {
  return (
    <body class="sb-nav-fixed">
      <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        {/* <!-- Navbar Brand--> */}
        <a class="navbar-brand ps-3" href="index.html">
          Start Bootstrap
        </a>
        {/* <!-- Sidebar Toggle--> */}
        <button
          class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="#!"
        >
          <i class="fas fa-bars"></i>
        </button>
        {/* <!-- Navbar Search--> */}
        <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div class="input-group">
            <input
              class="form-control"
              type="text"
              placeholder="Search for..."
              aria-label="Search for..."
              aria-describedby="btnNavbarSearch"
            />
            <button class="btn btn-primary" id="btnNavbarSearch" type="button">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </form>
        {/* <!-- Navbar--> */}
        <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-user fa-fw"></i>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a class="dropdown-item" href="#!">
                  Settings
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#!">
                  Activity Log
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#!">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div id="layoutSidenav">
        <Sidebar/>
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid px-4">
              <h1 class="mt-4">Sidenav Light</h1>
              <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li class="breadcrumb-item active">Sidenav Light</li>
              </ol>
              <div class="card mb-4">
                <div class="card-body">
                  This page is an example of using the light side navigation
                  option. By appending the
                  <code>.sb-sidenav-light</code>
                  class to the
                  <code>.sb-sidenav</code>
                  class, the side navigation will take on a light color scheme.
                  The
                  <code>.sb-sidenav-dark</code>
                  is also available for a darker option.
                </div>
              </div>
            </div>
          </main>
          <footer class="py-4 bg-light mt-auto">
            <div class="container-fluid px-4">
              <div class="d-flex align-items-center justify-content-between small">
                <div class="text-muted">Copyright &copy; Your Website 2023</div>
                <div>
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous"
      ></script>
      <script src="js/scripts.js"></script>
    </body>
  );
};

export default LightNavigation;
