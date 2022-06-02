import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

import { loaderVariants, upSmall, downSmall } from "../utils/animations";

import bg1 from "../assets/images/home-bg1.jpg";
import bg2 from "../assets/images/home-bg2.jpg";
import proqa from "../assets/images/ProQa.png";
import aqua from "../assets/images/AQUA.png";

const banners = [
    {
        title: "ProQA v5.1.1.44 Maintenance Release",
        bg: bg1,
        image: proqa,
    },
    {
        title: `AQUA v7.1.1.0 Maintenance Release`,
        bg: bg2,
        image: aqua,
    },
];

const HomeBanner = () => {
    const [onHover, setOnHover] = React.useState(false);
    const [bannerIndex, setBannerIndex] = React.useState(0);
    const [nextBanner, cycleNextBanner] = useCycle("animate");
    React.useEffect(() => {
        let timerId;
        if (!onHover) {
            timerId = setTimeout(() => {
                if (bannerIndex === 0) {
                    setBannerIndex(1);
                    cycleNextBanner();
                } else {
                    setBannerIndex(0);
                    cycleNextBanner();
                }
            }, 10000);
        }
        return () => {
            clearTimeout(timerId);
        };
    }, [bannerIndex, onHover, cycleNextBanner]);
    return (
        <div className="overflow-hidden">
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    variants={loaderVariants}
                    animate={nextBanner}
                    exit="exit"
                    onHoverStart={() => {
                        cycleNextBanner("hover");
                        setOnHover(true);
                    }}
                    onHoverEnd={() => setOnHover(false)}
                    key={bannerIndex}
                    style={{
                        backgroundImage: `url(${banners[bannerIndex].bg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="h-[70vh] w-full flex justify-center items-center z-0"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-11 w-[90vw] md:w-[80vw] lg:w-[60vw]">
                        <motion.div
                            variants={downSmall}
                            initial="hidden"
                            animate="visible"
                            className="flex justify-center bg-white bg-opacity-80 p-8 drop-shadow-xl"
                        >
                            <img src={banners[bannerIndex].image} alt="" />
                        </motion.div>
                        <motion.div
                            variants={upSmall}
                            initial="hidden"
                            animate="visible"
                            className="text-left"
                        >
                            <h1 className="text-white text-4xl drop-shadow-md">
                                {banners[bannerIndex].title}
                            </h1>
                            <button className="bg-positive drop-shadow-lg border-2 border-white rounded-md text-2xl text-white py-2 px-8 mt-6">
                                Learn More
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default HomeBanner;
