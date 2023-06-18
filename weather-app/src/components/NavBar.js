import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  MagnifyingGlassIcon,
  GlobeEuropeAfricaIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center m-5 ">
      <h1 className="text-blue-500 font-bold text-xl">Weather °C</h1>
      <div>
        <label
          htmlFor="location"
          className="relative text-gray-400 focus-within:text-gray-600 block"
        >
          <MagnifyingGlassIcon className="pointer-events-none left-1 w-4 h-4 absolute top-1/2 transform -translate-y-1/2" />

          <input
            type="text"
            name="location"
            id="location"
            placeholder="Search Locations..."
            className="form-input w-full px-7 focus:outline-none rounded-xl"
          />
        </label>
      </div>
      <ul className="flex items-center ">
        <li className="px-4 flex items-center">
          <GlobeEuropeAfricaIcon className="-mr-1 h-8 w-8 text-blue-500 font-bold" />
          <p className="text-blue-500 px-2">EN</p>
          <p>|</p>
        </li>
        <li>
          <Menu as="div" className="relative inline-block text-center">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2  text-m    text-gray-900 ">
                °F
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 z-10 mt-2  w-10 origin-top-right rounded-md focus:outline-none">
                <div className="py-1">
                  <Menu.Item as="div">°C</Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
