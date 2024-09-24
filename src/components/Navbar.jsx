import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false); // Start hidden

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.05) {
        setVisible(false); // Hide navbar when at the top
      } else {
        setVisible(direction < 0); // Show on scroll up, hide on scroll down
      }
    }
  });

  const navItems = [
    { name: "Home", link: "/", icon: <IconHome className="h-4 w-4" /> },
    { name: "About", link: "/", icon: <IconUser className="h-4 w-4" /> },
    { name: "Contact", link: "/", icon: <IconMessage className="h-4 w-4" /> },
    { name: "Projects", link: "/projects", icon: <IconMessage className="h-4 w-4" /> },
  ];

  return (
    <AnimatePresence>
      {visible && ( // Only render when visible
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }} // Animate out
          transition={{ duration: 0.2 }}
          className="fixed top-10 inset-x-0 mx-auto max-w-fit flex items-center justify-center space-x-4 pr-8 pl-8 py-4 bg-black dark:bg-black border rounded-full z-[5000]"
        >
          {navItems.map((item, idx) => (
            <Link 
              key={idx} 
              to={item.link} 
              className="flex items-center space-x-1 text-white dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300"
              aria-label={item.name} // Accessibility improvement
            >
              {item.icon}
              <span className="hidden sm:block text-sm">{item.name}</span>
            </Link>
          ))}
          {/* Login button hidden */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
