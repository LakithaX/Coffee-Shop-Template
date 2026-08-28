import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full shrink-0 ${className}`}
    >
      <header className="w-[90.25rem] flex items-start justify-between gap-[1.25rem] max-w-full text-left text-[2rem] text-[#fff] font-['Playfair_Display']">
        <div className="flex flex-col items-start pt-[0.375rem] px-[0rem] pb-[0rem]">
          <h2 className="m-0 relative text-[length:inherit] lowercase font-bold font-[inherit] z-[1]">
            Coffea
          </h2>
        </div>
        <div className="w-[36.063rem] flex flex-col items-start pt-[1.062rem] pb-[0rem] pl-[0rem] pr-[1.625rem] box-border max-w-full mq900:w-[1.625rem]">
          <nav className="m-0 self-stretch flex items-start justify-between gap-[1.25rem] text-left text-[1.125rem] text-[#fff] font-[Poppins] mq900:hidden mq900:gap-[1.25rem]">
            <div className="relative uppercase font-medium z-[1]">home</div>
            <div className="relative uppercase font-medium z-[1]">coffee</div>
            <div className="relative uppercase font-medium z-[1]">bakery</div>
            <div className="relative uppercase font-medium z-[1]">shop</div>
            <div className="relative uppercase font-medium z-[1]">about</div>
            <div className="relative uppercase font-semibold z-[1]">login</div>
          </nav>
        </div>
        <Image
          className="h-[3.813rem] w-[3.813rem] relative z-[1]"
          loading="lazy"
          width={61}
          height={61}
          sizes="100vw"
          alt=""
          src="/Group-7.svg"
        />
      </header>
    </div>
  );
};

export default FrameComponent1;
