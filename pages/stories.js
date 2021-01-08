import InsideHero from './comps/insidehero.js'
import Blogs from './blogs'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Footer from "./comps/footer.js";

export default function Stories() {
    return <div>
        <InsideHero title="Our company & updates." subtitle="What we are doing at Green Foundation." />
        <Blogs />
        <Footer />
    </div>
}