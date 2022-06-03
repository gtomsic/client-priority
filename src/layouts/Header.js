import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const menus = [
    { name: "Why Priority Dispatch" },
    { name: "Products" },
    { name: "Sales & Consolting" },
    { name: "Course Registration" },
    { name: "Support" },
];

const Header = ({ isOpen, setIsOpen }) => {
    return (
        <div className="bg-primary z-40">
            <div className="flex container mx-auto px-6 md:px-5 items-center justify-between h-[60px] md:h-[70px]">
                <Link to="/" className="logo ">
                    <img
                        src={logo}
                        alt="Priority Dispatch Logo"
                        className="w-[100px] md:w-[150px]"
                    />
                </Link>
                <div className="menus text-white flex-1 flex justify-end">
                    {menus?.map((menu, index) => (
                        <div
                            key={index}
                            className="hidden lg:inline-block lg:mx-3 p-0 md:p-1 lg:p-2  cursor-pointer"
                        >
                            {menu.name}
                        </div>
                    ))}
                </div>
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="menu-icon  lg:hidden w-[35px] h-[35px] rounded-md bg-primary text-white text-2xl border border-light flex justify-center items-center"
                >
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    );
};

export default Header;
