"use client";

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0A1854] to-[#0F2167] text-[#D0D0FF]">
      <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">🐪 Camelus33</h3>
            <p className="text-sm mb-4">
              독서 습관 형성을 위한 혁신적인 솔루션을 제공하는 Camelus33은 
              GPS 기반 독서 인증과 제텔카스텐 메모 시스템으로 
              당신의 독서 생활을 혁신합니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#D0D0FF] hover:text-white transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-[#D0D0FF] hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-[#D0D0FF] hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-[#D0D0FF] hover:text-white transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  GPS 독서 인증 시스템
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  제텔카스텐 메모
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  33일 독서 챌린지
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  독서 모임
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  독서 코칭
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">회사</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  회사 소개
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  팀 멤버
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  채용 정보
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  보도 자료
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  블로그
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">고객 지원</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  고객센터
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  이용 가이드
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Company Details */}
        <div className="border-t border-[#1A2980] pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-sm">
              <p className="mb-2">
                <strong className="text-white">주식회사 테딘</strong>
              </p>
              <p>대표이사: 서봉진 | 사업자등록번호: 348-88-02077</p>
              <p>주소: 세종특별자치시 터미널안길 60</p>
              <p>이메일: camelus.tedin@gmail.com | 법인직통: 010-8889-3672</p>
            </div>
            <div className="text-sm md:text-right">
              <p>© 2025 Camelus33. All rights reserved.</p>
              <p className="mt-2">
                <a href="#" className="hover:text-white transition-colors">이용약관</a>
                <span className="mx-2">|</span>
                <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 