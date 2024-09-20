import React, { useEffect, useRef, useState } from "react";
import styles from "./Hello.module.css";
import gsap from "gsap";

import { motion } from "framer-motion";
import { setHello, setBoot,setAudio } from "../../redux/slices/bootSlice";
import { useDispatch, useSelector } from "react-redux";

const Hello = () => {
  const elementRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [view, setView] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const tl = gsap.timeline();

    const interval = setTimeout(() => {
      setView(true);
    }, 5000);

    if (startAnimation) {
      tl.to(elementRef.current, {
        y: "-100%",
        duration: 2,
        ease: "power2.inOut",
      });
    }

    return () => {
      tl.kill();
      clearInterval(interval);
    };
  }, [startAnimation]);

  const handleGetStarted = () => {
    setStartAnimation(true);
    dispatch(setHello(false));
    dispatch(setBoot(true));
    dispatch(setAudio(true));
  };

  return (
    <div className={styles.container} ref={elementRef}>
      <div className={styles.hello__div}>
        <svg className={styles.hello__svg} viewBox="0 0 1230.94 414.57">
          <path
            d="M-293.58-104.62S-103.61-205.49-60-366.25c9.13-32.45,9-58.31,0-74-10.72-18.82-49.69-33.21-75.55,31.94-27.82,70.11-52.22,377.24-44.11,322.48s34-176.24,99.89-183.19c37.66-4,49.55,23.58,52.83,47.92a117.06,117.06,0,0,1-3,45.32c-7.17,27.28-20.47,97.67,33.51,96.86,66.93-1,131.91-53.89,159.55-84.49,31.1-36.17,31.1-70.64,19.27-90.25-16.74-29.92-69.47-33-92.79,16.73C62.78-179.86,98.7-93.8,159-81.63S302.7-99.55,393.3-269.92c29.86-58.16,52.85-114.71,46.14-150.08-7.44-39.21-59.74-54.5-92.87-8.7-47,65-61.78,266.62-34.74,308.53S416.62-58,481.52-130.31s133.2-188.56,146.54-256.23c14-71.15-56.94-94.64-88.4-47.32C500.53-375,467.58-229.49,503.3-127a73.73,73.73,0,0,0,23.43,33.67c25.49,20.23,55.1,16,77.46,6.32a111.25,111.25,0,0,0,30.44-19.87c37.73-34.23,29-36.71,64.58-127.53C724-284.3,785-298.63,821-259.13a71,71,0,0,1,13.69,22.56c17.68,46,6.81,80-6.81,107.89-12,24.62-34.56,42.72-61.45,47.91-23.06,4.45-48.37-.35-66.48-24.27a78.88,78.88,0,0,1-12.66-25.8c-14.75-51,4.14-88.76,11-101.41,6.18-11.39,37.26-69.61,103.42-42.24,55.71,23.05,100.66-23.31,100.66-23.31"
            transform="translate(311.08 476.02)"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "35px",
            }}
          />
        </svg>
      </div>
      {view && (
        <motion.button
          className="text-white absolute bottom-[20%] border-2 rounded-full px-6 py-3 border-slate-100  bg-white"
          whileHover={{
            scale: 1.1, 
            backgroundColor: "#ffffff", 
            color: "#000000", 
            boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)",
            fontWeight: "600", 
            transition: {
              duration: 0.3, 
              ease: "easeInOut", 
            },
          }}
          whileTap={{
            scale: 0.95, 
            backgroundColor: "#e2e8f0", 
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)", 
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
          initial={{
            scale: 1, 
            backgroundColor: "black", 
            color: "#ffffff", 
          }}
          onClick={handleGetStarted}
        >
          Get Started
        </motion.button>
      )}
    </div>
  );
};

export default Hello;
