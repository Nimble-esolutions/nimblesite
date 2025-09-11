import BlogThreeGrid from '@/components/BlogThreeGrid/BlogThreeGrid';
import FooterSix from '@/components/FooterSix/FooterSix';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';

import React from 'react';


export const metadata = {
    title: "Portfolio || Nimble esolutions || Reliable, agile AI solutions, Website development and elearning solutions",
    description:
        "Your Trusted Technology Partner for AI and Turn-key solutions",
};

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Prtfolio" />
            <BlogThreeGrid />
            <MailTwo />
            <FooterSix />
        </Layout>
    );
};

export default page;