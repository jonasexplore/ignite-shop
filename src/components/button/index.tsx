import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
};

export const Button = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className="bg-green-600 hover:bg-green-500 px-8 py-5 rounded-lg text-white font-bold text-lg"
    >
      {children}
    </button>
  );
};
