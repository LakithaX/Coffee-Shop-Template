import type { NextPage } from "next";
import Image from "next/image";
import Auxiliary from "./auxiliary";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-center text-[2rem] text-[#30261c] font-['Reggae_One'] ${className}`}
    >
      <div className="w-[90.25rem] flex flex-col items-start gap-[1.5rem] max-w-full">
        <div className="self-stretch flex flex-col items-end gap-[2rem] max-w-full mq900:gap-[1rem]">
          <div className="self-stretch flex items-start justify-center py-[0rem] pl-[1.312rem] pr-[1.25rem] box-border max-w-full">
            <div className="flex flex-col items-start gap-[0.75rem] max-w-full">
              <div className="flex items-start py-[0rem] px-[5rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                <h2 className="m-0 relative text-[length:inherit] font-normal font-[inherit] mq450:text-[1.188rem] mq900:text-[1.625rem]">
                  Come and Join
                </h2>
              </div>
              <h2 className="m-0 relative text-[length:inherit] tracking-[0.04em] uppercase font-semibold font-['Playfair_Display'] text-left mq450:text-[1.188rem] mq900:text-[1.625rem]">
                our happy customers
              </h2>
            </div>
          </div>
          <section className="self-stretch flex items-start justify-between gap-[1.25rem] max-w-full text-left text-[1.125rem] text-[#30261c] font-[Poppins] mq1800:flex-wrap mq1800:justify-center">
            <Auxiliary ratingStar3="/Rating-Star1.svg" />
            <div className="rounded-[18px] bg-[rgba(226,217,200,0.4)] border-[rgba(48,38,28,0.1)] border-solid border-[2px] box-border flex flex-col items-start pt-[1.562rem] px-[1.625rem] pb-[1.875rem] gap-[1.125rem] max-w-full">
              <div className="w-[27.563rem] h-[14.688rem] relative rounded-[18px] bg-[rgba(226,217,200,0.4)] border-[rgba(48,38,28,0.1)] border-solid border-[2px] box-border hidden max-w-full shrink-0" />
              <div className="flex items-start gap-[3.75rem] shrink-0 mq450:gap-[1.875rem] mq450:flex-wrap">
                <div className="self-stretch flex-1 flex items-center gap-[0.75rem]">
                  <Image
                    className="w-[3.5rem] relative rounded-[50%] max-h-full object-cover"
                    width={56}
                    height={56}
                    sizes="100vw"
                    alt=""
                    src="/Avatar@2x.png"
                  />
                  <div className="flex flex-col items-start">
                    <div className="self-stretch relative font-semibold">
                      James Smith
                    </div>
                    <div className="self-stretch relative text-[0.875rem] font-semibold text-[rgba(48,38,28,0.7)]">
                      Entrepreneur
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-[0.25rem]">
                  <Image
                    className="h-[1.5rem] w-[1.5rem] relative rounded-[0.5px] z-[1]"
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt=""
                    src="/Rating-Star1.svg"
                  />
                  <Image
                    className="h-[1.5rem] w-[1.5rem] relative rounded-[0.5px] z-[1]"
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt=""
                    src="/Rating-Star1.svg"
                  />
                  <Image
                    className="h-[1.5rem] w-[1.5rem] relative rounded-[0.5px] z-[1]"
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt=""
                    src="/Rating-Star1.svg"
                  />
                  <Image
                    className="h-[1.5rem] w-[1.5rem] relative rounded-[0.5px] z-[1]"
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt=""
                    src="/Rating-Star1.svg"
                  />
                  <Image
                    className="h-[1.5rem] w-[1.5rem] relative rounded-[0.5px] z-[1]"
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt=""
                    src="/Rating-Star1.svg"
                  />
                </div>
              </div>
              <div className="w-[23.125rem] relative text-[0.75rem] leading-[1.25rem] font-medium whitespace-pre-wrap inline-block max-w-full z-[1] shrink-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing ,Lorem ipsum
                dolor sit amet, consectetur adipisicing dolor sit amet,
                consectetur adipisicing elit,Lorem ipsum amet, consectetur
                adipisicing elit,Lorem ipsum dolor sit adipisicing elit,Lorem
                ipsum dolor sit dolor sit amet, consectetur adipisicing elit,
              </div>
            </div>
            <Auxiliary ratingStar3="/Rating-Star.svg" />
          </section>
        </div>
        <div className="self-stretch flex items-start justify-center py-[0rem] px-[1.25rem]">
          <Image
            className="h-[0.75rem] w-full relative"
            loading="lazy"
            width={52}
            height={12}
            sizes="100vw"
            alt=""
            src="/Group-18.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
