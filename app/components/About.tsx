'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useI18n } from '../i18n/I18nContext';

export default function About() {
  const { t, ts } = useI18n();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const contactItems = [
    {
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
      label: ts('about.location'),
      value: ts('contact.info.location'),
    },
    {
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      label: ts('about.email'),
      value: ts('contact.info.email'),
    },
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      label: ts('about.phone'),
      value: ts('contact.info.phone'),
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Title */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 dark:text-white">
              {ts('about.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Avatar Card */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <div className="relative">
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-75"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                ></motion.div>

                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5"></div>

                  <motion.div
                    className="relative aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/images/profile.jpg"
                      alt="Rodolfo Borja"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <motion.div className="text-center p-3 rounded-lg bg-white/50 dark:bg-gray-700/30" whileHover={{ y: -2 }}>
                      <p className="text-2xl font-bold text-blue-600">7+</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Years Experience</p>
                    </motion.div>
                    <motion.div className="text-center p-3 rounded-lg bg-white/50 dark:bg-gray-700/30" whileHover={{ y: -2 }}>
                      <p className="text-2xl font-bold text-purple-600">30+</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Projects Completed</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="md:col-span-3 space-y-6">
              {/* Description */}
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ts('about.description')}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-4">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                        <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.label}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  className="w-2.5 h-2.5 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                ></motion.span>
                <span className="text-sm font-semibold text-green-700 dark:text-green-400">{ts('about.available')}</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
