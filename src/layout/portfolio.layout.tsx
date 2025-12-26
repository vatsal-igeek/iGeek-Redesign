import Footer from "@/components/footer";
import PortfolioHeader from "@/components/portfolio/portfolio.header";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const PortfolioLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <PortfolioHeader />
      {children}
      <Footer />
    </>
  );
};

export default PortfolioLayout;
