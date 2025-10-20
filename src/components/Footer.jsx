import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright to Charles Liwa ⓒ {year}</p>
    </footer>
  );
}

export default Footer;