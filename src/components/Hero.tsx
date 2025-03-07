"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FaMapMarkerAlt, FaBook, FaFire, FaClock } from "react-icons/fa";
import Image from "next/image";
import { useRef } from "react";

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#0A1854] to-[#0F2167]">
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-20 left-10 w-64 h-64 bg-[#9B111E]/10 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-[#0F2167]/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 right-1/4 w-40 h-40 bg-[#9B111E]/10 rounded-full blur-2xl"
      />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block bg-gradient-to-r from-[#9B111E] to-[#7D0A18] text-white text-base font-bold px-6 py-3 rounded-full mb-8 shadow-xl"
            >
              <span className="inline-block mr-2 text-xl" style={{ filter: 'brightness(1.2) contrast(1.1)' }}>🐪</span>
              3월 11일부터 사전예약 시작
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg"
            >
              단 33일만에<br className="hidden sm:block" />
              <motion.span 
                initial={{ backgroundPosition: "0% 0%" }}
                animate={{ backgroundPosition: "100% 0%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                className="bg-gradient-to-r from-[#FF9999] via-white to-[#FF9999] bg-clip-text text-transparent bg-[length:200%_auto]"
              >
                평생 독서 습관
              </motion.span> 완성하기
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-2xl text-[#D0D0FF] font-medium drop-shadow-md"
            >
              하루 30분, 장소의 마법으로 독서력이 3배가 되는 『🐪 Camelus33』
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-br from-[#0F2167] to-[#0A1854] rounded-2xl shadow-2xl p-8 mb-16 border border-[#1A2980] backdrop-blur-sm"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-4"
              >
                <h3 className="font-bold text-white text-lg mb-2 drop-shadow-md">현재</h3>
                <p className="text-[#D0D0FF]">읽다 만 책만 쌓여가는 책장</p>
              </motion.div>
              <div className="flex items-center justify-center">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#9B111E] to-transparent hidden md:block"></div>
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="md:mx-4 text-[#FF9999] font-bold drop-shadow-lg"
                >
                  33일 후
                </motion.div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#9B111E] to-transparent hidden md:block"></div>
              </div>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-4"
              >
                <h3 className="font-bold text-white text-lg mb-2 drop-shadow-md">변화</h3>
                <p className="text-[#D0D0FF]">매월 3권+ 완독하는 독서가</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-gradient-to-br from-[#0F2167] to-[#0A1854] rounded-xl shadow-xl p-6 border border-[#1A2980] transition-all duration-300"
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-gradient-to-br from-[#9B111E] to-[#7D0A18] rounded-lg flex items-center justify-center shadow-xl"
                >
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-[#9B111E] to-[#7D0A18] rounded-lg flex items-center justify-center shadow-xl"
                  style={{ opacity: 0 }}
                >
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </motion.div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 drop-shadow-md">GPS 독서 집중력 시스템</h3>
              <p className="text-[#D0D0FF]">
                도서관에 있는 30분이 집에서의 2시간보다 강력한 이유
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-gradient-to-br from-[#0F2167] to-[#0A1854] rounded-xl shadow-xl p-6 border border-[#1A2980] transition-all duration-300"
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-gradient-to-br from-[#9B111E] to-[#7D0A18] rounded-lg flex items-center justify-center shadow-xl"
                >
                  <FaBook className="text-white text-2xl" />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-[#9B111E] to-[#7D0A18] rounded-lg flex items-center justify-center shadow-xl"
                  style={{ opacity: 0 }}
                >
                  <FaBook className="text-white text-2xl" />
                </motion.div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 drop-shadow-md">제텔카스텐 시스템</h3>
              <p className="text-[#D0D0FF]">
                책 속 문장이 내 것이 되는 마법 - 클릭 한 번으로 완성
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-gradient-to-br from-[#0F2167] to-[#0A1854] rounded-xl shadow-xl p-6 border border-[#1A2980] transition-all duration-300"
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-gradient-to-br from-[#9B111E] to-[#7D0A18] rounded-lg flex items-center justify-center shadow-xl"
                >
                  <FaFire className="text-white text-2xl" />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-[#9B111E] to-[#7D0A18] rounded-lg flex items-center justify-center shadow-xl"
                  style={{ opacity: 0 }}
                >
                  <FaFire className="text-white text-2xl" />
                </motion.div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 drop-shadow-md">33일 독서 챌린지</h3>
              <p className="text-[#D0D0FF]">
                뇌과학이 증명한 33일의 마법 - 독서가 습관이 되는 순간
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-center"
          >
            <p className="text-white text-lg font-medium mb-3 drop-shadow-md">
              "이미 2,451명이 33일 독서 챌린지에 참여했습니다"
            </p>
            <div className="flex justify-center items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <motion.svg 
                  key={star} 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
                  className="w-5 h-5 text-yellow-400 drop-shadow" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
              <span className="text-[#D0D0FF] ml-2">4.9/5 (320+ 리뷰)</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <motion.a
              href="#register"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#9B111E] to-[#7D0A18] text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
            >
              33일 독서 습관 혁명 사전예약하기
            </motion.a>
            <p className="mt-4 text-[#D0D0FF]">
              사전예약 고객에게는 정식 오픈 시 특별 혜택을 드립니다
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1854] to-[#0F2167] pointer-events-none opacity-50"></div>
    </section>
  );
};

export default Hero; 