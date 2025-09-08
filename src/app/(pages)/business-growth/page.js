import FooterSix from '@/components/FooterSix/FooterSix';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import ServiceDetails from '@/components/ServiceDetails/ServiceDetails';
import React from 'react';

export const metadata = {
    title: "Welcome To Nimble E-solutions",
    description:
        "Your Trusted Technology Partner for implementing AI and Turn-key solutions",
};

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Customized Solutions Developement" subTitle="Service Details" />
            <ServiceDetails />
            <MailTwo />
            <FooterSix />
        </Layout>
    );
};

export default page;