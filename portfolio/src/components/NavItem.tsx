import React from "react";

function NavItem({children} : {children: React.ReactNode}){
    return (
        <a className="text-gray-200 flex-auto pr-2 text-lg hover:underline z-10" href="#prolects">{children}</a>
    );
}

export default NavItem;