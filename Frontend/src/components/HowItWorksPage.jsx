import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Settings, 
  UserPlus, 
  Key, 
  BookOpen, 
  HelpCircle, 
  Shield, 
  Scroll,
  Check,
  Zap,
  Bot,
  Calendar,
  MessageSquare,
  Brain
} from 'lucide-react';

function MetaMateDocumentation() {
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = () => {
    window.open(`${import.meta.env.VITE_FRONTEND}`, '_blank');
  };

  const documentationSections = [
    {
      icon: <UserPlus className="w-8 h-8 text-blue-500" />,
      title: "Registration Process",
      steps: [
        "Click 'Get Started' on the homepage",
        "Enter unique User ID (username)",
        "Create a strong password",
        "Password is crucial for editing dataset",
        "Unique User ID allows others to ask questions about you"
      ]
    },
    {
      icon: <Key className="w-8 h-8 text-purple-500" />,
      title: "Gemini Key Setup",
      steps: [
        "Find the Gemini Key input box",
        "Click info button for import instructions",
        "Adding Gemini Key provides privacy protection",
        "Ensures secure access to your AI assistant"
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-green-500" />,
      title: "User Profile Configuration",
      steps: [
        "After login, enter your full name",
        "Click settings button",
        "Enter password to access settings",
        "Navigate to 'User Data' section",
        "Add details for AI to use",
        "Save your preferences"
      ]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-yellow-500" />,
      title: "Contribution Management",
      steps: [
        "Access contribution section",
        "View unanswered questions",
        "Contribute answers with options:",
        "- Approved: Verified contributions",
        "- Pending: Awaiting review",
        "- Rejected: Inappropriate content"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Privacy and Data Management",
      steps: [
        "Clear chat history",
        "Control saved information",
        "Manage Gemini Key settings",
        "Review user contributions",
        "Maintain control over AI interactions"
      ]
    }
  ];

  const renderSectionSteps = (section) => (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ 
        opacity: activeSection === section.title ? 1 : 0, 
        height: activeSection === section.title ? 'auto' : 0 
      }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      {activeSection === section.title && (
        <ul className="pl-4 space-y-1 text-gray-300 text-sm">
          {section.steps.map((step, index) => (
            <li key={index} className="flex items-center space-x-2">
              <Scroll className="w-4 h-4 text-blue-400" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            MetaMate Documentation
          </h1>
          <p className="text-xl text-gray-300">Learn how to get the most out of your digital twin</p>
        </div>

        <div className="flex-grow overflow-y-auto px-4 scrollbar-hide">
          <div className="space-y-3 pb-4">
            {documentationSections.map((section, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 rounded-xl overflow-hidden"
              >
                <div 
                  onClick={() => setActiveSection(activeSection === section.title ? null : section.title)}
                  className="flex items-center p-4 cursor-pointer hover:bg-gray-700 transition-colors"
                >
                  <div className="mr-3">{section.icon}</div>
                  <h2 className="text-base font-semibold flex-grow">{section.title}</h2>
                  <HelpCircle 
                    className={`w-5 h-5 ${
                      activeSection === section.title 
                      ? 'text-blue-500' 
                      : 'text-gray-500'
                    }`} 
                  />
                </div>
                {renderSectionSteps(section)}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-gray-800/50 rounded-xl backdrop-blur-sm">
          <h2 className="text-xl font-bold mb-2">Ready to Explore MetaMate?</h2>
          <p className="mb-4">Whether you're a busy professional, student, or just someone looking to be more productive, MetaMate adapts to your needs.</p>
          <button className="py-2 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition duration-200">
            Start Your Journey
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default MetaMateDocumentation;