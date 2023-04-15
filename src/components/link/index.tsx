import Link from "next/link";

type Props = {
  children: React.ReactNode;
  url: string;
};

export const ToPage = ({ children, url }: Props) => {
  return (
    <Link
      href={url}
      className="text-green-600 hover:text-green-500 text-xl font-bold"
    >
      {children}
    </Link>
  );
};
