import React from "react";
import { scrollToProjects } from "./AboutMe.tsx";

function NavItem({ children, href }: { children: React.ReactNode, href: string }) {
    return (
        <button onClick={()=>scrollToProjects(href)} className="text-gray-200 pt-1 text-lg hover:text-amber-400 transition-colors duration-300 ease-in-out tracking-wide">
            {children}
        </button>
    );
}

export default NavItem;
