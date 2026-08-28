import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-[#30261c] flex items-start justify-between pt-[5rem] pb-[5.937rem] pl-[14.875rem] pr-[14.812rem] box-border gap-[1.25rem] max-w-full z-[2] text-left text-[2.25rem] text-[#fff] font-['Playfair_Display'] mq450:gap-[1.25rem] mq450:pt-[3.25rem] mq450:pb-[3.875rem] mq450:box-border mq900:gap-[1.25rem] mq900:pl-[3.688rem] mq900:pr-[3.688rem] mq900:box-border mq1350:gap-[1.25rem] mq1350:pl-[7.438rem] mq1350:pr-[7.375rem] mq1350:box-border mq1800:flex-wrap mq1800:gap-[1.25rem] ${className}`}
    >
      <div className="h-[22.375rem] w-[120rem] relative bg-[#30261c] hidden max-w-full shrink-0" />
      <b className="relative uppercase inline-block min-w-[7.813rem] z-[3] shrink-0 mq450:text-[1.375rem]">
        <span>C</span>
        <span className="text-[1.75rem]">offee</span>
      </b>
      <section className="w-[59.5rem] flex flex-col items-start pt-[1rem] px-[0rem] pb-[0rem] box-border max-w-full shrink-0 text-left text-[1.5rem] text-[#fff] font-['Playfair_Display']">
        <div className="w-[54.938rem] flex items-start justify-between gap-[1.25rem] max-w-full mq900:flex-wrap mq900:gap-[1.25rem]">
          <div className="flex flex-col items-start gap-[1.5rem]">
            <h3 className="m-0 relative text-[length:inherit] uppercase font-medium font-[inherit] z-[3] mq450:text-[1.188rem]">
              PRIVACY
            </h3>
            <div className="flex flex-col items-start gap-[0.937rem] text-[1.125rem] font-[Poppins]">
              <div className="relative z-[3]">Terms of use</div>
              <div className="relative z-[3]">Privacy policy</div>
              <div className="relative z-[3]">Cookies</div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[1.5rem]">
            <h3 className="m-0 relative text-[length:inherit] uppercase font-medium font-[inherit] z-[3] mq450:text-[1.188rem]">
              SERVICES
            </h3>
            <div className="flex flex-col items-start gap-[0.937rem] text-[1.125rem] font-[Poppins]">
              <div className="relative z-[3]">Shop</div>
              <div className="relative z-[3]">Order ahead</div>
              <div className="relative z-[3]">Menu</div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[1.5rem]">
            <h3 className="m-0 relative text-[length:inherit] uppercase font-medium font-[inherit] z-[3] mq450:text-[1.188rem]">
              ABOUT US
            </h3>
            <div className="flex flex-col items-start gap-[0.937rem] text-[1.125rem] font-[Poppins]">
              <div className="relative z-[3]">Find a location</div>
              <div className="relative z-[3]">About us</div>
              <div className="relative z-[3]">Out story</div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[1.5rem]">
            <h3 className="m-0 relative text-[length:inherit] uppercase font-medium font-[inherit] z-[3] mq450:text-[1.188rem]">
              INFOTNATION
            </h3>
            <div className="flex flex-col items-start gap-[0.937rem] text-[1.125rem] font-[Poppins]">
              <div className="relative z-[3]">{`Plons & pricing`}</div>
              <div className="relative z-[3]">Sell your prodcts</div>
              <div className="relative z-[3]">Jobs</div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-start pt-[1.125rem] px-[0rem] pb-[0rem] shrink-0 text-[1.5rem]">
        <div className="self-stretch flex flex-col items-start gap-[2.187rem]">
          <h3 className="m-0 relative text-[length:inherit] uppercase font-bold font-[inherit] z-[3] mq450:text-[1.188rem]">
            SOCIAL MEDIA
          </h3>
          <div className="self-stretch flex items-start py-[0rem] px-[1.375rem]">
            <div className="flex-1 flex items-start gap-[0.75rem]">
              <Image
                className="h-[1.5rem] w-[1.5rem] relative object-cover z-[3]"
                width={24}
                height={24}
                sizes="100vw"
                alt=""
                src="/prime-twitter@2x.png"
              />
              <Image
                className="h-[1.5rem] w-[1.5rem] relative z-[3]"
                width={24}
                height={24}
                sizes="100vw"
                alt=""
                src="/instagram.svg"
              />
              <Image
                className="h-[1.5rem] w-[1.5rem] relative z-[3]"
                width={24}
                height={24}
                sizes="100vw"
                alt=""
                src="/gg-facebook.svg"
              />
              <Image
                className="h-[1.5rem] w-[1.5rem] relative z-[3]"
                width={24}
                height={24}
                sizes="100vw"
                alt=""
                src="/akar-icons-linkedin-fill.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
