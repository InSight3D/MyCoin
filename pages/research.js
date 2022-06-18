import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Image from "next/image";
import { GrSearch, GrBitcoin } from "react-icons/gr";

// import next/link

export default function dashboard() {
  return (
    <>
      <Head>
        <title>MyCoin Reaserch</title>
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

      <div>
        <div className=" relative ml-10 mr-10">
          <input className="border-2 border-black rounded-3xl h-20 w-full pl-14 text-4xl"></input>
          <GrSearch className="absolute top-6 left-4 text-4xl" />
        </div>
        <div className="grid grid-custom-mobile md:grid-custom  gap-y-10 gap-x-5 ml-14 pt-20 font-extrabold text-lg border-2 justify-center content-center">
          <div className=" h-fill px-12 py-14 bg-gray-300 rounded-3xl pt-6 pb-6 ">
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col items-center">
                <GrBitcoin className="text-4xl text-yellow-500 bg-white rounded-full"/>
                <p>Bitcoin</p>
              </div>
              <div className="mt-6 flex flex-col items-center">
                <p>Price</p>
                <p>$100,000</p>
              </div>
            </div>
          </div>
          <div className=" h-fill px-12 py-14 bg-gray-300 rounded-3xl pt-6 pb-6 ">
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col items-center">
                <GrBitcoin className="text-4xl text-yellow-500 bg-white rounded-full"/>
                <p>Bitcoin</p>
              </div>
              <div className="mt-6 flex flex-col items-center">
                <p>Price</p>
                <p>$100,000</p>
              </div>
            </div>
          </div>
          <div className=" h-fill px-12 py-14 bg-gray-300 rounded-3xl pt-6 pb-6 ">
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col items-center">
                <GrBitcoin className="text-4xl text-yellow-500 bg-white rounded-full"/>
                <p>Bitcoin</p>
              </div>
              <div className="mt-6 flex flex-col items-center">
                <p>Price</p>
                <p>$100,000</p>
              </div>
            </div>
          </div>
          <div className=" h-fill px-12 py-14 bg-gray-300 rounded-3xl pt-6 pb-6 ">
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col items-center">
                <GrBitcoin className="text-4xl text-yellow-500 bg-white rounded-full"/>
                <p>Bitcoin</p>
              </div>
              <div className="mt-6 flex flex-col items-center">
                <p>Price</p>
                <p>$100,000</p>
              </div>
            </div>
          </div>
          <div className=" h-fill px-12 py-14 bg-gray-300 rounded-3xl pt-6 pb-6 ">
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col items-center">
                <GrBitcoin className="text-4xl text-yellow-500 bg-white rounded-full"/>
                <p>Bitcoin</p>
              </div>
              <div className="mt-6 flex flex-col items-center">
                <p>Price</p>
                <p>$100,000</p>
              </div>
            </div>
          </div>
          <div className=" h-fill px-12 py-14 bg-gray-300 rounded-3xl pt-6 pb-6 ">
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col items-center">
                <GrBitcoin className="text-4xl text-yellow-500 bg-white rounded-full"/>
                <p>Bitcoin</p>
              </div>
              <div className="mt-6 flex flex-col items-center">
                <p>Price</p>
                <p>$100,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" h-full ">
      </div>
        <div className="flex flex-col mb-80">
          <div className="flex relative h-10 mb-[450px]">
            // Text and input field
            <div className=" relative ml-52 space-y-8 mt-28">
              <p className="text-4xl font-extrabold w-[560px]">
                MyCoin Reaserch
              </p>
            </div>

            // Logo
            <div className="absolute right-0 pr-52 mt-[85px]">
              <Image src="/logo.svg" width="269" height="272" alt="logo" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
export const getServerSideProps = withPageAuthRequired();
