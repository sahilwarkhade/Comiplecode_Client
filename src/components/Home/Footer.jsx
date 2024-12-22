import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">CompileCode</h3>
            <p className="text-sm">
              © {new Date().getFullYear()} CompileCode. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              {/* <li className="mb-2">
                <Link to={"/aboutus"} className="hover:text-white">
                  About Us
                </Link>
              </li> */}
              <li className="mb-2">
                <a href="#features" className="hover:text-white">
                  Features
                </a>
              </li>
              {/* <li className="mb-2">
                <Link to={"/contactus"} className="hover:text-white">
                  Contact Us
                </Link>
              </li> */}
              {/* <li>
                <a href="#faq" className="hover:text-white">
                  FAQ
                </a>
              </li> */}
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sahil-warkhade-9baa05256/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.33 7.57a2.05 2.05 0 1 1 0-4.1 2.05 2.05 0 0 1 0 4.1zM20.45 20.45h-3.53v-5.59c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.69H9.4V9h3.39v1.56h.05c.47-.89 1.61-1.84 3.31-1.84 3.54 0 4.2 2.33 4.2 5.36v6.37z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/sahilwarkhade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.123-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.042.138 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.649.24 2.873.117 3.176.768.84 1.236 1.911 1.236 3.221 0 4.61-2.807 5.621-5.478 5.92.429.37.814 1.102.814 2.222v3.293c0 .319.218.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/sahil_warkhade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="LeetCode"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.986 1.933c-1.348 0-2.645.465-3.68 1.326l-.444.368c-.3.248-.346.686-.098.986.248.3.686.346.986.098l.445-.368c.777-.642 1.741-.989 2.79-.989 2.44 0 4.427 1.987 4.427 4.427s-1.987 4.427-4.427 4.427h-5.348c-.441 0-.8.359-.8.8v.008c0 .442.359.8.8.8h5.348c3.308 0 6.027-2.719 6.027-6.035s-2.719-6.036-6.027-6.036zm-7.394 5.135c-.223-.3-.656-.365-.956-.141l-3.12 2.387c-.063.05-.12.105-.173.166-2.086 2.423-2.086 6.042 0 8.465.052.062.11.117.173.166l3.12 2.387c.3.223.732.158.956-.141.224-.3.159-.732-.141-.956l-3.121-2.387c-1.61-1.495-1.61-3.96 0-5.455l3.121-2.387c.3-.224.365-.656.141-.956zm7.394 7.937h-5.348c-.441 0-.8.359-.8.8v.008c0 .442.359.8.8.8h5.348c.778 0 1.519.305 2.071.857s.857 1.293.857 2.071c0 1.655-1.348 3.004-3.004 3.004-1.049 0-2.013-.347-2.79-.989l-.445-.368c-.3-.248-.738-.202-.986.098-.248.3-.202.738.098.986l.444.368c1.035.861 2.333 1.326 3.68 1.326 2.877 0 5.204-2.327 5.204-5.204 0-1.39-.541-2.696-1.525-3.68s-2.29-1.524-3.679-1.524z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
