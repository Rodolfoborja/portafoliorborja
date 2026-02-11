'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nContext';

export default function About() {
  const { t } = useI18n();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12"
            variants={itemVariants}
          >
            {t('about.title')}
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-xl opacity-30"></div>
                <div className="relative bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
                  <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-6xl font-bold">
                    RB
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('about.description')}
              </p>
              
              <div className="space-y-4">
                <motion.div
                  className="flex items-start space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{t('about.location')}</p>
                    <p className="text-gray-600 dark:text-gray-400">{t('contact.info.location')}</p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex items-start space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{t('about.email')}</p>
                    <p className="text-gray-600 dark:text-gray-400">{t('contact.info.email')}</p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex items-start space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{t('about.phone')}</p>
                    <p className="text-gray-600 dark:text-gray-400">{t('contact.info.phone')}</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                {t('about.available')}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
