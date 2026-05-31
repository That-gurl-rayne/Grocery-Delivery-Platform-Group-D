import React from "react";
import Navbar from "./Navbar";

function PageLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        {children}
      </div>
    </div>
  );
}

export default PageLayout;