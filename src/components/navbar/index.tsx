import Image from "next/image";

import Logo from "@/assets/Logo.svg";

export const Navbar = () => {
  return (
    <div className="w-full">
      <Image src={Logo} alt="Logo" width={130} height={52} />
    </div>
  );
};
