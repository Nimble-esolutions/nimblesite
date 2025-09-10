'use client'
import React, { useEffect, useState } from 'react';
import teamOneData from '@/data/TeamOneData';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';

const { tagLine, title, title2, carouselData, secondSection } = teamOneData;

const TeamOne = ({ titleTwo }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <>
            {/* First Team Section */}
            <section className="team-one" id="team-first">
                <Container>
                    <div className={`${titleTwo === "two" ? "sec-title-two" : "sec-title"} text-center`}>
                        <h6 className={`${titleTwo === "two" ? "sec-title-two__tagline" : "sec-title__tagline"}`}>
                            <span className={`${titleTwo === "two" ? "sec-title-two__tagline__left icofont-rounded-double-left" : "sec-title__tagline__left"}`}></span>
                            {tagLine}
                            <span className={`${titleTwo === "two" ? "sec-title-two__tagline__right icofont-rounded-double-right" : "sec-title__tagline__right"}`}></span>
                        </h6>
                        <h3 className='sec-title__title'>{titleTwo === "two" ? title2 : title}</h3>
                    </div>

                    <Row className="gutter-y-30">
                        {carouselData.map(({ id, image, socials, title, href, designation,description }) =>
                            <Col lg={4} md={6} key={id}>
                                <div className="team-card wow fadeInUp" data-aos='fade-up' data-wow-duration='1500ms'>
                                    <div className="team-card__image">
                                        <Image src={image} alt={title} style={{ height: "auto" }} />
                                        <p className="team-card__description">{description}</p>
                                    </div>
                                    <div className="team-card__content">
                                        <div className="team-card__hover">
                                               
                                            <div className="team-card__social">
                                                <i className="fa fa-plus"></i>
                                                <div className="team-card__social__list">
                                                    {socials.map(({ id, icon, title, link }) => (
                                                        <Link key={id} href={link}>
                                                            <FontAwesomeIcon icon={icon} />
                                                            <span className="sr-only">{title}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <h3 className="team-card__title">
                                            <Link href={href}>{title}</Link>
                                        </h3>
                                        <p className="team-card__designation">{designation}</p>
                                    </div>
                                </div>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>

            {/* Second Team Section */}
            {secondSection && secondSection.length > 0 && (
                <section className="team-one" id="team-second" style={{ marginTop: '80px' }}>
                    <Container>
                        <div className="sec-title text-center">
                            <h6 className="sec-title__tagline">
                                <span className="sec-title__tagline__left icofont-rounded-double-left"></span>
                                Our New Team
                                <span className="sec-title__tagline__right icofont-rounded-double-right"></span>
                            </h6>
                            <h3 className='sec-title__title'>Meet Our Experts</h3>
                        </div>

                        <Row className="gutter-y-30">
                            {secondSection.map(({ id, image, socials, title, href, designation }) =>
                                <Col lg={4} md={6} key={id}>
                                    <div className="team-card wow fadeInUp" data-aos='fade-up' data-wow-duration='1500ms'>
                                        <div className="team-card__image">
                                            <Image src={image} alt={title} style={{ height: "auto" }} />
                                            <p className="team-card__description">{description}</p>
                                        </div>
                                        <div className="team-card__content">
                                            <div className="team-card__hover">
                                                <div className="team-card__social">
                                                    <i className="fa fa-plus"></i>
                                                    <div className="team-card__social__list">
                                                        {socials.map(({ id, icon, title, link }) => (
                                                            <Link key={id} href={link}>
                                                                <FontAwesomeIcon icon={icon} />
                                                                <span className="sr-only">{title}</span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="team-card__title">
                                                <Link href={href}>{title}</Link>
                                            </h3>
                                            <p className="team-card__designation">{designation}</p>
                                        </div>
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </section>
            )}
        </>
    );
};

export default TeamOne;
