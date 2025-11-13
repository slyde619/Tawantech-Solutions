import {
  Network,
  Wrench,
  Cloud,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Network,
      title: t("services.items.integration.title"),
      description: t("services.items.integration.description"),
    },
    {
      icon: Wrench,
      title: t("services.items.maintenance.title"),
      description: t("services.items.maintenance.description"),
    },
    {
      icon: Cloud,
      title: t("services.items.cloud.title"),
      description: t("services.items.cloud.description"),
    },
    {
      icon: GraduationCap,
      title: t("services.items.training.title"),
      description: t("services.items.training.description"),
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full mb-4">
            <span className="text-xs font-medium text-orange-600">
              {t("services.badge")}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card group p-8 bg-white border border-gray-200 rounded-2xl hover:border-orange-300 hover:shadow-lg flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors shrink-0">
                  <Icon className="w-6 h-6 text-orange-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight shrink-0">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 grow">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:gap-3 transition-all shrink-0 mt-auto"
                >
                  {t("services.learnMore")}
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

export default Services;
