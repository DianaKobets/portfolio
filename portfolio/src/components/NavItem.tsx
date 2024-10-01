import React from "react";


function NavItem({ children }: { children: React.ReactNode, href: string }) {
    return (
        <a className="text-gray-200 pt-1 text-lg hover:text-amber-400 transition-colors duration-300 ease-in-out tracking-wide">
            {children}
        </a>
    );
}

export default NavItem;
