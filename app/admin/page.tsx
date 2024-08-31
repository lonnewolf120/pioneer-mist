import { Settings } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center h-full h-screen">
      <Settings className="w-10 h-10 animate-spin duration-1000" />
      <h1>Select an option to continue</h1>
    </div>
  );
};

export default page;
