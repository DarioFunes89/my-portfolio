import Link from "next/link"
import Image from "next/image";

export default function posts() {
    return (
        <>
            <h1>
                POSTS
            </h1>
            <img src="/images/profile.jpg" alt="Your Name" />
            <h2>
                Back to <Link href="/">Home</Link>
            </h2>
        </>
    )
}