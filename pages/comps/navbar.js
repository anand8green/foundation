// import Image from 'next/image'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Link from 'next/link'
import { useState } from 'react';
import BurgerMenu from './burgerMenu.js';
export default function NavBar() {

    const [open, setOpen] = useState(false)

    return (
        <div className="NavBar">

            <div className="NavBar__Content">
                <Link href="/">
                    <img
                        src="/logo.svg"
                        alt="Hydrology logo"
                        width={250}
                        height={100}
                        className="logo"
                    />
                </Link>
                <ul>
                    <li>
                        <Link href="/">
                            Home
                        </Link>

                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>

                    <li>
                        <Link href="/stories">
                            Stories
                        </Link>
                    </li>

                    <li>
                        <Link href="/funding">
                            Funding
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact">
                            Contact
                        </Link>

                    </li>

                </ul>

                <button style={{ minWidth: 105 }}>Sign In</button>

                <div className="BurgetLink" onClick={() => {
                    setOpen(!open)
                }}>
                    {
                        open ? <CloseRoundedIcon className="icon" /> :
                            <MenuRoundedIcon className="icon" />
                    }

                </div>

            </div>

            {
                open ? <BurgerMenu /> : null
            }

        </div>
    )
}
