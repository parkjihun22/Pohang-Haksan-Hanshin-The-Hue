import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // SEO 메타 태그 추가를 위한 Helmet 임포트

// PC, 모바일 전용 CSS 모듈 (Main.module.scss 안에 모든 스타일을 넣은 경우)
import styles from "./Main.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FixIcon from "../../components/FixIcon/FixIcon";
import UnitplanBox from "../../components/UnitplanBox/UnitplanBox";
import MobilePopup from "../../components/MobilePopup/MobilePopup";
import Popup from "../../components/Popup/Popup";
import MobileSectionBox from "../../components/MobileSectionBox/MobileSectionBox";
import MobileOverviewSection from "../../components/MobileOverviewSection/MobileOverviewSection";
import DarkComplexSection from "../../components/DarkComplexSection/DarkComplexSection";
import InterestPopup from "../../components/InterestPopup/InterestPopup"; // 새 팝업 컴포넌트 import
// import UrlContainer from "../../components/UrlContainer/UrlContainer";\
import UnitInfoSection from "../../components/UnitInfoSection/UnitInfoSection";
import MobileNewsSection from "../../components/MobileNewsSection/MobileNewsSection";

import news2Img from "../../assets/news/news2.jpg";
import news3Img from "../../assets/news/news3.jpg";
import news4Img from "../../assets/news/news4.jpg";



import mainImage from "../../assets/Main/Main1.jpg";
import section1_Image1 from "../../assets/Main/section1-img1.jpg";
import section2_Image1 from "../../assets/Main/section2-img1.jpg";
import section3_Image1 from "../../assets/Main/section3-img1.png";
import section3_Image2 from "../../assets/Main/section3-img2.png";
import section3_Image3 from "../../assets/Main/section3-img3.png";
import section3_Image4 from "../../assets/Main/section3-img4.png";
import section4_Image1 from "../../assets/Main/section4-img1.jpg";
import section4_Image2 from "../../assets/Main/section4-img2.jpg";
import section4_Image3 from "../../assets/Main/section4-img3.jpg";
import section8Img3 from "../../assets/Main/section8Img3.jpg";
import mobileImageMain from "../../assets/Main/mobileMain1.jpg";
import popupPage1 from "../../assets/Popup/page1.jpg";
import popupPage2 from "../../assets/Popup/page2.jpg";
import popupPage3 from "../../assets/Popup/page3.jpg";
import popupPage4 from "../../assets/Popup/page3.jpg";

import mobilePopupPage1 from "../../assets/Popup/mobilepage1.jpg";
import mobilePopupPage2 from "../../assets/Popup/mobilepage2.jpg";
import mobilePopupPage3 from "../../assets/Popup/mobilepage3.jpg";
import mobilePopupPage4 from "../../assets/Popup/mobilepage3.jpg";
import map1 from "../../assets/Main/map1.jpg";
import mobilemap1 from "../../assets/Main/mobilemap1.jpg";

import subpinkimg from "../../assets/Main/subpinkimg.jpg";

const section3Contents = [
  {
    imgSrc: section3_Image1,
    title: "PREMIUM 01",
    text1: `1,455세대 학산 명품 대단지`,
    text2: `최중심 인프라 생활권을 덤으로<br />
			      학산의 메머드급 프리미엄`,
    link: "/BusinessGuide/intro",
    linkText: "더 알아보기 >",
  },
  {
    imgSrc: section3_Image2,
    title: "PREMIUM 02",
    text1: `최첨단 산업도시 미래특권`,
    text2: `2차전지 정심 도시개발<br />
			      블루밸리 국가산단, 영일만산 등`,
    link: "/LocationEnvironment/intro",
    linkText: "더 알아보기 >",
  },
  {
    imgSrc: section3_Image3,
    title: "PREMIUM 03",
    text1: `쾌적하고 편리한 생활의 중심`,
    text2: `축구장 500배 규모, 10개의 테마를 갖춘<br />
			      학산공원을 정원처럼 품은 힐링 대단지`,
    link: "/LocationEnvironment/intro",
    linkText: "더 알아보기 >",
  },
  {
    imgSrc: section3_Image4,
    title: "PREMIUM 04",
    text1: `한시적으로 제공되는 특별혜택`,
    text2: `다시는 없을 특별혜택은 덤으로<br />
			      받으면서 내 집 마련의 기회`,
    link: "/LocationEnvironment/primium",
    linkText: "더 알아보기 >",
  },
];

