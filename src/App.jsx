import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loader from "./containers/Loader";
import { Home, Anime } from "./pages";
import { BottomNav } from "./containers";
export default function App() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <>
      <AnimatePresence mode="wait" initial="false">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Loader />} />
          <Route
            path="/anime"
            element={<Home open={open} setOpen={setOpen} />}
          />
          <Route
            path="/anime/:id"
            element={<Anime open={open} setOpen={setOpen} />}
          />
        </Routes>
      </AnimatePresence>
      <BottomNav open={open} />
    </>
  );
}
