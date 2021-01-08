import NavBar from "./navbar.js";
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Hero() {

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        // router.push('/quote')
    }

    return (
        <div className="Hero">
            <div className="wave">
                <img
                    src="/wave.svg"
                    width='100%'
                    height='10%'
                />
            </div>
            
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
