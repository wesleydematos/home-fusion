import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarContent,
  Chip,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import homeLogo from "../images/homeLogo.png";
import homeFusion from "../images/homeFusion.png";
import profile from "../images/profile.png";
import navItems from "@/constants/navItems";

export default function CustomNavbar() {
  return (
    <Navbar className="bg-white">
      <NavbarBrand>
        <Image src={homeLogo} alt="Profile" width={24} height={24} />
        <Image src={homeFusion} alt="Profile" width={139} height={24} />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item, index) => (
          <NavbarItem
            key={index}
            isActive={item.selected}
            className="flex gap-2 align-center"
          >
            <Image
              src={item.icon}
              alt={item.name}
              className="w-[20px] h-[20px]"
            />
            <Link href="#" className={`${!item.selected && "text-black"}`}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <div className="justify-end">
        <Chip
          size="lg"
          avatar={<Image src={profile} alt="profile" width={24} height={24} />}
          classNames={{
            base: "shadow-custom-dark bg-white",
            content: "text-black",
          }}
        >
          Muhammad
        </Chip>
      </div>
    </Navbar>
  );
}
