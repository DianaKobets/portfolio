import React from "react";
import { Link } from 'react-router-dom';


function NavItem({ children, href }: { children: React.ReactNode, href: string }) {
    return (
        <Link to={href} className="text-gray-200 pt-1 text-lg hover:text-amber-400 transition-colors duration-300 ease-in-out tracking-wide">
            {children}
        </Link>
    );
}

export default NavItem;
