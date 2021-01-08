import InsideHero from './comps/insidehero.js'
import Footer from "./comps/footer.js";

export default function Hardship() {
    return <div>
        <InsideHero title="Fuel Hardship Fund" subtitle="Our goals and commitments" />
        <div className="container">
            <div className="content">
                <p>
                    The Green Foundation recognises that fuel poverty is an issue which impacts individuals and families. Fuel Poverty is defined as a household spending more than 10% of its income after housing on energy. Green aims to provide households with renewable energy at a low cost point to help to promote sustainability and reduce fuel poverty. The Green Foundation makes grants of up to £150 to families and individuals in extreme financial hardship. The programme makes grants directly to an energy supply to help those in arrears to help the fight against fuel poverty. Our grant making team reviews applications on a weekly basis meaning that the people who request our help get the items that they need as quickly as possible. The Fuel Hardship Fund operates across England. Applications must be submitted by a social organisation or charity on behalf of the client. Payment of up to £150 can be made towards energy arrears. We are only able to consider other requests in extreme circumstances. We have identified three priorities to ensure our grants make the greatest difference. We are far more likely to support an application if it meets the priority criteria listed below:

                    <span>We prioritise families over individuals</span>

                    <span> We prioritise the most financially excluded people </span>

                    <span>  We those impacted by factors outside of their control </span>

                    <span style={{ color: "gray" }}>  How To Apply </span>

                    Please note: We can only accept applications from recognised social organisations such as charities registered with the Charity Commission, housing associations and social services acting on behalf of a family or individual in need. Please apply online following the links below for the application form and online applications guidance. Please ensure that you submit your application by 4pm Friday to be considered in the following weeks' assessments. If an application is successful, we are only able to accept another application from an organisation for that family / individual after 1 year. If an application is unsuccessful, organisations are able to apply again for the family / individual after 12 weeks. The Green Foundation aims to respond to all applications, successful or not. However, if you haven't had a decision within three weeks of your application you can assume that it was unsuccessful.
                </p>
            </div>

        </div>
        <Footer />
    </div>
}