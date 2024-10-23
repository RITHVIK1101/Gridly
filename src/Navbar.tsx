import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./components/button";
import GridLogo from "./GridLogo";

interface NavbarProps {
  className?: string; // Optional className prop
}

export default function Navbar({ className = "" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`sticky top-0 z-100 bg-white/80 backdrop-blur-lg shadow-sm ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16"> {/* Reduced height */}
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div style={{ width: '30px', height: '30px' }}> {/* Smaller logo */}
              <GridLogo />
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-6 rounded-md text-sm font-medium transition duration-150 ease-in-out"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-5 rounded-md text-sm font-medium transition duration-150 ease-in-out"
            >
              About
            </a>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              Join Waitlist
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </nav>
  );
}
