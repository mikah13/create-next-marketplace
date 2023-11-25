import Image from "next/image";
import React from "react";
import CustomLink from "./ui/link";
import { NAV_LINKS } from "@/lib/constant";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-50 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div>
              <Image src="/logo.png" height={50} width={50} alt="Page logo" />
            </div>

            <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
              cupiditate quae nam molestias.
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Facebook</span>

                  <Facebook />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Instagram</span>

                  <Instagram />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Twitter</span>

                  <Twitter />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">GitHub</span>
                  <Github />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">About</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <CustomLink>About us</CustomLink>
                </li>
                <li>
                  <CustomLink>Career</CustomLink>
                </li>
                <li>
                  <CustomLink>Safety</CustomLink>
                </li>
                <li>
                  <CustomLink>Privacy</CustomLink>
                </li>
                <li>
                  <CustomLink>Terms</CustomLink>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Categories
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                    <CustomLink>{link.label}</CustomLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Resources
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <CustomLink>Contact</CustomLink>
                </li>
                <li>
                  <CustomLink> FAQs</CustomLink>
                </li>
                <li>
                  <CustomLink> Live Chat</CustomLink>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <CustomLink>Accessibility</CustomLink>
                </li>
                <li>
                  <CustomLink> Refund Policy</CustomLink>
                </li>
                <li>
                  <CustomLink> Returns Policy</CustomLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Marketplace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
