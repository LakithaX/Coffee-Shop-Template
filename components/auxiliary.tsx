import type { NextPage } from "next";
import Image from "next/image";

export type AuxiliaryType = {
  className?: string;
  ratingStar3: string;
};

const Auxiliary: NextPage<AuxiliaryType> = ({
  className = "",
  ratingStar3,
}) => {
  return (
    <div
      className={`flex flex-col items-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border max-w-full text-left text-[1.125rem] text-[#30261c] font-[Poppins] ${className}`}
    >
      <div className="rounded-[18px] bg-[rgba(226,217,200,0.4)] overflow-hidden flex flex-col items-start pt-[1.75rem] pb-[0.312rem] pl-[1.75rem] pr-[0.25rem] box-border gap-[1.125rem] max-w-full">
        <div className="w-[26.063rem] h-[12.938rem] relative rounded-[18px] bg-[rgba(226,217,200,0.4)] hidden max-w-full shrink-0" />
        <div className="flex items-start gap-[3.75rem] shrink-0 mq450:gap-[1.875rem] mq450:flex-wrap">
          <div className="self-stretch flex-1 flex items-center gap-[0.75rem]">
            <Image
              className="w-[3.5rem] relative rounded-[50%] max-h-full object-cover"
              loading="lazy"
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
              src={ratingStar3}
            />
            <Image
              className="h-[1.5rem] w-[1.5rem] relative rounded-[0.5px] z-[1]"
              width={24}
              height={24}
              sizes="100vw"
              alt=""
              src="/Rating-Star.svg"
            />
          </div>
        </div>
        <div className="w-[23.125rem] relative text-[0.75rem] leading-[1.25rem] font-medium whitespace-pre-wrap inline-block max-w-full z-[1] shrink-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing ,Lorem ipsum dolor
          sit amet, consectetur adipisicing dolor sit amet, consectetur
          adipisicing elit,Lorem ipsum amet, consectetur adipisicing elit,Lorem
          ipsum dolor sit adipisicing elit,Lorem ipsum dolor sit dolor sit amet,
          consectetur adipisicing elit,
        </div>
      </div>
    </div>
  );
};

export default Auxiliary;
