
import shape from '@/assets/images/shapes/service-4-bottom-shape.png';
import image1 from '@/assets/images/resources/service-4-1.jpg';
import image2 from '@/assets/images/resources/service-4-2.jpg';
import image3 from '@/assets/images/resources/service-4-3.jpg';
import image4 from '@/assets/images/resources/service-4-4.jpg';

const serviceFourData = {

    shape,
    tagLine: "SERVICES PORTFOLIO",
    title: "IT solutions to modernize systems & drive operational excellence",
    carouselData: [
        {
            id: 1,
            image: image1,
            icon: "tolak-icons-two-smart-grid",
            title: "Customized Solutions Development",
            text: "Using ASP .Net, MS-SQL, React .Js MySQL, Python and Django Platforms",
            href: "technology-services",
        },
        {
            id: 2,
            image: image2,
            icon: "tolak-icons-two-seo",
            title: "Product Enhancements",
            text: "Adapt to ongoing enhancements integrating new features ",
            href: "business-growth",
        },
        {
            id: 3,
            image: image3,
            icon: "tolak-icons-two-badge-check", /*tolak-icons-two-cybersecurity*/
            title: "eLearning Solutions",
            text: "eLearning content development using Articulate and LMS platform development",
            href: "business-solution",
        },
        {
            id: 4,
            image: image4,
            icon: "tolak-icons-two-global-solution",
            title: "Website Development",
            text: "CMS driven ecommerce portals and Interactive website development",
            href: "business-marketing",
        },
    ],
    /*bottom: {
        title: "We Provide More Details Let Me Know What You Need Help",
        list: [
            {
                icon: "tolak-icons-two-arrow-circle-right",
                text: "Consultancy & solution",
            },
            {
                icon: "tolak-icons-two-arrow-circle-right",
                text: "Competitor Research Business",
            },
        ],
        btnText: "View All Service",
        btnLink: "/about",
    },*/
};

export default serviceFourData;
