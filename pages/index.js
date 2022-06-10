import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/Header";
import Footer from "../components/Footer";
import { MailIcon } from "@heroicons/react/solid";
import { FaSchool, FaEthereum } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";
import { CgCommunity } from "react-icons/cg";
import { useUser } from "@auth0/nextjs-auth0";
import PurpleButton from "../components/buttons/PurpleButton";
import { redirect } from "next/dist/server/api-utils";
import Checkmark from "../components/misc/Checkmark";
import { BsCheckLg } from "react-icons/bs";
import { Link } from "react-scroll";

export default function Home() {
  const { user, error, isLoading } = useUser();

  // check if user is equal to undefined
  if (user) {
    console.log(user);
    axios
      .post("http://localhost:5000/account/login", {
        email: user.email,
        given_name: user.given_name,
        family_name: user.family_name,
      })
      .then(function (res) {
        const message = res.data.message;
        // check is responce equlas Login Successful
        if (message === "Login Successful") {
          console.log(message);
        } else {
          console.log(message);
        }
      })
      .catch(function (error) {
        console.log(error);
        console.log("Login Failed");
      });
  }
  return (
    <>
      <Head>
        <title>MyCoin</title>
        <meta property="og:title" content="MyCoin" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://insight3d.github.io/MyCoin/public/logo.png"
        />
        <meta property="og:url" content="http://mycoin.insight3d.tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:description"
          content=" InSight3D MyCoin is a free mock crypto exhange that grants users $10,000 to buy and sell 100+ coins at live market price. The coins as well as money will have no real value, as it is a mock exchange. "
        />
        <meta property="og:site_name" content="MyCoin by InSight3D" />
        <meta name="twitter:image:alt" content="MyCoin" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <div className="h-full ">
        <div className="flex flex-col mb-80">
          <div className="flex  justify-around h-10 md:mb-[450px] mb-72">
            {/* Text and input field */}
            <div className="relative space-y-8 ml-96 md:ml-52 mt-28">
              <p className="text-8xl font-extrabold w-[560px]">
                MyCoin by InSight3D
              </p>
              <p className="text-2xl">
                The worlds first free to use mock Crypto Exchange with <br />
                Academy and Supportive Community.
              </p>
              <form className="flex items-center" action="/api/auth/login">
                <div className="relative flex items-center text-gray-600 drop-shadow-lg focus-within:text-gray-900">
                  <MailIcon className="absolute w-12 h-12 pl-2 pointer-events-none text-grey-400" />
                  <input className=" h-[80px] w-[450px] text-xl rounded-2xl pl-14 pr-3 font-semibold border-none ring-2 ring-gray-200"></input>
                </div>
                <div>
                  <button className="bg-black h-[80px] w-[200px] right-[146px] rounded-2xl p-[13px] ml-2">
                    <span className="text-white text-[16px] font-extrabold">
                      Get Started Today!
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* Logo */}
            <div className="hidden md:block">
              <img
                className="h-[269px] w-[272px] lg:h-[500px] lg:w-[500px]"
                src="/logo.svg"
                w
                alt="logo"
              />
            </div>
          </div>
        </div>

        {/* Light Blue section */}
        <div>
          <div className="  md:ml-0 mb-10 h-full md:relative md:w-full md:h-96 bg-none  md:bg-[#80E8EC] ">
            <div className="hidden md:block ml-[245px] md:ml-0 justify-center min-h-fit pt-20 md:text-5xl text-3xl font-extrabold text-center mb-none md:mb-6">
              <p>MyCoin Ecosystem</p>
            </div>
            <div className=" hidden md:absolute left-0 right-0 bottom-[-55px] md:flex items-center justify-center ">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-36 ">
                <div className="flex flex-col items-center px-20 py-6 text-lg font-bold text-center text-white bg-white min-h-60 space-y-7 rounded-3xl drop-shadow-lg">
                  <FaSchool className="text-black text-[150px]" />
                  <Link to="academy" smooth={true} offset={-150}>
                    <PurpleButton />
                  </Link>
                </div>
                <div className="flex flex-col items-center justify-between text-lg font-bold text-center text-white bg-white min-h-60 rounded-3xl drop-shadow-lg">
                  <BsCoin className="text-black text-[100px] mt-10 " />
                  <Link
                    className="mb-6"
                    to="trading"
                    smooth={true}
                    offset={-150}
                  >
                    <PurpleButton />
                  </Link>
                </div>
                <div className="flex flex-col items-center justify-between text-lg font-bold text-center text-white bg-white min-h-60 rounded-3xl drop-shadow-lg">
                  <FaEthereum className="text-black text-[100px] mt-10 " />
                  <Link
                    className="mb-6"
                    to="community"
                    smooth={true}
                    offset={-150}
                  >
                    <PurpleButton className="mt-[100px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='flex md:hidden items-center text-center justify-center min-w-full m-auto text-8xl px-[40px] font-bold bg-[#80E8EC]'>
            <p>MyCoin Ecosystem</p>
          </div> */}

          {/* Grid */}
          <div className="mt-[228px] ml-[290px] md:ml-0 flex justify-center items-center">
            <div className="grid grid-cols-1 grid-rows-1 md:grid-rows-2 md:grid-cols-2 gap-x-60 gap-y-[30px] md:gap-y-52">
              
              <div className="h-fit w-[520px] md:w-[454px]  ">
                <section id="academy">
                  <div>
                    <div className="flex items-center space-x-6">
                      <FaSchool className="text-black md:text-[110px] text-[310px]" />
                      <h1 className="text-6xl font-bold md:text-4xl">
                        MyCoin Academy{" "}
                      </h1>
                    </div>
                    <br />
                    <div className="space-y-20 md:space-y-4">
                      <p className="text-3xl md:text-base">
                        MyCoin Academy offers both a free and paid plan. Free
                        users gain accsess to introductory courses aiming to
                        increse increase awareness, safety, and competency in
                        the Web3 space. The paid plan unlocks more advaced
                        courses such as Ethereum Development, Trading
                        Strategies, as well as live events such as
                        prensentations and expert panels to help you learn more
                        about the Web3 ecosystem. After completing any course
                        users will get a certificate of completion, and paid
                        users will also receve an NFT corosponding to the course
                        they finished.
                      </p>
                      <h1 className="mt-4 mb-2 text-5xl font-bold md:text-base">
                        Features
                      </h1>
                      <div className="grid grid-cols-2 grid-rows-3 ml-8 text-2xl md:text-base">
                        <div className="flex">
                          <BsCheckLg className="mr-1 text-green-400" />
                          <p>Free & Paid Plan</p>
                        </div>
                        <div className="flex">
                          <BsCheckLg className="mr-1 text-green-400" />
                          <p>Web Based</p>
                        </div>
                        <div className="flex">
                          <BsCheckLg className="mr-1 text-green-400" />
                          <p>Course Certificates</p>
                        </div>
                        <div className="flex">
                          <BsCheckLg className="mr-1 text-green-400" />
                          <p>Live Events</p>
                        </div>
                        <div className="flex">
                          <BsCheckLg className="mr-1 text-green-400" />
                          <p>Trading & Development Courses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="h-fit w-[454px] rounded-3xl ">
                <img
                  className="h-fit w-[454px] rounded-3xl"
                  src="/homepage/academy.png"
                  alt=""
                />
              </div>

              <div className=" hidden md:block h-fit w-[454px] bg-gray-400 border-4 rounded-3xl ">
                <Image
                  className="h-fit w-[454px] bg-gray-400 rounded-3xl"
                  width={454}
                  height={514}
                  src="/homepage/trading.png"
                  alt=""
                />
              </div>

              <div className="h-fit w-[520px] md:w-[454px] ">
                <section id="trading">
                  <div>
                    <div className="flex items-center space-x-6">
                      <BsCoin className="text-black md:text-[110px] text-[310px] " />
                      <h1 className="text-6xl font-bold md:text-4xl">
                        MyCoin Trading{" "}
                      </h1>
                    </div>
                    <br />
                    <div className="space-y-12 md:space-y-4">
                      <p className="text-3xl md:text-base">
                        MyCoin Trading will alow users to simulate trading using
                        the skills aquired in the MyCoin Academy, or just for
                        fun. Paid users will gain accsess to over 500 coins, and
                        free users will gain accsess to the top 100 coins. Paid
                        users will also be able to accses the paid courses in
                        the Academy, and an ad free version for MyCoin.
                      </p>
                      <h1 className="mt-4 mb-2 text-5xl font-bold md:text-base">
                        Features
                      </h1>
                      <div className="grid grid-cols-2 grid-rows-3 ml-8 text-3xl md:text-base">
                        <div className="flex">
                          <BsCheckLg className="mr-1 text-green-400" />
                          <p>Free & Paid Plan</p>
                        </div>
                        <div className="flex">
                          <BsCheckLg className="mr-1 text-green-400" />
                          <p>Mock Trading</p>
                        </div>
                        <div className="flex">
                          <BsCheckLg className="mr-1 text-green-400" />
                          <p>Trading Community</p>
                        </div>
                        <div className="flex">
                          <BsCheckLg className="mr-1 text-green-400" />
                          <p>Accsess to Academy</p>
                        </div>
                        <div className="flex">
                          <BsCheckLg className="mr-1 text-green-400" />
                          <p>Over 100 Cryptocurrencies</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="md:hidden h-fit w-[454px] bg-gray-400 border-4 rounded-3xl ">
                <Image
                  className="h-fit w-[454px] bg-gray-400 rounded-3xl"
                  width={454}
                  height={514}
                  src="/homepage/trading.png"
                  alt=""
                />
              </div>

              <div className="h-fit w-[520px] md:w-[454px]">
                <section id="community">
                  <div>
                    <div className="flex items-center space-x-6">
                      <CgCommunity className="text-black md:text-[110px] text-[210px]" />
                      <h1 className="text-6xl font-bold md:text-4xl">
                        MyCoin Community{" "}
                      </h1>
                    </div>
                    <br />
                    <div className="space-y-12 md:space-y-4">
                      <p className="text-3xl md:text-base">
                        The MyCoin Community will be accsesable to all users of
                        MyCoin. MyCoin will host live events such as workshops,
                        expert panels, and prensentations. Along with events,
                        members will have accsess to support and community chats
                        where they can ask questions, and get help from other
                        members. Paid user will also have accsess to the Premium
                        Community, where there will be Paid Member only events
                        and chats, along with private tutoring sessions.
                      </p>
                      <h1 className="mt-4 mb-2 text-5xl font-bold md:text-base">
                        Features
                      </h1>
                      <div className="grid grid-cols-2 grid-rows-3 ml-8 text-3xl md:text-base">
                        <div className="flex">
                          <BsCheckLg className="mr-1 text-green-400" />
                          <p>Community Chats</p>
                        </div>
                        <div className="flex">
                          <BsCheckLg className="mr-1 text-green-400" />
                          <p>Live Events</p>
                        </div>
                        <div className="flex">
                          <BsCheckLg className="mr-1 text-green-400" />
                          <p>Community Forums</p>
                        </div>
                        <div className="flex">
                          <BsCheckLg className="mr-1 text-green-400" />
                          <p>Private Tutoring</p>
                        </div>
                        <div className="flex">
                          <BsCheckLg className="mr-1 text-green-400" />
                          <p>Free and Paid Communities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="h-fit w-[454px] bg-gray-400 rounded-3xl">
                <img
                  className="h-fit w-[454px] bg-gray-400 rounded-3xl"
                  src="/homepage/community.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <form action="/dashboard">
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center p-8 mt-32 mb-10 bg-gray-400 ml-[600px] md:flex-row md:ml-0 md:w-7xl rounded-3xl">
                <div className="relative items-center hidden text-gray-600 md:flex drop-shadow-lg focus-within:text-gray-900">
                  <MailIcon className="absolute w-20 h-20 pl-2 pointer-events-none text-grey-400" />
                  <input className=" md:h-[80px] md:w-[800px] h-[80px] w-[450px] rounded-2xl pl-20 pr-6 font-semibold border-none ring-2 ring-gray-200 text-4xl"></input>
                </div>
                <div>
                  <button className="bg-black h-[80px] md:w-72 w-[600px] right-[146px] rounded-2xl p-[13px] ml-2">
                    <span className="text-white text-[15px] font-extrabold">
                      Get Started Today!
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
