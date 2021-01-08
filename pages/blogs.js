import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

import Link from 'next/link'

export default function Features() {
    return <div className="newsContainer" >

        <div className="iconBox">
            <Link href="/about">
                <div className="icon">
                    <h1>About The Green Foundation</h1>
                    <div className="bottom">
                        <h3>Read the full story</h3>
                        <div className="nextIcon">
                            <ArrowForwardIosRoundedIcon />
                        </div>
                    </div>
                </div>
            </Link>
            <Link href="/grants">
                <div className="icon">
                    <h1>Grants</h1>
                    <div className="bottom">
                        <h3>Read the full story</h3>
                        <div className="nextIcon">
                            <ArrowForwardIosRoundedIcon />
                        </div>
                    </div>
                </div>
            </Link>
            <Link href="/hardship">
                <div className="icon">
                    <h1>Fuel Hardship Fund</h1>
                    <div className="bottom">
                        <h3>Read the full story</h3>
                        <div className="nextIcon">
                            <ArrowForwardIosRoundedIcon />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </div>

}

{/* <div className="container">
<div className="content">
    <div className="iconBox">
        <div className="icon">
            <h1>About The Green Foundation</h1>
            <div className="bottom">
                <h3>Read the full story</h3>
                <div className="nextIcon">
                    <ArrowForwardIosRoundedIcon />
                </div>
            </div>
        </div>
        <div className="icon">
            <h1>Grants</h1>
            <div className="bottom">
                <h3>Read the full story</h3>
                <div className="nextIcon">
                    <ArrowForwardIosRoundedIcon />
                </div>
            </div>
        </div>
        <div className="icon">
            <h1>Fuel Hardship Fund</h1>
            <div className="bottom">
                <h3>Read the full story</h3>
                <div className="nextIcon">
                    <ArrowForwardIosRoundedIcon />
                </div>
            </div>
        </div>
    </div>

</div>

</div> */}