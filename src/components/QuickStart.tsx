import steps from "@/constants/steps";
import Image from "next/image";

export default function QuickStart() {
  return (
    <section className="mb-5">
      <p className="my-5 text-[16px] font-bold leading-[19.09px] text-center">
        Quick Start
      </p>
      <div className="flex flex-col sm:flex-row justify-between w-full px-[5vw] gap-8 mt-28">
        {steps.map((step) => (
          <div
            key={step.step}
            className="relative flex flex-col items-center text-center bg-white border rounded-lg shadow-lg p-4"
          >
            <div className="absolute -top-28">
              <Image
                src={step.image}
                alt={step.title}
                width={200}
                height={200}
              />
            </div>
            <div className="mt-16 px-4">
              <p className="mt-1 text-txt-blue text-[24px] font-bold leading-[28.64px]">
                {step.step}
              </p>
              <p className="text-[24px] font-bold text-txt-black ">
                {step.title}
              </p>
              <p className="text-[16px] font-normal leading-[24px] text-txt-grey">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
