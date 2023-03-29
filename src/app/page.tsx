"use client";
import {
  Alien,
  Article,
  Envelope,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPinLine,
  UsersFour,
} from "phosphor-react";
import Image from "next/image";
import Link from "next/link";
import { AppCardViewGit } from "@/components/AppCardViewGit";

export default function Home() {
  return (
    <div className="w-full h-[100vh] centralizer flex-col md:flex-row">
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
          <AppCardViewGit />
        </div>
      </div>
      <div className=" w-[100%] first-line md:w-[30%]  flex items-center flex-col  ">
        <Link
          className="button_system mt-5"
          target="_blank"
          href="https://www.facebook.com/mateusbcompany/"
        >
          <FacebookLogo className="w-5 h-5 text-white " />
          <p className="ml-3">Faceboock</p>
        </Link>
        <Link
          target="_blank"
          href="https://mail.google.com/mail/u/1/?pli=1#inbox"
          className="button_system mt-5"
        >
          <Envelope className="w-5 h-5 text-white " />
          <p className="ml-3">Email</p>
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/mateus__bg/"
          className="button_system mt-5"
        >
          <InstagramLogo className="w-5 h-5 text-white " />
          <p className="ml-3">Instagram</p>
        </Link>
        <Link
          target="_blank"
          href="https://github.com/devmateusborges"
          className="button_system mt-5"
        >
          <GithubLogo className="w-5 h-5 text-white " />
          <p className="ml-3">GitHub</p>
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/mateus-borges-b49a20170/"
          className="button_system mt-5"
        >
          <LinkedinLogo className="w-5 h-5 text-white " />
          <p className="ml-3">Linkedin</p>
        </Link>
      </div>
    </div>
  );
}
