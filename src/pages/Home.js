import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "../components/Container";
import HomeBanner from "../components/HomeBanner";

import { data } from "../data/data";
import { showDelay, scaleOne } from "../utils/animations";

const Home = () => {
    const [title, setTitle] = React.useState(data[0].title);
    const [options, setOptions] = React.useState(data[0].options);
    const tabsHandler = (event, index) => {
        event.preventDefault();
        setTitle(data[index].title);
        setOptions(data[index].options);
    };
    return (
        <div className="bg-light-gray">
            <div className="h-[70vh] overflow-hidden">
                <HomeBanner />
            </div>
            <div className="my-[100px]">
                <Container>
                    <div className="grid grid-cols-5 mx-3 md:mx-0 gap-1 md:gap-2">
                        {data?.map((item, index) => (
                            <button
                                onClick={(event) => tabsHandler(event, index)}
                                key={index}
                                className={
                                    item.title === title
                                        ? `text-center py-3 bg-positive text-white hover:bg-positive hover:text-white duration-300`
                                        : `text-center py-3 bg-dark text-light-gray hover:bg-positive hover:text-white duration-300`
                                }
                            >
                                <i
                                    className={`${item.icon} mr-0 inline-block md:mr-2 md:hidden lg:inline-block`}
                                ></i>
                                <span className="hidden md:inline-block">
                                    {item.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </Container>
            </div>
            <div className="overflow-hidden">
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        variants={showDelay}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        key={title}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-11 md:gap-3 lg:gap-5 px-3 md:px-3 lg:px-5"
                    >
                        {options?.length > 0 &&
                            options?.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-light flex flex-col rounded-md overflow-hidden cursor-pointer"
                                >
                                    <div
                                        className="min-h-[250px] h-full flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                        }}
                                    ></div>
                                    <div className="py-3 flex justify-center bg-dark text-light">
                                        {item.title}
                                    </div>
                                </div>
                            ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="mt-[100px] bg-dark text-white flex flex-col px-5 md:px-8 md:grid md:grid-cols-2 md:gap-8">
                <div className="my-[100px] flex flex-col xl:grid xl:grid-cols-2">
                    <div className="flex justify-center items-center">
                        <img src="/images/myth-busters.png" alt="" />
                    </div>
                    <div>
                        <h3 className="text-3xl text-center mt-8 xl:mt-0 xl:text-left">
                            MY BUSTERS
                        </h3>
                        <p className=" text-justify md:text-left">
                            Maximize the full power of the Medical, Fire, and
                            Police Protocols to the benefit of your
                            communication center by separating fact from
                            fiction.
                        </p>
                    </div>
                </div>
                <div className="my-[100px] flex flex-col xl:grid xl:grid-cols-2">
                    <div className="order-2 xl:order-1">
                        <h3 className="text-3xl text-center mt-8 xl:mt-0 xl:text-left">
                            SOFTWARE SUPPORT
                        </h3>
                        <p className=" text-justify md:text-left">
                            Representatives are available Monday–Friday from
                            6:30 a.m. to 5 p.m. Mountain Time (MT). For
                            emergencies, software support is available 24/7 by
                            phone. Emails received outside these hours will be
                            responded to on the next business day.
                        </p>
                    </div>
                    <div className="order-1 xl-order-2 flex justify-center items-center">
                        <img src="/images/software-support.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
