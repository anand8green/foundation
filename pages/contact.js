import InsideHero from './comps/insidehero.js'
import Footer from "./comps/footer.js";

export default function Contact() {
    return <div>
        <InsideHero title="Contact" subtitle="Send us an email or find out where we are based" />
        <div className="container">
            <div className="content">

                <div className="info">

                    <div className="contact">

                        <h1>Opening Times</h1>
                        <p>
                            Mon - Fri, 9am - 5pm</p>
                        <h1>Address </h1>
                        <p>
                            The Core
                            Bath Lane
                            Newcastle Upon Tyne
                            England
                            NE4 5TF
                    </p>

                        <h1>     Email</h1>
                        <p>
                            info@thegreenfoundation.com</p>

                        <h1>     Telephone</h1>
                        <p>
                            0345 222 3232 </p>
                    </div>

                    <div className="map" >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2290.0390427386606!2d-1.625569184099623!3d54.972414480351915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x54b89016fafd9d53!2sGreen!5e0!3m2!1sen!2suk!4v1559568093914!5m2!1sen!2suk" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ></iframe>

                    </div>

                </div>
            </div>

        </div>
        <Footer />
    </div>
}