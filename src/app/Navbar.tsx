import Link from "next/link";

export default function Navbar() {
    return (
        <header className="p-5 bg-blue-500">
            <Link href="/" className="px-5 py-1 mx-2 bg-white text-blue-500 rounded-lg">
                Home
            </Link>
            <Link href="/static" className="px-5 py-1 mx-2 bg-white text-blue-500 rounded-lg">
                Static
            </Link>
            <Link href="/onRequestRerender" className="px-5 py-1 mx-2 bg-white text-blue-500 rounded-lg">
                Rendered fresh on request
            </Link>
            <Link href="/isr" className="px-5 py-1 mx-2 bg-white text-blue-500 rounded-lg">
                Revalidated every 15 seconds
            </Link>
            <Link href="/eventRefresh" className="px-5 py-1 mx-2 bg-white text-blue-500 rounded-lg">
                Revalidate on button press
            </Link>
            <Link href="/getServerSidePropsWorkaround" className="px-5 py-1 mx-2 bg-white text-blue-500 rounded-lg">
                SSR-esque workaround
            </Link>
            <Link href="/pagesUserList" className="px-5 py-1 mx-2 bg-white text-blue-500 rounded-lg">
                Pages user list
            </Link>
            <a href="/appUserList" className="px-5 py-1 mx-2 bg-white text-blue-500 rounded-lg">
                App user list
            </a>
        </header>
    )
}
