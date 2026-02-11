'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nContext';

interface ExperienceItem {
  position: string;
  company: string;
  location: string;
  date: string;
  description: string;
  achievements?: string[];
}

export default function Experience() {
  const { t, ts } = useI18n();
  const experiences = t('experience.items') as unknown as ExperienceItem[];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {ts('experience.title') as string}
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600 hidden md:block"></div>
          
          <div className="space-y-12">
            {Array.isArray(experiences) && experiences.map((exp: ExperienceItem, index: number) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Content */}
                <div className="w-full md:w-5/12">
                  <motion.div
                    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{exp.date}</span>
                      <span className="mx-2">•</span>
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>{exp.location}</span>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    
                    {exp.achievements && Array.isArray(exp.achievements) && (
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement: string, i: number) => (
                          <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </div>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <motion.div
                    className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"
                    whileHover={{ scale: 1.5 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                  />
                </div>
                
                {/* Empty Space */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
