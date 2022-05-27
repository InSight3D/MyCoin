import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { useUser } from "@auth0/nextjs-auth0";
import Head from 'next/head';
import Image from 'next/image';

export default function Dashboard() {
    const { user, error, isLoading, context } = useUser();

    return (
        user && (
        <>
            <Head>
                <title>MyAccount</title>
                <meta property="og:title" content="MyCoin" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://insight3d.github.io/MyCoin/public/logo.png" />
                <meta property="og:url" content="http://mycoin.insight3d.tech" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:description" content=" InSight3D MyCoin is a free mock crypto exhange that grants users $10,000 to buy and sell 100+ coins at live market price. The coins as well as money will have no real value, as it is a mock exchange. " />
                <meta property="og:site_name" content="MyCoin by InSight3D" />
                <meta name="twitter:image:alt" content="MyCoin" />
            </Head>
            <div className='flex items-left justify-center'>
                <div className='bg-white w-1/3 mt-10 rounded-lg shadow-2xl hover:bg-gray-200'>
                    <div className='flex items-center justify-center pt-10 flex-col'>
                        <Image src={user.picture} width="269" height="272" alt="logo" className="rounded-full w-32"/>
                        <br>
                        </br>
                        <p className='text-4xl font-extrabold w-full text-center'>MyCoin</p>
                        <p className='text-2xl font-extrabold w-full text-center'>Welcome {user.name}!</p>
                        <br>
                        </br>
                    </div>
                </div>

            </div>
            
            <br>
            </br>


        </>
        )
    )
}
export const getServerSideProps = withPageAuthRequired();