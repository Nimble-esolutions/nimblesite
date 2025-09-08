import workProcessBg from '@/assets/images/shapes/work-process-bg-2.png';
import workProcessImage1 from '@/assets/images/resources/work-process-2-1.jpg';
import workProcessImage2 from '@/assets/images/resources/work-process-2-2.jpg';
import workProcessImage3 from '@/assets/images/resources/work-process-2-3.jpg';
import workProcessImage4 from '@/assets/images/resources/work-process-2-4.jpg';

const workProcessTwoData = {
    bgImage: workProcessBg,
    tagLine: "Our Methodology",
    title: "Shaped by Experience, Driven by Results",
    items: [
        {
            id: 1,
            title: "Every solution starts with listening",
            text: "We listen deeply, analyze thoughtfully, to design solutions for your needs.",
            image: workProcessImage1,
            delay: "00ms",
            reverse: false,
        },
        {
            id: 2,
            title: "Turning insights into solutions",
            text: "Our UI team designs mock interfaces that define flow, controls, and validations.",
            image: workProcessImage2,
            delay: "100ms",
            reverse: true,
        },
        {
            id: 3,
            title: "Your Solutions Ready for Users",
            text: "Developed with expert precision, our solutions are deployed with confidence and care.",
            image: workProcessImage3,
            delay: "200ms",
            reverse: false,
        },
        {
            id: 4,
            title: "Support That Stays With You",
            text: "We offer hands-on training & prompt support — something our clients truly value.",
            image: workProcessImage4,
            delay: "300ms",
            reverse: true,
        },
    ],
};

export default workProcessTwoData;
