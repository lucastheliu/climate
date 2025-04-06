import { Icon } from "@iconify/react";
import { useState } from "react";
import navlinks from "./navlinks.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="flex justify-between items-center max-w-5xl h-20 mx-auto px-12">
      <h1 className="text-xl font-bold">LEROSEY TEAM</h1>
      <ul className="hidden md:flex items-center">
        {navlinks.home.map(({ label, href }, index) => (
          <li key={index}>
            <a href={href} className="hover:underline p-4">
              {label}
            </a>
          </li>
        ))}
        <li className="relative group">
          <button className="flex items-center rounded-md rounded-b-none group-hover:bg-zinc-100 p-4">
            Make a Difference
            <Icon
              icon="hugeicons:circle-arrow-up-01"
              width={20}
              className="ml-2 transform group-hover:rotate-180 transition-transform"
            />
          </button>
          <ul className="absolute left-0 right-0 bg-white rounded-md rounded-t-none border border-zinc-200 hidden group-hover:block">
            {navlinks.media.map(({ label, href }, index) => (
              <li key={index} className="border-b border-zinc-200">
                <a href={href} className="block hover:underline p-4">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <button
        onClick={toggleMenu}
        className="block md:hidden hover:cursor-pointer"
      >
        <Icon icon="hugeicons:menu-01" width={24} />
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-full max-w-xs bg-white border-r border-zinc-200 p-4 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold p-4">LEROSEY TEAM</h1>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:cursor-pointer p-4"
          >
            <Icon icon="hugeicons:cancel-01" width={24} />
          </button>
        </div>
        <ul>
          {navlinks.home.map(({ label, href }, index) => (
            <li key={index} className="border-b border-zinc-200">
              <a href={href} className="block hover:underline p-4">
                {label}
              </a>
            </li>
          ))}
          <li>
            <h2 className="font-bold block p-4">Make a Difference</h2>
            <ul className="px-4">
              {navlinks.media.map(({ label, href }, index) => (
                <li key={index} className="border-b border-zinc-200">
                  <a href={href} className="block hover:underline p-4">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
