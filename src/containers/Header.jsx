import { FeaturedAnime, Navbar } from "../components";
import img1 from "../assets/img.jfif";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Header({
  height,
  children,
  setOpen,
  anime,
  similarAnime,
}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div
      className={`w-full h-[${height}] px-8 md:px-20 lg:px-24 py-12`}
      style={height === "fit" ? {} : { y }}
    >
      <Navbar setOpen={setOpen} />
      <FeaturedAnime anime={anime} similarAnime={similarAnime} />
      <img
        src={img1}
        className="w-full h-full object-cover object-center absolute top-0 left-0 -z-10"
        alt="header bg image"
      />
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[#1e1e1e]/60" />
      {children}
    </motion.div>
  );
}
