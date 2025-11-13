import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Hero = () => {
  const { t } = useTranslation();
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Get phrases from translations
  const phrases = t("hero.typingPhrases", { returnObjects: true });

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
          setTypingSpeed(100);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
          setTypingSpeed(50);
        } else {
          // Finished deleting, move to next phrase
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex, typingSpeed, phrases]);

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full mb-6">
              <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-orange-600">
                {t("hero.badge")}
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              {t("hero.title")}
              <br />
              <span className="gradient-text inline-flex items-baseline min-h-[1.2em]">
                {displayText}
                <span className="inline-block w-1 h-12 sm:h-16 lg:h-20 bg-orange-600 ml-1 animate-pulse"></span>
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
              >
                {t("hero.cta1")}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 rounded-lg font-medium hover:border-orange-600 hover:text-orange-600 transition-colors"
              >
                {t("hero.cta2")}
              </button>
            </div>
          </div>
          <div className="animate-scale-in hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 to-orange-600/10 rounded-3xl transform rotate-8 shadow-2xl"></div>
              <img
                src="https://cdn.pixabay.com/photo/2025/07/24/16/15/data-center-9733151_640.jpg"
                alt="Data center"
                className="relative rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
