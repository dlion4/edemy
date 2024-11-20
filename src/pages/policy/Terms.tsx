import React, { useEffect, useState } from 'react';



export function TermsPolicy() {

    const [isVisible, setIsVisible] = useState(false);

    // UseEffect hook to add animation class after component mounts
    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 500); // Wait for 0.5 seconds before making the content visible
    }, []);
    return (

        <>



            <div>
                <div className="pages-banner-area ptb-100">
                    <div className="container">
                        <div className="pages-banner-content">
                            <h2 className={`page-banner-title ${isVisible ? 'show' : ''}`}>
                                Terms & Conditions
                            </h2>
                            <ul className={`breadcrumb ${isVisible ? 'show' : ''}`}>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                    </div>
                    <img
                        src="../images/page-banner-shape-1.svg"
                        className="shape shape-1"
                        alt="courses"
                    />
                    <img
                        src="../images/page-banner-shape-2.svg"
                        className="shape shape-2"
                        alt="courses"
                    />
                    <img
                        src="../images/page-banner-shape-3.svg"
                        className="shape shape-3"
                        alt="courses"
                    />
                </div>

                <section className="ptb-100">
                    <div className="container">
                        <div className="main-content-text">
                            <h3>1. Accuracy and validity of information</h3>
                            <p>
                                Skillcobra strives to provide accurate and up-to-date information on our platform. However, we do not guarantee that all information is accurate, complete, or current. By using the platform, you acknowledge that the information provided may change without notice, and you agree to verify the accuracy of any information before taking action based on it.
                            </p>
                            <div className="gap-20"></div>

                            <h3>2. Availability of services</h3>
                            <p>
                                While we aim to offer continuous access to Skillcobra's services, we cannot guarantee that our platform will always be available. Skillcobra may experience downtime due to maintenance, technical issues, or unforeseen circumstances. We are not liable for any disruption in services.
                            </p>
                            <p>
                                We recommend that users regularly check for updates and be mindful of any service interruptions.
                            </p>
                            <div className="gap-20"></div>

                            <h3>3. Third-party websites and links</h3>
                            <p>
                                Skillcobra may contain links to third-party websites for your convenience. We are not responsible for the content, privacy practices, or terms of use of these external sites. By clicking on any external links, you acknowledge and agree that Skillcobra is not responsible for the services or products provided by these third-party websites.
                            </p>
                            <div className="gap-20"></div>

                            <h3>4. Copyright and intellectual property</h3>
                            <p>
                                All content, designs, logos, trademarks, and materials on Skillcobra are the property of Skillcobra or our partners. Unauthorized use, copying, or reproduction of any material is strictly prohibited. By accessing our platform, you agree to respect all intellectual property rights and not engage in activities that violate them.
                            </p>
                            <ul>
                                <li>
                                    <i className="ri-check-line"></i> All content on Skillcobra is protected by copyright and intellectual property laws.
                                </li>
                                <li>
                                    <i className="ri-check-line"></i> Any unauthorized copying or distribution of content is prohibited.
                                </li>
                                <li>
                                    <i className="ri-check-line"></i> You may not use any content from Skillcobra for commercial purposes without prior written consent.
                                </li>
                            </ul>
                            <div className="gap-20"></div>

                            <h3>5. Termination of contract</h3>
                            <p>
                                Skillcobra reserves the right to terminate or suspend your account at any time without prior notice if we believe you have violated these terms or engaged in any unlawful activity. Upon termination, you will no longer have access to our services, and any outstanding balances may be forfeited.
                            </p>
                            <p>
                                If you wish to terminate your account voluntarily, you may do so by contacting our support team. However, any fees paid are non-refundable.
                            </p>
                            <div className="gap-20"></div>

                            <h3>6. Limitation of liability</h3>
                            <p>
                                Skillcobra will not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our platform, including but not limited to lost data, lost profits, or damage to your computer system. By using Skillcobra, you agree that our liability is limited to the maximum extent permitted by law.
                            </p>
                            <div className="gap-20"></div>

                            <h3>7. User obligations</h3>
                            <p>
                                By using Skillcobra, you agree to comply with all applicable laws and regulations. You are responsible for maintaining the confidentiality of your account and password, and you agree to notify Skillcobra immediately if you suspect any unauthorized use of your account.
                            </p>
                            <p>
                                You may not use Skillcobra for any illegal activities, including but not limited to spamming, fraud, or distributing harmful content.
                            </p>
                            <div className="gap-20"></div>

                            <h3>8. Modification of terms</h3>
                            <p>
                                Skillcobra reserves the right to update or modify these terms and conditions at any time. Any changes will be effective immediately upon posting on our platform. It is your responsibility to regularly review the terms for any updates.
                            </p>
                            <p>
                                Your continued use of Skillcobra after any changes to the terms will be considered your acceptance of those changes.
                            </p>
                            <div className="gap-20"></div>

                            <h3>9. Governing law</h3>
                            <p>
                                These terms and conditions are governed by the laws of Kenya. Any disputes arising from your use of Skillcobra will be resolved under the jurisdiction of the courts in Kenya.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

        </>

    )

}