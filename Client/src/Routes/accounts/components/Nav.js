import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="sideBar-ctr">
          <div className="sidebar">
            <div className="sidebar-brand">
              <h2>
                <span className="lab la-accusoft"></span>
                <span>Hospital</span>
              </h2>
            </div>
            <div className="sidebar-menu">
              <ul>
                <li>
                  <Link to="/">
                    <a
                      href
                      className={
                        this.props.active === "dashboard" ? "active" : ""
                      }
                    >
                      <span className="las la-igloo"></span>
                      <span>Home</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/payments">
                    <a
                      href
                      className={
                        this.props.active === "payments" ? "active" : ""
                      }
                    >
                      <span className="las la-users"></span>
                      <span>Payments</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <a href>
                    <span className="las la-clipboard-list"></span>
                    <span>Tasks</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
