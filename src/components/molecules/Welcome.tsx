import React from "react";
import { CircularPhoto } from "../atoms/CircularPhoto";

export function Welcome() {
  return (
    <>
      <header
        className="min-w-full min-h-[40vh] bg-header grayscale-[80%] 
                    bg-cover bg-no-repeat bg-center"
      />
      <CircularPhoto className="mt-[-130px]" />
    </>
  );
}
