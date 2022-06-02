import React from "react";
import ReactDOM from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import { openHide, drawerVisible } from "../utils/animations";

import logo from "../assets/logo.png";

const menus = [
    { name: "Why Priority Dispatch" },
    { name: "Products" },
    { name: "Sales & Consolting" },
    { name: "Course Registration" },
    { name: "Support" },
];

const RightDrawer = ({ isOpen, setIsOpen }) => {
    const [menuTitle, setMenuTitle] = React.useState(menus[0].name);
    return ReactDOM.createPortal(
        <>
            {isOpen && (
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        variants={openHide}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={() => setIsOpen(!isOpen)}
                        className="z-50 fixed top-0 left-0 bottom-0 right-0 bg-dark bg-opacity-95"
                    >
                        <motion.div
                            variants={drawerVisible}
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                            className="bg-white min-w-[250px] md:min-w-[300px] text-gray flex flex-col absolute top-0 bottom-0 right-0"
                        >
                            <div className="h-[70px] bg-primary flex justify-center items-center">
                                <img
                                    src={logo}
                                    alt="Priority Dispatch"
                                    className="w-[100px]"
                                />
                            </div>
                            {menus?.map((menu, index) => (
                                <div
                                    onClick={() => setIsOpen(!isOpen)}
                                    key={index}
                                    className="py-2 px-5"
                                >
                                    {menu.name}
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            )}
        </>,
        document.querySelector("#portal")
    );
};

export default RightDrawer;
