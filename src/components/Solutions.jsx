import { Check, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Solutions = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      title: t("solutions.items.enterprise.title"),
      description: t("solutions.items.enterprise.description"),
      features: t("solutions.items.enterprise.features", {
        returnObjects: true,
      }),
    },
    {
      title: t("solutions.items.fintech.title"),
      description: t("solutions.items.fintech.description"),
      features: t("solutions.items.fintech.features", { returnObjects: true }),
    },
    {
      title: t("solutions.items.securityNet.title"),
      description: t("solutions.items.securityNet.description"),
      features: t("solutions.items.securityNet.features", {
        returnObjects: true,
      }),
    },
  ];

  return (
    <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full mb-4">
            <span className="text-xs font-medium text-orange-600">
              {t("solutions.badge")}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {t("solutions.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("solutions.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="service-card group p-8 bg-white border border-gray-200 rounded-2xl hover:border-orange-300 hover:shadow-lg flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold tracking-tight mb-3 text-gray-900 shrink-0">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 shrink-0">
                {solution.description}
              </p>

              <div className="space-y-3 mb-6 grow">
                {solution.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-orange-600" />
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:gap-3 transition-all shrink-0 mt-auto">
                {t("solutions.exploreSolution")}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
