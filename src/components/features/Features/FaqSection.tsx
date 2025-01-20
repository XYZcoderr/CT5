import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    id: 1,
    question: "How can online learning benefit students?",
    answer: "Online learning offers flexibility, accessibility, and personalized learning paths. Students can learn at their own pace, access resources 24/7, and benefit from diverse learning materials including videos, interactive content, and virtual collaborations."
  },
  {
    id: 2,
    question: "What technology requirements are needed for online education?",
    answer: "Basic requirements include a reliable internet connection, a computer or tablet device, updated web browser, and basic software applications. Some courses may require specific software or tools which will be communicated in advance."
  },
  {
    id: 3,
    question: "How is student progress tracked in online learning?",
    answer: "Progress is tracked through various assessment methods including quizzes, assignments, project work, and participation in online discussions. Learning Management Systems (LMS) provide detailed analytics on student engagement and performance."
  },
  {
    id: 4,
    question: "What support services are available for online learners?",
    answer: "Students have access to technical support, academic advisors, online tutoring, virtual office hours with instructors, and digital library resources. Many platforms also offer peer support through community forums."
  },
  {
    id: 5,
    question: "How is the quality of online education maintained?",
    answer: "Quality is maintained through rigorous curriculum development, qualified instructors, regular content updates, student feedback systems, and adherence to educational standards. Regular assessments and course evaluations help ensure continuous improvement."
  }
];

export const FaqSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="mt-20 mb-12">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Frequently Asked Questions
      </h2>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="bg-blue-800/30 backdrop-blur-xl rounded-xl overflow-hidden border border-blue-700/50"
          >
            <button
              onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-700/30 transition-colors"
            >
              <span className="font-medium text-white">{faq.question}</span>
              <motion.div
                animate={{ rotate: activeId === faq.id ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Plus className="w-5 h-5 text-yellow-400" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {activeId === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-6 py-4 text-gray-300 border-t border-blue-700/50">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}; 