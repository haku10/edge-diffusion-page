"use client";

import "./scss/common.scss";
import { Footer } from "./component/footer";
import { Service } from "./component/main/service";
import { Contact } from "./component/main/contact";
import { ScrollButtonAbove, ScrollButtonBottom } from "./component/button/scroll-button";
import { Top } from "./component/main/top";
import { Mission } from "./component/main/mission";
import { Company } from "./component/main/company";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";

export default function Main() {
  const [showNewButton, setShowNewButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1500) {
      setShowNewButton(true);
    } else {
      setShowNewButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="bg-main"
      >
        <Top />
        <main className="bg-main">
          <Mission />
          <Service />
          <Company />
          <Contact />
        </main>
        <Footer />
        <div className="spHidden">
          {showNewButton ? <ScrollButtonAbove /> : <ScrollButtonBottom />}
        </div>
      </motion.div>
    </>
  );
}
