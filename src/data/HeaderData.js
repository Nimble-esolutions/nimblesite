import main_logo from "@/assets/images/logo-dark.png";
import logo_light from "@/assets/images/logo-light.png";
import logo_rtl from "@/assets/images/logo-dark-rtl.png";
import logo3 from "@/assets/images/logo-3.png";
import logo5 from "@/assets/images/logo-5.png";
import logo6 from "@/assets/images/logo-6.png";
import bg from "@/assets/images/backgrounds/header-bg.jpg";
import flag from "@/assets/images/shapes/flag.png"
import flagTwo from "@/assets/images/shapes/flag.png"
import {
  faTwitter,
  faInstagram,
  faFacebookF,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import {

  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const sidebarOneText =
  "Mauris ut enim sit amet lacus ornare ullamcor. Praesent placerat nequ puru rhoncu tincidunt odio ultrices.Sed feugiat feugiat felis.";

const singleNavItems = [
  { name: 'Home', href: 'home', },
  { name: 'Services', href: 'services', },
  { name: 'About', href: 'about', },
  { name: 'Team', href: 'team', },
  { name: 'Project', href: 'project', },
  { name: 'Contact', href: 'contact', },
  { name: 'Blog', href: 'blog', },
];
const singleNavItemsTwo = [
  { name: 'Home', href: 'home', },
  { name: 'About', href: 'about', },
  { name: 'Services', href: 'services', },
  { name: 'Project', href: 'project', },
  { name: 'Testimonials', href: 'testimonial', },
  { name: 'Pricing', href: 'pricing', },
  { name: 'Blog', href: 'blog', },
];
const singleNavItemsThree = [
  { name: 'Home', href: 'home', },
  { name: 'About', href: 'about', },
  { name: 'Testimonial', href: 'testimonial', },
  { name: 'Project', href: 'project', },
  { name: 'Team', href: 'team', },
  { name: 'Contact', href: 'contact', },
  { name: 'Blog', href: 'blog', },
]
const singleNavItemsFour = [
  { name: 'Home', href: 'home', },
  { name: 'Service', href: 'service', },
  { name: 'Team', href: 'team', },
  { name: 'Pricing', href: 'pricing', },
  { name: 'Testimonial', href: 'testimonial', },
  { name: 'Blog', href: 'blog', },
];
const singleNavItemsFive = [
  { name: 'Home', href: 'home', },
  { name: 'About', href: 'about', },
  { name: 'Service', href: 'service', },
  { name: 'Project', href: 'project', },
  { name: 'Team', href: 'team', },
  { name: 'Testimonial', href: 'testimonial', },
  { name: 'Blog', href: 'blog', },
];
const singleNavItemsSix = [
  { name: 'Home', href: 'home', },
  { name: 'About', href: 'about', },
  { name: 'Service', href: 'service', },
  { name: 'Team', href: 'team', },
  { name: 'Tab', href: 'tab', },
  { name: 'Contact', href: 'contact', },
  { name: 'Blog', href: 'blog', },
];
const singleNavItemsSeven = [
  { name: 'Home', href: 'home', },
  { name: 'About', href: 'about', },
  { name: 'Service', href: 'service', },
  { name: 'Project', href: 'project', },
  { name: 'Testimonial', href: 'testimonial', },
  { name: 'Funfact', href: 'funfact', },
  { name: 'Blog', href: 'blog', },
];

const navItems = [
  {
    id: 1,
    name: "About",
    href: "/about",
  },
  {
    id: 2,
    name: "Portfolio",
    href: "/blog-grid",
    
  },
  {
    id: 3,
    name: "Services",
    href: "#",
    subNavItems: [
      
      { id: 1, name: "AI Solutions", href: "/services-two-carousel" },
      { id: 2, name: "Customized Development", href: "/business-growth" },
      { id: 3, name: "Product Enhancement", href: "/business-solution" },
      { id: 4, name: "E-Learning Solutions", href: "/marketing-solution" },
      { id: 5, name: "Website Development", href: "/technology-services" },
      { id: 6, name: "", href: "/business-marketing" },
      { id: 7, name: "", href: "/business-support" },
    ],
  },

  
 
  
];

const social = [
  { icon: faFacebookF, link: "https://facebook.com" },
  { icon: faPinterestP, link: "https://pinterest.com" },
  { icon: faTwitter, link: "https://twitter.com" },
  { icon: faInstagram, link: "https://instagram.com" },
];
const topbarTwoCarousel = [
  {
    id: 1,
    text: "Best It-Solution Business !",
  },
  {
    id: 2,
    text: "Best It-Solution Business !",
  },
];

const topbarFiveData = {
  infoIcon: "tolak-icons-two-phone-call",
  infoText: "Emergency Call",
  infoTel: "+95 2512 2514 25",
  infoHref: "+952512251425",
  infoSubHref: "tel",
  links: [
    {
      id: 1,
      name: "Login",
      href: "login"
    },
    {
      id: 2,
      name: "Register",
      href: "contact"
    }
  ],
  flag,
  languages: [
    {
      id: 1,
      flag: flag,

      language: "English"
    },
    {
      id: 2,
      flag: flagTwo,

      language: "French"
    }
  ]

}

const headerData = {
  bg,
  topbarTwoCarousel,
  logo_rtl,
  logo3,
  logo5,
  logo6,
  icons: [
    {
      id: 1,
      icon: faEnvelope,
      content: "demo@example.com",
      subHref: "mailto",
    },
    {
      id: 2,
      icon: faMapMarkerAlt,
      content: "27, Dhaka London City, LOT",
      href: "https://www.google.com/maps",
    },
  ],

  sidebarOneIcons: [
    {
      id: 1,
      icon: "fas fa-map-marker-alt",
      content: "27, Dhaka London City Dhaka, Bangladesh",
    },
    {
      id: 2,
      icon: "fas fa-clock",
      content: "Mon - Fri: 8.00 am. - 6.00 pm.",
    },
    {
      id: 3,
      icon: "fas fa-envelope",
      content: "27, Dhaka London City Dhaka, Bangladesh",
      href: "https://www.google.com/maps",
    },
  ],
  links: [
    {
      id: 1,
      name: "Login",
      href: "login",
    },
    {
      id: 2,
      name: "Register",
      href: "contact",
    },
    {
      id: 3,
      name: "Services",
      href: "services",
    },
  ],
  headerFourCall: {
    href: "25844132",
    subHref: "tel",
    icon: "icofont-phone-circle",
    text: "Need Help Now?",
    number: "++(25)844132",
  },
  navItems,
  social,
  main_logo,
  logo_light,
  sidebarOneText,
  singleNavItems,
  singleNavItemsTwo,
  singleNavItemsThree,
  singleNavItemsFour,
  singleNavItemsFive,
  singleNavItemsSix,
  singleNavItemsSeven,
  topbarFiveData
};

export default headerData;
