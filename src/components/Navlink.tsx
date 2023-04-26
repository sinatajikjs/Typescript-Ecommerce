import { NavLink } from "react-router-dom";
import CartBadge from "./CartBadge";

interface IProps {
  link: {
    to: string;
    label: string;
    badge?: boolean;
  };
}

const Navlink = ({ link }: IProps) => {
  return (
    <NavLink
      className={(navData) =>
        `${
          navData.isActive && "bg-primary text-white"
        } text-gray-400 py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition relative`
      }
      to={link.to}
    >
      {link.label}
      {link.badge && <CartBadge />}
    </NavLink>
  );
};

export default Navlink;
