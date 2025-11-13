import {
  Database,
  CreditCard,
  Building2,
  Shield,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();

  const products = [
    {
      icon: Database,
      title: t("products.items.storage.title"),
      description: t("products.items.storage.description"),
    },
    {
      icon: CreditCard,
      title: t("products.items.payment.title"),
      description: t("products.items.payment.description"),
    },
    {
      icon: Building2,
      title: t("products.items.infrastructure.title"),
      description: t("products.items.infrastructure.description"),
    },
    {
      icon: Shield,
      title: t("products.items.security.title"),
      description: t("products.items.security.description"),
    },
  ];

  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full mb-4">
            <span className="text-xs font-medium text-orange-600">
              {t("products.badge")}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {t("products.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("products.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="service-card group p-8 bg-white border border-gray-200 rounded-2xl hover:border-orange-300 hover:shadow-lg flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors shrink-0">
                  <Icon className="w-6 h-6 text-orange-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight shrink-0">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 grow">
                  {product.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:gap-3 transition-all shrink-0 mt-auto"
                >
                  {t("products.learnMore")}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
