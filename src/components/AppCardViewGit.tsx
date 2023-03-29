"use client";
import {
  Alien,
  Article,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPinLine,
  UsersFour,
} from "phosphor-react";

export function AppCardViewGit() {
  const data = [716, 193, 38, 716];
  return (
    <div className="bg-stone-800 absolute z-10 w-[70%] xl:w-[50%] h-[23vh]  rounded-[30px] bottom-1  xl:bottom-[12vh] p-1 xl:p-3 centralizer flex-col  opacity-75 animation_pulse_sistem animate-bounce ">
      <div className="flex w-full">
        <UsersFour className="w-5 h-5 text-white" />
        <p className="font-semibold text-[14px] ml-2">0 Seguidores</p>
      </div>
      <div className="flex w-full">
        <UsersFour className="w-5 h-5 text-white" />
        <p className="font-semibold text-[14px] ml-2">4 Seguindo</p>
      </div>
      <div className="flex w-full">
        <GithubLogo className="w-5 h-5 text-white" />

        <p className="font-semibold text-[14px] ml-2">31 Repositórios</p>
      </div>
      <div className="flex w-full">
        <InstagramLogo className="w-5 h-5 text-white" />
        <p className="font-semibold text-[14px] ml-2">133 @mateus_bg</p>
      </div>
      <div className="flex w-full">
        <MapPinLine className="w-5 h-5 text-white" />
        <p className="font-semibold text-[14px] ml-2">São joaquim /SP</p>
      </div>
    </div>
  );
}
