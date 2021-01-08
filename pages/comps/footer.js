
export default function Footer() {
    return <div className="footer">

        <div className="footer__Content">

            <div className="logoBox">
                <img src="/logo.svg" alt="" />
                {/* <div className="input">
                    <h4>Keep updated with out progress</h4>
                    <input type="text" placeholder="Email address" />
                </div> */}
            </div>

            <div className="footerLinks">
                <div className="links">
                    <div className="website">
                        <h2>Website</h2>
                        <h6>Home</h6>
                        <h6>About</h6>
                        <h6>Contact Us</h6>
                    </div>
                    <div className="support">
                        <h2>Donation</h2>
                        <h6>Funding</h6>
                        <h6>Success Stories</h6>
                        <h6>Privacy Policy</h6>
                    </div>
                </div>

                <div className="address">
                    <p>4034 The Core, Bath Lane, NE4 5TF, 0345 222 2525 - info@thegreenfoundation</p>
                </div>
                <div className="charity">
                    <p>© 2020 Green Foundation - Registered Charity No. 123456</p>
                </div>

            </div>
        </div>

    </div>
}