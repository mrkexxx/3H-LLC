import React from 'react';
import { CreditCardIcon, ZelleIcon, ApplePayIcon } from './components/Icons';

export const CONTACT_INFO = {
  name: "American 3H LLC",
  phone_vn: "714-804-4446",
  phone_en: "714-548-8799",
  email: "management.american3hllc@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61581792450296",
  address: "Garden Grove, Orange County, California"
};

const paymentMethods = [
    {
        name: 'Zelle',
        icon: <ZelleIcon className="h-10 w-10"/>
    },
    {
        name: 'Apple Pay',
        icon: <ApplePayIcon className="h-10 w-10"/>
    },
    {
        name: 'Apple Cash',
        icon: <ApplePayIcon className="h-10 w-10"/>
    },
    {
        name: 'Credit Card',
        icon: <CreditCardIcon className="h-10 w-10"/>
    },
];

export const HERO_IMAGES = [
    'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1920&auto=format&fit=crop',
    'https://sf-static.upanhlaylink.com/img/image_20251010ca63e3cc2ea1b9f11a86042299054406.jpg',
    'https://sf-static.upanhlaylink.com/img/image_202510101bd7e45ee4b05f549df955941fa6cd40.jpg',
    'https://sf-static.upanhlaylink.com/img/image_2025101044c47a16b2c72cf3bfb55fb55718fb49.jpg',
    'https://sf-static.upanhlaylink.com/img/image_2025101086c8398bc669e28cfb1ae4e0dea2f2ea.jpg',
    'https://sf-static.upanhlaylink.com/img/image_202510103e8e6e8064912622fddb85d7b9789e1b.jpg'
];


