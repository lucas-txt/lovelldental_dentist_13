export type NavItem = {
  href: string;
  label: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  category: "restorative" | "family" | "emergency" | "orthodontics" | "cosmetic";
};

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const site = {
  name: "Lovell Dental",
  legalName: "Lovell Dental",
  tagline: "Quality, caring dentistry in Lovell",
  description:
    "Trust your skilled Lovell dentist with all of your restorative, cosmetic, and preventive dentistry needs at Lovell Dental. We provide the dental care you and your family need to keep their smiles whole and healthy for a lifetime.",
  phone: "(307) 548-7654",
  phoneHref: "tel:+13075487654",
  emergencyPhone: "(307) 271-5910",
  emergencyPhoneHref: "tel:+13072715910",
  address: {
    street: "240 E Main St",
    city: "Lovell",
    state: "WY",
    zip: "82431",
  },
  mapUrl: "https://goo.gl/6yaTfB",
  reviewsUrl: "https://goo.gl/ASgCU7",
  facebookUrl: "https://www.facebook.com/lovelldental/",
  yelpUrl: "https://www.yelp.com/biz/lovell-dental-lovell",
  membershipUrl: "https://member.clerri.com/?slug=TX7Z",
  copyright: "Copyright © 2018 Lovell Dental",
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

export const navItems: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/emergency", label: "Emergency" },
  { href: "/new-patients", label: "New Patients" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faqs", label: "FAQs" },
  { href: "/community", label: "Community" },
  { href: "/contact", label: "Contact" },
];

export const hours = [
  { day: "Monday", time: "7:00 am - 3:00 pm" },
  { day: "Tuesday", time: "7:00 am - 3:00 pm" },
  { day: "Wednesday", time: "7:00 am - 3:00 pm" },
  { day: "Thursday", time: "7:00 am - 3:00 pm" },
] as const;

export const trustCallouts = [
  {
    title: "Dental Insurance Friendly",
    description: "We're an in-network provider with most insurances.",
    icon: "shield" as const,
  },
  {
    title: "Flexible Financing Available",
    description: "Proudly offering affordable monthly payment plans.",
    icon: "card" as const,
  },
  {
    title: "Wyoming Medicaid Welcome",
    description: "Providing quality dentistry, accessible for everyone.",
    icon: "heart" as const,
  },
];

export const featureCallouts = [
  {
    title: "Lovell's Emergency Dentist",
    description: "In pain? Have an accident? We're available 24/7.",
    icon: "siren" as const,
    href: "/emergency",
  },
  {
    title: "State-of-the-Art Technology",
    description: "The latest tools, techniques, materials & training.",
    icon: "sparkles" as const,
    href: "/services",
  },
  {
    title: "Multitude of Dental Services",
    description: "From cleanings to dental implants & more.",
    icon: "stethoscope" as const,
    href: "/services",
  },
];

export const services: Service[] = [
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortName: "Implants",
    tagline: "Replace missing teeth",
    description:
      "Missing teeth can negatively impact your appearance and oral health at the same time, but thanks to dental implants, we can reliably rebuild your smile to last a lifetime. These prosthetics can replace any number of missing teeth and are virtually indistinguishable from natural ones. Plus, our practice is able to handle the entire procedure from start to finish, making it even simpler for you to get your complete smile back.",
    image: "/assets/images/services-1.jpg",
    alt: "Smiling man and woman outdoors",
    category: "restorative",
  },
  {
    slug: "family-dentistry",
    name: "Family Dentistry",
    shortName: "Family",
    tagline: "Kids & adults always welcome",
    description:
      "We simply love serving and getting to know entire families here in Lovell. Thanks to our variety of services, we're able to help grandma, grandkids, and everyone in between. Whether it's time for your little one's first checkup and cleaning or you need a few teeth restored, Lovell Dental will always have you and your family covered. We'll make sure the next family photo you take is filled with big, bright, and healthy smiles.",
    image: "/assets/images/services-2.jpg",
    alt: "Smiling parents and daughter",
    category: "family",
  },
  {
    slug: "emergencies-root-canals",
    name: "Emergencies & Root Canals",
    shortName: "Emergency",
    tagline: "Call us, we're here to help",
    description:
      "If your teeth are suddenly damaged in an accident or a loved one starts experiencing severe dental pain, you can always reach out to Lovell Dental to get the immediate, professional care you need. Our entire team is trained to handle a wide variety of dental emergencies ranging from knocked out teeth to damaged dental work, and we do our best to always see emergency patients the same day that they call in.",
    image: "/assets/images/services-3.jpg",
    alt: "Woman holding jaw in pain",
    category: "emergency",
  },
  {
    slug: "invisalign",
    name: "Invisalign® Clear Braces",
    shortName: "Invisalign®",
    tagline: "Straighten your smile",
    description:
      "Invisalign now gives you the opportunity to straighten your crooked, crowded, or gapped teeth without the need of bulky metal braces. This treatment utilizes nearly invisible clear plastic aligner trays to shift the teeth in the most effective and discreet way possible, enabling you to get the smile you've always wanted and not compromise your daily appearance. With Invisalign, you'll be able to smile with confidence both during and after your treatment.",
    image: "/assets/images/services-4.jpg",
    alt: "Smiling mother and daughter outdoors",
    category: "orthodontics",
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    shortName: "Cosmetic",
    tagline: "Achieve your dream look",
    description:
      "A beautiful smile can do wonders for a person's self-confidence, so if you feel held back by stains, chips, cracks, or gaps, Lovell Dental is here to give you the gorgeous smile you deserve. Our cosmetic services can eliminate any imperfection you can imagine and give you a smile fit for the silver screen in just one or two easy appointments. Whether you simply want whiter teeth or a complete makeover, we're always able to deliver spectacular results.",
    image: "/assets/images/services-5.jpg",
    alt: "Woman with gorgeous smile",
    category: "cosmetic",
  },
  {
    slug: "crowns-bridges",
    name: "Crowns & Bridges",
    shortName: "Crowns",
    tagline: "Restore a healthy smile",
    description:
      "Dr. Carter's patient base ranges from very young children to seniors, so our team members are clearly experts at accommodating a wide range of oral health needs. Whether you're overdue for a checkup, badly in need of advanced restorative care, or wanting to give your look a makeover, we'll guide through a personalized treatment plan that's a perfect fit for you and your loved ones. Simply put, we want to help every smile reach its fullest potential!",
    image: "/assets/images/services-6.jpg",
    alt: "Smiling senior couple outdoors",
    category: "restorative",
  },
];

