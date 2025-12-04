import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const footerLinks = [
    {
      title: "Marketplace",
      items: ["Browse Cars", "Sell Your Car", "New Arrivals", "Premium Collection"],
    },
    {
      title: "Company",
      items: ["About Us", "Our Mission", "Careers", "Contact"],
    },
    {
      title: "Support",
      items: ["Help Center", "Financing", "Insurance", "Community"],
    },
  ];

  const socialIcons = [
    { icon: Twitter, label: "Twitter" },
    { icon: Github, label: "GitHub" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Mail, label: "Email" },
  ];

  return (
    <footer
      className="
        relative border-t border-white/10
        bg-[#07080d]/60 backdrop-blur-2xl 
        shadow-inner shadow-black/40
      "
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-13 pb-10">
        {/* MAIN GRID */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-300 to-indigo-300 text-transparent bg-clip-text">
              Alpha Motors
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Discover premium cars, luxury rides, and high-performance machines — all in one trusted marketplace.
            </p>
          </motion.div>

          {/* Dynamic Sections */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1 * (idx + 1),
              }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-white">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 py-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row items-center justify-between gap-10"
          >
            {/* COPYRIGHT */}
            <p className="text-sm text-gray-400">
              © 2025 Alpha Motors. All rights reserved.
            </p>

            {/* SOCIAL ICONS */}
            <motion.div
              className="flex gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {socialIcons.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.14 }}
                    className="
                      p-2 rounded-lg 
                      border border-white/10 
                      bg-white/5 backdrop-blur-xl 
                      hover:bg-white/20 
                      transition-all duration-300
                      shadow-[0_0_10px_#6d28d966]
                    "
                  >
                    <Icon className="w-5 h-5 text-gray-300" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* LEGAL LINKS */}
            <div className="flex gap-6 text-sm text-gray-400">
              {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
