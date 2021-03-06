import InsideHero from './comps/insidehero.js'
import Footer from "./comps/footer.js";

export default function About() {
    return <div>
        <InsideHero title="About us" subtitle="Our goals and commitments" />
        <div className="container">
            <div className="content">
                <p>
                    The Green Foundation is based in Newcastle Upon Tyne, and is the charity arm of Green - a tech focused energy supplier which provides renewable energy to its Members. The Green Foundation is a grant making charity which aims to educate about sustainability and renewable energy, to tackle fuel poverty through hardship grants, and to promote sustainable developments in the community. The Green Foundation is overseen by the board of trustees who work together to achieve the charitable mission of the Foundation. The Green Foundation is funded by Green which provides a donation of £1 for each Member which joins the supplier, and of which 100% is used to further the goals of The Green Foundation. The Green Foundation supports individuals in the heart of our local communities, and throughout the United Kingdom. We offer three different types of support, including:
                        </p>
                <p><span>Educational Events</span>The Green Foundation will attend schools, colleges, community centres, and events to provide workshops, lectures, seminars, or conferences to teach about sustainability and renewable energy.

                        </p>
                <p>                    <span> Fuel Poverty Grants</span>The Green Foundation offers grants of up to £150 for individuals, organisations, and communities to nominate families and individuals in extreme financial hardship to receive money towards energy debt.

                        </p>
                <span> Regeneration Projects </span>
                <p>
                    We accept applications from individuals, organisations, and communities to provide funding and grants towards rThese will be submitted to Members of Green to vote to determine who receives funding.
                 </p>
            </div>

        </div>
        <Footer />
    </div>
}