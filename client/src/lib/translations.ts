export type Language = 'ar' | 'en';

export const translations = {
  ar: {
    // Navbar
    nav: {
      home: 'الرئيسية',
      about: 'لماذا نحن',
      services: 'خدماتنا',
      contact: 'اتصل بنا',
      contactUs: 'تواصل معنا',
      tagline: 'للسياحة والسفر',
    },
    // Hero
    hero: {
      badge: 'مكتب ريم للسياحة والسفر',
      title: 'جسرك المحلي',
      titleHighlight: 'للعالم',
      description: 'سافر بذكاء، أمان، وراحة. خطط لرحلتك القادمة معنا واستمتع بتجربة لا تنسى.',
      discoverServices: 'اكتشف خدماتنا',
      bookNow: 'احجز الآن',
      location: 'الموقع',
      locationValue: 'طرابلس، جبل البداوي',
      service: 'الخدمة',
      serviceValue: 'متابعة 24/24 ساعة',
    },
    // WhyUs
    whyUs: {
      badge: 'لماذا ريم ترافل؟',
      title: 'نحن أكثر من مجرد مكتب سفر',
      description: 'نحن شركائكم في كل رحلة... نفهم احتياجاتكم لأننا جزء منكم. خطط لسفرتك القادمة معنا واستمتع بتجربة لا تنسى.',
      features: {
        support: {
          title: 'متابعة 24/24',
          description: 'اتصل بنا بأي وقت. فريقنا متواجد دائماً للرد على استفساراتك ومتابعة رحلتك خطوة بخطوة.',
        },
        prices: {
          title: 'أسعار مناسبة',
          description: 'سفر مضمون بسعر مناسب. نحرص دائماً على تقديم أفضل العروض والخيارات الاقتصادية.',
        },
        visas: {
          title: 'خبرة في التأشيرات',
          description: 'خبرة خاصة في معاملات التأشيرات للفلسطينيين، السوريين، واللبنانيين لمختلف الوجهات.',
        },
        location: {
          title: 'المكتب الوحيد في البداوي',
          description: 'بخدمتكم بكل فخر واستعداد. نوفر عليكم عناء التنقل بوجودنا بالقرب منكم.',
        },
      },
    },
    // Services
    services: {
      badge: 'باقة متكاملة',
      title: 'اكتشف خدماتنا',
      description: 'نقدم مجموعة واسعة من الخدمات لتلبية كافة احتياجاتك المتعلقة بالسفر والمعاملات الرسمية تحت سقف واحد.',
      items: {
        flights: {
          title: 'حجوزات طيران',
          description: 'أفضل الأسعار عالمياً ومحلياً على كافة خطوط الطيران الموثوقة.',
        },
        visas: {
          title: 'تأشيرات Visa',
          description: 'محاكاة وتحضير أوراقك للسفارات (شنغن، الخليج، وغيرها) باحترافية عالية.',
        },
        trips: {
          title: 'رحلات وعمرة',
          description: 'برامج سياحية متكاملة ورحلات منظمة، بالإضافة لرحلات العمرة الميسرة.',
        },
        insurance: {
          title: 'خدمات التأمين (Insurance)',
          description: 'تأمين سفر، منشآت، وغيرها. تغطية شاملة لأجل راحة بالك أثناء تنقلك.',
        },
        university: {
          title: 'قبولات جامعية',
          description: 'نوجه الطلاب لفرص التعليم في الخارج ونساعدهم في الحصول على القبولات.',
        },
        invitations: {
          title: 'دعوات رسمية',
          description: 'تجهيز دعوات رسمية لزيارات عائلية أو أعمال لتسهيل إجراءات السفر.',
        },
        omt: {
          title: 'خدمات OMT',
          description: 'خدمات سريعة وموثوقة لتحويل وسحب الأموال عبر شبكة OMT.',
        },
      },
    },
    // Quote
    quote: {
      text: 'تيسير رحلاتكم وتذليل الصعاب أمامكم هو لب رسالتنا. خبرتنا الممتدة في شؤون السفر والتأشيرات، خصوصاً لأبناء جاليتنا هي ضمانتنا لتوفير وقتكم وجهدكم. ثقتكم بنا هي شرف نعتز به.',
      author: 'فريق ريم ترافل',
    },
    // Contact
    contact: {
      badge: 'نحن هنا لخدمتك',
      title: 'تواصل معنا الآن',
      contactInfo: 'معلومات الاتصال',
      address: 'العنوان',
      addressValue: 'طرابلس، جبل البداوي\nشارع الأحباش بالقرب من تعاونية دانا',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      sendMessage: 'أرسل لنا رسالة',
      form: {
        name: 'الاسم الكامل',
        namePlaceholder: 'أدخل اسمك',
        nameRequired: 'الاسم مطلوب',
        phone: 'رقم الهاتف',
        phonePlaceholder: 'أدخل رقمك',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'أدخل بريدك الإلكتروني',
        emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح',
        message: 'الرسالة',
        messagePlaceholder: 'كيف يمكننا مساعدتك؟',
        messageRequired: 'الرسالة مطلوبة',
        send: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
      },
      qr: {
        title: 'Scan & Contact Us',
        description: 'امسح الرمز للتواصل المباشر معنا عبر الواتساب',
      },
    },
    // Footer
    footer: {
      tagline: 'سافر بذكاء، أمان، وراحة',
      home: 'الرئيسية',
      about: 'عن المكتب',
      services: 'الخدمات',
      contact: 'تواصل معنا',
      copyright: 'جميع الحقوق محفوظة.',
    },
  },
  en: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      contact: 'Contact',
      contactUs: 'Contact Us',
      tagline: 'Travel & Tourism',
    },
    // Hero
    hero: {
      badge: 'Reem Travel & Tourism Office',
      title: 'Your Local Bridge',
      titleHighlight: 'to the World',
      description: 'Travel smart, safe, and comfortable. Plan your next trip with us and enjoy an unforgettable experience.',
      discoverServices: 'Discover Our Services',
      bookNow: 'Book Now',
      location: 'Location',
      locationValue: 'Tripoli, Jabal Al-Badawi',
      service: 'Service',
      serviceValue: '24/7 Follow-up',
    },
    // WhyUs
    whyUs: {
      badge: 'Why Reem Travel?',
      title: 'We are more than just a travel agency',
      description: 'We are your partners in every journey... We understand your needs because we are part of you. Plan your next trip with us and enjoy an unforgettable experience.',
      features: {
        support: {
          title: '24/7 Follow-up',
          description: 'Contact us anytime. Our team is always available to answer your inquiries and follow up on your trip step by step.',
        },
        prices: {
          title: 'Affordable Prices',
          description: 'Guaranteed travel at a reasonable price. We always strive to provide the best offers and economical options.',
        },
        visas: {
          title: 'Visa Expertise',
          description: 'Special expertise in visa transactions for Palestinians, Syrians, and Lebanese to various destinations.',
        },
        location: {
          title: 'The Only Office in Al-Badawi',
          description: 'At your service with pride and readiness. We save you the hassle of travel by being close to you.',
        },
      },
    },
    // Services
    services: {
      badge: 'Complete Package',
      title: 'Discover Our Services',
      description: 'We offer a wide range of services to meet all your travel and official transaction needs under one roof.',
      items: {
        flights: {
          title: 'Flight Bookings',
          description: 'Best prices globally and locally on all trusted airlines.',
        },
        visas: {
          title: 'Visa Services',
          description: 'Simulation and preparation of your documents for embassies (Schengen, Gulf, and others) with high professionalism.',
        },
        trips: {
          title: 'Trips & Umrah',
          description: 'Complete tourist programs and organized trips, in addition to facilitated Umrah trips.',
        },
        insurance: {
          title: 'Insurance Services',
          description: 'Travel insurance, facilities, and more. Comprehensive coverage for your peace of mind during your travels.',
        },
        university: {
          title: 'University Admissions',
          description: 'We guide students to educational opportunities abroad and help them obtain admissions.',
        },
        invitations: {
          title: 'Official Invitations',
          description: 'Preparation of official invitations for family or business visits to facilitate travel procedures.',
        },
        omt: {
          title: 'OMT Services',
          description: 'Fast and reliable services for money transfer and withdrawal through the OMT network.',
        },
      },
    },
    // Quote
    quote: {
      text: 'Facilitating your trips and removing obstacles is the core of our mission. Our extensive experience in travel and visa matters, especially for our community members, is our guarantee to save your time and effort. Your trust in us is an honor we cherish.',
      author: 'Reem Travel Team',
    },
    // Contact
    contact: {
      badge: 'We are here to serve you',
      title: 'Contact Us Now',
      contactInfo: 'Contact Information',
      address: 'Address',
      addressValue: 'Tripoli, Jabal Al-Badawi\nAl-Ahbash Street near Dana Cooperative',
      phone: 'Phone',
      email: 'Email',
      sendMessage: 'Send Us a Message',
      form: {
        name: 'Full Name',
        namePlaceholder: 'Enter your name',
        nameRequired: 'Name is required',
        phone: 'Phone Number',
        phonePlaceholder: 'Enter your number',
        email: 'Email',
        emailPlaceholder: 'Enter your email',
        emailInvalid: 'Please enter a valid email',
        message: 'Message',
        messagePlaceholder: 'How can we help you?',
        messageRequired: 'Message is required',
        send: 'Send Message',
        sending: 'Sending...',
      },
      qr: {
        title: 'Scan & Contact Us',
        description: 'Scan the code to contact us directly via WhatsApp',
      },
    },
    // Footer
    footer: {
      tagline: 'Travel smart, safe, and comfortable',
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact Us',
      copyright: 'All rights reserved.',
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.ar;
