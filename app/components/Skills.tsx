'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nContext';

interface SkillCategory {
  title: string;
  items: string[];
}

interface SkillCategories {
  [key: string]: SkillCategory;
}

const categoryIcons: { [key: string]: string } = {
  rpa: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  frontend: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  backend: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
  mobile: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  databases: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  tools: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  soft: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
};

const categoryColors: { [key: string]: { bg: string; border: string; icon: string } } = {
  rpa: { bg: "from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20", border: "border-red-200 dark:border-red-800", icon: "text-red-600 dark:text-red-400" },
  frontend: { bg: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20", border: "border-blue-200 dark:border-blue-800", icon: "text-blue-600 dark:text-blue-400" },
  backend: { bg: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20", border: "border-green-200 dark:border-green-800", icon: "text-green-600 dark:text-green-400" },
  mobile: { bg: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20", border: "border-purple-200 dark:border-purple-800", icon: "text-purple-600 dark:text-purple-400" },
  databases: { bg: "from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20", border: "border-yellow-200 dark:border-yellow-800", icon: "text-yellow-600 dark:text-yellow-400" },
  tools: { bg: "from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20", border: "border-indigo-200 dark:border-indigo-800", icon: "text-indigo-600 dark:text-indigo-400" },
  soft: { bg: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20", border: "border-pink-200 dark:border-pink-800", icon: "text-pink-600 dark:text-pink-400" },
};

export default function Skills() {
  const { t, ts } = useI18n();
  const categories = t('skills.categories') as unknown as SkillCategories;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {ts('skills.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Expertise across full-stack development, enterprise automation, and modern technologies
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories && Object.entries(categories).map(([key, category]: [string, SkillCategory], index: number) => {
              const colors = categoryColors[key] || categoryColors.frontend;
              return (
                <motion.div
                  key={key}
                  className={`group bg-gradient-to-br ${colors.bg} border ${colors.border} p-6 rounded-2xl backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex-1 pr-4">{category.title}</h3>
                    <div className="flex-shrink-0 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 group-hover:bg-white/80 dark:group-hover:bg-gray-800 transition-colors">
                      <svg className={`w-6 h-6 ${colors.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={categoryIcons[key]} />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {Array.isArray(category.items) && category.items.map((skill: string, i: number) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60 flex-shrink-0"></div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
