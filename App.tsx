
import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { FleetCard } from './components/FleetCard';
import { TRANSLATIONS, CONTACT_INFO, HERO_IMAGES } from './constants';
import { PhoneIcon, MailIcon, FacebookIcon, CheckCircleIcon, MapPinIcon } from './components/Icons';
import { HeroSlideshow } from './components/HeroSlideshow';

type Language = 'vi' | 'en';

const useAnimateOnScroll = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return ref;
};


const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('vi');
  const t = TRANSLATIONS[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'vi' ? 'en' : 'vi');
  };

  return (
    <div className="bg-gray-900 text-gray-300 antialiased">
      <Header 
        language={language} 
        toggleLanguage={toggleLanguage} 
        navLinks={t.navLinks} 
      />
      <main>
        <HeroSlideshow images={HERO_IMAGES} content={t.hero} />
        <AboutSection content={t.about} />
        <FleetSection content={t.fleet} />
        <PaymentSection content={t.payment} />
      </main>
      <Footer content={t.footer} />
    </div>
  );
};

interface AboutSectionProps {
  content: typeof TRANSLATIONS.vi.about;
}
const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
    const sectionRef = useAnimateOnScroll();
    return (
        <section id="about" ref={sectionRef} className="py-24 bg-gray-800 transition-all duration-1000 opacity-0 translate-y-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">{content.title}</h2>
                <p className="mt-6 text-lg text-gray-400">
                {content.subtitle}
                </p>
            </div>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
                {content.highlights.map((item, index) => (
                <div key={index} className="text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-700/50 text-amber-400 mx-auto mb-6">
                        <CheckCircleIcon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl leading-6 font-bold text-white">{item.title}</h3>
                    <p className="mt-4 text-base text-gray-400">{item.description}</p>
                </div>
                ))}
            </div>
            </div>
        </section>
    );
};

interface FleetSectionProps {
  content: typeof TRANSLATIONS.vi.fleet;
}
const FleetSection: React.FC<FleetSectionProps> = ({ content }) => {
    const sectionRef = useAnimateOnScroll();
    return (
      <section id="fleet" ref={sectionRef} className="py-24 bg-gray-900 transition-all duration-1000 opacity-0 translate-y-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">{content.title}</h2>
            <p className="mt-6 text-lg text-gray-400">
              {content.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            {content.vehicles.map((car) => (
              <FleetCard key={car.category} {...car} buttonText={content.ctaButton}/>
            ))}
          </div>
        </div>
      </section>
    );
};

interface PaymentSectionProps {
    content: typeof TRANSLATIONS.vi.payment;
}
const PaymentSection: React.FC<PaymentSectionProps> = ({ content }) => {
    const sectionRef = useAnimateOnScroll();
    return (
        <section id="payment" ref={sectionRef} className="py-24 bg-gray-800 transition-all duration-1000 opacity-0 translate-y-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">{content.title}</h2>
                    <p className="mt-6 text-lg text-gray-400">
                        {content.subtitle}
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    {content.methods.map(method => (
                        <div key={method.name} className="flex flex-col items-center text-center transition-transform hover:scale-110">
                           <div className="text-gray-400 hover:text-white transition-colors mb-2">{method.icon}</div>
                            <span className="font-semibold text-gray-300">{method.name}</span>
                        </div>
                    ))}
                </div>
                 <div className="mt-20 max-w-3xl mx-auto text-center p-8 bg-gray-800/50 border-l-4 border-amber-500 rounded-r-lg">
                    <p className="text-lg font-semibold text-amber-400">
                        {content.creditCardNote}
                    </p>
                </div>
            </div>
        </section>
    );
};

interface FooterProps {
  content: typeof TRANSLATIONS.vi.footer;
}
const Footer: React.FC<FooterProps> = ({ content }) => (
  <footer id="contact" className="bg-black text-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div className="md:col-span-1">
          <h3 className="font-serif text-2xl font-bold text-white">{CONTACT_INFO.name}</h3>
          <p className="mt-4 text-gray-400">{content.tagline}</p>
            <div className="mt-4 flex justify-center md:justify-start items-start text-gray-400">
                 <MapPinIcon className="h-5 w-5 mr-3 text-amber-400 flex-shrink-0 mt-1"/>
                 <span className="whitespace-pre-line">{CONTACT_INFO.address}</span>
            </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold tracking-wider uppercase text-amber-400">{content.contactTitle}</h3>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center justify-center md:justify-start flex-wrap">
              <PhoneIcon className="h-5 w-5 mr-3 text-amber-400 flex-shrink-0" />
              <span className="mr-2 text-gray-300">{CONTACT_INFO.phone_vn} (Tiếng Việt)</span>
              <span className="text-amber-400 font-medium whitespace-nowrap">
                (<a href={`tel:${CONTACT_INFO.phone_vn}`} className="hover:text-white transition-colors px-1">Call</a>
                /
                <a href={`sms:${CONTACT_INFO.phone_vn}`} className="hover:text-white transition-colors px-1">Text</a>)
              </span>
            </li>
            <li className="flex items-center justify-center md:justify-start flex-wrap">
              <PhoneIcon className="h-5 w-5 mr-3 text-amber-400 flex-shrink-0" />
              <span className="mr-2 text-gray-300">{CONTACT_INFO.phone_en} (English)</span>
               <span className="text-amber-400 font-medium whitespace-nowrap">
                (<a href={`tel:${CONTACT_INFO.phone_en}`} className="hover:text-white transition-colors px-1">Call</a>
                /
                <a href={`sms:${CONTACT_INFO.phone_en}`} className="hover:text-white transition-colors px-1">Text</a>)
              </span>
            </li>
            <li className="flex items-center justify-center md:justify-start flex-wrap">
              <PhoneIcon className="h-5 w-5 mr-3 text-amber-400 flex-shrink-0" />
              <span className="mr-2 text-gray-300">{CONTACT_INFO.phone_management} (Management)</span>
               <span className="text-amber-400 font-medium whitespace-nowrap">
                (<a href={`tel:${CONTACT_INFO.phone_management}`} className="hover:text-white transition-colors px-1">Call</a>
                /
                <a href={`sms:${CONTACT_INFO.phone_management}`} className="hover:text-white transition-colors px-1">Text</a>)
              </span>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <MailIcon className="h-5 w-5 mr-3 text-amber-400" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors break-all">{CONTACT_INFO.email}</a>
            </li>
          </ul>
        </div>
        <div>
           <h3 className="text-lg font-semibold tracking-wider uppercase text-amber-400">{content.socialTitle}</h3>
           <div className="mt-4 flex justify-center md:justify-start">
              <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
                <FacebookIcon className="h-8 w-8" />
              </a>
           </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-800 pt-8 text-center text-base text-gray-500">
        <p>&copy; {new Date().getFullYear()} {CONTACT_INFO.name}. {content.rightsReserved}</p>
      </div>
    </div>
  </footer>
);

export default App;
