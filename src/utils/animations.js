export const nextPage = {
    hidden: {
        opacity: 0,
        x: "100vw",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            delay: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.5,
            duration: 0.5,
        },
    },
    exit: {
        x: "-100vw",
        opacity: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.5,
        },
    },
};

export const loaderVariants = {
    animate: {
        x: [1000, 0],
        transition: {
            x: {
                duration: 0.5,
                ease: "easeInOut",
                when: "beforeChildren",
                staggerChildren: 0.5,
            },
        },
    },
    hover: {
        x: 0,
        transition: {
            x: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    },
    exit: {
        x: "-100vw",
        transition: {
            ease: "easeInOut",
            duration: 0.3,
        },
    },
};

export const upSmall = {
    hidden: {
        opacity: 0,
        y: "50px",
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.5,
        },
    },
};
export const downSmall = {
    hidden: {
        opacity: 0,
        y: "-50px",
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.5,
        },
    },
};

export const showDelay = {
    hidden: {
        x: "-100vw",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            mass: 0.3,
            damping: 8,
            ease: "easeInOut",
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
    exit: {
        x: "100vw",
        opacity: 0,
    },
};

export const scaleOne = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255, 255, 255)",
        boxShadow: "0px 0px 8px rgb(255, 255, 255)",
        transition: {
            duration: 0.5,
            repeat: Infinity,
        },
    },
};

export const drawerVisible = {
    hidden: {
        x: 250,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
    exit: {
        x: -250,
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

export const openHide = {
    hidden: {
        x: 0,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            mass: 0.3,
            damping: 8,
            ease: "easeInOut",
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
    exit: {
        x: 0,
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};
