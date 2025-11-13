import { Linkedin, Twitter, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-black text-white border-t border-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-semibold tracking-tight">
                Tawantech
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {t("footer.servicesLinks.integration")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {t("footer.servicesLinks.maintenance")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {t("footer.servicesLinks.cloud")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {t("footer.servicesLinks.training")}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.products")}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {t("footer.productsLinks.storage")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {t("footer.productsLinks.payment")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {t("footer.productsLinks.infrastructure")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {t("footer.productsLinks.security")}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {t("footer.companyLinks.solutions")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {t("footer.companyLinks.about")}
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {t("footer.companyLinks.careers")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {t("footer.companyLinks.blog")}
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {t("footer.companyLinks.contact")}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.connect")}</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-gray-800 rounded-lg flex items-center justify-center hover:border-orange-600 hover:bg-orange-600/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-gray-800 rounded-lg flex items-center justify-center hover:border-orange-600 hover:bg-orange-600/10 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-gray-800 rounded-lg flex items-center justify-center hover:border-orange-600 hover:bg-orange-600/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 Tawan Tech. {t("footer.rights")}
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
