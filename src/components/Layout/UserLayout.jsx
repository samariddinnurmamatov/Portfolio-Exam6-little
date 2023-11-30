// import { Fragment } from "react";
// import { Outlet } from "react-router-dom";

import Header from "./Header";
import './Layout.css'
import AsiedBar from "./AsiedBar";

const UserLayout = () => {
  return (
    <div className="bacground">
      <div className="All">
        <AsiedBar />
        <br />
        <br />
        <br />
        <Header />
      </div>
    </div>
  );
};

export default UserLayout;
