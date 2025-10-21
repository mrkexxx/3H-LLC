import React from 'react';

type IconProps = {
  className?: string;
};

export const PhoneIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.87v-2.78h2.87v-2.09c0-2.828 1.682-4.396 4.28-4.396 1.233 0 2.562.22 2.562.22v2.37h-1.23c-1.396 0-1.824.87-1.824 1.766v1.92h2.78l-.44 2.78h-2.34v7.005A9.962 9.962 0 0022 12z"/>
    </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const MapPinIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const CreditCardIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

export const ZelleIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 200 200" fill="currentColor">
        <circle cx="100" cy="100" r="100" fill="#6A0DAD"/>
        <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontSize="90" fontWeight="bold" fill="white">Z</text>
    </svg>
);

export const ApplePayIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 64 64" fill="currentColor">
        <path d="M41.01 13.25c-4.14 0-7.46 2.37-9.45 2.37-2.02 0-5.96-2.46-9.98-2.46-8.1 0-14.05 5.86-14.05 14.58 0 10.3 8.85 24.99 15.65 24.99 2.76 0 4.1-1.63 8.35-1.63 4.25 0 5.25 1.63 8.39 1.63 7.04 0 15.45-14.72 15.45-25.13 0-7.39-4.83-14.25-10-14.25zm-2.27-5.96c2.47-2.69 4.14-6.42 3.65-10.29-3.23.2-6.91 2.06-9.35 4.75-2.2 2.47-4.25 6.36-3.79 10.13 3.62.33 7.02-2.02 9.49-4.59z"/>
    </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

export const CarIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 512 512">
        <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.2 96H165.8c-14 0-26.1 8.6-30.6 21.4zM397.4 224H114.6c-21.2 0-39.8 14.8-43.8 35.4l-15 75.2c-1.4 7.2 .4 14.6 5.4 20.3s12.5 9.1 20.1 9.1H96v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V368h128v40c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V368h28.9c7.6 0 14.6-3.4 19.2-9.1s6.8-13.1 5.4-20.3l-15-75.2C437.2 238.8 418.6 224 397.4 224z"/>
    </svg>
);