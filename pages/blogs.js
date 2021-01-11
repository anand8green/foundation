import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';

import Link from 'next/link'

export default function Features() {
    return <div className="newsContainer" >

        <div className="iconBox">

            <Link href="/about">
                <div className="box">
                    <div className="title">
                        About The Green Foundation
               </div>
                    <div className="pic">
                        <img src="/icons/foundation.svg" alt="" />
                    </div>
                    <div className="button">
                        Read the full stroy
                <ArrowRightAltRoundedIcon fontSize='large' />
                    </div>
                </div>
            </Link>

            <Link href="/grants">
                <div className="box">
                    <div className="title">
                        Grants
               </div>
                    <div className="pic">
                        <img src="/icons/money.svg" alt="" />
                    </div>
                    <div className="button">
                        Read the full stroy
                <ArrowRightAltRoundedIcon fontSize='large' />
                    </div>
                </div>
            </Link>

            <Link href="/hardship">
                <div className="box">
                    <div className="title">
                        Fuel Hardship Fund
               </div>
                    <div className="pic">
                        <img src="/icons/grants.svg" alt="" />
                    </div>
                    <div className="button">
                        Read the full stroy
                <ArrowRightAltRoundedIcon fontSize='large' />
                    </div>
                </div>
            </Link>

        </div>

        {/*
        <div className="iconBox">
            <Link href="/about">

                <div className="icon">

                    <span className="icon__title">About The Green Foundation</span>
                    <img src="/icons/money.svg" alt="" />

                    <div className="bottom">
                        <span className="icon__btnTitle">Read the full story</span>
                        <div className="nextIcon">
                            <ArrowForwardIosRoundedIcon />
                        </div>
                    </div>
                </div>
            </Link>
            <Link href="/grants">
                <div className="icon">
                    <span className="icon__title">Grants</span>
                    <div className="bottom">
                        <span className="icon__btnTitle">Read the full story</span>
                        <div className="nextIcon">
                            <ArrowForwardIosRoundedIcon />
                        </div>
                    </div>
                </div>
            </Link>
            <Link href="/hardship">
                <div className="icon">
                    <span className="icon__title">Fuel Hardship Fund</span>
                    <div className="bottom">
                        <span className="icon__btnTitle">Read the full story</span>
                        <div className="nextIcon">
                            <ArrowForwardIosRoundedIcon />
                        </div>
                    </div>
                </div>
            </Link>
        </div> */}
    </div >

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