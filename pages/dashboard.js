import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { useUser } from "@auth0/nextjs-auth0";
import Head from 'next/head';
import Image from 'next/image';
// import next/link

export default function dashboard() {
    return (
        <>
            <Head>
                <title>MyCoin</title>
                <meta property="og:title" content="MyCoin" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://insight3d.github.io/MyCoin/public/logo.png" />
                <meta property="og:url" content="http://mycoin.insight3d.tech" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:description" content=" InSight3D MyCoin is a free mock crypto exhange that grants users $10,000 to buy and sell 100+ coins at live market price. The coins as well as money will have no real value, as it is a mock exchange. " />
                <meta property="og:site_name" content="MyCoin by InSight3D" />
                <meta name="twitter:image:alt" content="MyCoin" />
                <link rel="icon" href="/logo.ico" />
            </Head>
            <div className=' h-full '>
            <div className='flex flex-col mb-80'>
            <div className='flex relative h-10 mb-[450px]'>
                {/* Text and input field */}
                <div className=' relative ml-52 space-y-8 mt-28'>
                <p className='text-4xl font-extrabold w-[560px]'>MyCoin Dashboard</p>
                </div>

                {/* Logo */}
                <div className='absolute right-0 pr-52 mt-[85px]'>
                <Image src="/logo.svg" width="269" height="272" alt="logo" />
                </div>
            </div>
            </div>
            <div id="chartDiv" style="width:50%; height:300px; margin:0 auto;"></div>

            
            <script src="https://code.jscharting.com/2.9.0/jscharting.js"></script>
            
        </div>
        </>
    )
}
export const getServerSideProps = withPageAuthRequired();