import NavBar from "./navbar";
import { useRouter } from 'next/router'
import Link from 'next/Link'

export default function Hero() {

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        // router.push('/quote')
    }

    return (
        <div className="Hero">
            <NavBar />
            <div className="Hero__Content">
                <div className="Hero__Text">
                    <h1>Your local Community built on a Green Foundation</h1>
                    <h4>We are here to help you and your community.</h4>
                </div>

                <div>

                    <button className="donationButton">Make a donation</button>

                    <Link href="/about">
                        <button className="learnButton" >Learn More</button>
                    </Link>

                </div>

            </div>

            {/* <BubbleNew /> */}

        </div>
    )
}
