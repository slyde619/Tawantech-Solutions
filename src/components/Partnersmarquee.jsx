import { useTranslation } from "react-i18next";

const PartnersMarquee = () => {
  const { t } = useTranslation();

  const partners = [
    "FINTECH",
    "PAYTECH",
    "BANKPRO",
    "NEXUS",
    "CAPITAL",
    "INVEST",
  ];

  return (
    <section className="py-16 border-y border-gray-100 overflow-hidden bg-gray-50/50">
      <div className="mb-8 text-center">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
          {t("partners.title")}
        </p>
      </div>
      <div className="flex whitespace-nowrap">
        <div className="marquee flex items-center gap-16 px-8">
          {/* First set of partners */}
          <div className="flex items-center gap-16">
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="w-32 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center"
              >
                <span className="text-xl font-bold tracking-tight text-gray-800">
                  {partner}
                </span>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-16">
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="w-32 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center"
              >
                <span className="text-xl font-bold tracking-tight text-gray-800">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
