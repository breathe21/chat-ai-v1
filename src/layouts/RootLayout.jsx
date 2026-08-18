import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const RootLayout = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className="bg-primary h-screen flex">
      <SideBar openSideBar={openSideBar} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          setOpenSideBar={setOpenSideBar}
          openSideBar={openSideBar}
        />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;