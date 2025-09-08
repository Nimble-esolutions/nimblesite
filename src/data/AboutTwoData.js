import bg from '@/assets/images/shapes/about-bg-1.jpg'
import shape from '@/assets/images/shapes/about-2-shape-1.png'

import contImage from '@/assets/images/resources/about-2-1.png'
import contShape from '@/assets/images/shapes/about-2-shape-2.png'
import image1 from '@/assets/images/resources/about-2-1.jpg'
import image2 from '@/assets/images/resources/about-2-3.jpg'
const aboutTwoData = {
    bg,
    shape, image1, image2, 

    tagLine: "Focused Services",
    title: "Implementing AI Solutions",
    text: "For businesses, automating routine tasks with AI can save valuable time and increase efficiency — but implementing these solutions need planning, strategy, and know-how of the available tools. We provide all three, helping you implement AI solutions that are practical, cost-effective, and built for long-term success. ",


    count: "100",
    tabItems: [
       {
            id: 1,
            title: "Customer Service"
        },
        {
            id: 2,
            title: "Finance & Accounting"
        },
        {
            id: 3,
            title: "Sales & Marketing"
		},
		{
            id: 4,
            title: "Human Resources "
		},
		{
            id: 5,
            title: "Operations & Admin Tasks"
		},
    ],
    tabContents: [
        {
            id: 1,
            image: contImage,
            shape: contShape,
            lists: ["AI Chatbots", "Voice Assistants", "E-mail Responses,"
            ],

        },
        {
            id: 2,
            image: contImage,
            shape: contShape,
            lists: ["Invoice Processing", "Expense Management", "Forecasting"

            ],

        },
        {
            id: 3,
            image: contImage,
            shape: contShape,
            lists: ["Lead Procrurement", "Customized Campaigns", "Customer Insights"

            ],

        },
		 {
            id: 4,
            image: contImage,
            shape: contShape,
            lists: ["Recruitment Screening", "Training", "Performance Monitoring"

            ],

        },
		 {
            id: 5,
            image: contImage,
            shape: contShape,
            lists: ["Data Entry", "Document Management", "Scheduling & follow-ups"

            ],

        },
	      
    ]




}
export default aboutTwoData;