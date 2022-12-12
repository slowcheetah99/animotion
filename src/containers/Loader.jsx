import { images } from "../assets/assets";
import {
  slideIn,
  staggerChildren,
  pageTransition,
} from "../constants/framerVariants";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
export default function Loader() {
  // const [stop, setStop] = useState(false);
  const navigate = useNavigate();
  function handleLoad() {
    const timer = setTimeout(() => {
      navigate("/anime");
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="h-screen overflow-hidden"
    >
      <motion.div
        className="bg-[#1e1e1e]"
        variants={staggerChildren}
        onAnimationComplete={handleLoad}
      >
        <motion.img
          src={images[3]}
          alt="img1"
          className="block md:absolute md:top-[20%] md:left-[30%] w-full md:w-[500px] h-[25vh] md:h-[45%] object-cover object-center rounded-md z-50"
          variants={slideIn}
        />
        <motion.img
          src={images[2]}
          alt="img2"
          className="block md:absolute md:top-[35%] md:left-[20%] w-full md:w-36 h-[25vh] md:h-56 object-cover object-center rounded-md"
          variants={slideIn}
        />

        <motion.img
          src={images[1]}
          alt="img3"
          className="block md:absolute md:bottom-[20%] md:right-[22.5%] w-full md:w-32 h-[25vh] md:h-42 object-cover object-center rounded-md"
          variants={slideIn}
        />

        <motion.img
          src={images[0]}
          alt="img4"
          className="block md:absolute md:top-[7.5%] md:right-[25%] w-full md:w-36 h-[25vh] md:h-56 object-cover object-center rounded-md"
          variants={slideIn}
        />
      </motion.div>
    </motion.div>
  );
}
