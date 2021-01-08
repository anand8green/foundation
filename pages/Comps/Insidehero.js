import NavBar from "./Navbar";
import { useRouter } from 'next/router'
import Link from 'next/Link'

export default function Hero({ title, subtitle }) {

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        // router.push('/quote')
    }

    return (
        <div className="InsideHero">
            <NavBar />
            <div className="InsideHero__Content">
                <div className="InsideHero__Text">
                    <h1>{title}</h1>
                    <h4>{subtitle}</h4>
                </div>

            </div>

            {/* <BubbleNew /> */}

        </div>
    )
}
