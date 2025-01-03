import React from "react";
import {Button} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import BasicNavbar from "@/app/components/basic-navbar";
import FadeInImage from "@/app/components/fade-in-image";

export default function Component() {
  return (
    <div className=" flex h-dvh w-full flex-col bg-background">
      <main className="w-full h-full flex flex-col items-center justify-center">
        <section className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          {/* <Button
            className="h-9 overflow-hidden border-1 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-default-500"
            endContent={
              <Icon
                className="flex-none outline-none [&>path]:stroke-[2]"
                icon="solar:arrow-right-linear"
                width={20}
              />
            }
            radius="full"
            variant="bordered"
          >
            New onboarding experience
          </Button> */}
          <div className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
            <div className="bg-hero-section-title bg-clip-text text-transparent">
            강아지 당뇨 관리를 가장 쉽고 편리하게
            </div>
          </div>
          <p className="text-center font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]">
          우리는 혈당 관리, 식단 계획, 건강 모니터링까지 반려견의 당뇨 관리를 간편하게 도와줍니다.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              className="h-10 w-[163px] bg-default-foreground px-[16px] py-[10px] text-small leading-5 text-background font-bold"
              radius="full"
            >
              촬영 시작
            </Button>
            <Button
              className="h-10 w-[163px] border-1 border-default-100 px-[16px] py-[10px] text-small leading-5 font-bold"
              endContent={
                <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100">
                  <Icon
                    className="text-default-500 [&>path]:stroke-[1.5]"
                    icon="solar:arrow-right-linear"
                    width={16}
                  />
                </span>
              }
              radius="full"
              variant="bordered"
            >
              사진 선택
            </Button>
          </div>
        </section>
        <div className="pointer-events-none absolute inset-0 top-[-25%] z-10 scale-150 select-none sm:scale-125">
          <FadeInImage
            fill
            priority
            alt="Gradient background"
            src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/backgrounds/bg-gradient.png"
          />
        </div>
      </main>
    </div>
  );
}
