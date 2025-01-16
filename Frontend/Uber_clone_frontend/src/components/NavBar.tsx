import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignUpModal from "./modals/SignUpModal";

const NavBar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Handle modal visibility
  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="w-screen h-16 bg-black text-white px-4 md:px-0">
        <div className="lg:w-[1400px] mx-auto flex items-center justify-between h-full">
          {/* Left Side: Logo with Hidden Car Animation */}
          <motion.div
            className="flex items-center gap-2"
            whileHover="hover"
            initial="rest"
          >
            <motion.img
              src="./assets/uber_car.png"
              className="w-12"
              variants={{
                rest: { opacity: 0, x: 0 },
                hover: { opacity: 1, x: 120 },
              }}
              transition={{ type: "spring", stiffness: 150 }}
            />
            <h2 className="text-2xl font-uber cursor-pointer">Uber</h2>
          </motion.div>

          {/* Right Side: Navigation */}
          <ul className="flex items-center gap-x-6 font-uber_text">
            <motion.li
              className="cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Help
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Log in
            </motion.li>
            <motion.li
              className="bg-white font-medium text-black px-4 py-2 rounded-full cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={toggleModal}
            >
              Sign up
            </motion.li>
          </ul>
        </div>
      </nav>

      {/* Modal Section */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-white shadow-lg p-6 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <SignUpModal />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
