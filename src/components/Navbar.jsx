import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Update document direction
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lng;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "services",
        "products",
        "solutions",
        "about",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "services", label: t("nav.services") },
    { id: "products", label: t("nav.products") },
    { id: "solutions", label: t("nav.solutions") },
    { id: "about", label: t("nav.about") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-semibold tracking-tight flex items-center gap-2"
          >
            <img
              src="https://www.tawantech.sa/images/logo.png"
              className="size-36 rounded-lg flex items-center justify-center"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center gap-2 ml-4 border-l border-gray-200 pl-4">
              <button
                onClick={() => changeLanguage("en")}
                className={`text-xs font-medium px-3 py-1.5 rounded-md transition-colors ${
                  i18n.language === "en"
                    ? "bg-orange-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("ar")}
                className={`text-xs font-medium px-3 py-1.5 rounded-md transition-colors ${
                  i18n.language === "ar"
                    ? "bg-orange-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                AR
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left text-sm font-medium py-2 ${
                  activeSection === item.id
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
              <button
                onClick={() => changeLanguage("en")}
                className={`text-xs font-medium px-3 py-1.5 rounded-md transition-colors ${
                  i18n.language === "en"
                    ? "bg-orange-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("ar")}
                className={`text-xs font-medium px-3 py-1.5 rounded-md transition-colors ${
                  i18n.language === "ar"
                    ? "bg-orange-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                AR
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
