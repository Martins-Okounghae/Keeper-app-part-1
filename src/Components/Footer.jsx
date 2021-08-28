import React from  "react";


function Footer(){
    date = new Date();
    currentYear = date.getFullYear();
    return <p>&copy currentYear </p>
}

export default Footer;