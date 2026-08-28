import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[20rem] bg-[#e2d9c8] flex items-start justify-between pt-[0rem] px-[0rem] pb-[5.375rem] box-border gap-[1.25rem] max-w-full text-center text-[2rem] text-[#30261c] font-[Poppins] mq450:gap-[1.25rem] mq450:pb-[3.5rem] mq450:box-border mq900:h-auto mq900:gap-[1.25rem] mq1350:gap-[1.25rem] mq1350:pl-[1.25rem] mq1350:pr-[1.25rem] mq1350:box-border ${className}`}
    >
      <div className="h-[20rem] w-[120rem] relative bg-[#e2d9c8] hidden max-w-full shrink-0" />
      <Image
        className="w-[30.125rem] relative max-h-full object-cover max-w-[calc(100%_-_1036px)] z-[1] shrink-0 mq1350:hidden mq1350:max-w-[calc(100%_-_534px)]"
        loading="lazy"
        width={482}
        height={321}
        sizes="100vw"
        alt=""
        src="/download-1@2x.png"
      />
      <div className="w-[32.125rem] flex flex-col items-start pt-[5.375rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_1004px)] shrink-0 mq1350:max-w-full">
        <div className="self-stretch flex flex-col items-start gap-[1.5rem] max-w-full">
          <div className="self-stretch flex items-start py-[0rem] px-[2rem] box-border max-w-full">
            <div className="flex-1 flex flex-col items-end gap-[0.5rem] max-w-full">
              <div className="self-stretch flex items-start justify-end py-[0rem] pl-[2.562rem] pr-[2.5rem]">
                <h2 className="m-0 relative text-[length:inherit] font-semibold font-[inherit] z-[1] mq450:text-[1.188rem] mq900:text-[1.625rem]">
                  Join in and ger 15% off!
                </h2>
              </div>
              <div className="relative text-[1rem] font-medium z-[1]">
                Subscribe to our newsletter in get 15% off discount code.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-[0.75rem] max-w-full mq900:flex-wrap">
            <div className="rounded-[100px] bg-[#f1f0ee] flex items-center justify-center py-[0.625rem] pl-[1.5rem] pr-[11.875rem] box-border gap-[0.625rem] max-w-full mq450:pr-[1.25rem] mq450:box-border">
              <Image
                className="h-[1.5rem] w-[1.5rem] relative"
                width={24}
                height={24}
                sizes="100vw"
                alt=""
                src="/mail.svg"
              />
              <input
                className="w-[calc(100%_-_238px)] [border:none] [outline:none] font-semibold font-[Poppins] text-[1rem] bg-[transparent] h-[1.5rem] relative text-[#30261c] text-center inline-block min-w-[4.375rem] p-0"
                placeholder="Email address"
                type="text"
              />
            </div>
            <button className="cursor-pointer [border:none] py-[0.625rem] px-[1.75rem] bg-[#30261c] rounded-[100px] flex items-center justify-center hover:bg-[#63594f]">
              <div className="relative text-[1rem] font-semibold font-[Poppins] text-[#f1f0ee] text-center">
                Subscribe
              </div>
            </button>
          </div>
        </div>
      </div>
      <Image
        className="w-[30.125rem] relative max-h-full object-contain max-w-[calc(100%_-_1036px)] z-[1] shrink-0 mq1350:hidden mq1350:max-w-[calc(100%_-_534px)]"
        loading="lazy"
        width={482}
        height={321}
        sizes="100vw"
        alt=""
        src="/download-1@2x.png"
      />
    </section>
  );
};

export default FrameComponent5;
