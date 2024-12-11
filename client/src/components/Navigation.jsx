import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useContext(GlobalContext);
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-lg font-bold">
          <a href="/" className="hover:text-gray-300">
            MyApp
          </a>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex space-x-8 items-center">
          <div className="space-x-6">
            {isSignedIn && <span className="font-semibold">User</span>}
            {isSignedIn ? (
              <a href="/profile" className="hover:text-gray-300">
                Profile
              </a>
            ) : (
              <a href="/login" className="hover:text-gray-300">
                Login
              </a>
            )}
            {isSignedIn ? (
              <a href="/settings" className="hover:text-gray-300">
                Settings
              </a>
            ) : (
              <a href="/register" className="hover:text-gray-300">
                Register
              </a>
            )}
          </div>
          {isSignedIn && (
            <div className="space-x-6">
              <span className="font-semibold">Admin</span>
              <a href="/admin" className="hover:text-gray-300">
                Dashboard
              </a>
              <a href="/users" className="hover:text-gray-300">
                Manage Users
              </a>
            </div>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 text-gray-200">
          <div className="p-4 border-b border-gray-600">
            {isSignedIn && <span className="font-semibold">User</span>}
            <div className="space-y-2 mt-2">
              {isSignedIn ? (
                <a href="/profile" className="block hover:text-white">
                  Profile
                </a>
              ) : (
                <a href="/login" className="block hover:text-white">
                  Login
                </a>
              )}
              {isSignedIn ? (
                <a href="/settings" className="block hover:text-white">
                  Settings
                </a>
              ) : (
                <a href="/register" className="block hover:text-white">
                  Register
                </a>
              )}
            </div>
          </div>
          {isSignedIn && (
            <div className="p-4">
              <span className="font-semibold">Admin</span>
              <div className="space-y-2 mt-2">
                <a href="/admin" className="block hover:text-white">
                  Dashboard
                </a>
                <a href="/users" className="block hover:text-white">
                  Manage Users
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
