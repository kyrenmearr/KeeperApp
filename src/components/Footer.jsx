import React from "react";
import "../../public/styles.css";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer>
      <p>All Rights Reserved {currentYear}</p>
    </footer>
  );
}

export default Footer;
