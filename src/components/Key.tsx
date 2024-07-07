import React, { ReactNode } from "react";

type Props = {
  char?: string;
  used?: boolean;
  children?: ReactNode;
  onClick?: () => void;
};

const Key = ({ char, children, onClick, used }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`h-14 flex items-center justify-center rounded uppercase font-bold
        ${char ? "flex-1 min-w-6 max-w-11" : "w-14 md:w-16 text-sm"}
        ${used ? "bg-gray-500 text-white" : "bg-gray-300"}
        hover:brightness-90 active:brightness-75`}
    >
      {char ? char : children}
    </button>
  );
};

export default Key;
