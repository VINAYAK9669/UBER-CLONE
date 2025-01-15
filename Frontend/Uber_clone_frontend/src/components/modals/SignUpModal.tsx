import React, { ReactNode, useState } from "react";

interface ComponentItem {
  title: string;
  href: string;
  description: string;
}

const components: ComponentItem[] = [
  {
    title: "Sign up to drive & deliver",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Signup as a user",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

export default function NavigationMenuDemo(): JSX.Element {
  return (
    <nav className="w-full bg-gray-250 text-white p-4">
      <div className="p-4 flex justify-center w-full">
        <div className="flex w-full lg:w-[1200px] justify-between">
          {components.map((component) => (
            <ListItem
              key={component.title}
              href={component.href}
              title={component.title}
            >
              {component.description}
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
    <a
      href={href}
      className="block p-6 rounded-md hover:bg-gray-100 transition"
    >
      <div className="text-2xl font-bold text-gray-900 font-uber_text">
        {title}
      </div>
      <p className="text-md text-gray-600 font-uber_text ">{children}</p>
    </a>
  );
}
