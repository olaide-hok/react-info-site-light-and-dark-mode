import React from 'react';

function Footer(props) {
  return (
    <footer className={`footer ${props.darkMode ? "dark" : ""}`}>
        <small> © 2022 Habeeb Kareem</small>
    </footer>      
  );
}

export default Footer;
