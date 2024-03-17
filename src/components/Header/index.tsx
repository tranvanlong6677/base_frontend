import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { routesObj } from "../../utils/routes";
import React from "react";

const Header = () => {
  return (
    <Navbar expand={"md"} variant="dark" bg="dark" className="header-wrapper">
      <Container className="d-flex ">
        <Link
          to={routesObj.home}
          className="navbar-brand d-flex align-items-center"
        >
          <span className="mx-2">TEST</span>
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex justify-content-between">
            <div className="d-flex flex-column flex-md-row">
              <Link to={routesObj.home} className="nav-link">
                Thông tin cơ bản
              </Link>

              <Link to={routesObj.home} className="nav-link">
                Kinh nghiệm làm việc
              </Link>

              <Link to={routesObj.home} className="nav-link">
                Dự án
              </Link>

              <Link to={routesObj.home} className="nav-link">
                Học vấn
              </Link>

              <Link to={routesObj.home} className="nav-link">
                Các kỹ năng
              </Link>

              <Link to={routesObj.home} className="nav-link">
                Chú thích
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default Header;
