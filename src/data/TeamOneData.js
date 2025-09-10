import image1 from '@/assets/images/team/team-1-1.jpg'
import image2 from '@/assets/images/team/team-1-2.jpg'
import image3 from '@/assets/images/team/team-1-3.jpg'
import image4 from '@/assets/images/team/team-1-4.jpg'
import image5 from '@/assets/images/team/team-1-5.jpg'
import image6 from '@/assets/images/team/team-1-6.jpg'
import { faFacebookF, faInstagram, faPinterestP, faTwitter,  faLinkedin, faAngleDoubleRight } from '@fortawesome/free-brands-svg-icons';
const teamOneData = {
    tagLine: "Our Team",
    title: "Together, We Make It Happen",
    /*title2: "Meet The Team Metting Solution",*/
    carouselData: [
        {
            id: 1,
            image: image1,
            
            socials: [
			{  id: 1, icon: faLinkedin, link: "https://instagram.com", name: "Linkedin"},
			{  id: 2, icon: faFacebookF, link:"#", des: "fa-angle-double-right"},
            ], title: "Neeta Joshi",
            href: "team-details",
            designation: "Founder",
            description: "Founder & CEO with 20+ years of experience" // <-- add this

        },
        {
            id: 2,
            image: image2,
            socials: [
                { id: 1, icon: faLinkedin, link: "https://facebook.com", name: "Facebook", des: "20+ Yrs. of Experience" },
                ], title: "Kunjika Dhapre",
            href: "team-details",
            designation: "Technical Head",
            description: "Project Manager expert in managing large teams"


        },
        {
            id: 3,
            image: image3,
            socials: [
                { id: 1, icon: faLinkedin, link: "https://facebook.com", name: "Facebook", des: "20+ Yrs. of Experience" },
                ], title: "Pradnya Kulkarni",
            href: "team-details",
            designation: "Project Manager",
            description: "Project Manager expert in managing large teams"


        },
        {
            id: 4,
            image: image4,
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" , des: "20+ Yrs. of Experience" },
                { id: 2, icon: faPinterestP, link: "https://pinterest.com", name: "Pinterest" , des: "20+ Yrs. of Experience" },
                { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" , des: "20+ Yrs. of Experience"},
            ], title: "vaishnavi Gokhale",
            href: "team-details",
            designation: "Founder",
            description: "Project Manager expert in managing large teams"


        },
        {
            id: 5,
            image: image5,
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" , des: "20+ Yrs. of Experience" },
                { id: 2, icon: faPinterestP, link: "https://pinterest.com", name: "Pinterest" },
                { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
            ], title: "David Copers",
            href: "team-details",
            designation: "Manager",description: "Project Manager expert in managing large teams"


        },
        {
            id: 6,
            image: image6,
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" , des: "20+ Yrs. of Experience"},
                { id: 2, icon: faPinterestP, link: "https://pinterest.com", name: "Pinterest" },
                { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
            ], title: "Kevin Martin",
            href: "team-details",
            designation: "Founder",
            description: "Project Manager expert in managing large teams"


        }
    ]


}
export default teamOneData;