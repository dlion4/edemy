
import React, { useState } from 'react';


export function FaqInfo() {

    const [expanded, setExpanded] = useState(null);

    const handleToggle = (id) => {
        setExpanded(expanded === id ? null : id);
    };
    return (

        <>

            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="faq-accordion">
                        <div className="accordion">
                            <div className="accordion__item">
                                <div
                                    className="accordion__heading"
                                    role="heading"
                                    aria-level={3}
                                >
                                    <div
                                        className="accordion__button"
                                        onClick={() => handleToggle('a')}
                                        aria-expanded={expanded === 'a'}
                                        role="button"
                                        tabIndex={0}
                                    >
                                        How can I contact a school directly?
                                    </div>
                                </div>
                                {expanded === 'a' && (
                                    <div className="accordion__panel" id="accordion__panel-a">
                                        <p>
                                            You can contact a school by filling out a{' '}
                                            <a href="contact.html">“Contact Us”</a> form. This form can
                                            be found to the right of both the institute and education
                                            program profiles and also at the bottom of these profiles.
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="accordion__item">
                                <div
                                    className="accordion__heading"
                                    role="heading"
                                    aria-level={3}
                                >
                                    <div
                                        className="accordion__button"
                                        onClick={() => handleToggle('b')}
                                        aria-expanded={expanded === 'b'}
                                        role="button"
                                        tabIndex={0}
                                    >
                                        Where should I study abroad?
                                    </div>
                                </div>
                                {expanded === 'b' && (
                                    <div className="accordion__panel" id="accordion__panel-b">
                                        <p>
                                            You can contact a school by filling out a{' '}
                                            <a href="contact.html">“Contact Us”</a> form. This form can
                                            be found to the right of both the institute and education
                                            program profiles and also at the bottom of these profiles.
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="accordion__item">
                                <div
                                    className="accordion__heading"
                                    role="heading"
                                    aria-level={3}
                                >
                                    <div
                                        className="accordion__button"
                                        onClick={() => handleToggle('c')}
                                        aria-expanded={expanded === 'c'}
                                        role="button"
                                        tabIndex={0}
                                    >
                                        How do I find a study abroad program on Edmy.com?
                                    </div>
                                </div>
                                {expanded === 'c' && (
                                    <div className="accordion__panel" id="accordion__panel-c">
                                        <p>
                                            You can contact a school by filling out a{' '}
                                            <a href="contact.html">“Contact Us”</a> form. This form can
                                            be found to the right of both the institute and education
                                            program profiles and also at the bottom of these profiles.
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="accordion__item">
                                <div
                                    className="accordion__heading"
                                    role="heading"
                                    aria-level={3}
                                >
                                    <div
                                        className="accordion__button"
                                        onClick={() => handleToggle('d')}
                                        aria-expanded={expanded === 'd'}
                                        role="button"
                                        tabIndex={0}
                                    >
                                        How do I find a school where I want to study?
                                    </div>
                                </div>
                                {expanded === 'd' && (
                                    <div className="accordion__panel" id="accordion__panel-d">
                                        <p>
                                            You can contact a school by filling out a{' '}
                                            <a href="contact.html">“Contact Us”</a> form. This form can
                                            be found to the right of both the institute and education
                                            program profiles and also at the bottom of these profiles.
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="accordion__item">
                                <div
                                    className="accordion__heading"
                                    role="heading"
                                    aria-level={3}
                                >
                                    <div
                                        className="accordion__button"
                                        onClick={() => handleToggle('e')}
                                        aria-expanded={expanded === 'e'}
                                        role="button"
                                        tabIndex={0}
                                    >
                                        Am I eligible for admission?
                                    </div>
                                </div>
                                {expanded === 'e' && (
                                    <div className="accordion__panel" id="accordion__panel-e">
                                        <p>
                                            You can contact a school by filling out a{' '}
                                            <a href="contact.html">“Contact Us”</a> form. This form can
                                            be found to the right of both the institute and education
                                            program profiles and also at the bottom of these profiles.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}