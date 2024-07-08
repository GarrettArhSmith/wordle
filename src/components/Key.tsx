import React, { ReactNode } from "react";

type Props = {
  char?: string;
  match?: string;
  children?: ReactNode;
  onClick?: () => void;
};

const Key = ({ char, children, onClick, match = "" }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`h-14 flex items-center justify-center rounded uppercase font-bold
        ${char ? "flex-1 min-w-6 max-w-11" : "w-14 md:w-16 text-sm"}
        ${match === "" && "bg-gray-300"}
        ${match === "none" && "bg-gray-500 text-white"}
        ${match === "char" && "bg-[#c9b458] text-white"}
        ${match === "full" && "bg-[#6aaa64] text-white"}

        hover:brightness-90 active:brightness-75`}
    >
      {char ? char : children}
    </button>
  );
};

export default Key;
