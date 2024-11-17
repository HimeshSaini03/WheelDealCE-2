import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import logoimg from "../../assets/all-images/cars-img/attachment_133814360-removebg-preview.png";


const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  
  {
    path: "/cars",
    display: "Cars",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/detailingwork",
    display: "Detailing Work",
  },
  // {
  //   path: "/LoginForm",
  //   display: "Login",
  // },
];

const Header = () => {
  const menuRef = useRef(null);

  useEffect(() => {

    const comp1 = document.querySelector(".login-signup");
    const comp2 = document.querySelector(".logout");
    if (localStorage.getItem("login")) {
      comp1.style.display = "none";
      comp2.style.display = "block";
    } else {
      comp1.style.display = "block";
      comp2.style.display = "none";
    }
  })

  const HandleLogout = () => {
      localStorage.removeItem("login");
      window.location.reload();
  }

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>RENT & MODIFICATION</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> 91-5152xxxxxx
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6" className="login-signup">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="./login" className=" d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i> Login
                </Link>
              
                <Link to="./signUp" className=" d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="logout">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link onClick={HandleLogout} className=" d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i> Logout
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
      
                    <span>
                      <i>WHEEL</i> <br /> DEAL
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>India<br/>Mumbai</h4>
                                 
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>24x7 Available</h4>
                  
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i className="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
