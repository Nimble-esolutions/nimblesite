
import shape from '@/assets/images/shapes/slider-2-shape-1.png'
import shape1 from '@/assets/images/shapes/slider-2-shape-2.png'
import bg from '@/assets/images/shapes/slider-2-bg-1.png'
import bgDark from '@/assets/images/shapes/slider-2-bg-1-dark.png'
import bg1 from '@/assets/images/backgrounds/slider-2-1.jpg'
import bg2 from '@/assets/images/backgrounds/slider-2-2.jpg'
import { faFacebookF, faInstagram, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'
const mainSliderTwoData = {
    shape,
    bg,
    bgDark,
    text: "We begin with understanding your needs through the lens of every stakeholder — because real synergy starts with these insights. Our tailored solutions target pain points, boost efficiency, and are delivered with unwavering commitment to quality and timelines.",
    lists: [
        { id: 1, list: "AI Solutions" },
        { id: 2, list: "Product Development" },
        { id: 3, list: "Website Devevelopment" },
		{ id: 4, list: "e-Learning Solutions" },

    ],
	socials: [
        { id: 1, icon: faFacebookF, link: "https://facebook.com", title: "Facebook" },
        { id: 2, icon: faPinterestP, link: "https://pinterest.com", title: "Pinterest" },
        { id: 3, icon: faTwitter, link: "https://twitter.com", title: "Twitter" },
        { id: 4, icon: faInstagram, link: "https://instagram.com", title: "Instragram" },
    ], 
    carouselData: [
        { id: 1, shape: shape1, bg: bg1 },
        { id: 2, shape: shape1, bg: bg2 },

    ]
}
export default mainSliderTwoData