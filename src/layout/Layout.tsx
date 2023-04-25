import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center px-6 py-28 bg-light">{children}</div>
    </>
  );
};

export default Layout;
