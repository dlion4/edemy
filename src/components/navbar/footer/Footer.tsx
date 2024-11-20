import { footerImage1, footerImage2, logoImage, whitelogoImage } from "@/constants/images";

export function Footer(){
return (
<>

    <div className="footer-area bg-color-f6fafb pt-100 pb-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="single-footer-widget">
                        <a href="index.html" className="logo">
                        <img src={logoImage} className="main-logo" alt="logo" />
                        <img src={whitelogoImage} className="white-logo" alt="logo" />
                        </a>
                        <p>Lorem ipsum  dolor sit amet, consectetur adipiscing elit. Mattis mi suscipit bibendum
                            sit
                            amet, consectetur.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single-footer-widget pl-40">
                        <h3>Quick Link</h3>
                        <ul className="import-link">
                            <li>
                                <a href="/courses/" className="link-item">Courses</a>
                            </li>
                            <li>
                                <a href="/about/" className="link-item">About Us</a>
                            </li>
                            <li>
                                <a href="/contact/" className="link-item">Support</a>
                            </li>
                            <li>
                                <a href="/faq/" className="link-item">Get Help</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single-footer-widget pl-40">
                        <h3>Help Center</h3>
                        <ul className="import-link">
                            
                            <li>
                                <a href="/privacy/" className="link-item">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/terms/" className="link-item">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="/refund/" className="link-item">Refund Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single-footer-widget">
                        <h3>Contact Info</h3>
                        <ul className="info">
                            <li>
                                <span>Call Us:</span>
                                <a href="tel:1-885-665-2022">1-885-665-2022</a>
                            </li>
                            
                            <li>
                                <span>Mail Us:</span>
                                <a href="cdn-cgi/l/email-protection.html#18707d747477587d7c7561367b7775">
                                    <span className="__cf_email__"
                                        data-cfemail="81e9e4ededeec1e4e5ecf8afe2eeec">[email&#160;protected]</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <img src={footerImage1} className="shape shape-1" alt="footer" />
        <img src={footerImage2} className="shape shape-2" alt="footer" />
    </div>
    <div className="copy-right-area bg-color-f6fafb">
        <div className="container">
            <p>© SkillCobra 2024

                {/* <a href="https://hibootstrap.com/" target="_blank">HiBootstrap</a> */}
            </p>
        </div>
    </div>
        <div style={{
            position: 'fixed',
            zIndex: 9999,
            top: '16px',
            left: '16px',
            right: '16px',
            bottom: '16px',
            pointerEvents: 'none',
            }}>

        </div>
        <div className="go-top" style={{ display: 'none' }}>
            <i className="bx bx-chevron-up"></i>
        </div>
    
    <script data-cfasync="false" src="cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>

</>

)

}