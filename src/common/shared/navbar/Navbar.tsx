import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { appRoutes } from "@/common/routing";

interface NavbarProps {
  routes: Record<string, string>;
}

export const Navbar = ({ routes }: NavbarProps) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Optionally close the menu when clicking any link
  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate(appRoutes.home);
    }
  }, [navigate]);

  return (
    <nav className="relative flex items-center justify-between bg-gray-800 text-white p-4">
      {/* Logo / Brand */}
      <Link to={appRoutes.home}>
        <img
          src="/src/assets/logo.jpg"
          alt="logo"
          className="w-10 h-10 rounded-full"
        />
      </Link>

      {/* Desktop Nav (hidden on mobile) */}
      <ul className="hidden md:flex md:gap-4">
        {Object.entries(routes).map(([routeName, path]) => (
          <li key={routeName}>
            <NavLink
              to={path}
              className={`
                px-3 py-1 rounded-md
                hover:bg-gray-700 transition
                ${routeName === "comments" ? "border-2 border-white" : ""}
              `}
            >
              {routeName.charAt(0).toUpperCase() + routeName.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Hamburger icon (mobile only) */}
      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none active:scale-95"
        aria-label="Open menu"
      >
        <IconMenu2 size={28} />
      </button>

      <div
        className={`
          md:hidden fixed inset-0 bg-gray-800 z-50 flex flex-col
          transition-all duration-300 ease-linear
          transform
          ${
            menuOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "translate-y-full opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Close icon at top-right */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} aria-label="Close menu">
            <IconX size={32} />
          </button>
        </div>

        {/* Navigation links centered in the remaining space */}
        <ul className="flex flex-col items-center justify-center flex-1 gap-6">
          {Object.entries(routes).map(([routeName, path]) => (
            <li key={routeName}>
              <NavLink
                to={path}
                onClick={handleNavLinkClick}
                className={`
                  text-2xl px-4 py-2 rounded-md
                  hover:bg-gray-700 transition
                  ${routeName === "comments" ? "border-2 border-white" : ""}
                `}
              >
                {routeName.charAt(0).toUpperCase() + routeName.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
