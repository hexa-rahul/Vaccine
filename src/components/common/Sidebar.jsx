import React from 'react';
import "../../assets/admin/vendor/fontawesome-free/css/all.min.css";

const Sidebar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-user-md"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Administration</div>
            </a>

            {/* Divider */}
            <hr className="sidebar-divider my-0" />

            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span className="sidebar_title">Dashboard</span>
                </a>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider" />

            

            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span className="sidebar_title">Components</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <a className="collapse-item" href="/buttons">Buttons</a>
                        <a className="collapse-item" href="/cards">Cards</a>
                    </div>
                </div>
            </li>

            {/* Nav Item - Utilities Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span className="sidebar_title">Utilities</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <a className="collapse-item" href="/utilities-color">Colors</a>
                        <a className="collapse-item" href="/utilities-border">Borders</a>
                        <a className="collapse-item" href="/utilities-animation">Animations</a>
                        <a className="collapse-item" href="/utilities-other">Other</a>
                    </div>
                </div>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider" />

            {/* Heading */}
            {/* <div className="sidebar-heading">Addons</div> */}

            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span className="sidebar_title">Pages</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href="/login">Login</a>
                        <a className="collapse-item" href="/register">Register</a>
                        <a className="collapse-item" href="/forgot-password">Forgot Password</a>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="/404">404 Page</a>
                        <a className="collapse-item" href="/blank">Blank Page</a>
                    </div>
                </div>
            </li>

            {/* Nav Item - Charts */}
            <li className="nav-item">
                <a className="nav-link" href="/charts">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span className="sidebar_title">Charts</span>
                </a>
            </li>

            {/* Nav Item - Tables */}
            <li className="nav-item">
                <a className="nav-link" href="/tables">
                    <i className="fas fa-fw fa-table"></i>
                    <span className="sidebar_title">Tables</span>
                </a>
            </li>

            

            
        </ul>
    );
};

export default Sidebar;
