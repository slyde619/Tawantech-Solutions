import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.info.email"),
      value: "info@tawantech.sa",
      href: "mailto:info@tawantech.sa",
    },
    {
      icon: Phone,
      title: t("contact.info.phone"),
      value: "+966 12 345 6789",
      href: "tel:+966123456789",
    },
    {
      icon: MapPin,
      title: t("contact.info.location"),
      value: t("contact.info.locationValue"),
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600/20 border border-orange-600/30 rounded-full mb-4">
              <span className="text-xs font-medium text-orange-400">
                {t("contact.badge")}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {t("contact.description")}
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-600/10 border border-orange-600/20 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{info.title}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-400 hover:text-orange-500 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("contact.form.firstName")}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder={t("contact.form.firstNamePlaceholder")}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:outline-none focus:border-orange-600 transition-colors text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("contact.form.lastName")}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder={t("contact.form.lastNamePlaceholder")}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:outline-none focus:border-orange-600 transition-colors text-white placeholder-gray-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact.form.emailPlaceholder")}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:outline-none focus:border-orange-600 transition-colors text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("contact.form.company")}
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t("contact.form.companyPlaceholder")}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:outline-none focus:border-orange-600 transition-colors text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder={t("contact.form.messagePlaceholder")}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:outline-none focus:border-orange-600 transition-colors resize-none text-white placeholder-gray-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
              >
                {t("contact.form.submit")}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
