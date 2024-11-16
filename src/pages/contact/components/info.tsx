



export function InfoContact() {


    return (

        <>

            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-contact-info d-flex align-items-center">
                                <img src="../images/contact-info-1.svg" alt="contact" />
                                <div>
                                    <h3>Call Us</h3>
                                    <ul>
                                        <li><a href="tel:+009-3867-321">+009 3867 321</a></li>
                                        <li><a href="tel:+009-3867-532">+009 3867 532</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-contact-info bg-f3dfc1 d-flex align-items-center">
                                <img src="../images/contact-info-2.svg" alt="contact" />
                                <div>
                                    <h3>mail Us</h3>
                                    <ul>
                                        <li>
                                            <a href="../cdn-cgi/l/email-protection.html#18707d747477587d7c7561367b7775">
                                                <span className="__cf_email__" data-cfemail="7d15181111123d18191004531e1210">
                                                    [email&#160;protected]
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="../cdn-cgi/l/email-protection.html#e68f888089a683828b9fc885898b">
                                                <span className="__cf_email__" data-cfemail="e38a8d858ca386878e9acd808c8e">
                                                    [email&#160;protected]
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-contact-info d-flex bg-a8e3da align-items-center">
                                <img src="../images/contact-info-3.svg" alt="contact" />
                                <div>
                                    <h3>Visit Us</h3>
                                    <p>Cecilia Chapman, 711-2880 Nulla St. Mississippi 96522</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-area pb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="top-title">Contact Us</span>
                        <h2>Send Us Message Anytime</h2>
                    </div>
                    <div className="contact-form">
                        <form id="contactForm">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Full Name" name="name" value="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Your Email" name="email" value="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Phone" name="phone" value="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" placeholder="Your Subject" value="" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <textarea placeholder="Message" className="form-control" name="message" rows={5}></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input name="check" className="form-check-input" type="checkbox" value="I agree to the terms and privacy policy." />
                                                <label className="form-check-label">
                                                    I agree to the <a href="../terms-conditions/index.htm">Terms &amp; conditions</a>
                                                </label>
                                                <div className="help-block with-errors gridCheck-error"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 text-center">
                                    <button type="submit" className="default-btn active" disabled>Send Message</button>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <img src="../images/contact-shape-1.svg" className="shape shape-1" alt="contact" />
                <img src="../images/contact-shape-2.svg" className="shape shape-2" alt="contact" />
            </div>


        </>

    )

}