import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const TopNav = () => {
  return (
    <div>
      <Navbar color="info" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default TopNav;
