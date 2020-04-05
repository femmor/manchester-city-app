import React, { Component } from "react";
import { CityLogo } from "../ui/icons";

class Footer extends Component {
  render() {
    return (
      <footer className="bck_blue">
        <div className="footer_logo">
          <CityLogo width="70px" height="70px" link={true} linkTo="/" />
          <div className="footer_disc">
            &copy; 2020 Manchester City - All Rights Reserved
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