const Main = () => {
  // 기존 상태 변수들
  const [isScroll, setIsScroll] = useState(false);
  const [page, setPage] = useState(1); // 페이지 세션 번호
  const [isScrolling, setIsScrolling] = useState(false); // 스크롤 중 여부
  const [isOpenPopup1, setIsOpenPopup1] = useState(true);
  const [isOpenPopup2, setIsOpenPopup2] = useState(true);
  const [isOpenPopup3, setIsOpenPopup3] = useState(true);
  const [isOpenPopup4, setIsOpenPopup4] = useState(true);
  const [isInterestPopupOpen, setIsInterestPopupOpen] = useState(false); // 방문예약 팝업 상태
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  // 관심고객 등록 폼 상태 관리 (생년월일, 거주지역 필드 추가)
const [registration, setRegistration] = useState({
  name: "",
  phone: "",
  birthday: "",
  residence: "",
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setRegistration((prev) => ({
    ...prev,
    [name]: value,
  }));
};

 // ─── 예시용 뉴스 데이터 (초기 더미) ───
 const newsList = [
   {
     id: 1,
     title: "살아나는 부동산 시장...한신공영 시공 ‘포항 학산 한신더휴’ 관심↑",
     excerpt:
       "새 정부가 들어서면서 부동산 시장 전망에 관심이 쏠리고 있다. 실제 랜드마크 위주로 신고가가 속출하고, 수도권을 중심으로 아파트값도 상승세로 돌아서면서 지역을 대표할 미래가치 높은 아파트를 선점하려는 수요자가 크게 늘었다는 분석이다.23일 부동산R114 자료에 따르면 16대 대선을 치른 2003년 정권이 교체되고, 2008년까지 5년간 전국 아파트값은 63.67% 상승했다. 이어 19대 대선 이후에는 2017~2022년까지 5년 동안 전국 아파트값이 72.41% 상승했다. 특히 2020년부터 2021년까지 2년간 아파트값이 무려 41.99% 오르며, 아직도 역대 최대 부동산 호황기로 손꼽히고 있다.최근 부동산 시장 분위기도 심상치 않다. 한국부동산원에 따르면 수도권 아파트는 2월 마지막 주차부터 오름세를 이어오고 있다. 경기도의 경우 포항 아파트값도 5월 1주차부터 4주 연속 상승중이다.부동산 전문가는 “과거부터 대선이 부동산 시장에 주는 영향이 컸기 때문에 현재 분위기도 심상치 않은 것”이라며 “한국은행 기준금리가 지난달 2.5%로 하락했고, 연내 추가로 떨어질 가능성도 있어 부동산 관련 불확실성이 상당부분 해소된 상태”라고 말했다.이처럼 부동산 호황기가 오기 전 랜드마크 선점 경쟁이 치열해지는 가운데 수도권에서는 대표적으로 ‘포항 학산 한신더휴 2·3단지’에 대한 문의도 늘어나는 분위기다. 실제 현재 일부 잔여세대 선착순 동·호지정 계약을 진행중인 ‘포항 학산 한신더휴 2·3단지’는 지난 4월 16일에 입주자 모집공고가 나와 종전 2단계 DSR 규정을 적용 받는다. 또한 계약금을 5%로 낮췄고, 1차 계약금은 500만원 정액제를 실시한다. 당첨자 발표일로부터 6개월 후 전매가 가능하며, 특히 중도금 대출체결 전 전매가능 일자가 도래한다.포항 학산 한신더휴 2·3단지는 ‘첨단 시스템 포항 학산 국가산업단지’로 이어지는 45번 국도 옆에 자리를 잡았고, ‘포항 포항 학산 일반산단’으로 이어지는 국지도 57호선과도 연결되어 있어 이른바 ‘반도체 로드’가 모두 인접한 점이 돋보인다.우선 원삼면 일대에는 SK하이닉스의 ‘포항 포항 학산 일반산업단지’가 조성 중이다. 지난 2월, 415만㎡ 부지에서 1기 팹(Fab·반도체 공장) 착공에 들어갔다. SK하이닉스는 이곳을 고대역폭메모리(HBM) 등 차세대 D램 생산기지로 키울 계획이다. SK하이닉스는 1기 완공 이후 나머지 3개 팹도 순차적으로 건설할 방침이다.여기에 ‘첨단 시스템포항 학산 국가산업단지’ 조성도 속도를 내고 있다. LH는 시공책임형 건설사업관리(CMR) 방식으로 추진되는 ‘포항 첨단시스템반도체 국가산업단지 조성공사’ 1공구에 대한 시공사 선정 공고를 지난 4월 발표했다. 착공은 2026년, 완공 목표는 2031년이다. 산업단지 조성이 마무리되면 삼성전자는 이곳에 360조원을 투입해 반도체 팹 6기를 순차적으로 건설할 예정이다.특히, 포항시는 포항 학산 2곳에 필요한 용수 공급 인프라를 구축하기 위해 ‘포항 반도체 산업단지 통합용수공급 사업 1단계’ 기본 및 실시설계를 시작했다고 5월 말 밝혀, 사업 추진에도 속도가 붙을 전망이다.지역 내 공인중개사무소 관계자는 “대선이 마무리되면서 각종 정치적 불확실성이 크게 줄었고, 관망하던 실수요도 움직이는 분위기에 특히 미래가치를 선점하려는 투자 목적의 고객 비중이 크게 늘었다고 말했다.",
     date: "2025. 7. 21.",
     link: "/pentacityhansin/press/cqr9aqw3QNY4ebaAWGmC",
     // image: "https://yourdomain.com/path/to/image.jpg",  // 이미 있으면 넣고
   },
   {
     id: 2,
     title: "한신공영, 브랜드 리뉴얼 첫 단지 ‘포항 학산 한신더휴’ 예비 입주자 사이 호평",
     excerpt:
       "한신공영이 2021년 리뉴얼 된 새로운 ‘한신더휴’ BI를 적용한 첫 단지인 ‘포항 학산 한신더휴’의 입주예정자들로부터 뜨거운 호응을 얻고 있다고 27일 밝혔다.  세심한 시공과 품격 있는 설계를 통해 입주 전부터 긍정적인 평가를 받았으며, 입주자 협의회와의 활발한 소통이 업계의 모범사례로 주목받고 있다. 또한 올해 하반기 양주와 평택에서 예정된 수도권 신규 분양에 대한 기대도 높아지고 있다.포항 학산 한신더휴는 2021년 리뉴얼된 B.I를 신규 적용한 첫 단지로 올 12월 입주를 앞두고 있다. 포항 학산 한신더휴는 한신공영이 새롭게 정립한 브랜드 가치를 처음으로 적용한 프로젝트다. 한신공영은 2021년 전면적인 브랜드 리뉴얼을 통해 '한신더휴'를 프리미엄 주거 브랜드로 재정립하며, 고급화된 디자인과 혁신적인 주거 솔루션을 통해 한차원 높은 주거 솔루션을 제공하는 데 집중했다.포항 학산 한신더휴는 특히, 공용부문과 조경 설계에 세심한 공을 들였다. 한신공영은 입주민들의 일상적인 동선과 커뮤니티 공간 활용도를 고려한 설계를 바탕으로, 고품격 마감재를 적용하고 디테일한 시공 관리를 실시했다. 특히, 조경 설계에서는 다양한 테마가 적용되어, 단지 내 각 동마다 독특한 분위기를 연출했다.최근 진행된 입주자 사전점검에서는 이러한 노력의 결과가 여실히 드러났다. 일반적으로 입주예정자 협의회에서는 하자나 시공 불량 등 불만족 사항을 지적하는 경우가 많은 데 반해, 포항 학산 한신더휴 입주예정자들은 오히려 긍정적인 평가를 쏟아내고 있다.박희철 입주자 협의회 회장은 “4세대 아파트답게 티하우스, 물놀이터, 조깅트랙 및 농구·축구를 할 수 있는 다목적체육관, 실내 골프장, 키즈클럽, 작은 도서관, 독서실 등 쾌적하고 풍부한 커뮤니티 시설이 갖춰져 있다”라면서 “입주민들에게 수준 높은 생활 인프라를 제공하는 만큼 입주가 기다려진다”고 밝혔으며, 가장 마음에 드는 점으로 ‘조경’을 꼽았다 그는 “조경설명회에서 입주민들과의 협의를 통해 동마다 포인트 될 수 있는 묘목을 하나씩 배치하기로 해 아파트 단지 요소요소 마다 다른 분위기를 조성했다”면서, “미로공원, 팽나무길. 어린이공원 등 다양한 조경시설은 포항 학산 한신더휴의 자랑거리”라고 말했다. 그러면서 “공원을 통해 횡단보도를 건너지 않고 초등학교에 바로 갈 수 있어 교육여건도 좋은 아파트”라고 강조했다.예비 입주자들은 입주자들과 적극적으로 협의하고자 하는 한신공영의 자세에 크게 만족하고 있다. 보통 마감재부터, 공정상의 절차, 조경, 도색 등 주거환경과 직결된 다양한 사안이 산재해 있어 시공사와 입주민의 의견 충돌을 필연적인 부분이다. 그러나 한신공영의 ‘입주민과의 소통’을 중시하며 입주예정자의 권익을 위해 노력하고 소통에 나서면서 입주민들의 만족도를 끌어 낸 것은 물론이고 건설업계의 귀감이 되고 있다.",
     date: "2024. 10. 10.",
     link: "/pentacityhansin/press/a6C8fAtT7PnOPHWmFzw2",
     image: news2Img
   },
   {
    id: 3,
    title: "한신공영 '포항 학산 한신더휴', 저금리 대출 제공",
    excerpt:
      "농협이 제공하는 금리는 4.2%(변동금리)로, 4대 은행의 주택 담보 대출 평균 금리(연 4.757~6.48%)에 비해 크게 낮은 수준이다. 이렇다 보니 지난 10일 진행된 대출 사전 설명회에서 예비 입주자들의 긍정적인 반응을 다수 이끌어냈다. 경기 불황으로 1금융권 시중은행 대출이 쉽지 않은 데다, 주택 담보 대출 평균보다 낮은 금리로 공급돼 예비 입주자들의 관심이 상당했다. 한신공영은 소비자의 편의를 위해 금융 기관과 직접 협의한 것으로 알려졌다.설명회에 참석한 예비 입주자 J씨(43세)는 금리 인하기에 접어들었다고는 하지만, 시중은행 대출 금리는 여전히 높아 자금 마련이 어려운 것이 현실 이라며 잔금 대출 납부에 큰 부담을 느끼고 있었는데, 입주를 앞두고 상대적으로 저금리 대출을 지원한다고 들어 참석하게 됐다고 덧붙였다.",
    date: "2024. 10. 10.",
    link: "/pentacityhansin/press/n0IxMXC8dL1KZOxaLHfB",
    image: news3Img
  },
  {
    id: 4,
    title: "한신공영, 브랜드 리뉴얼 첫 적용단지 ‘포항 학산 한신더휴’ 예비 입주자 만족도 ‘최상’",
    excerpt:
      "한신공영이 2021년 리뉴얼된 새로운 ‘한신더휴’ BI를 적용한 첫 단지인 ‘포항 학산 한신더휴’ 입주예정자들로부터 호응을 얻고 있다. 세심한 시공과 품격 있는 설계를 통해 입주 전부터 긍정적인 평가를 받았으며, 입주자 협의회와의 활발한 소통이 업계의 모범사례로 주목받고 있다.올해 하반기 양주와 평택에서 예정된 수도권 신규 분양에 대한 기대도 높아지고 있다.포항 학산 한신더휴는 2021년 리뉴얼된 B.I를 신규 적용한 첫 단지로 올 12월 입주를 앞두고 있다.포항 학산 한신더휴는 한신공영이 새롭게 정립한 브랜드 가치를 처음으로 적용한 프로젝트다.한신공영은 2021년 전면적인 브랜드 리뉴얼을 통해 '한신더휴'를 프리미엄 주거 브랜드로 재정립하며, 고급화된 디자인과 혁신적인 주거 솔루션을 통해 한차원 높은 주거 솔루션을 제공하는 데 집중했다.포항 학산 한신더휴는 특히, 공용부문과 조경 설계에 세심한 공을 들였다.한신공영은 입주민들의 일상적인 동선과 커뮤니티 공간 활용도를 고려한 설계를 바탕으로, 고품격 마감재를 적용하고 디테일한 시공 관리를 실시했다.조경 설계에서는 다양한 테마가 적용돼, 단지 내 각 동마다 독특한 분위기를 연출했다.최근 진행된 입주자 사전점검에서는 이러한 노력의 결과가 여실히 드러났다. 일반적으로 입주예정자 협의회에서는 하자나 시공 불량 등 불만족 사항을 지적하는 경우가 많은 데 반해, 포항 학산 한신더휴 입주예정자들은 오히려 긍정적인 평가를 쏟아내고 있다.박희철 입주자 협의회 회장은 “4세대 아파트답게 티하우스, 물놀이터, 조깅트랙 및 농구·축구를 할 수 있는 다목적체육관, 실내 골프장, 키즈클럽, 작은 도서관, 독서실 등 쾌적하고 풍부한 커뮤니티 시설이 갖춰져 있다”면서 “입주민들에게 수준 높은 생활 인프라를 제공하는 만큼 입주가 기다려진다”고 밝혔으며, 가장 마음에 드는 점으로 ‘조경’을 꼽았다.그는 “조경설명회에서 입주민들과의 협의를 통해 동마다 포인트 될 수 있는 묘목을 하나씩 배치하기로 해 아파트 단지 요소요소 마다 다른 분위기를 조성했다”면서, “미로공원, 팽나무길, 어린이공원 등 다양한 조경시설은 포항 학산 한신더휴의 자랑거리”라고 말했다.그러면서 “공원을 통해 횡단보도를 건너지 않고 초등학교에 바로 갈 수 있어 교육여건도 좋은 아파트”라고 강조했다.예비 입주자들은 입주자들과 적극적으로 협의하고자 하는 한신공영의 자세에 크게 만족하고 있다.보통 마감재부터, 공정상의 절차, 조경, 도색 등 주거환경과 직결된 다양한 사안이 산재해 있어 시공사와 입주민의 의견 충돌을 필연적인 부분이다.그러나 한신공영의 ‘입주민과의 소통’을 중시하며 입주예정자의 권익을 위해 노력하고 소통에 나서면서 입주민들의 만족도를 끌어 낸 것은 물론이고 건설업계의 귀감이 되고 있다.한신공영의 새로운 브랜드가치는 후속 프로젝트를 통해 전국으로 확산되고 있다.현재 아산권곡 한신더휴와 오산세교 한신더휴가 성공적으로 공사가 진행 중이며, 올해 11월에는 수도권 핵심지역인 양주덕계와 평택브레인시티에서 한신더휴 신규 분양을 앞두고 있다.양주 덕계동에는 ‘덕계역 한신더휴 포레스트(724세대)’가, 평택 브레인시티에는 ‘평택 브레인시티 한신더휴(991세대)’가 공급 예정이다. 문화예술을 담은 공간으로 건설업계 및 소비자들에서 주목 받고 있다.평택브레인시티 한신더휴는 미래형 스마트시티의 중심 주거단지로 조성된다. 두 단지 모두 한신공영의 혁신적인 설계와 우수한 시공력이 접목돼 지역을 대표하는 랜드마크 단지가 될 것으로 기대를 모으고 있다.한신공영 관계자는 “포항 학산 한신더휴의 성공적인 사례를 바탕으로, 앞으로 분양되는 모든 단지에서도 한신더휴만의 차별화된 프리미엄 가치를 선보일 것”이라며 “하반기 수도권 신규 분양 단지들을 통해 한 차원 높은 주거문화의 새로운 기준을 제시하겠다”고 밝혔다.",
    date: "2024. 10. 10.",
    link: "/pentacityhansin/press/1oRiifPTupt4Mbj94YOy",
    image: news4Img
  },
   // ...원하시는 만큼 항목 추가
 ];


  // 기존 제출 핸들러는 Formspree를 사용할 것이므로 제거(또는 사용하지 않음)
  // const handleRegistrationSubmit = (e) => {
  //   e.preventDefault();
  //   alert(
  //     `등록되었습니다!\n이름: ${registration.name}\n연락처: ${registration.phone}\n이메일: ${registration.email}\n방문일자: ${registration.visitDate}`
  //   );
  //   setRegistration({ name: "", phone: "", email: "", visitDate: "" });
  // };

  // 스크롤 시 헤더 변경 처리
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // PC에서만 페이지 전환 스크롤 이벤트 처리
  useEffect(() => {
    if (isMobile) return; // 모바일은 해당 없음

    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;
      setIsScrolling(true);
      if (e.deltaY > 0) {
        if (page < 8.5) {
          setPage((prevPage) => prevPage + 1);
        }
      } else {
        if (page > 1) {
          setPage((prevPage) => prevPage - 1);
        }
      }
      setTimeout(() => setIsScrolling(false), 500);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [page, isScrolling, isMobile]);

  // PC에서 페이지 번호에 따라 스크롤 이동
  useEffect(() => {
    if (isMobile) return;
    const posTop = (page - 1) * window.innerHeight;
    window.scrollTo({
      top: posTop,
      behavior: "smooth",
    });
  }, [page, isMobile]);

  return (
    <>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        {/* SEO 최적화를 위한 메타 태그 추가 */}
        <title>▪포항 학산 한신더휴</title>
        <meta
          name="description"
          content="포항 학산 한신더휴ㅣ☎️(대표)1533-8848ㅣ포항 학산 한신더휴ㅣ견본주택ㅣ모델하우스ㅣ위치ㅣ청약ㅣ분양ㅣ분양가ㅣ공급정보ㅣ잔여세대문의ㅣ고객센터ㅣ방문예약"
        />
        <meta name="keywords"
        content="학산한신더휴, 학산한신더휴엘리트파크" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ifors2020.kr/" />

        {/* 모바일 친화성을 위한 추가 태그 */}
        <meta name="HandheldFriendly" content="True" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph - 소셜 미디어(페이스북, LinkedIn 등) 공유 최적화 */}
        <meta
          property="og:title"
          content="▪포항 학산 한신더휴"
        />
        <meta
          property="og:description"
          content="포항 학산 한신더휴ㅣ☎️(대표)1533-8848ㅣ포항 학산 한신더휴ㅣ견본주택ㅣ모델하우스ㅣ위치ㅣ청약ㅣ분양ㅣ분양가ㅣ공급정보ㅣ잔여세대문의ㅣ고객센터ㅣ방문예약"
        />
        <meta property="og:url" content="https://www.ifors2020.kr/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.ifors2020.kr/Main1.png" // 실제 메인 이미지 URL로 변경하세요.
        />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="포항 학산 한신더휴"
        />
        <meta
          name="twitter:description"
          content="포항 학산 한신더휴ㅣ☎️(대표)1533-8848ㅣ포항 학산 한신더휴ㅣ견본주택ㅣ모델하우스ㅣ위치ㅣ청약ㅣ분양ㅣ분양가ㅣ공급정보ㅣ잔여세대문의ㅣ고객센터ㅣ방문예약"
        />
        <meta
          name="twitter:image"
          content="https://www.ifors2020.kr/Main1.png" // 실제 이미지 URL로 변경하세요.
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도를 높이기 위한 스키마 마크업 */}
        <script type="application/ld+json">
          {`
      {
        "@context": "http://schema.org",
        "@type": "ApartmentComplex",
        "name": "포항 학산 한신더휴",
        "description": "브랜드 평판 1위 프리미엄 아파트. 방문 예약 시 신세계상품권 증정 등 다양한 혜택을 제공합니다.",
        "url": "https://www.ifors2020.kr/",
        "image": "https://www.ifors2020.kr/Main1.png",
        "telephone": "1533-8848",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "경기도 포항 은화삼지구",
          "addressLocality": "포항",
          "addressRegion": "경기도",
          "postalCode": "우편번호"
        }
      }
    `}
        </script>
      </Helmet>
      {!isMobile ? (
        // PC 버전
        <>
          <Header isChanged={isScroll} />
          {/* {isOpenPopup1 && (
            <Popup
              onClosed={() => setIsOpenPopup1(false)}
              popupImage={popupPage1}
              numbering={1}
            />
          )}
          {!isOpenPopup1 && isOpenPopup2 && (
            <Popup
              onClosed={() => setIsOpenPopup2(false)}
              popupImage={popupPage2}
              numbering={2}
            />
          )}
          {!isOpenPopup2 && isOpenPopup3 && (
            <Popup
              onClosed={() => setIsOpenPopup3(false)}
              popupImage={popupPage3}
              numbering={3}
            />
          )} */}

          <div className={styles.imageContainer}>
            <img
              src={mainImage}
              className={styles.mainImage}
              alt="포항 학산 한신더휴-mainimage1"
            />
            <div className={styles.overlay}></div>
            <div className={styles.mainImageTextBox}>
              <div className={styles.mainImageTextSub}>
                한시적으로 제공되는{" "}
                <span className={styles.greyText}>계약자 특별혜택</span> |
                중도금 무이자{" "}
                <span className={styles.greyText}>발코니 확장무상</span> |
                500만원으로{" "}
                <span className={styles.greyText}>입주시까지</span>
              </div>
              <div className={styles.mainImageTitleBox}>
                <div className={styles.mainImageText}>
                  포항 학산의 중심이 될
                </div>
                <div className={styles.mainImageLine}></div>
                <div className={styles.mainImageText}>학산 한신더휴 엘리트파크</div>
              </div>
              {/* 기존 관심고객 등록 링크 대신 방문예약 버튼 클릭 시 팝업 오픈 */}
              <div>
                <button
                  onClick={() => setIsInterestPopupOpen(true)}
                  className={styles.subPinkBtn}
                >
                  <img
                    src={subpinkimg}
                    className={styles.subPinkImg}
                    alt="포항 학산 한신더휴 관심고객등록"
                  />
                </button>
              </div>
            </div>
            <FixIcon type="absolute" />
          </div>

          <div className={styles.section}>
            <div className={styles.section1}>
              <div className={styles.textBox}>
                <div className={styles.text1}>Location</div>
                <div className={styles.text2}>
                포항 학산 한신더휴 POINT
                </div>
                <div className={styles.text3}>
                  - 최중심 인프라 생활특권 (CGV,이마트,롯데백화점 등) <br />
                  - 2차전지 중심도시개발, 블루밸리 국가산단 등 <br />
                  - 초대형 호재의 미래비전<br />
                  - 축구장 50배 규모의 학산공원을 품은 숨세권 힐링특권
                  <br />- 모두를 누리는 포항 학산 한신더휴
                </div>
                <div className={styles.text4}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsInterestPopupOpen(true);
                    }}
                  >
                    관심고객 등록하기 {">"}
                  </a>
                </div>
              </div>
              <div className={styles.menuBox}>
                <img
                  src={section1_Image1}
                  alt="포항 학산 한신더휴 브랜드소개-image2"
                />
                <Link to="/Brand/video" className={styles.btn}>
                  브랜드 소개 {">"}
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section8}>
              <div className={styles.textBox}>
                <div className={styles.title}>
                  소수만 누릴 수 있는
                  <br />
                  <span>
                    최고의 브랜드 아파트 <br />
                    포항 학산 한신더휴
                  </span>
                </div>
                <div className={styles.subTitle}>
                  <div className={styles.textLine}></div>
                  <div className={styles.subText}>
                    찬란한 비전에 완벽한 주거가치까지 더해
                    <br />
                    포항 학산 한신더휴가 함께합니다
                  </div>
                </div>
              </div>
              <img
                src={section8Img3}
                alt="포항 학산 한신더휴 입지환경소개-image2"
              />
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section2}>
              <div className={styles.textBox}>
                <div className={`${styles.text1} fadeUpRepeat`}>
                  완벽한 생활에서 준비된 미래까지
                </div>
                <div className={`${styles.text2} fadeUpRepeat`}>
                  기대한 모든 프리미엄이
                  <br />
                  포항 학산 한신더휴에서 펼쳐집니다
                </div>
                <div className={`${styles.text3} fadeUpRepeat`}>
                  SPECIAL PLAN
                </div>
                <div className={`${styles.text4} fadeUpRepeat`}>
                  살수록 자부심이 차원이 다른
                  <br />
                  프리미엄 주거라이프를 실현합니다
                </div>
                <div className={`${styles.text5} fadeUpRepeat`}>
                  주거의 품격과 가치를 높이는 <span>특화설계</span>
                  <br />
                  안전한 이동을 위한 세심한 <span>단지설계</span>
                  <br />
                  편리한 생활을 위한 최적의 <span>공간설계</span>
                </div>
              </div>
              <img
                src={section2_Image1}
                alt="포항 학산 한신더휴 아파트 조감도-image3"
              />
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section3}>
              {section3Contents.map((section, index) => (
                <div key={index} className={styles.box}>
                  <img src={section.imgSrc} alt={section.title} />
                  <div className={styles.boxTitle}>{section.title}</div>
                  <div
                    className={styles.boxText1}
                    dangerouslySetInnerHTML={{ __html: section.text1 }}
                  />
                  <div
                    className={styles.boxText2}
                    dangerouslySetInnerHTML={{ __html: section.text2 }}
                  />
                  <Link to={section.link} className={styles.boxText3}>
                    {section.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section4}>
              <div className={styles.imageBox}>
                <img
                  src={section4_Image1}
                  alt="포항 학산 한신더휴 브랜드소개-image4"
                />
                <div className={styles.text1}>포항 학산 한신더휴</div>
                <div className={styles.text2}>THE NATURAL NOBILITY</div>
                <div className={styles.text3}>
                  당신의 삶, 그 고귀함이 계속되길
                </div>
              </div>
              <div className={styles.textBox}>
                <div className={styles.text1}>UNITPLAN</div>
                <UnitplanBox />
                <Link to="/FloorPlan/84A" className={styles.text2}>
                  더 알아보기 {">"}
                </Link>
              </div>
            </div>
          </div>
          <div id="interestForm" className={styles.section}></div>

          {/* ================== 방문예약 섹션 (PC) ================== */}
<div className={styles.pcVisitContainer}>
  {/* 상단 타이틀 영역 (좌: 제목/부제, 우: 안내문구) */}
  <div className={styles.pcTitleRow}>
    <div className={styles.leftTitle}>
      <h2>포항 학산 한신더휴</h2>
      <p>방문예약</p>
    </div>
    <div className={styles.rightText}>
      방문예약 등록 시 모델하우스 주소 SMS발송 및
      <br />
      잔여세대를 안내드립니다.
    </div>
  </div>

  {/* 입력 폼 */}
  <form
    className={styles.pcVisitForm}
    action="https://formspree.io/f/mbldpwpz"
    method="POST"
  >
    <label htmlFor="name">
      고객명 <span className={styles.redStar}>*</span>
    </label>
    <input
      type="text"
      name="name"
      placeholder="고객명"
      value={registration.name}
      onChange={handleInputChange}
      required
    />

    <label htmlFor="phone">
      연락처 <span className={styles.redStar}>*</span>
    </label>
    <input
      type="tel"
      name="phone"
      placeholder="010-0000-0000"
      value={registration.phone}
      onChange={handleInputChange}
      required
    />
  

    <label htmlFor="message">
      문의 내용
    </label>
    <textarea
      name="message"
      placeholder="문의 내용이 있을 경우 이곳에 남겨주세요."
      value={registration.message}
      onChange={handleInputChange}
      rows={5}
    />

    <button type="submit">등록하기</button>
  </form>
</div>

          {/* <div className={styles.section}>
            <div className={styles.section9}>
              <div className={styles.textBox}>
                <div className={styles.title}>
                  포항 학산 한신더휴
                  <br />
                  <span>견본주택 오시는길</span>
                </div>
                <div className={styles.subTitle}>
                  <div className={styles.textLine}></div>
                  <div className={styles.subText}>
                    찬란한 비전에 완벽한 주거가치까지 더해
                    <br />
                    포항 학산 한신더휴가 함께합니다
                  </div>
                </div>
              </div>
              <img src={map1} alt="포항 학산 한신더휴 오시는길안내-image1" />
            </div>
          </div> */}

          <div className={styles.section5}>
            <Footer />
          </div>
          {/* 방문예약 팝업 (PC) */}
          {isInterestPopupOpen && (
            <InterestPopup
              onClose={() => setIsInterestPopupOpen(false)}
              registration={registration}
              handleInputChange={handleInputChange}
            />
          )}
        </>
      ) : (
        // 모바일 버전
        <div className={styles.mobileMain}>
          {/* {isOpenPopup1 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup1(!isOpenPopup1)}
              popupImage={mobilePopupPage1}
              numbering={1}
            />
          )}
          {isOpenPopup2 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup2(!isOpenPopup2)}
              popupImage={mobilePopupPage2}
              numbering={2}
            />
          )}
          {isOpenPopup3 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup3(!isOpenPopup3)}
              popupImage={mobilePopupPage3}
              numbering={3}
            />
          )}
          {isOpenPopup4 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup4(!isOpenPopup4)}
              popupImage={mobilePopupPage3}
              numbering={4}
            />
          )} */}

          <Header isChanged={isScroll} />

          <div className={styles.imageContainer}>
  <img
    src={mobileImageMain}
    className={styles.mainImage}
    alt="포항 학산 한신더휴 mobilemain-image1"
  />
  <div className={styles.overlay}></div>

  {/* 기존 텍스트 */}
  <div className={styles.mainImageTextBox1}>
    <div className={styles.mainImageTextSub1}>
      한시적으로 제공되는
      <br />
      <span className={styles.greyText1}>계약자 특별혜택</span>
      <br />
      중도금무이자
      <br />
      <span className={styles.greyText1}>발코니 확장무상</span>
      <br />
      500만원으로
      <br />
      <span className={styles.greyText1}>입주시까지</span>
    </div>
    <div className={styles.mainImageTitleBox1}>
      <div className={styles.mainImageText1}>
        학산 한신더휴 엘리트파크
        <br />
        
      </div>
    </div>
  </div>
</div>

          
          

          <div className={styles.container1}>
            <div className={styles.text1}>Location</div>
            <div className={styles.text2}>
              포항 학산 한신더휴 POINT
            </div>
            <div className={styles.text3}>
                  - 최중심 인프라 생활특권 (CGV,이마트,롯데백화점 등) <br />
                  - 2차전지 중심도시개발, 블루밸리 국가산단 등 <br />
                  - 초대형 호재의 미래비전<br />
                  - 축구장 50배 규모의 학산공원을 품은 숨세권 힐링특권
                  <br />- 모두를 누리는 포항 학산 한신더휴
            </div>

            <div className={styles.text4}>
              {/* 외부 링크 대신 방문예약 클릭 시 팝업 호출 */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsInterestPopupOpen(true);
                }}
                className={styles.popupBtn}
              >
                관심고객 등록하기 {">"}
              </a>
            </div>
          </div>
          <MobileOverviewSection />
                 {/* ─── 2.5. 중간에 풀-스크린 이미지 섹션 ───
         <div className={styles.mobileMiddleImage}>
           <img
             src={require("../../assets/Bener/event.jpg")}
            alt="단지 전경 추가 이미지"
             className={styles.middleImage}
           />
         </div> */}
          
         {/* ② DarkComplexSection 추가 */}
         <section className={styles.darkSection}>
           <DarkComplexSection />
         </section>

          <div className={styles.container7}>
            <div className={styles.textBox}>
              <div className={styles.title}>
                포항 학산의 중심으로 사는
                <br />
                <span>최고의 브랜드 아파트</span>
              </div>
              <div className={styles.subTitle}>
                <div className={styles.textLine}></div>
                <div className={styles.subText}>
                  완벽한 비전중심에서 완벽한 주거가치까지 더해
                  <br />
                  포항 학산 한신더휴가 함께합니다
                </div>
              </div>
            </div>
            <img
              src={section8Img3}
              alt="포항 학산 한신더휴 모바일 입지안내 이미지"
            />
          </div>

          <div className={styles.container3}>
            <div className={styles.textbox}>
              <div className={`${styles.text1} fadeUpRepeat`}>
                완벽한 생활에서 준비된 미래까지
              </div>
              <div className={`${styles.text2} fadeUpRepeat`}>
                기대한 모든 프리미엄이
                <br />
                포항 학산 한신더휴에서 펼쳐집니다
              </div>
              <div className={`${styles.text3} fadeUpRepeat`}>SPECIAL PLAN</div>
              <div className={`${styles.text4} fadeUpRepeat`}>
                살수록 자부심이 차원이 다른
                <br />
                프리미엄 주거라이프를 <br /> 포항 학산 한신더휴에서<br />
                확인하세요
              </div>
            </div>
            <img
              src={section2_Image1}
              alt="포항 학산 한신더휴 모바일 조감도 이미지"
            />
          </div>

          <UnitInfoSection />

          {/* <div className={styles.container4}>
            <div className={styles.text1}>UNITPLAN</div>
            <UnitplanBox />
            <Link to="/FloorPlan/84A" className={styles.text2}>
              <div>더 알아보기 &gt;</div>
            </Link>
          </div> */}

          <div className={styles.container6}>
            {section3Contents.map((section, idx) => (
              <MobileSectionBox
                key={idx}
                type={idx % 2 === 0 ? "left" : "right"}
                titleImag={section.imgSrc}
                title={section.title}
                subText1={section.text1}
                subText2={section.text2}
              />
            ))}
          </div>


          {/* <div className={styles.container2}>
            <div>
              <img
                src={section1_Image1}
                alt="포항 학산 한신더휴 브랜드소개 mobile-image5"
              />
              <Link to="/Brand/intro" className={styles.btn}>
                브랜드 소개 {">"}
              </Link>
            </div>
          </div> */}
          {/* <MobileNewsSection newsList={newsList} /> */}

          {/* 모바일 방문예약 섹션 */}
<div className={styles.mobileVisitContainer}>
  <h2>포항 학산 한신더휴</h2>
  <p className={styles.mobileSubTitle}>방문예약</p>
  <p className={styles.mobileInfoText}>
    방문예약 등록 시 모델하우스 주소 SMS발송 및<br />
    잔여세대를 안내드립니다.
  </p>

  <form
    className={styles.mobileVisitForm}
    action="https://formspree.io/f/mbldpwpz"
    method="POST"
  >
    <label htmlFor="name">
      고객명 <span className={styles.redStar}>*</span>
    </label>
    <input
      type="text"
      name="name"
      placeholder="고객명"
      value={registration.name}
      onChange={handleInputChange}
      required
    />

    <label htmlFor="phone">
      연락처 <span className={styles.redStar}>*</span>
    </label>
    <input
      type="tel"
      name="phone"
      placeholder="010-0000-0000"
      value={registration.phone}
      onChange={handleInputChange}
      required
    />
  <label htmlFor="message">
      문의 내용
    </label>
    <textarea
      name="message"
      placeholder="문의 내용이 있을 경우 이곳에 남겨주세요."
      value={registration.message}
      onChange={handleInputChange}
      rows={5}
    />
    



    <button type="submit">등록하기</button>
  </form>
</div>

          {/* <div className={styles.section}>
            <div className={styles.section9}>
              <img
                src={mobilemap1}
                alt="포항 학산 한신더휴 오시는길안내-mobileimage2"
              />
            </div>
          </div> */}

          <div className={styles.section5}>
            <Footer />
            <FixIcon />
          </div>
          {/* 방문예약 팝업 (모바일) */}
          {isInterestPopupOpen && (
            <InterestPopup
              onClose={() => setIsInterestPopupOpen(false)}
              registration={registration}
              handleInputChange={handleInputChange}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Main;
