import { Target, Eye, Anchor } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const sections = [
    {
      icon: Target,
      title: t("about.mission.title"),
      description: t("about.mission.description"),
    },
    {
      icon: Eye,
      title: t("about.vision.title"),
      description: t("about.vision.description"),
    },
    {
      icon: Anchor,
      title: t("about.values.title"),
      points: t("about.values.items", { returnObjects: true }),
    },
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400&h=300&fit=crop",
      alt: "Team collaboration",
      className: "rounded-xl w-full h-48 object-cover",
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop",
      alt: "Office workspace",
      className: "rounded-xl w-full h-64 object-cover",
    },
    {
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop",
      alt: "Technology",
      className: "rounded-xl w-full h-64 object-cover",
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
      alt: "Meeting",
      className: "rounded-xl w-full h-48 object-cover",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Who We Are Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full mb-4">
            <span className="text-xs font-medium text-orange-600">
              {t("about.badge")}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            {t("about.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("about.description")}
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="service-card p-8 bg-white border border-gray-200 rounded-2xl hover:border-orange-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-4 text-orange-600">
                  {section.title}
                </h3>

                {section.description && (
                  <p className="text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                )}

                {section.points && (
                  <ol className="space-y-3 text-gray-600">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="text-sm leading-relaxed">
                        {idx + 1}. {point}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            );
          })}
        </div>

        {/* Images Grid */}
        <div className="animate-scale-in">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className={images[0].className}
              />
              <img
                src={images[1].src}
                alt={images[1].alt}
                className={images[1].className}
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src={images[2].src}
                alt={images[2].alt}
                className={images[2].className}
              />
              <img
                src={images[3].src}
                alt={images[3].alt}
                className={images[3].className}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