export const TRANSLATIONS = {
  vi: {
    navLinks: [
      { name: 'Trang Chủ', href: '#home' },
      { name: 'Về Chúng Tôi', href: '#about' },
      { name: 'Các Loại Xe', href: '#fleet' },
      { name: 'Đặt Xe', href: '#booking' },
      { name: 'Thanh Toán', href: '#payment' },
      { name: 'Liên Hệ', href: '#contact' },
    ],
    hero: {
      title: 'AMERICAN 3H LLC',
      subtitle: 'Cho thuê xe uy tín tại Orange County, California. Xe đời mới, sạch sẽ, giá cả hợp lý.',
      ctaButton: 'Xem các loại xe',
    },
    about: {
        title: 'Tại sao chọn chúng tôi?',
        subtitle: 'Chúng tôi cung cấp dịch vụ cho thuê xe nhanh gọn, chất lượng cao với nhiều ưu điểm vượt trội.',
        highlights: [
            {
                title: "Hỗ trợ chi trả bởi bảo hiểm",
                description: "Giá cả phù hợp với các hãng bảo hiểm, giúp bạn tiết kiệm chi phí, thậm chí không phải bù thêm tiền."
            },
            {
                title: "Xe đời mới, chất lượng",
                description: "Toàn bộ xe đều là đời mới, được bảo dưỡng định kỳ, đảm bảo sạch sẽ, tiện nghi và an toàn tuyệt đối."
            },
            {
                title: "Thủ tục nhanh gọn",
                description: "Quy trình cho thuê xe đơn giản, nhanh chóng, giúp bạn tiết kiệm thời gian và có xe ngay khi cần."
            }
        ],
    },
    fleet: {
        title: 'Các dòng xe cho thuê',
        subtitle: 'Đa dạng các loại xe từ sedan, SUV đến van 15 chỗ, đáp ứng mọi nhu cầu của bạn.',
        ctaButton: 'Liên hệ để thuê',
        vehicles: [
            {
              category: "Sedan và SUV 5 chỗ",
              description: "Xe du lịch phù hợp cho gia đình nhỏ, di chuyển linh hoạt trong thành phố, tiết kiệm nhiên liệu.",
              imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1920&auto=format&fit=crop"
            },
            {
              category: "Minivan và SUV 7-9 chỗ",
              description: "Không gian rộng rãi, thoải mái cho các nhóm lớn hoặc gia đình đông thành viên đi du lịch xa.",
              imageUrl: "https://sf-static.upanhlaylink.com/img/image_2025101086c8398bc669e28cfb1ae4e0dea2f2ea.jpg"
            },
            {
              category: "Van 12 và 15 chỗ",
              description: "Lựa chọn lý tưởng cho các đoàn du lịch, sự kiện công ty, đảm bảo hành trình tiện nghi và an toàn.",
              imageUrl: "https://sf-static.upanhlaylink.com/img/image_202510103e8e6e8064912622fddb85d7b9789e1b.jpg"
            }
        ],
    },
    booking: {
        title: 'Đặt Xe Ngay',
        subtitle: 'Hoàn thành biểu mẫu dưới đây để gửi yêu cầu đặt xe của bạn. Chúng tôi sẽ liên hệ lại sớm nhất có thể.',
        form: {
            carType: 'Loại xe',
            carTypeOptions: [
                'Chọn loại xe',
                'Sedan / SUV 5 chỗ',
                'Minivan / SUV 7-9 chỗ',
                'Van 12-15 chỗ'
            ],
            pickupDate: 'Ngày nhận xe',
            returnDate: 'Ngày trả xe',
            fullName: 'Họ và Tên',
            phone: 'Số điện thoại',
            email: 'Email',
            submitButton: 'Gửi Yêu Cầu Đặt Xe',
        }
    },
    payment: {
        title: 'Thanh toán tiện lợi',
        subtitle: 'Chấp nhận nhiều hình thức thanh toán phổ biến, an toàn và nhanh chóng.',
        creditCardNote: 'Đặc biệt: Nhận thanh toán bằng thẻ tín dụng (Credit Card) mà không bị tính thêm phí thẻ.',
        methods: paymentMethods,
    },
    footer: {
        tagline: 'Dịch vụ cho thuê xe uy tín, chất lượng.',
        contactTitle: 'Liên hệ',
        socialTitle: 'Mạng xã hội',
        rightsReserved: 'All rights reserved.'
    }
  },
  en: {
    navLinks: [
      { name: 'Home', href: '#home' },
      { name: 'About Us', href: '#about' },
      { name: 'Our Fleet', href: '#fleet' },
      { name: 'Booking', href: '#booking' },
      { name: 'Payment', href: '#payment' },
      { name: 'Contact', href: '#contact' },
    ],
    hero: {
      title: 'AMERICAN 3H LLC',
      subtitle: 'Reliable car rentals in Orange County, California. New, clean cars at reasonable prices.',
      ctaButton: 'View Our Fleet',
    },
    about: {
        title: 'Why Choose Us?',
        subtitle: 'We provide fast, high-quality car rental services with many outstanding advantages.',
        highlights: [
            {
                title: "Insurance Coverage Support",
                description: "Our pricing is compatible with insurance companies, helping you save costs, often with no out-of-pocket expense."
            },
            {
                title: "New, High-Quality Vehicles",
                description: "All our vehicles are new models, regularly maintained to ensure they are clean, comfortable, and completely safe."
            },
            {
                title: "Quick and Easy Process",
                description: "Our rental process is simple and fast, saving you time and getting you on the road when you need it."
            }
        ],
    },
    fleet: {
        title: 'Our Rental Fleet',
        subtitle: 'A variety of vehicles from sedans, SUVs, to 15-passenger vans to meet all your needs.',
        ctaButton: 'Contact to Rent',
        vehicles: [
            {
              category: "5-Seater Sedans and SUVs",
              description: "Perfect for small families, flexible for city driving, and fuel-efficient.",
              imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1920&auto=format&fit=crop"
            },
            {
              category: "7-9 Seater Minivans and SUVs",
              description: "Spacious and comfortable for large groups or families on long trips.",
              imageUrl: "https://sf-static.upanhlaylink.com/img/image_2025101086c8398bc669e28cfb1ae4e0dea2f2ea.jpg"
            },
            {
              category: "12 and 15 Seater Vans",
              description: "The ideal choice for tour groups and company events, ensuring a comfortable and safe journey.",
              imageUrl: "https://sf-static.upanhlaylink.com/img/image_202510103e8e6e8064912622fddb85d7b9789e1b.jpg"
            }
        ],
    },
    booking: {
        title: 'Book Your Car',
        subtitle: 'Complete the form below to submit your booking request. We will get back to you as soon as possible.',
        form: {
            carType: 'Car Type',
            carTypeOptions: [
                'Select a car type',
                'Sedan / SUV 5-Seater',
                'Minivan / SUV 7-9 Seater',
                'Van 12-15 Seater'
            ],
            pickupDate: 'Pickup Date',
            returnDate: 'Return Date',
            fullName: 'Full Name',
            phone: 'Phone Number',
            email: 'Email',
            submitButton: 'Submit Booking Request',
        }
    },
    payment: {
        title: 'Convenient Payments',
        subtitle: 'We accept many popular, secure, and fast payment methods.',
        creditCardNote: 'Special: We accept credit card payments without any additional card fees.',
        methods: paymentMethods,
    },
    footer: {
        tagline: 'Reliable and quality car rental service.',
        contactTitle: 'Contact',
        socialTitle: 'Social Media',
        rightsReserved: 'All rights reserved.'
    }
  }
};