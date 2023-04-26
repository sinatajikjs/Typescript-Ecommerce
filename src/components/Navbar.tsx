import links from "@/data/navLinks.json";
import Navlink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="fixed bg-white w-screen top-0 flex justify-center gap-5 text-2xl border-b py-4">
      {links.map((link, index) => (
        <Navlink link={link} key={index} />
      ))}
    </nav>
  );
};

export default Navbar;
