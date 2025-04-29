import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Pagination from "./components/Pagination";

const App = () => {
  return (
    <div className="w-screen h-screen font-sans bg-gray-100 text-gray-900  ">
      <Header />

      <div className="flex h-[calc(100%-4rem)]">
        <div className="w-64 bg-white  shadow-md dark:shadow-none border-r border-gray-200 hidden lg:block">
          <Sidebar />
        </div>

        <div className=" flex-1 p-6 overflow-auto ">
          <Outlet />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default App;
