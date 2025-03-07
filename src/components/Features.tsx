"use client";

import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaStickyNote, FaGamepad, FaBrain, FaChartLine, FaCheck } from "react-icons/fa";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      icon: <FaMapMarkedAlt className="text-3xl text-white" />,
      title: "장소의 힘: GPS 기반 집중력 시스템",
      description:
        "도서관에서의 1페이지가 집에서의 10페이지보다 값진 이유 - 노벨문학상 수상자들의 공통점",
      benefits: [
        "도서관에서 2배 더 빠른 독서 속도",
        "집중력 300% 향상 효과",
        "장소 기반 독서 습관 형성"
      ],
      testimonial: {
        name: "김지현, 대학생",
        text: "도서관에 가면 자동으로 독서 모드가 켜지고, 집중력이 확 올라가요. 한 달 만에 독서량이 3배 늘었습니다!"
      },
      emoji: "📚🔍📍"
    },
    {
      icon: <FaStickyNote className="text-3xl text-white" />,
      title: "기억의 과학: 제텔카스텐 메모법",
      description:
        "하루 5분 제텔카스텐으로 읽은 내용의 80%를 6개월 이상 기억하는 비결",
      benefits: [
        "기억 유지율 80% 달성",
        "자동 메모 시스템 구축",
        "지식 연결 네트워크 형성"
      ],
      testimonial: {
        name: "박서준, 직장인",
        text: "예전엔 책을 읽어도 기억에 남지 않았는데, 제텔카스텐 메모법으로 6개월 전에 읽은 내용도 생생하게 기억해요."
      },
      emoji: "🧠📝💡"
    },
    {
      icon: <FaGamepad className="text-3xl text-white" />,
      title: "뇌과학의 33일 독서 습관화 시스템",
      description:
        "도파민 보상체계로 독서가 SNS보다 더 중독적이 되는 순간 - 33일의 마법",
      benefits: [
        "습관 형성률 92% 달성",
        "도파민 보상 시스템 활용",
        "33일 완주율 3배 증가"
      ],
      testimonial: {
        name: "이민지, 프리랜서",
        text: "33일 챌린지를 시작한 후 SNS 대신 책을 찾게 되었어요. 이제는 하루라도 책을 안 읽으면 뭔가 허전해요!"
      },
      emoji: "🎮📊🏆"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#0F2167] to-[#0A1854]">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block bg-gradient-to-r from-[#9B111E] to-[#7D0A18] text-white text-base font-bold px-6 py-3 rounded-full mb-8 shadow-md"
          >
            검증된 시스템
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
          >
            왜 일반적인 독서앱으로는<br />습관이 형성되지 않는가?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-[#D0D0FF]"
          >
            심리학자들이 검증한 『Camelus33』의 3단계 독서 습관화 시스템
          </motion.p>
        </motion.div>

        {/* 실패 통계 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#0A1854] to-[#0F2167] rounded-2xl shadow-lg p-8 lg:p-12 mb-24 border border-[#1A2980]"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl font-bold text-white text-center mb-12"
          >
            독서 습관 형성에 실패하는 이유
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl font-bold bg-gradient-to-r from-[#FF9999] to-white bg-clip-text text-transparent mb-3"
              >
                87%
              </motion.div>
              <p className="text-[#D0D0FF]">
                독서 계획을 세웠지만<br />1개월 내에 포기
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl font-bold bg-gradient-to-r from-[#FF9999] to-white bg-clip-text text-transparent mb-3"
              >
                73%
              </motion.div>
              <p className="text-[#D0D0FF]">
                읽은 내용을 2주 후에<br />10% 미만으로 기억
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl font-bold bg-gradient-to-r from-[#FF9999] to-white bg-clip-text text-transparent mb-3"
              >
                92%
              </motion.div>
              <p className="text-[#D0D0FF]">
                온라인 정보와 SNS에<br />의한 독서 방해
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* 주요 기능 */}
        <div className="max-w-7xl mx-auto space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 * index, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-gradient-to-br from-[#0A1854] to-[#0F2167] rounded-2xl shadow-lg p-8 lg:p-12 border border-[#1A2980]"
                >
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    className="bg-gradient-to-br from-[#9B111E] to-[#7D0A18] w-20 h-20 rounded-xl flex items-center justify-center mb-6 shadow-md"
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl font-bold text-white mb-4"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg text-[#D0D0FF] mb-8"
                  >
                    {feature.description}
                  </motion.p>
                  <motion.ul 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4"
                  >
                    {feature.benefits.map((benefit, idx) => (
                      <motion.li 
                        key={idx} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.9 + (idx * 0.1), ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-start"
                      >
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-[#9B111E] to-[#7D0A18] flex items-center justify-center mt-0.5"
                        >
                          <FaCheck className="h-4 w-4 text-white" />
                        </motion.div>
                        <span className="ml-3 text-[#D0D0FF] font-medium">{benefit}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
              <div className="w-full lg:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-gradient-to-br from-[#0A1854] to-[#0F2167] rounded-2xl shadow-lg p-8 aspect-[4/3] flex items-center justify-center border border-[#1A2980]"
                >
                  <div className="text-center">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                      className="bg-gradient-to-br from-[#9B111E] to-[#7D0A18] w-24 h-24 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md"
                    >
                      {feature.icon}
                    </motion.div>
                    
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ 
                        scale: 1.05, 
                        rotate: 2,
                        transition: { duration: 0.3 }
                      }}
                      className="bg-gradient-to-br from-[#0A1854] to-[#0F2167] p-8 rounded-2xl border border-[#1A2980] shadow-xl mb-6 max-w-xs mx-auto"
                    >
                      <div className="text-6xl mb-4 flex justify-center space-x-2">
                        {feature.emoji.split('').map((emoji, idx) => (
                          <motion.span 
                            key={idx}
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 0.6 + (idx * 0.1), 
                              ease: [0.16, 1, 0.3, 1] 
                            }}
                            animate={{ 
                              y: [0, -5, 0],
                              rotate: [0, idx % 2 === 0 ? 5 : -5, 0],
                              transition: {
                                duration: 2 + idx,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: idx * 0.2
                              }
                            }}
                            className="inline-block transform"
                          >
                            {emoji}
                          </motion.span>
                        ))}
                      </div>
                      <p className="text-[#D0D0FF] font-medium">App Preview</p>
                    </motion.div>
                    
                    {/* 체험담 추가 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ 
                        y: -5, 
                        boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.3)",
                        transition: { duration: 0.3 }
                      }}
                      className="bg-gradient-to-br from-[#0F2167]/60 to-[#0A1854]/60 p-6 rounded-xl border border-[#1A2980]/50 shadow-lg backdrop-blur-sm relative"
                    >
                      {/* 따옴표 장식 */}
                      <div className="absolute -top-3 -left-1 text-[#9B111E]/30 text-5xl font-serif">"</div>
                      <div className="absolute -bottom-8 -right-1 text-[#9B111E]/30 text-5xl font-serif rotate-180">"</div>
                      
                      <p className="text-[#D0D0FF] italic mb-4 relative z-10 drop-shadow-sm">
                        "{feature.testimonial.text}"
                      </p>
                      <div className="flex items-center justify-center">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9B111E] to-[#7D0A18] flex items-center justify-center mr-2 shadow-md"
                        >
                          <span className="text-white text-xs font-bold">{feature.testimonial.name.charAt(0)}</span>
                        </motion.div>
                        <p className="text-white text-sm font-medium drop-shadow-sm">{feature.testimonial.name}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mt-24"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl font-bold text-white mb-6"
          >
            지금 사전예약하고 33일 후 달라진 독서 습관을 경험하세요
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-[#D0D0FF] mb-8"
          >
            3월 11일부터 시작되는 사전예약, 정식 오픈 시 특별 혜택을 놓치지 마세요
          </motion.p>
          <motion.a
            href="#register"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#9B111E] to-[#7D0A18] text-white text-lg font-bold rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            33일 독서 혁명 사전예약하기
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 