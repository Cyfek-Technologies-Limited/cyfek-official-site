export const site = {
  name: 'Cyfek',
  legalName: 'Cyfek Technologies Limited',
  contactEmail: 'hello@cyfek.com',
}

export type Product = {
  slug: string
  name: string
  category: string
  tagline: string
  summary: string
  description: string
  color: string
  image: string
  imageAlt: string
  url?: string
  status: 'Live' | 'Early access'
  audiences: string[]
  features: { title: string; desc: string }[]
  steps: { title: string; desc: string }[]
}

export const products: Product[] = [
  {
    slug: 'seltra',
    name: 'Seltra',
    category: 'Advertising & marketing',
    tagline: 'Get paid to post ads on your social media',
    summary: 'Turn everyday social media users into a paid distribution network for brands.',
    description:
      'Seltra connects brands with real people who share sponsored posts on their own social accounts. Advertisers reach authentic audiences, and posters earn money online with nothing more than data and a smartphone—no skills or experience needed.',
    color: 'bg-rose-600',
    image: '/images/prod-seltra.png',
    imageAlt: 'Woman holding a smartphone showing a sponsored social media post',
    url: 'https://seltra.app',
    status: 'Live',
    audiences: ['Brands & advertisers', 'Social media users', 'Marketing agencies'],
    features: [
      { title: 'Earn from your feed', desc: 'Pick available ad campaigns, post them to your socials and get paid for every completed task.' },
      { title: 'Authentic reach for brands', desc: 'Put campaigns in front of real audiences through trusted, everyday voices.' },
      { title: 'No experience needed', desc: 'Anyone with a smartphone and data can sign up and start earning in minutes.' },
      { title: 'Campaign tracking', desc: 'Advertisers see where posts went live and how campaigns are performing.' },
    ],
    steps: [
      { title: 'Sign up', desc: 'Create a free Seltra account from your phone.' },
      { title: 'Choose an ad', desc: 'Browse brand campaigns available to post.' },
      { title: 'Post and get paid', desc: 'Share on your social media and receive your earnings.' },
    ],
  },
  {
    slug: 'applylot',
    name: 'Applylot',
    category: 'HR & careers',
    tagline: 'AI that applies to jobs for you',
    summary: 'Automate your job search—from profile and resume to matching and applying.',
    description:
      'Applylot is an AI-powered job application platform that automates the application process. Manage your profiles, upload resumes, define your job preferences and let Applylot surface relevant career opportunities and apply on your behalf.',
    color: 'bg-indigo-600',
    image: '/images/prod-applylot.png',
    imageAlt: 'Professional reviewing a job application dashboard on a laptop',
    status: 'Early access',
    audiences: ['Job seekers', 'Graduates', 'Career switchers'],
    features: [
      { title: 'Smart profiles', desc: 'Keep multiple professional profiles ready for different roles and industries.' },
      { title: 'Resume management', desc: 'Upload and organise resumes, and use the right one for every application.' },
      { title: 'Job preferences', desc: 'Define roles, locations, salary and work style so only relevant jobs come through.' },
      { title: 'AI job matching', desc: 'Discover opportunities that fit your experience, scored and ranked for you.' },
      { title: 'Automated applications', desc: 'Let Applylot handle repetitive application steps so you apply to more, faster.' },
      { title: 'Application tracking', desc: 'See every application and its status in one dashboard.' },
    ],
    steps: [
      { title: 'Build your profile', desc: 'Add your details and upload your resume.' },
      { title: 'Set preferences', desc: 'Tell Applylot what kind of role you want.' },
      { title: 'Let AI apply', desc: 'Review matches and let Applylot automate the rest.' },
    ],
  },
  {
    slug: 'bikespot',
    name: 'Bikespot',
    category: 'Mobility & fintech',
    tagline: 'Ride now, pay over time',
    summary: 'Flexible financing that makes owning an electric bike affordable.',
    description:
      'Bikespot makes electric mobility accessible. Browse quality e-bikes, check your eligibility in minutes and spread the cost with flexible payment plans—perfect for commuters, delivery riders and small businesses.',
    color: 'bg-emerald-600',
    image: '/images/prod-bikespot.png',
    imageAlt: 'Modern electric bike parked on a city street at golden hour',
    status: 'Live',
    audiences: ['Commuters', 'Delivery riders', 'Small businesses'],
    features: [
      { title: 'Browse e-bikes', desc: 'Compare electric bikes by range, speed and price in one place.' },
      { title: 'Flexible financing', desc: 'Choose a payment plan that fits your income and pay in instalments.' },
      { title: 'Quick eligibility check', desc: 'Apply online and get a financing decision fast.' },
      { title: 'Earn while you ride', desc: 'Ideal for delivery and logistics riders who want to own their bike.' },
    ],
    steps: [
      { title: 'Pick your bike', desc: 'Choose the e-bike that suits your needs.' },
      { title: 'Apply for financing', desc: 'Complete a short online application.' },
      { title: 'Ride away', desc: 'Get your bike and pay over time.' },
    ],
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

export const solutions = [
  { name: 'Advertising & marketing', image: '/images/sol-marketing.png', href: '/products/seltra' },
  { name: 'HR & recruitment', image: '/images/sol-hr.png', href: '/products/applylot' },
  { name: 'Mobility & fintech', image: '/images/sol-mobility.png', href: '/products/bikespot' },
  { name: 'Real estate', image: '/images/sol-realestate.png', href: '/services' },
  { name: 'Workflow automation', image: '/images/sol-automation.png', href: '/services' },
  { name: 'Custom software', image: '/images/sol-software.png', href: '/services' },
]

export const services = [
  { title: 'Website development', desc: 'Fast, modern marketing sites, web apps and e-commerce built to convert and scale.' },
  { title: 'Mobile app development', desc: 'iOS and Android apps that your customers will love to use, from MVP to launch.' },
  { title: 'Custom software', desc: 'Internal tools, dashboards and platforms tailored to the way your business works.' },
  { title: 'UI/UX design', desc: 'Research-driven product design, prototypes and design systems.' },
  { title: 'Automation & integrations', desc: 'Connect your tools and automate repetitive workflows to save time and cost.' },
  { title: 'Maintenance & support', desc: 'Hosting, monitoring, updates and ongoing improvements after launch.' },
]
