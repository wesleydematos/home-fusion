import React from "react";
import Image from "next/image";
import houseSearching from "../images/houseSearching.png";
import { IoSearch } from "react-icons/io5";

const commonStyles = {
  divider: "hidden lg:flex h-[50px] mx-3 bg-txt-grey w-[0.5px]",
  steps: "text-[10px] font-bold leading-[11.93px] text-txt-blue",
  filter: "text-[14px] font-bold leading-[16.71px] text-black",
  select: "text-[16px] font-light leading-[19.09px] text-[#71717A]",
};

export default function Hero() {
  return (
    <div className="min-h-[500px] bg-custom-gradient flex flex-col sm:flex-row justify-between items-center px-[5vw]">
      <div className="w-1/2">
        <p className="font-sans xl:text-[64px] font-bold xl:leading-[70.4px] text-left">
          Encontre as melhores
          <span className="text-txt-blue"> oportunidades</span> de investimento
          hoje!
        </p>
        <div className="lg:flex items-center rounded-[16px] mt-5 min-h-[80px] gap-3 bg-white p-5">
          <div>
            <p className={commonStyles.steps}>Passo 1</p>
            <p className={commonStyles.filter}>Estratégia</p>
            <p>Escolha uma estratégia</p>
          </div>
          <div className={commonStyles.divider} />
          <div>
            <p className={commonStyles.steps}>Passo 2</p>
            <p className={commonStyles.filter}>Mercado</p>
            <p>Escolha um mercado</p>
          </div>
          <div className={commonStyles.divider} />
          <div>
            <p className={commonStyles.steps}>Passo 3</p>
            <p className={commonStyles.filter}>Preço</p>
            <p>Selecione um preço</p>
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
