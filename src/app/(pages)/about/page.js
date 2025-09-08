
import AboutThree from '@/components/AboutThree/AboutThree';
import SkillTwo from '@/components/SkillTwo/SkillTwo';
import CtaOne from '@/components/CtaOne/CtaOne';
import FaqOne from '@/components/FaqOne/FaqOne';
import FooterSix from "@/components/FooterSix/FooterSix";
import FooterThree from '@/components/FooterThree/FooterThree';
import FunFactTwo from '@/components/FunFactTwo/FunFactTwo';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import ServiceTwo from '@/components/ServiceTwo/ServiceTwo';
import TeamOne from '@/components/TeamOne/TeamOne';
import TestimonialsTwo from '@/components/TestimonialsTwo/TestimonialsTwo';
import React from 'react';

export const metadata = {
    title: " About || Nimble esolutions || Reliable, agile AI solutions, Website development and elearning solutions",
    description:
        "Your Trusted Technology Partner for AI and Turn-key solutions",
};

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="About Us" subTitle="About" />
            <AboutThree />
            {/*<FunFactTwo />*/}
			<SkillTwo />
            {/*<CtaOne page={true} />*/}
				{/*<ServiceTwo page={true} titleTwo="two" />
            <TestimonialsTwo page={true} />
				<FaqOne />*/}
            <TeamOne />
			{/* <MailTwo />*/}
			<FooterSix />
			{/* <FooterThree />*/}
        </Layout>
    );
};

export default page;