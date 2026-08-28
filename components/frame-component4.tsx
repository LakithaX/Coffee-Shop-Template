import type { NextPage } from "next";
import CoffeeProductGrid from "./coffee-product-grid";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex items-start pt-[0rem] px-[5rem] pb-[4rem] box-border max-w-full text-left text-[2rem] text-[#30261c] font-['Playfair_Display'] mq900:pb-[2.625rem] mq900:box-border mq1350:pl-[2.5rem] mq1350:pr-[2.5rem] mq1350:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-end gap-[4rem] max-w-full mq450:gap-[1rem] mq900:gap-[2rem]">
        <div className="w-[108.75rem] flex items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="flex items-start max-w-full">
            <h2 className="m-0 relative text-[length:inherit] tracking-[0.04em] uppercase font-semibold font-[inherit] mq450:text-[1.188rem] mq900:text-[1.625rem]">
              our special dessert
            </h2>
            <h2 className="m-0 relative text-[length:inherit] tracking-[0.04em] uppercase font-semibold font-[inherit] z-[1] ml-[-23.875rem] mq450:text-[1.188rem] mq900:text-[1.625rem]">
              our special dessert
            </h2>
          </div>
        </div>
        <CoffeeProductGrid
          coffeeCardItemsProductImage="/Dessert-Image-Backgrounds@2x.png"
          coffeeCardItemsProductImage1="/Rectangle-73@2x.png"
          coffeeCardItemsProductImage2="/Rectangle-71@2x.png"
          coffeeCardItemsProductImage3="/Rectangle-75@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent4;
