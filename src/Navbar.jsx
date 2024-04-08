import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Contact", href: "/contact", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Signup", href: "/", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="data:image/png;base64,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"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Log out</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
