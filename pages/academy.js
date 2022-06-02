import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { useUser } from "@auth0/nextjs-auth0";
import Head from 'next/head';
import Image from 'next/image';
// import next/link

export default function dashboard() {
    return (
        <>
            <Head>
                <title>MyCoin Academy</title>
                <meta property="og:title" content="MyCoin Academy" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://insight3d.github.io/MyCoin/public/logo.png" />
                <meta property="og:url" content="http://mycoin.insight3d.tech/academy" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:description" content="MyCoin Academy is a platfrom where users can learn trading and development. Must be logged in to accsess." />
                <meta property="og:site_name" content="MyCoin by InSight3D" />
                <meta name="twitter:image:alt" content="MyCoin" />
                <link rel="icon" href="/logo.ico" />
            </Head>
            <div className="flex justify-auto">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                </a>
                <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                <p className="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                </p>
                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
            </div>
            </div>
        </>
    )
}
export const getServerSideProps = withPageAuthRequired();