export const serviceCategories = [
  { value: "all", label: "All treatments" },
  { value: "restorative", label: "Restorative" },
  { value: "family", label: "Family" },
  { value: "emergency", label: "Emergency" },
  { value: "orthodontics", label: "Invisalign®" },
  { value: "cosmetic", label: "Cosmetic" },
] as const;

export const serviceCatalogue = [
  {
    group: "Preventive Dentistry",
    items: ["Checkups & Cleanings", "Sportsguards/Nightguards"],
  },
  {
    group: "Emergency & Children's Dentistry",
    items: ["Emergency Dentistry", "Childrens Dentistry"],
  },
  {
    group: "Restorative Dentistry",
    items: [
      "Dental Crowns",
      "CEREC and Midas Dental Technology",
      "Tooth-Colored Fillings",
      "Dentures & Partials",
      "Root Canal Therapy",
      "Tooth Extractions",
      "Wisdom Tooth Extraction",
    ],
  },
  {
    group: "Dental Implants",
    items: ["All-on-4®", "Implant Dentures"],
  },
  {
    group: "Periodontal Therapy",
    items: ["Scaling & Root Planing", "Connective Tissue Grafting"],
  },
  {
    group: "Cosmetic Dentistry",
    items: [
      "Direct Bonding",
      "ZOOM! Teeth Whitening",
      "Metal-Free Restorations",
      "Porcelain Veneers",
    ],
  },
  {
    group: "Invisalign®",
    items: ["Cost of Invisalign", "MTM® Clear Aligners"],
  },
  {
    group: "Advanced Services & Technology",
    items: [
      "TMJ/TMD Therapy",
      "Botox for TMJ Therapy",
      "3D Cone Beam Imaging",
      "Nitrous Oxide Sedation",
    ],
  },
] as const;

export const testimonials: Testimonial[] = [
  {
    quote: `I have been to Lovell Dental quite a few times and continue to be impressed! Dr. Anderson is an excellent dentist. He and his staff are friendly and highly skilled. His office is top of the line, making each visit a comfortable, enjoyable experience. Most recently, I went there and needed a filling. I have been to many other dentists for fillings, and the shot Dr. Anderson gave me to numb up the area hardly caused any discomfort at all. The needed work was done quickly and was painless. I 100% recommend anyone who is due for a cleaning or is in need of other dental work to go see Dr. Anderson.`,
    name: "Jennifer T.",
    location: "Lovell, WY",
  },
  {
    quote: `A big thank you to Dr. Anderson and the ladies at Lovell Dental! I had a great experience there when having to get a wisdom tooth pulled… and not many people can say that!! was in and out quick, had zero pain, and was very well taken care of by the doctor and his great team of ladies! Will definitely be coming back for all my future dental work.`,
    name: "Anisha F.",
    location: "Powell, WY",
  },
  {
    quote: `I am completely petrified of dentists. He is absolutely patient and compassionate. The injections do not hurt like other offices. This is the only place I will ever go. The prices were reasonable and they use specials which saved me a lot. He has changed my opinions of dentists forever. Thank you so much and they have us as new loyal and appreciative patients from now on. I would definitely recommend him to everyone. Pleasantly surprised and look forward to getting my teeth in shape with him.`,
    name: "Stacy S.",
    location: "Cody, WY",
  },
];

