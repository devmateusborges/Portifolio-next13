"use client";
import {
  Alien,
  GithubLogo,
  InstagramLogo,
  MapPinLine,
  UsersFour,
} from "phosphor-react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full h-[100vh] centralizer">
      <div className="w-[90%] xl:w-[25%] md:w-[25%] bg-background-system centralizer h-[50vh] xl:h-[80vh] rounded-[40px]    ">
        <div className="w-[95%] bg-[#0E1218] h-[48vh] xl:h-[78vh] rounded-[45px] p-5 relative overflow-hidden animation_pulse_sistem">
          <div className="w-full flex items-center animation_pulse_sistem">
            <span className="border border-[#60bdc4] rounded-[100px] p-2 ">
              <Alien className="w-5 h-5 color-system " />
            </span>
            <h1 className=" text-[15px] xl:text-[20px] font-semibold justify-between ml-3 ">
              Mateus Borges
            </h1>
          </div>

          <div className="absolute right-[-10vh] animation_pulse_sistem ">
            <div className="bg-[#60bdc4] xl:p-8  p-5 rounded-[100%]">
              <Image
                className=" w-[200px] xl:w-[260px] rounded-[100%]"
                src="https://avatars.githubusercontent.com/u/51982343?v=4"
                alt="FOTO PERFIL"
                width={260}
                height={260}
              />
            </div>
          </div>

          <div className="bg-stone-800 absolute z-10 w-[70%] xl:w-[50%] h-[23vh]  rounded-[30px] bottom-1  xl:bottom-[12vh] p-1 xl:p-3 centralizer flex-col  opacity-75 animation_pulse_sistem ">
            <div className="flex w-full">
              <UsersFour className="w-5 h-5 text-white" />
              <p className="font-semibold text-[14px] ml-2">716 Seguidores</p>
            </div>
            <div className="flex w-full">
              <UsersFour className="w-5 h-5 text-white" />
              <p className="font-semibold text-[14px] ml-2">193 Seguindo</p>
            </div>
            <div className="flex w-full">
              <GithubLogo className="w-5 h-5 text-white" />

              <p className="font-semibold text-[14px] ml-2">38 Repositórios</p>
            </div>
            <div className="flex w-full">
              <InstagramLogo className="w-5 h-5 text-white" />
              <p className="font-semibold text-[14px] ml-2">716 @mateus_bg</p>
            </div>
            <div className="flex w-full">
              <MapPinLine className="w-5 h-5 text-white" />
              <p className="font-semibold text-[14px] ml-2">São joaquim</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
