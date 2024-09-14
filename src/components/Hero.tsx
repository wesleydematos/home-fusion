/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import houseSearching from "../images/houseSearching.png";
import { IoSearch } from "react-icons/io5";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

const commonStyles = {
  divider: "hidden lg:flex h-[50px] mx-3 bg-txt-grey w-[0.5px]",
  steps: "text-[10px] font-bold leading-[11.93px] text-txt-blue",
  filter: "text-[14px] font-bold leading-[16.71px] text-black",
  select: "text-[16px] font-light leading-[19.09px] text-[#71717A]",
};

export default function Hero() {
  const [strategy, setStrategy] = useState("Escolha uma estratégia");
  const [market, setMarket] = useState("Escolha um mercado");
  const [priceRange, setPriceRange] = useState("Selecione um preço");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [tempPriceRange, setTempPriceRange] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleStrategyChange = (key: any) => {
    const strategies = {
      fixandflip: "🔨 Fix & Flip",
      seller: "💵 Seller financing",
      casa: "🏠 Casa de Aluguel",
      house: "🚪 House Hack",
      multifamily: "👥 Multifamily",
      construction: "⭐ New construction",
    };
    setStrategy(strategies[key] || "Escolha uma estratégia");
  };

  const handleMarketChange = (key: any) => {
    setMarket(key + " - Flórida");
  };

  const handlePriceChange = () => {
    setTempPriceRange(
      (minPrice ? `$${minPrice}K` : "") +
        (minPrice && maxPrice ? " - " : "") +
        (maxPrice ? `$${maxPrice}K` : "Selecione um preço")
    );
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
      setPriceRange(`$${minPrice}K - $${maxPrice}K`);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [tempPriceRange]);

  return (
    <div className="min-h-[500px] bg-custom-gradient flex flex-col sm:flex-row justify-between items-center px-[5vw]">
      <div className="w-1/2">
        <p className="font-sans xl:text-[64px] font-bold xl:leading-[70.4px] text-left">
          Encontre as melhores
          <span className="text-txt-blue"> oportunidades</span> de investimento
          hoje!
        </p>
        <div className="lg:flex items-center rounded-[16px] mt-5 min-h-[80px] gap-3 bg-white p-5">
          <Dropdown>
            <DropdownTrigger>
              <div>
                <p className={commonStyles.steps}>Passo 1</p>
                <p className={commonStyles.filter}>Estratégia</p>
                <p>{strategy}</p>
              </div>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Step 1 features"
              className="w-[140px]"
              itemClasses={{
                base: "gap-4",
                wrapper: "text-[16px] font-normal leading-[19.09px]",
              }}
              onAction={(key) => handleStrategyChange(key)}
            >
              <DropdownItem key="fixandflip">🔨 Fix & Flip</DropdownItem>
              <DropdownItem key="seller">💵 Seller financing</DropdownItem>
              <DropdownItem key="casa">🏠 Casa de Aluguel</DropdownItem>
              <DropdownItem key="house">🚪 House Hack</DropdownItem>
              <DropdownItem key="multifamily">👥 Multifamily</DropdownItem>
              <DropdownItem key="construction">
                ⭐ New construction
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <div className={commonStyles.divider} />
          <Dropdown>
            <DropdownTrigger>
              <div>
                <p className={commonStyles.steps}>Passo 2</p>
                <p className={commonStyles.filter}>Mercado</p>
                <p>{market}</p>
              </div>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Step 2 markets"
              className="w-[140px]"
              itemClasses={{
                base: "gap-4",
                wrapper: "text-[16px] font-normal leading-[19.09px]",
              }}
              onAction={(key) => handleMarketChange(key)}
            >
              <DropdownItem key="Orlando" description="Flórida">
                Orlando
              </DropdownItem>
              <DropdownItem key="Jacksonville" description="Flórida">
                Jacksonville
              </DropdownItem>
              <DropdownItem key="Tampa" description="Flórida">
                Tampa
              </DropdownItem>
              <DropdownItem key="Tallahassee" description="Flórida">
                Tallahassee
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <div className={commonStyles.divider} />
          <div className="relative" ref={dropdownRef}>
            <div
              className="cursor-pointer p-2 rounded-md"
              onClick={toggleDropdown}
            >
              <p className={commonStyles.steps}>Passo 3</p>
              <p className={commonStyles.filter}>Preço</p>
              <p>{priceRange}</p>
            </div>
            {isDropdownOpen && (
              <div className="absolute top-full mt-2 w-[240px] bg-white border border-gray-300 rounded-md shadow-lg z-10">
                <div className="p-2 flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="$ Máximo"
                    onChange={(e) => {
                      setMaxPrice(e.target.value);
                      handlePriceChange();
                    }}
                    value={maxPrice}
                    className="w-[calc(50%-1rem)] p-2 border border-gray-300 rounded-md"
                  />
                  <span className="text-[16px]">-</span>
                  <input
                    type="number"
                    placeholder="$ Minimo"
                    onChange={(e) => {
                      setMinPrice(e.target.value);
                      handlePriceChange();
                    }}
                    value={minPrice}
                    className="w-[calc(50%-1rem)] p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="hidden lg:flex rounded-full bg-txt-blue p-2 text-white self-end text-[24px] mb-2 ml-auto">
            <IoSearch size={24} />
          </div>
        </div>
      </div>
      <Image
        src={houseSearching}
        alt="House searching"
        width={400}
        height={400}
      />
    </div>
  );
}
