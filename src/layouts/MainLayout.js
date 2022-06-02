import React from "react";
import { Outlet } from "react-router-dom";
import RightDrawer from "../components/RightDrawer";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div>
            <div className="py-3 bg-secondary text-white text-center px-3 mt-[60px] md:mt-[70px]">
                We’re open but working remotely due to COVID-19. Reach us at
                1-800-363-9127 (USA/Canada), 1-801-363-9127 (International),
                your contact’s direct number, or our{" "}
                <span className="text-positive">website contact form</span>.
            </div>
            <main className="min-h-[80vh] z-0">
                <Outlet />
            </main>
            <Footer />
            <header className="fixed top-0 left-0 right-0 w-full drop-shadow-lg md:drop-shadow-none">
                <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            </header>
            <RightDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default MainLayout;
