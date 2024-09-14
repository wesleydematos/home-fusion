import fire from "@/images/fire.png";
import chart from "@/images/chart.png";
import cash from "@/images/cash.png";
import Image from "next/image";

const commonStyle = {
  card: "flex flex-col items-center justify-center shadow-lg p-[120px_50px] rounded-lg",
  text: "text-2xl font-bold leading-[28.64px] text-center mt-5",
};

export default function BestMarkets() {
  return (
    <section className="mb-5">
      <p className="my-5 text-[26px] font-bold leading-[19.09px] text-center">
        Os melhores mercados
      </p>
      <div className="flex flex-col sm:flex-row justify-between w-full px-[5vw] mt-5">
        <div className={commonStyle.card}>
          <Image src={cash} alt="cash" width={64} height={65} />
          <p className={commonStyle.text}>Melhor para Cash Flow</p>
        </div>
        <div className={commonStyle.card}>
          <Image src={chart} alt="chart" width={64} height={65} />
          <p className={commonStyle.text}>Melhor para Valorização</p>
        </div>
        <div className={commonStyle.card}>
          <Image src={fire} alt="fire" width={64} height={65} />
          <p className={commonStyle.text}>Mercados aquecidos</p>
        </div>
      </div>
    </section>
  );
}
