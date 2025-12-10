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
     title: "포항 최고 명문학군지 ‘학산 한신더휴 엘리트파크’ 16일 견본주택 오픈",
     excerpt:
       "포항지역 최고 명문학군지에 ‘학산 한신더휴 엘리트파크’가 들어선다.한신공영은 오는 16일 민간특례화 사업으로 진행되는 학산 한신더휴 엘리트파크의 견본주택을 개관하고 민간 주택 공급일정에 돌입한다.이 단지는 포항 북구 학산동 일원에 위치하며 전용 75㎡·80㎡·84㎡·107㎡·114㎡ 등 총 1천455세대로 조성된다.학산 한신더휴 엘리트파크는 공원특례화 아파트로 전체 공원면적 약 35만㎡ 중 주거시설이 7만㎡, 나머지는 녹지와 13개 테마의 휴식공간, 놀이공간, 체육시설 등이 들어선다.오는 2024년 학산천 개발이 완료되면 단지 전체를 공원이 포진한 분지형태의 단지가 될 전망이다.학산 학신더휴 엘리트파크는 포항의 명문으로 인정받는 포항고와 포항여고는 물론 항도초, 포항중, 포항여중까지 단지를 병풍처럼 둘러싸고 있는 5개 초·중·고를 도보로 누리는 원스톱 명문 학세권을 자랑한다.또 학원 밀집지역과 학산공원, 학산천, 우현도시숲도 가까이 있다.특히 단지 내 아이돌봄센터, 종로M스쿨, 독서실 등 교육 커뮤니티를 통해 단지 내에서 돌봄센터와 유치원으로 영유아동들의 생활과 종로M스쿨로 내신중심의 심화 학습을 1가구 1자녀 무상으로 제공한다.한편 한신공영은 청약자들을 대상으로 추첨을 통해 1등 당첨자에게 ‘벤츠 C-class’ 승용차를, 2등은 교육특화 아파트 컨셉에 맞춰 미국 아이비리그 탐방여행권(2인)을 경품으로 제공한다이밖에 다양한 고급가전, 주방용품, 생활용품 제공 등 오픈 3일 간 견본주택 방문자를 위한 데일리 이벤트도 실시한다.",
     date: "2025. 7. 21.",
     link: "/포항 학산 한신더휴/press/OUAgdTFv1sJ9QYkLGjia",
     // image: "https://yourdomain.com/path/to/image.jpg",  // 이미 있으면 넣고
   },
   {
     id: 2,
     title: "한신공영 ‘학산 한신더휴 엘리트파크’ 분양 순항",
     excerpt:
       "한신공영은 경북 포항시 북구 학산동 일원에 들어설 ‘학산 한신더휴 엘리트파크’가 최근 수분양자를 대상으로 중도금 대출을 완료하는 등 순조롭게 사업이 진행 중이다.한신공영 관계자는 “해당 사업장의 입지적 장점과 우수한 상품성이 입소문을 타기 시작한 데다, 중도금 무이자 혜택과 발코니 무상 확장 등 계약자 혜택 영향으로 최근 계약률이 빠르게 오르고 있다”고 15일 밝혔다. 학산 한신더휴 엘리트파크는 포항의 명문고등학교인 포항고와 포항여고뿐만 아니라 항도초, 포항중, 포항여중까지 도보로 이동할 수 있는 교주 근접형 단지로 유명세를 탔다.또한 단지 내에 다함께 돌봄 센터와 유치원, 독서실 등을 마련해 양질의 교육 서비스 선보인다. 종로M스쿨이 내신 중심의 심화 학습을 입주민 자녀에게 2년 동안 무상교육을 제공하는 등 면학 분위기를 고려하는 학부모들에게 큰 관심을 끌었다.학산 한신더휴 엘리트파크는 자연의 쾌적함을 누릴 수 있는 단지다. 학산근린공원이 조성될 예정으로 입주민들은 전체 사업 면적 중 공원 면적이 약 80%인 자연이 주는 쾌적함을 느낄 수 있다. 여기에 인근 우현 도시숲, 삼각산, 덕수공원 및 수도산이 가까워 녹지 이용이 편리하며 학산생태천, 영일대해수욕장도 가까워 레저생활도 손쉽게 누릴 수 있다.학산 한신더휴 엘리트파크의 인기로 인해 포항 주택시장이 주목받고 있다. 포항 주택시장은 이차전지 등 대형 호재로 회복세로 돌아서고 있다. 미분양 물량이 8개월 연속 감소세를 보이고 매매 거래량은 올해 1월 508가구(한국부동산원 자료)에서 9월 1325가구로 2.5배 이상 증가했다. 아파트 매매가 변동률 역시 9월 기준 0.22% 오르는 등 2개월 연속 상승세다. 포항시는 2030년까지 양극재 100만 톤 생산과 양극재 매출액 70조원, 고용 창출 인원 1만5000명을 목표로 지속가능한 특화단지 인프라 구축과 초격차 기술개발, 전문 인력양성, 이차전지 원료·소재의 내재화 등을 통해 세계 1위 양극재 생산도시로 도약한다는 계획을 발표했다. 이미 배터리 기업 에코프로와 포스코퓨처엠은 포항에 거점을 마련했다. 에코프로는 영일만 산단에 에코배터리 포항캠퍼스를 구축하고 양극재 수직계열화로 양극 소재 생산에 필요한 모든 공정을 집적한 세계 최고 수준의 양극재 밸류체인을 완성했다. 양극재 추가 생산을 위한 공장도 건축 중으로 총 투자금액은 3조2000억 원에 이른다. 에코배터리 포항캠퍼스 확장할 계획이다. 블루밸리 국가산단에 2조 원 규모의 ‘에코프로 블루밸리 캠퍼스’(가칭) 건립도 추진 중이다. 에코프로는 지난해 매출 5조원을 넘기며 양극재 세계시장 점유율 세계 1위 기업으로 성장했다. 2027년 말까지 양극재 생산능력을 71만 톤까지 키우겠다는 계획도 밝혔다.한편 학산 한신더휴 엘리트파크는 지하 4층~지상 35층, 12개동 전용 75~114㎡ 1455가구 규모로 조성된다.",
     date: "2025. 11. 13.",
     link: "/포항 학산 한신더휴/press/ZrpG72ddkY7pi6zM5VW9",
     image: news2Img
   },
   {
    id: 3,
    title: "포항 학산 한신더휴 엘리트파크 미분양아파트 계약금 안심보장제 혜택 분양",
    excerpt:
      "금리가 안정화되고 전국의 부동산 가격이 상승하면서 비규제지역 미분양아파트로 수요가 몰리고 있는 가운데 계약금 안심보장제혜택으로 실수요자, 투자자들의 문의가 많아지고 있다포항 학산 한신더휴 엘리트파크’가 잔여세대를 선착순 분양 중이다.한신공영이 조성하는 ‘학산 한신더휴 엘리트파크’는 권역 내 가장 큰 근린공원을 품고 있으며, 지하 4층~지상 35층 12개동, 총 1,455세대 규모로 전용면적 75~114㎡로 구성된다. 주차는 2,120대까지 가능하다.계약조건은 계약금 2000만원으로 입주시까지 추가비용이 없으며, 중도금 60% 무이자혜택, 발코니확장 무상제공, 여기에 일부세대 한정으로 계약금 안심보장제 혜택까지 제공된다.단지는 남향위주 단지배치로 채광과 통풍이 우수하고, 넓은 팬트리와 풍부한 수납공간을 갖췄다.입주민을 위한 커뮤니티시설로는 어린이집, 다함께돌봄센터, 북클럽, 스터디룸 등이 마련된다.단지 일부 세대는 영일대 해수욕장이 보이는 ‘오션뷰’와 포항 시내의 ‘시티뷰’를 갖췄으며, 포항의 대표 도시공원인 학산공원 민간공원조성 특례사업으로 공급돼 전체 공원면적 약 35만㎡ 중 주거시설은 약 7만㎡로 공원면적이 약 80%에 달해 주거환경이 쾌적하다.교육여건으로는 항도초, 포항중, 포항여중과 명문고교로 잘 알려진 포항고, 포항여고가 가까워 초·중·고를 모두 도보로 통학이 가능하다. 또한, 유명 사립 교육기관인 종로엠스쿨 1등급 교육프로그램을 도입, 입주자 초중생 대상 1자녀에게 2년간 교육프로그램 무상, 2~3자녀에게는 2년간 50% 할인혜택을 제공한다.주변생활편의시설로는 롯데백화점, 홈플러스, 이마트, CGV, 중앙아트홀, 죽도시장, 우체국, 북구청, 세무서, 포은중앙도서관 등이 인접하고, 우현도시숲, 학산천 등 자연경관을 누릴 수 있다.교통여건으로는 포항역이 가까워 KTX를 이용해 수도권이나 지방으로의 접근이 용이하며, 7번 국도를 통해 시내외로의 이동이 편리하다. 또한, 새천년대로를 주축으로 해동로, 삼호로, 소티재로, 아호로 등 각 도심으로 연결되는 대로들이 가깝고, 인근에 동빈대교가 건립 예정이다.한편, ‘학산 한신더휴 엘리트파크’ 아파트는 모델하우스 및 견본주택을 운영 중이며, 사전 예약제로 운영되며 사은품 증정, 견본주택 관람 및 분양가 상담이 가능하다.",
    date: "2025. 11. 10.",
    link: "/포항 학산 한신더휴/press/cFzV1l7gJm2vnNSEQFQD",
    image: news3Img
  },
  {
    id: 4,
    title: "한신공영, 초기 부담 낮춘 ‘학산 한신더휴 엘리트파크’ 공급",
    excerpt:
      "6.27 대책에도 불구하고 올해 하반기 ‘아파트값이 오른다’로 전망한 사람이 4년 만에 가장 많은 수로 나타났다. 핵심 지역의 아파트값 상승, 기준 금리 추가 인하 가능성, 실수요층 유입 등이 작용한 것으로 보인다.25일 부동산 R114가 전국 961명을 대상으로 진행한 ‘2025년 하반기 주택 시장 전망’ 설문 조사에서 응답자의 절반인 49%가 하반기에 주택 매매 가격이 오를 것이라고 답했다. 2021년 하반기 전망 조사에서 상승 전망이 62%를 기록한 이후 4년 만에 가장 높은 수치다.핵심 지역의 아파트값 상승, 기준 금리 추가 인하 가능성, 실수요층 유입 등이 작용한 결과로 풀이된다.전세 가격에 대한 상승 응답도 47.66%로, 하락(10.82%) 보다 4.4배나 높게 나타나 전세 가격이 매매 가격을 밀어 올릴 가능성까지도 제기되고 있는 상황이다.주택업계 관계자는 “규제 효과가 서서히 감소되는 현재 분위기를 보면 추석 이후 서울 집값이 본격적으로 상승하면 주변 지역으로 확산되고 결국은 전국적인 상승세가 나타날 수 있다”며 “뚜렷한 공급 시그널이 없는 가운데 주요 지역 가격 상승과 전세 가격 등으로 소비자 심리도 상승 쪽에 가 있는 것”이라고 진단했다.실제 한국은행이 발표한 ‘6월 소비자동향조사’ 결과를 보면 주택가격전망 소비자동향지수(CSI)는 전월 대비 9포인트 상승한 120으로 나타났다. 이느 2021년 10월 기록한 125 이후 3년 8개월 만에 최대치다.집값 상승 전망이 계속되면서 기존 분양 단지가 관심을 받는 모습이다. 기존 분양 단지는 분양가 상승에 영향을 받지 않고 중도금 무이자 등 다양한 혜택까지 누릴 수 있어서다.이런 가운데 한신공영은 경북 포항에서 ‘학산 한신더휴 엘리트파크’를 공급 중이다. 이 사업장은 계약금 5% 책정으로 초기 부담을 낮추고 중도금 무이자 혜택, 발코니 확장 무상 제공 등의 혜택을 수분양자에게 제공하고 있다.경북 포항시 북구 학산동에 들어서는 이 단지는 지하 4층~지상 35층, 12개 동 전용 75~114㎡ 1455가구 규모다. 민간공원특례사업으로 조성되는 만큼 빼어난 자연환경도 눈길을 끌고 있으며 교육, 자연, 생활 인프라가 모두 어우러진 최적의 입지도 장점이다.포항중·중고와 포항여중·중고과 인접해 우수한 교육 환경을 갖췄다. 또 입주민 자녀에게 2년 동안 단지 안에서 종로M스쿨의 에듀 서비스를 무상 제공한다. 이는 포항시 최초다.입주민 여가를 위한 워터플레이놀이터와 클럽더휴, 에듀클럽 등 다채로운 테마공간도 단지 내 조성된다. 주변에 우현도시숲과 학산생태천(예정), 영일해수욕장 등 쾌적한 주거 환경도 갖췄다. 롯데백화점과 홈플러스, 이마트, CGV, 죽도시장 등 각종 생활편의시설도 가깝다.아울러 7번국도, KTX포항역, 새만금~포항고속도로 등 포항의 주요 교통망과 인접해 포항시 내는 물론 주변 지역으로 빠르게 이동할 수 있다. 여기에 포항 동빈대교가 연내 준공할 경우 교통여건은 더욱 좋아질 전망이다. 동빈대교는 포항시내를 관통하는 핵심 교통망이다. 포항 북부와 남부를 연결하는 중요한 축으로, 출퇴근 시간의 교통 혼잡을 줄이고 지역 간 이동 시간도 단축할 것으로 기대를 모은다포항시가 경북 안동시와 함께 바이오 국가첨단전략산업 특화단지로 지정된 점도 지역 경제 활성화에 크게 기여할 것으로 보인다.",
    date: "2025. 10. 10.",
    link: "/포항 학산 한신더휴/press/xhjJYhOcCAezXLZA9T7A",
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
          <MobileNewsSection newsList={newsList} />

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
