import { motion } from "framer-motion";
import { features, techStack } from "./aboutConstants";

export const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-amber-300 mb-4">
            Redux RTK Query CRUD Application
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A Modern Approach to State Management and API Integration
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
            >
              <div className="text-blue-600 dark:text-amber-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="text-blue-600 dark:text-amber-400">
                  {tech.icon}
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Project Goals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="prose dark:prose-invert max-w-none"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Project Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This project showcases modern React development practices, focusing
            on efficient state management and API integration using Redux
            Toolkit and RTK Query. The application demonstrates CRUD operations
            with a beautiful, responsive UI enhanced by React Hook Form for form
            management.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Key features include real-time data synchronization, optimistic
            updates, and proper error handling, all wrapped in an intuitive user
            interface that adapts seamlessly across different device sizes.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
