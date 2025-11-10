import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about-us" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center space-x-2">
                  <img
                    src="/LOGO.png"
                    alt="One Auto Salvage"
                    className="h-10 w-auto sm:h-12 md:h-14 lg:h-16"
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/solutions/channel-partner-engagement"
                  className="hover:text-blue-400"
                >
                  Channel Partner Engagement
                </Link>
              </li>
              <li>
                <Link to="/solutions/automotive" className="hover:text-blue-400">
                  Automotive
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/business-events"
                  className="hover:text-blue-400"
                >
                  Business Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information - Moved to Right Side */}
          <div className="text-right">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="mailto:info@oneauto-salvage.com" className="hover:text-blue-400">
                  info@oneauto-salvage.com
                </a>
              </li>
              <li>
                <address className="not-italic hover:text-blue-400">
                  +1 (307) 218-7242
                </address>
              </li>
              <li>
                <address className="not-italic hover:text-blue-400">
                  1309 Coffeen Ave, Ste 1200, Sheridan, WY 82801
                </address>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} One Auto Salvage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
