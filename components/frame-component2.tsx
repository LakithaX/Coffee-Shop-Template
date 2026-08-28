import type { NextPage } from "next";
import Image from "next/image";
import CoffeeProductGrid from "./coffee-product-grid";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex items-start pt-[0rem] px-[5rem] pb-[5rem] box-border max-w-full text-left text-[2rem] text-[#30261c] font-['Playfair_Display'] mq450:pb-[2.125rem] mq450:box-border mq900:pb-[3.25rem] mq900:box-border mq1350:pl-[2.5rem] mq1350:pr-[2.5rem] mq1350:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start gap-[4rem] max-w-full mq450:gap-[1rem] mq900:gap-[2rem]">
        <div className="w-[89.5rem] flex items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[43.125rem] flex flex-col items-start gap-[1.187rem] max-w-full">
            <Image
              className="w-[1.5rem] h-[1.5rem] relative"
              width={24}
              height={24}
              sizes="100vw"
              alt=""
              src="/mdi-heart-outline.svg"
            />
            <div className="self-stretch flex items-start justify-end">
              <h2 className="m-0 relative text-[length:inherit] tracking-[0.04em] uppercase font-semibold font-[inherit] mq450:text-[1.188rem] mq900:text-[1.625rem]">
                our special coffee
              </h2>
            </div>
          </div>
        </div>
        <CoffeeProductGrid
          coffeeCardItemsProductImage="/Product-Image-Backgrounds@2x.png"
          coffeeCardItemsProductImage1="/Rectangle-7@2x.png"
          coffeeCardItemsProductImage2="/Rectangle-74@2x.png"
          coffeeCardItemsProductImage3="/Rectangle-72@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
