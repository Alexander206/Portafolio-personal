import React from "react";

// Components
import HashLink from "../atoms/HashLink.jsx";

const Navbar = ({ navItems, activeLink, setActiveLink }) => {
    const navItemsElements = navItems.map((item, index) => {
        return (
            <HashLink
                key={index}
                icon={item.icon}
                route={item.route}
                text={item.text}
                setActiveLink={setActiveLink}
                activeLink={activeLink}
            />
        );
    });

    return (
        <nav className="header_navbar">
            <ul className="navbar_list routes">{navItemsElements}</ul>
        </nav>
    );
};

export default Navbar;