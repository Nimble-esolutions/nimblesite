import bg from '@/assets/images/backgrounds/contact-bg-3.jpg'

const contactThreeData = {
    bg,

    tagLine: 'Get In Touch',
    title: 'Let Us Know More\n About Your Requirement',

    form: {
        action: 'inc/sendemail.php',
        fields: [
            { name: 'name', type: 'text', placeholder: 'Your Name *' },
            { name: 'phone', type: 'text', placeholder: 'Your Phone' },
            { name: 'email', type: 'email', placeholder: 'Your Email *' },
           /* { name: 'subjects', type: 'text', placeholder: 'Your Subjects *' },*/
            {
                name: 'service',
                type: 'select',
                options: [
                    { value: '', label: 'Select Service', selected: true },
                    { value: '1', label: 'AI Driven Applications' },
                    { value: '2', label: '.Net/Python Development' },
                    { value: '3', label: 'Product Enhancement' },
					{ value: '4', label: 'Website, e-commerce Portal development'}
                ]
            },
            { name: 'message', type: 'textarea', placeholder: 'Your Message *' }
        ],
        submit: {
            text: 'Send Request',
            icon: 'tolak-icons-two-arrow-right-short'
        }
    },
    contactInfo: {
        icon: 'tolak-icons-two-phone-call',
        title: 'Contact Now',
        text: '9763949769',
        href: '9763949769',
        subHref: "tel"
    }
};

export default contactThreeData;