export const faqs: Faq[] = [
  {
    question: "How Do I Find the Best Place to Get Dental Work Done?",
    answer:
      "The ideal office for you to undergo dental treatment will be based on a variety of factors, including location, hours, credentials, insurance, cleanliness, payments/fees, and safety. You'll also want to be aware of the kind of services you're looking for, such as if you need tooth extractions, Invisalign, dental implants, or even sedation dentistry. Some practices may be a better fit for you than others. Finally, you should try getting familiar with your dental team to see how they treat their patients. You can also read the dentist and team bios on the website to learn more about their background and education.",
  },
  {
    question: "How Much Does a Dental Checkup & Cleaning Cost in Lovell?",
    answer:
      "Several factors can impact the specific cost of dental checkups and cleanings, including geography and the patient's current dental health. That said, the average price throughout the United States for these appointments is usually between $200 and $350. Of course, if a patient has dental insurance, the cost of these visits can be negotiated between their provider and dentist. During a checkup and cleaning, you should expect to review your oral health history, discuss your smile concerns, and then undergo an oral examination, X-rays, a professional cleaning, and an oral cancer screening.",
  },
  {
    question: "How Do I Get Emergency Dental Care?",
    answer:
      "Your first step should always be to call our office if you're experiencing something painful in your mouth, that way someone on the team can help schedule you for the earliest appointment. If you're suffering from a more life-threatening situation, such as excessive bleeding, then you should call 911 and head to your local ER instead. Although hospitals might not have dentists on staff, they can provide antibiotics and at least help be pain-free until you can undergo dental care. Our practice welcomes same-day appointments so that patients are likelier to get the treatment they need at a moment's notice. It's also important to remember that dental emergencies often stem from underlying issues that can be prevented, so you should visit your dentist regularly every six months to save yourself time, money, and problems in the future.",
  },
  {
    question: "What Do You Do If You Can't Afford a Dentist?",
    answer:
      "If you want to save money on dental care, then you'll want to make sure to take care of your teeth with daily oral hygiene and routine dental checkups. However, you can also take advantage of dental insurance coverage to lower your out-of-pocket expenses should something happen. Our team will be able to walk you through the details of your benefits so that you can maximize them. If you don't have dental insurance, then you might consider signing up for CareCredit, which can help turn your treatments into monthly payments that come with little to no interest. We even have special offers that can reduce the price of examinations for both new patients and children.",
  },
];

export const insurancePlans = [
  "United Healthcare",
  "United Concordia",
  "Delta Dental",
  "Blue Cross Blue Shield",
  "MetLife",
  "Aetna",
  "Cigna",
  "Humana",
] as const;

export const communityPhotos = [
  { src: "/assets/images/index-community-1.jpg", alt: "Team at community event" },
  { src: "/assets/images/index-community-2.jpg", alt: "Child in front of christmas tree" },
  { src: "/assets/images/index-community-3.jpg", alt: "Dental team posing at community outing" },
  { src: "/assets/images/index-community-4.jpg", alt: "Two children at community event" },
  { src: "/assets/images/index-community-5.jpg", alt: "Doctor and assistant posing with kids" },
  { src: "/assets/images/index-community-6.jpg", alt: "Lovell Dental on jersey" },
  { src: "/assets/images/index-community-7.jpg", alt: "Child posing with certificate" },
  { src: "/assets/images/index-community-8.jpg", alt: "Lovell Dental thank you card with signatures" },
] as const;

export const affiliations = [
  { name: "American Dental Association", logo: "/assets/images/affil-1.jpg" },
  { name: "Invisalign Provider", logo: "/assets/images/affil-2.jpg" },
  { name: "Wyoming Dental Association", logo: "/assets/images/affil-3.jpg" },
  { name: "White Cap Institute", logo: "/assets/images/affil-4.jpg" },
  { name: "3M ESPE", logo: "/assets/images/affil-5.jpg" },
] as const;

export const quickActions = [
  { label: "Give us a Call", href: site.phoneHref, detail: site.phone },
  { label: "View our Map", href: site.mapUrl, detail: "240 E Main St" },
  { label: "Read Our Reviews", href: site.reviewsUrl, detail: "Patient stories" },
  { label: "Like us on Facebook", href: site.facebookUrl, detail: "Lovell Dental" },
] as const;
