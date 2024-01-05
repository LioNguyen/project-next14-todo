import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Todo - Sign up",
};

function page() {
  return (
    <div className="flex items-center justify-center h-full">
      <SignUp />
    </div>
  );
}

export default page;
