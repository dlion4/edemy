import { DotLottiePlayer } from '@dotlottie/react-player';

import "../../../assets/pricestudent.css"
export function PriceCourse() {
    return (
        <>
            <div className="section-title wow animate__animated animate__fadeInUp delay-0-2s">
                <span className="top-title">Charges</span>
                <h2>Our pricing and membership packages</h2>
            </div>
            <div className="newcenter">
                <div className="panel pricing-table">
                    <div className="pricing-plan">
                        <img
                            src="https://img.freepik.com/free-vector/focus-abstract-concept_335657-3014.jpg?w=1060&t=st=1687941768~exp=1687942368~hmac=e77fc838f6938538e5b455f05985087f5e12ca263e32db3cca733e7cf95cfa15"
                            alt=""
                            className="pricing-img"
                        />
                        <h5 className="pricing-header">Book Course</h5>
                        <ul className="pricing-features">
                            <li className="pricing-features-item">Custom domains</li>
                            <li className="pricing-features-item">Sleeps after 30 mins of inactivity</li>
                        </ul>
                        <span className="pricing-price">$2</span>
                        <a href="#/" className="pricing-button">Try Today</a>
                    </div>

                    <div className="pricing-plan">
                        <img
                            src="https://img.freepik.com/free-vector/staff-management-perspective-definition-target-orientation-teamwork-organization-business-coach-company-executive-personnel-cartoon-characters_335657-2967.jpg?w=1060&t=st=1687941647~exp=1687942247~hmac=316952eec631c3ab482a95f70766544f587e0fd99703d3c2b7b3c04f7ee9d6ad"
                            alt=""
                            className="pricing-img"
                        />
                        <h5 className="pricing-header">Pay As You Go</h5>
                        <ul className="pricing-features">
                            <li className="pricing-features-item">Never sleeps</li>
                            <li className="pricing-features-item">Multiple workers for more powerful apps</li>
                        </ul>
                        <span className="pricing-price">20% </span><span>Partial Payments</span>
                        <a href="#/" className="pricing-button is-featured">Free trial</a>
                    </div>

                    <div className="pricing-plan">
                        <img
                            src="https://img.freepik.com/free-vector/audience-segmentation-abstract-concept-illustration_335657-1854.jpg?w=1060&t=st=1687941709~exp=1687942309~hmac=39ef191da7d4f406cb9a92680bd1a26ce64f6f41795146226ba8697b233641f1"
                            alt=""
                            className="pricing-img"
                        />
                        <h5 className="pricing-header">Membership Plan</h5>
                        <ul className="pricing-features">
                            <li className="pricing-features-item">Dedicated</li>
                            <li className="pricing-features-item">Simple horizontal scalability</li>
                        </ul>
                        <span className="pricing-price">$49.74</span>
                        <a href="#/" className="pricing-button">Activate Plan</a>
                    </div>
                </div>
            </div>
        </>

    )


}