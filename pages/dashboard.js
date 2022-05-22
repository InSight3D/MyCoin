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
            </Head>
        </>
    )
}
export const getServerSideProps = withPageAuthRequired();