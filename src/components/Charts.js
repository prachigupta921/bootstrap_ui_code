import React from "react";
import Sidebar from "../Sidebar.js/Sidebar";
import MyAreaChart from "./MyChart";
import CustomBarChart from "./BarCharts";
import CustomPieChart from "./PieCharts";

const Charts = () => {
  return (
    <body className="sb-nav-fixed">
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        {/* <!-- Navbar Brand--> */}
        <a className="navbar-brand ps-3" href="index.html">
          Start Bootstrap
        </a>
        {/* <!-- Sidebar Toggle--> */}
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="#!"
        >
          <i className="fas fa-bars"></i>
        </button>
        {/* <!-- Navbar Search--> */}
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search for..."
              aria-label="Search for..."
              aria-describedby="btnNavbarSearch"
            />
            <button
              className="btn btn-primary"
              id="btnNavbarSearch"
              type="button"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        {/* <!-- Navbar--> */}
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#!">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Activity Log
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#!">
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
            <div className="container-fluid px-4">
              <h1 className="mt-4">Charts</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Charts</li>
              </ol>
              <div className="card mb-4">
                <div className="card-body">
                  Chart.js is a third party plugin that is used to generate the
                  charts in this template. The charts below have been customized
                  - for further customization options, please visit the official
                  <a
                    target="_blank"
                    href="https://www.chartjs.org/docs/latest/"
                  >
                    Chart.js documentation
                  </a>
                  .
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-chart-area me-1"></i>
                  Area Chart Example
                </div>
                <div className="card-body">
                  <MyAreaChart/>
                  <canvas id="myAreaChart" width="100%" height="30"></canvas>
                </div>
                <div className="card-footer small text-muted">
                  Updated yesterday at 11:59 PM
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="card mb-4">
                    <div className="card-header">
                      <i className="fas fa-chart-bar me-1"></i>
                      Bar Chart Example
                    </div>
                    <div className="card-body">
                      <CustomBarChart/>
                      <canvas id="myBarChart" width="100%" height="50"></canvas>
                    </div>
                    <div className="card-footer small text-muted">
                      Updated yesterday at 11:59 PM
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card mb-4">
                    <div className="card-header">
                      <i className="fas fa-chart-pie me-1"></i>
                      Pie Chart Example
                    </div>
                    <div className="card-body">
                      <CustomPieChart/>
                      <canvas id="myPieChart" width="100%" height="50"></canvas>
                    </div>
                    <div className="card-footer small text-muted">
                      Updated yesterday at 11:59 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">
                  Copyright &copy; Your Website 2023
                </div>
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
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"
        crossorigin="anonymous"
      ></script>
      <script src="assets/demo/chart-area-demo.js"></script>
      <script src="assets/demo/chart-bar-demo.js"></script>
      <script src="assets/demo/chart-pie-demo.js"></script>
    </body>
  );
};

export default Charts;
