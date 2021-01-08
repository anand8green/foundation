import InsideHero from './Comps/Insidehero'
import Blogs from './blogs'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

import Footer from "./Comps/Footer";

export default function Stories() {
    return <div>
        <InsideHero title="Our company & updates." subtitle="What we are doing at Green Foundation." />
        <Blogs />
        <Footer />
    </div>
}