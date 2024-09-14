"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarContent,
  Chip,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Image from "next/image";
import homeLogo from "../images/homeLogo.png";
import homeFusion from "../images/homeFusion.png";
import profile from "../images/profile.png";
import navItems from "@/constants/navItems";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar
      maxWidth="full"
      classNames={{
        base: "bg-white",
      }}
    >
      <div className="flex gap-8">
        <NavbarBrand className="flex sm:hidden lg:flex">
          <Image src={homeLogo} alt="Profile" width={24} height={24} />
          <Image src={homeFusion} alt="Profile" width={139} height={24} />
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navItems.map((item) => {
            return item.name === "Coming soon" ? (
              <Dropdown key={item.name}>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className="p-0 bg-transparent data-[hover=true]:bg-transparent text-[14px] font-medium leading-[16.71px]"
                      radius="sm"
                      variant="light"
                      endContent={
                        isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />
                      }
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <Image
                        src={item.icon}
                        alt={item.name}
                        className="w-[22px] h-[22px]"
                      />{" "}
                      {item.name}
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  aria-label="Coming soon features"
                  className="w-[340px]"
                  itemClasses={{
                    base: "gap-4",
                    wrapper: "text-[16px] font-normal leading-[19.09px]",
                  }}
                >
                  <DropdownItem key="DealOffMarket">
                    Deal Off Market
                  </DropdownItem>
                  <DropdownItem key="Leilao">Leilão</DropdownItem>
                  <DropdownItem key="lender">Encontre um lender</DropdownItem>
                  <DropdownItem key="corretor">
                    Encontre um corretor
                  </DropdownItem>
                  <DropdownItem key="Treinamentos">Treinamentos</DropdownItem>
                  <DropdownItem key="list">
                    Liste sua casa com a gente
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <NavbarItem
                key={item.name}
                isActive={item.selected}
                className="flex gap-1 align-center cursor-pointer"
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  className="w-[20px] h-[20px]"
                />
                <p className={`${item.selected && "text-txt-blue"}`}>
                  {item.name}
                </p>
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </div>

      <NavbarContent justify="end">
        <Chip
          variant="shadow"
          size="lg"
          avatar={<Image src={profile} alt="profile" width={24} height={24} />}
          classNames={{
            base: "shadow-custom-dark bg-white",
            content: "text-black",
          }}
        >
          Muhammad
        </Chip>
      </NavbarContent>
    </Navbar>
  );
}
