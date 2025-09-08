
import AboutTwo from "@/components/AboutTwo/AboutTwo";
import BlogTwo from "@/components/BlogTwo/BlogTwo";
import ClientCarousel from "@/components/ClientCarousel/ClientCarousel";
import CtaFour from "@/components/CtaFour/CtaFour";
import CtaThree from "@/components/CtaThree/CtaThree";
import FaqOne from "@/components/FaqOne/FaqOne";
import FooterTwo from "@/components/FooterTwo/FooterTwo";
import FunFactTwo from "@/components/FunFactTwo/FunFactTwo";
import HeaderTwo from "@/components/HeaderTwo/HeaderTwo";
import HeaderTwoCloned from "@/components/HeaderTwo/HeaderTwoCloned";
import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import PricingOne from "@/components/PricingOne/PricingOne";
import ProjectTwo from "@/components/ProjectsTwo/ProjectsTwo";
import ServiceTwo from "@/components/ServiceTwo/ServiceTwo";
import TestimonialsOne from "@/components/TestimonialsOne/TestimonialsOne";
import TopbarTwo from "@/components/TopbarTwo/TopbarTwo";
import WorkProcessOne from "@/components/WorkProcessOne/WorkProcessOne";
import React from "react";

export const metadata = {
  title: "Welcome To Nimble E-solutions",
  description:
    "Your Trusted Technology Partner for AI and Turn-key solutions",
};

const page = () => {
  return (
    <Layout pageTitle='homeTwo'>
      <TopbarTwo />
      <HeaderTwo />
      <HeaderTwoCloned />
      <MainSliderTwo />
      <AboutTwo />
	  {/*<FunFactTwo />*/}
      <ServiceTwo />
      <FaqOne />
      <ClientCarousel pageTitle='homeTwo' />
      <ProjectTwo />
      <CtaFour />
      <WorkProcessOne />
      <TestimonialsOne />
      <PricingOne />
      <CtaThree />
      <BlogTwo />
      <FooterTwo />
    </Layout>
  );
};

export default page;
