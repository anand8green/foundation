import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Blogs from '../blogs'
import Link from 'next/Link'

export default function Features() {
    return <div className="Features">
        <div className="Features__Content">
            <h1>We are here for the people who make a difference in the community</h1>
            <div className="numBox">
                <div className="num">
                    <h2>10,000</h2>
                    <h4>Customer</h4>
                </div>
                <div className="num">
                    <h2>40,600</h2>
                    <h4>Donation</h4>
                </div>
                <div className="num">
                    <h2>190,600</h2>
                    <h4>Enquires</h4>
                </div>
            </div>
            <div className="textBox">
                <h2>The Green Foundation was founded in July 2020 to help Green make a difference in our local community, and throughout the country. Green provides all of our Members with renewable energy to reduce their carbon footprint, however we wanted to do more to help those in need. Green donates £1 to The Green Foundation each time a new Member switches.</h2>
                <h3>Making a change in a local community, and throughout the country</h3>
                <p>The Green Foundation understands that combating climate change requires individuals to make a change to their habits to become more sustainable. We support communities and individuals by providing education on the benefits of sustainability, conservation and renewable energy. To help those in need, we provide energy hardship grants to cover energy bills for those experiencing financial hardship or difficulties. We also provide grants towards sustainable development and regeneration projects. Green strongly believes in empowering our Members to make a change in the community. To have the greatest impact, we allow our Members to vote upon sustainable development and regeneration projects that have been approved by the board of trustees. This allows Members to help select projects that they believe will have the greatest impact upon the environment or local communities.</p>
                <h3>We work together with Green, with our Members at the heart</h3>
                <p>The board of trustees for The Green Foundation is responsible for the day-to-day running of the charity, and for managing the strategic direction to allow us to do the most good possible. Our Members help us decide what projects should be funded. We believe that this allows The Green Foundation to be truly independent as a charity, by decentralising the decision making process across all Members, it will result in a fair decision making process.</p>
            </div>

            <Blogs />

        </div>

    </div>
}