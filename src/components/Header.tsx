import logo from "../assets/logo.png"
import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBContainer,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";

function Header() {
  return (
    <MDBNavbar expand="lg" light bgColor="white" dir="rtl">
      <MDBContainer fluid>
        <MDBNavbarNav left className="mb-6 mb-lg-0">
          <MDBNavbarBrand href="#">
            <img
              src={logo}
              height="50"
              alt=""
              loading="lazy"
            />
          </MDBNavbarBrand>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;
