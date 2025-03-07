"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPen, FaBook, FaGift, FaLock, FaRegClock } from "react-icons/fa";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  // 카운트다운 타이머를 위한 상태 (72시간 = 259200000 밀리초)
  const [timeLeft, setTimeLeft] = useState(259200000);

  // 시간을 일, 시간, 분, 초로 포맷팅하는 함수
  const formatTime = () => {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("유효한 이메일 주소를 입력해주세요.");
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  const { days, hours, minutes, seconds } = formatTime();

  return (
    <section id="register" className="py-24 lg:py-32 bg-gradient-to-b from-[#0A1854] to-[#0F2167]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-[#9B111E] to-[#7D0A18] text-white text-base font-bold px-6 py-3 rounded-full mb-8 shadow-md">
            <FaRegClock className="inline-block mr-2 text-xl" /> 3월 11일부터 사전예약 시작
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            33일 독서 습관, 지금 시작하세요!
          </h2>
          <p className="text-xl text-[#D0D0FF]">
            사전예약 고객에게는 정식 오픈 시 특별 혜택을 드립니다
          </p>
        </div>

        {/* 카운트다운 타이머 */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <p className="text-lg text-[#D0D0FF] mb-6">선착순 혜택 종료까지 남은 시간</p>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-[#0A1854] to-[#0F2167] rounded-xl shadow-md p-4 border border-[#1A2980]">
              <span className="block text-2xl font-bold bg-gradient-to-r from-[#FF9999] to-white bg-clip-text text-transparent">{days}</span>
              <span className="text-sm text-[#D0D0FF]">일</span>
            </div>
            <div className="bg-gradient-to-br from-[#0A1854] to-[#0F2167] rounded-xl shadow-md p-4 border border-[#1A2980]">
              <span className="block text-2xl font-bold bg-gradient-to-r from-[#FF9999] to-white bg-clip-text text-transparent">{hours}</span>
              <span className="text-sm text-[#D0D0FF]">시간</span>
            </div>
            <div className="bg-gradient-to-br from-[#0A1854] to-[#0F2167] rounded-xl shadow-md p-4 border border-[#1A2980]">
              <span className="block text-2xl font-bold bg-gradient-to-r from-[#FF9999] to-white bg-clip-text text-transparent">{minutes}</span>
              <span className="text-sm text-[#D0D0FF]">분</span>
            </div>
            <div className="bg-gradient-to-br from-[#0A1854] to-[#0F2167] rounded-xl shadow-md p-4 border border-[#1A2980]">
              <span className="block text-2xl font-bold bg-gradient-to-r from-[#FF9999] to-white bg-clip-text text-transparent">{seconds}</span>
              <span className="text-sm text-[#D0D0FF]">초</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#0A1854] to-[#0F2167] rounded-2xl shadow-lg overflow-hidden border border-[#1A2980]">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-[#0A1854] to-[#0F2167] p-8 lg:p-12 border-r border-[#1A2980]">
                <div className="mb-12">
                  <div className="bg-gradient-to-br from-[#9B111E] to-[#7D0A18] w-20 h-20 rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <FaGift className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    사전예약 특별 혜택
                  </h3>
                  <p className="text-lg text-[#D0D0FF]">
                    정식 오픈 시 별도 초청메일과 함께 사은품 교환쿠폰을 드립니다
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-[#0F2167]/70 to-[#0A1854]/70 rounded-xl p-6">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-[#9B111E] to-[#7D0A18] w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-md">
                        <FaPen className="text-xl text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">라미 만년필</h4>
                        <p className="text-[#D0D0FF]">아이디어 포착에 최적화된 '생각 수집가' 한정판 (시중가 59,000원)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#0F2167]/70 to-[#0A1854]/70 rounded-xl p-6">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-[#9B111E] to-[#7D0A18] w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-md">
                        <FaBook className="text-xl text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">제텔카스텐 노트</h4>
                        <p className="text-[#D0D0FF]">기억 정착률 200% 높이는 뇌과학 기반 메모 시스템 (시중가 32,000원)</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-gradient-to-br from-[#0F2167]/70 to-[#0A1854]/70 rounded-lg text-center">
                  <span className="text-white font-bold">
                    남은 특전: 33개 / 100개
                  </span>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8 lg:p-12">
                {!isSubmitted ? (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      📅 독서 습관 혁명 사전예약하기
                    </h3>
                    <p className="text-lg text-[#D0D0FF] mb-8">
                      이메일 주소를 입력하시면 정식 오픈 시 가장 먼저 초대해 드립니다
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="email" className="block text-base font-semibold text-white mb-2">
                          이메일 주소
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            onKeyDown={handleKeyDown}
                            placeholder="your@email.com"
                            className={`w-full px-4 py-3 text-base rounded-lg border ${
                              error ? "border-red-500" : "border-[#1A2980]"
                            } focus:outline-none focus:border-[#9B111E] focus:ring-2 focus:ring-[#9B111E]/20 bg-gradient-to-br from-[#0F2167] to-[#0A1854] text-white`}
                            required
                          />
                          {error && (
                            <p className="absolute -bottom-6 left-0 text-sm text-red-400">
                              {error}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-[#9B111E] to-[#7D0A18] text-white py-3 px-6 text-lg font-bold rounded-lg shadow-md hover:shadow-lg disabled:opacity-70 transition-all"
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            처리 중...
                          </span>
                        ) : (
                          "33일 독서 습관 혁명 사전예약하기"
                        )}
                      </button>
                    </form>
                    
                    <div className="mt-8 pt-6 border-t border-[#1A2980]">
                      <div className="flex items-center justify-center space-x-6 text-[#D0D0FF] text-sm">
                        <div className="flex items-center">
                          <div className="bg-gradient-to-br from-[#0F2167] to-[#0A1854] w-8 h-8 rounded-lg flex items-center justify-center mr-2 border border-[#1A2980]">
                            <FaLock className="text-[#D0D0FF]" />
                          </div>
                          <span>보안 연결</span>
                        </div>
                        <span>•</span>
                        <span>100% 환불 보장</span>
                        <span>•</span>
                        <span>개인정보 보호</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#9B111E]/30 to-[#7D0A18]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-8 h-8 text-[#FF9999]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">
                      축하합니다! 사전예약이 완료되었습니다
                    </h4>
                    <p className="text-lg text-[#D0D0FF] mb-2">
                      {email}로 예약 확인 메일을 발송했습니다
                    </p>
                    <p className="text-base text-[#D0D0FF] mb-6">
                      정식 오픈 시 별도 초청메일과 사은품 교환쿠폰을 함께 보내드립니다
                    </p>
                    
                    <div className="mt-6">
                      <p className="text-base text-[#D0D0FF] mb-4">친구들에게 이 혁명적인 독서 앱을 공유하세요</p>
                      <div className="flex justify-center space-x-4">
                        <button className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#9B111E] to-[#7D0A18] text-white flex items-center justify-center hover:shadow-lg transition-all">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                          </svg>
                        </button>
                        <button className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#9B111E] to-[#7D0A18] text-white flex items-center justify-center hover:shadow-lg transition-all">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ 섹션 */}
        <div className="max-w-3xl mx-auto mt-24">
          <h3 className="text-2xl font-bold text-white text-center mb-8">자주 묻는 질문</h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-[#0A1854] to-[#0F2167] rounded-xl p-6 shadow-md border border-[#1A2980]">
              <h4 className="font-bold text-white mb-2">이미 많은 독서 앱을 시도했는데 Camelus33은 왜 다른가요?</h4>
              <p className="text-[#D0D0FF]">기존 독서 앱들이 단순히 기록 기능만 제공했다면, Camelus33은 장소 기반 독서 인증, 과학적 습관 형성 시스템, 실제 뇌과학을 적용한 메모 관리까지 통합한 유일한 앱입니다.</p>
            </div>
            <div className="bg-gradient-to-br from-[#0A1854] to-[#0F2167] rounded-xl p-6 shadow-md border border-[#1A2980]">
              <h4 className="font-bold text-white mb-2">GPS 기능이 배터리를 많이 소모하지 않나요?</h4>
              <p className="text-[#D0D0FF]">Camelus33은 지속적인 GPS 추적이 아닌, 특정 장소 진입 시에만 인증하는 방식으로 배터리 소모를 최소화했습니다. 평균적으로 하루 배터리의 3% 미만을 사용합니다.</p>
            </div>
            <div className="bg-gradient-to-br from-[#0A1854] to-[#0F2167] rounded-xl p-6 shadow-md border border-[#1A2980]">
              <h4 className="font-bold text-white mb-2">33일 습관이 형성되지 않으면 어떻게 되나요?</h4>
              <p className="text-[#D0D0FF]">33일간 정해진 목표에 도달하지 못하더라도 100% 환불을 보장합니다. 또한 무료로 한 시즌을 더 제공하여 자신에게 맞는 방식으로 독서 습관을 형성할 기회를 드립니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration; 