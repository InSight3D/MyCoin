import { withPageAuthRequired } from "@auth0/nextjs-auth0"


export default function dashboard() {
    return (
        <h1>MyCoin Dashboard</h1>
    )
}

export const getServerSideProps = withPageAuthRequired();