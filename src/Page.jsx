import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Page = () => {
  const username = localStorage.getItem("name");
  return (
    <div className="d-flex gap-4 justify-content-center align-items-center vh-100 vw-100">
      <img
        src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-500.gif"
        alt="Welcome"
        className="w-25"
      />
      <h2 className="font-monospace text-danger-emphasis">
        {username ? username : "Guest"} .....
      </h2>
    </div>
  );
};

export default Page;
