import React from "react";
import Container from "../components/Container";

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="bg-gray ">
                <Container>
                    <div className="text-white text-center gap-1 py-5 px-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {[
                            "Company Profile",
                            "Job Opportunities",
                            "Terms of Use",
                            "Privacy Policy",
                            "Intellectual Property",
                            "Contact Us",
                            "Press Release",
                            "Resource Library",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="py-2 cursor-pointer border border-light"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
            <Container>
                <div className="text-white flex flex-col justify-center items-center py-11 md:py-0 md:items-center md:flex-row px-3 md:px-8 min-h-[100px]">
                    <div className="flex-1 flex flex-col justify-center md:flex-row md:justify-start md:inline-block">
                        <span>&copy; 2022 Priority Dispatch Corp.</span>
                        <span className="mx-2 hidden md:inline-block">|</span>
                        <span>Maintained by Gabriel Tomsic</span>
                    </div>
                    <div>
                        facebook <span className="mx-3">|</span> twitter
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
