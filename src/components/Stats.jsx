import { useTranslation } from "react-i18next";

const Stats = () => {
  const { t } = useTranslation();

  const stats = [
    { value: "500+", label: t("stats.clients") },
    { value: "$2B+", label: t("stats.volume") },
    { value: "99.9%", label: t("stats.uptime") },
    { value: "24/7", label: t("stats.support") },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in">
              <div className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
