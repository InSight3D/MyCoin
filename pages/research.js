import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Image from "next/image";
import { GrSearch, GrBitcoin } from "react-icons/gr";
import { RiCopperCoinLine } from "react-icons/ri";

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
        <div className="relative block mb-4 ml-10 mr-10 md:hidden">
          <input className="w-full h-20 text-4xl border-2 border-black rounded-3xl pl-14"></input>
          <GrSearch className="absolute text-4xl top-6 left-4" />
        </div>
        <div className="grid grid-cols-4 mb-10 ml-10 ">
          <div className="hidden bg-gray-300 rounded-2xl md:block">
            {/* Searchbar Dektop */}
            <div className="relative hidden mt-4 ml-10 mr-10 md:block">
              <input className="w-full text-2xl border-2 border-black pl-[50px] h-14 rounded-3xl"></input>
              <GrSearch className="absolute text-4xl top-[12px] left-3" />
            </div>
            {/* Price feed Desktop */}
            <div className="grid grid-cols-1 place-items-center gap-y-2">
              <p className="mt-6 font-bold">Top 10 trading assets</p>
              <div className="flex items-center px-4 py-2 bg-white rounded-2xl">
                <RiCopperCoinLine className="mr-4 text-4xl" />
                <p className="text-2xl font-bold ">Price: $10,000</p>
              </div>
              <div className="flex items-center px-4 py-2 bg-white rounded-2xl">
                <RiCopperCoinLine className="mr-4 text-4xl" />
                <p className="text-2xl font-bold ">Price: $10,000</p>
              </div>
              <div className="flex items-center px-4 py-2 bg-white rounded-2xl">
                <RiCopperCoinLine className="mr-4 text-4xl" />
                <p className="text-2xl font-bold ">Price: $10,000</p>
              </div>
            </div>
          </div>
          <div className="grid content-center justify-start col-span-3 text-lg font-extrabold grid-custom-2 md:grid-custom-3 gap-y-10 gap-x-5 ml-14">
            <div className="px-12 pt-6 pb-6 bg-gray-300 h-fill py-14 rounded-3xl">
              <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center">
                  <GrBitcoin className="text-4xl text-yellow-500 bg-white rounded-full" />
                  <p>Bitcoin</p>
                </div>
                <div className="flex flex-col items-center mt-6">
                  <p>Price</p>
                  <p>$100,000</p>
                </div>
              </div>
            </div>
            <div className="px-12 pt-6 pb-6 bg-gray-300 h-fill py-14 rounded-3xl">
              <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center">
                  <GrBitcoin className="text-4xl text-yellow-500 bg-white rounded-full" />
                  <p>Bitcoin</p>
                </div>
                <div className="flex flex-col items-center mt-6">
                  <p>Price</p>
                  <p>$100,000</p>
                </div>
              </div>
            </div>
            <div className="px-12 pt-6 pb-6 bg-gray-300 h-fill py-14 rounded-3xl">
              <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center">
                  <GrBitcoin className="text-4xl text-yellow-500 bg-white rounded-full" />
                  <p>Bitcoin</p>
                </div>
                <div className="flex flex-col items-center mt-6">
                  <p>Price</p>
                  <p>$100,000</p>
                </div>
              </div>
            </div>
            <div className="px-12 pt-6 pb-6 bg-gray-300 h-fill py-14 rounded-3xl">
              <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center">
                  <GrBitcoin className="text-4xl text-yellow-500 bg-white rounded-full" />
                  <p>Bitcoin</p>
                </div>
                <div className="flex flex-col items-center mt-6">
                  <p>Price</p>
                  <p>$100,000</p>
                </div>
              </div>
            </div>
            <div className="px-12 pt-6 pb-6 bg-gray-300 h-fill py-14 rounded-3xl">
              <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center">
                  <GrBitcoin className="text-4xl text-yellow-500 bg-white rounded-full" />
                  <p>Bitcoin</p>
                </div>
                <div className="flex flex-col items-center mt-6">
                  <p>Price</p>
                  <p>$100,000</p>
                </div>
              </div>
            </div>
            <div className="px-12 pt-6 pb-6 bg-gray-300 h-fill py-14 rounded-3xl">
              <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center">
                  <GrBitcoin className="text-4xl text-yellow-500 bg-white rounded-full" />
                  <p>Bitcoin</p>
                </div>
                <div className="flex flex-col items-center mt-6">
                  <p>Price</p>
                  <p>$100,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export const getServerSideProps = withPageAuthRequired();
