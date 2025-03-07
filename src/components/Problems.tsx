"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaQuestionCircle } from "react-icons/fa";
import { useRef } from "react";

const Problems = () => {
  const problems = [
    "독서를 하고 싶은데 자꾸만 딴짓하게 돼요.",
    "도서관에서 집중은 잘되는데 혼자선 꾸준히 못해요.",
    "책을 읽긴 하지만 기억에 남지 않아요.",
    "독서 습관을 만들고 싶은데 방법을 모르겠어요.",
  ];

  const containerRef = useRef(null);

  return (
    <section id="problems" className="py-24 lg:py-32 bg-gradient-to-b from-[#0F2167] to-[#0A1854] relative overflow-hidden">
      {/* 배경 장식 요소 */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-40 left-20 w-64 h-64 bg-[#9B111E]/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-40 right-20 w-80 h-80 bg-[#0F2167]/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block bg-gradient-to-r from-[#9B111E] to-[#7D0A18] text-white text-base font-bold px-6 py-3 rounded-full mb-8 shadow-xl"
            >
              <FaQuestionCircle className="inline-block mr-2 text-xl" /> 독서 고민
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl lg:text-4xl font-bold text-white mb-6 drop-shadow-lg"
            >
              이런 고민이 있으셨나요?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl text-[#D0D0FF] drop-shadow-md"
            >
              독서를 시작하려는 많은 분들이 겪는 공통적인 어려움
            </motion.p>
          </motion.div>

          <motion.div 
            ref={containerRef}
            className="space-y-6"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 * index, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 }
                }}
                className="bg-gradient-to-br from-[#0A1854] to-[#0F2167] p-6 rounded-xl shadow-xl border border-[#1A2980] transition-all duration-300"
              >
                <div className="flex items-start">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + (0.1 * index), ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    className="bg-gradient-to-br from-[#9B111E] to-[#7D0A18] w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-xl flex-shrink-0"
                  >
                    <FaCheckCircle className="text-white text-xl" />
                  </motion.div>
                  <div>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + (0.1 * index), ease: [0.16, 1, 0.3, 1] }}
                      className="text-xl font-medium text-white drop-shadow-md"
                    >
                      &quot;{problem}&quot;
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
              className="inline-block bg-gradient-to-r from-[#9B111E] to-[#7D0A18] text-white text-xl font-bold px-8 py-4 rounded-xl shadow-xl"
            >
              『Camelus33』이 모든 고민을 해결해드립니다!
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-lg text-[#D0D0FF] drop-shadow-md"
            >
              33일 독서 습관화 시스템으로 당신의 독서 생활을 완전히 바꿔보세요
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problems; 