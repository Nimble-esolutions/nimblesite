

import Layout from '@/components/Layout/Layout';
import React from 'react';
import BlogFive from "@/components/BlogFive/BlogFive";
//import CtaEight from "@/components/CtaEight/CtaEight";
import CtaOne from "@/components/CtaOne/CtaOne";
//import MainSliderSix from "@/components/MainSliderSix/MainSliderSix";
import SlideText from "@/components/SlideText/SlideText";
import AboutSix from "@/components/AboutSix/AboutSix";
import ServiceFour from "@/components/ServiceFour/ServiceFour";
import WhyChooseFour from "@/components/WhyChooseFour/WhyChooseFour";
import TeamFour from "@/components/TeamFour/TeamFour";
import FaqThree from "@/components/FaqThree/FaqThree";
import WorkProcessTwo from "@/components/WorkProcessTwo/WorkProcessTwo";
import ContactThree from "@/components/ContactThree/ContactThree";
import VideoFour from "@/components/VideoFour/VideoFour";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import ClientCarousel from "@/components/ClientCarousel/ClientCarousel";
import TabOne from "@/components/TabOne/TabOne";
import HeaderSix from "@/components/HeaderSix/HeaderSix";
import HeaderTwo from "@/components/HeaderTwo/HeaderTwo";
import HeaderTwoCloned from "@/components/HeaderTwo/HeaderTwoCloned";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import AboutTwo from "@/components/AboutTwo/AboutTwo";
import FooterSix from "@/components/FooterSix/FooterSix";
import HeaderSixCloned from '@/components/HeaderSix/HeaderSixCloned';
import TestimonialsFive from "@/components/TestimonialsFive/TestimonialsFive";


export const metadata = {
    title: "Welcome To Nimble E-solutions",
    description:
        "Your Trusted Technology Partner for implementing AI and Turn-key solutions",
};

const page = () => {
    return (
        <Layout pageTitle="homeSix">
			     
		    <HeaderSix />
            <HeaderSixCloned />
            <MainSliderTwo />
            <SlideText pageTitle="Nimble esolutions" />
            <AboutTwo />
			<ServiceFour />
			<CtaOne />
			<ClientCarousel pageTitle="homeSix" />
			<WorkProcessTwo />
            {<WhyChooseFour />}
            {/*<TeamFour />*/}
			{/*<TabOne />*/}
            {/*<VideoFour />*/}
			<TestimonialsFive />
            {/*<FaqThree />*/}
		    <ContactThree />
            <GoogleMap />
            {/*<BlogFive />*/}
            <FooterSix />
        </Layout>
    );
};

export default page;