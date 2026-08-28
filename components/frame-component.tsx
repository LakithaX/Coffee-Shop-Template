import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-[#e2d9c8] flex items-start justify-between gap-[1.25rem] max-w-full mq1800:flex-wrap mq1800:gap-[1.25rem] ${className}`}
    >
      <div className="self-stretch w-[120rem] relative bg-[#e2d9c8] hidden max-w-full" />
      <section className="flex items-start gap-[5.487rem] max-w-full text-left text-[2.5rem] text-[#000] font-['Playfair_Display'] mq900:gap-[1.375rem] mq900:flex-wrap mq1350:gap-[2.75rem] mq1350:min-w-full mq1800:flex-1">
        <Image
          className="flex-1 relative max-w-full overflow-hidden max-h-full object-contain min-w-[21.125rem] z-[1] mq450:min-w-full"
          loading="lazy"
          width={520.2}
          height={335}
          sizes="100vw"
          alt=""
          src="/65646-1@2x.png"
        />
        <div className="w-[23.25rem] flex flex-col items-start pt-[5rem] px-[0rem] pb-[0rem] box-border max-w-full mq450:min-w-full mq900:flex-1">
          <div className="self-stretch flex flex-col items-start gap-[1.5rem]">
            <h1 className="m-0 relative text-[length:inherit] leading-[3.125rem] font-semibold font-[inherit] z-[1] mq450:text-[1.5rem] mq450:leading-[1.875rem] mq900:text-[2rem] mq900:leading-[2.5rem]">
              Check Out Our Best Coffee Beans
            </h1>
            <button className="cursor-pointer [border:none] py-[1rem] px-[2.25rem] bg-[#30261c] rounded-[100px] flex items-center justify-center gap-[0.25rem]">
              <div className="flex-1 relative text-[1rem] font-medium font-[Outfit] text-[#f1f0ee] text-left">
                Explore Out Products
              </div>
              <div className="flex items-center">
                <Image
                  className="h-[1.25rem] w-[1.25rem] relative"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/chevron-right.svg"
                />
                <Image
                  className="h-[1.25rem] w-[1.25rem] relative ml-[-0.75rem]"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/chevron-right.svg"
                />
              </div>
            </button>
          </div>
        </div>
      </section>
      <Image
        className="w-[31.406rem] relative max-h-full object-cover max-w-full z-[1] mq1800:flex-1"
        loading="lazy"
        width={502.5}
        height={335}
        sizes="100vw"
        alt=""
        src="/istockphoto-1128469742-612x612-1@2x.png"
      />
    </div>
  );
};

export default FrameComponent;
