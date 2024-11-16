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
                                Proin eget tortor risus. Mauris blandit aliquet elit, eget
                                tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia
                                in elementum id enim. Praesent sapien massa, convallis a
                                pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna
                                dictum porta. Curabitur non nulla sit amet nisl tempus convallis
                                quis ac lectus. Vestibulum ac diam sit amet quam vehicula elementum
                                sed sit amet dui. Donec rutrum congue leo eget malesuada. Donec
                                rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta
                                dapibus. Curabitur aliquet quam id ut lacinia in elementum id enim.
                                Praesent sapien massa, convallis a pellentesque nec, egestas non nisi
                                leo eget malesuada.
                            </p>
                            <div className="gap-20"></div>

                            <h3>2. Availability</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
                                odio sequi! Nam consectetur, officiis ipsam explicabo tempore
                                placeat! Voluptas molestiae pariatur necessitatibus consectetur, ullam
                                aut esse amet debitis sint culpa.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, placeat?
                                Culpa ab est nemo perspiciatis quam, nesciunt reprehenderit voluptate
                                id error corrupti doloremque exercitationem quis, iusto debitis velit
                                eveniet ea.
                            </p>
                            <div className="gap-20"></div>

                            <h3>3. Third party websites</h3>
                            <p>
                                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem
                                ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Sed
                                porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus.
                            </p>
                            <p>
                                Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin
                                eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Curabitur aliquet quam id dui posuere blandit.
                            </p>
                            <div className="gap-20"></div>

                            <h3>4. Copyright and intellectual property</h3>
                            <p>
                                Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus.
                                Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget
                                malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed
                                sit amet dui. Vivamus magna justo, lacinia eget consectetur sed,
                                convallis at tellus libero malesuada feugiat.
                            </p>
                            <ul>
                                <li>
                                    <i className="ri-check-line"></i>Quisque velit nisi, pretium ut
                                    lacinia in, elementum id enim.
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>Proin eget tortor risus
                                    consectetur adipiscing elit.
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>Curabitur aliquet quam id dui
                                    posuere blandit.
                                </li>
                            </ul>
                            <div className="gap-20"></div>

                            <h3>6. Termination of contract</h3>
                            <p>
                                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem
                                ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Sed
                                porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus.
                            </p>
                            <p>
                                Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin
                                eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Curabitur aliquet quam id dui posuere blandit.
                            </p>
                            <div className="gap-20"></div>

                            <h3>7. Limitation of liability</h3>
                            <p>
                                Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt
                                nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in elementum
                                id enim. Praesent sapien massa, convallis a pellentesque nec, egestas
                                non nisi. Cras ultricies ligula sed magna dictum porta. Curabitur non
                                nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam
                                sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue
                                leo eget malesuada. Donec rutrum congue leo eget malesuada. Pellentesque
                                in ipsum id orci.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>

    )

}