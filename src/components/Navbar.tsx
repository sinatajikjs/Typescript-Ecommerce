import { NavLink } from "react-router-dom";

type linkType = {
  label: string;
  to: string;
};

const links: linkType[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Cart",
    to: "/cart",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed bg-white w-full top-0 flex justify-center gap-5 text-2xl border-b py-4">
      {links.map((link, index) => (
        <NavLink
          className={(navData) =>
            `${
              navData.isActive && "bg-primary text-white"
            } text-gray-400 py-2 px-4 rounded-lg`
          }
          key={index}
          to={link.to}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
