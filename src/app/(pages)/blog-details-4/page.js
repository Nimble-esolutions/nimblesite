import BlogDetails from '@/components/BlogDetails/BlogDetails';
import FooterThree from '@/components/FooterThree/FooterThree';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';

import image1 from "@/assets/images/blog/blog-3-1.png";

export const metadata = {
    title: "Monjin",
    description: "Details about Fergusson College website project launch.",
};

export default function Page() {
    const blogData = {
        image: image1,
        title: "https://www.monjin.com/",
        date: "<span>--</span> 2 Jan 25",
        year: "Going Live",
        text: "Proud to add Fergusson College, one of Pune’s most prestigious colleges with 140 years of legacy, to our successful website launches."
    };

    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Project Details" subTitle="Fergusson College" />
            <BlogDetails blog={blogData} />   {/* Pass data here */}
            <MailTwo />
            <FooterThree />
        </Layout>
    );
}
