import React, { ReactNode, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface ComponentItem {
  title: string;
  href: string;
  description: string;
}
//
const components: ComponentItem[] = [
  {
    title: "Sign up to drive & deliver",
    href: "/user/registration",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Signup as a user",
    href: "/user/registration",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

export default function NavigationMenuDemo(): JSX.Element {
  const navigate = useNavigate();

  const handleNavigate = (href: string) => {
    navigate(href);
  };
  return (
    <nav className="w-full bg-gray-250 text-white p-4">
      <div className="p-4 flex justify-center w-full">
        <div className="flex w-full flex-col lg:w-[1200px] md:flex-row justify-between gap-6">
          {components.map((component) => (
            <ListItem
              key={component.title}
              href={component.href}
              title={component.title}
            >
              <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-between">
                {component.description}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className="flex items-center justify-center bg-gray-500 p-3 w-max mx-auto rounded-full size-10"
                  onClick={() => handleNavigate(component.href)}
                >
                  <FaArrowRight className="text-white" />
                </motion.button>
              </div>
            </ListItem>
          ))}
        </div>
      </div>
    </nav>
  );
}

interface MenuItemProps {
  title: string;
  children: ReactNode;
}

interface ListItemProps {
  href: string;
  title: string;
  children: ReactNode;
}

function ListItem({ href, title, children }: ListItemProps): JSX.Element {
  return (
    <div className="block p-6 rounded-md hover:bg-gray-200 bg-gray-100 transition">
      <div className="text-2xl font-bold text-gray-900 font-uber_text">
        {title}
      </div>
      <p className="text-md text-gray-600 font-uber_text ">{children}</p>
    </div>
  );
}
