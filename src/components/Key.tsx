import React, { ReactNode } from 'react'

type Props = {
  char?: string;
  children?: ReactNode;
}

const Key = ({ char, children }: Props) => {
  return (
    <button
      className={`bg-slate-300 h-14 flex items-center justify-center rounded uppercase font-bold
        ${char ? 'flex-1 min-w-6 max-w-11' : 'w-14 md:w-16 text-sm'}`}
    >
      {char ? char : children}
    </button>
  )
}

export default Key