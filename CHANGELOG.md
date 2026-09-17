# 변경 이력 (Changelog)

이 프로젝트의 모든 주요 변경 사항은 이 문서에 기록됩니다.

형식은 [Keep a Changelog](https://keepachangelog.com/ko/1.1.0/)를 기반으로 하며,
[유의적 버전(Semantic Versioning)](https://semver.org/lang/ko/)을 준수합니다.

## [미출시] (Unreleased)

### 추가됨 (Added)
- **Git 추적 규칙(.gitignore) 추가**:
  - OS 생성 파일, 에디터 설정, 의존성 패키지, 임시 로그 및 환경 파일의 Git 추적 제외 설정.
- **SEO 및 소셜 공유 최적화**:
  - VoiceBox 감성의 고대비 SVG 파비콘(`assets/images/favicon.svg`) 및 표준 32x32 PNG 파비콘(`assets/images/favicon.png`) 생성 및 `<link rel="icon">` 연결.
  - 1200x630px 소셜 공유(Open Graph & Twitter Card) 대표 이미지(`assets/images/og-image.png`) 생성 및 메타 태그(`og:image`, `twitter:image`) 적용.
  - 비(非)JS 검색 크롤러(네이버, Daum, Bing, 메신저 스크래퍼)의 완전한 색인을 위해 `#projects-grid` 내부에 4개 기본 프로젝트 카드 정적 마크업 사전 렌더링(SSR 효과).
  - 웹 바이탈(Core Web Vitals) 성능 개선을 위해 `cdn.jsdelivr.net` 및 `unpkg.com` 대상 `<link rel="preconnect">` 리소스 힌트 추가.
  - `<head>` 내 Lucide 아이콘 스크립트에 `defer` 속성을 추가하여 렌더링 차단 제거.
  - JSON-LD 구조화 데이터에 대표 이미지(`image`) 및 작성자(`author`) 관계 속성 추가.
- **SEO 감사 스킬(seo-audit) 도입**:
  - 기술적 SEO, 크롤링 가능 여부, 온페이지 요소 및 구조화 데이터를 체계적으로 진단하기 위해 `seo-audit` 스킬(`.agents/skills/seo-audit/SKILL.md`) 설치.
- **헤더 및 푸터 계층 구조 정규화**:
  - `.container`와 `.masthead-inner`, `.footer-inner`가 단일 태그에 병합되어 발생하던 스타일 꼬임 문제를 부모-자식 구조(`.container > .masthead-inner`, `.container > .footer-inner`)로 명확히 분리.
  - `DESIGN.md`의 8px 단위 토큰을 엄격 적용(마스트헤드 상하 패딩 16px, 컨테이너 좌우 패딩 32px).
- **모바일 푸터 패딩 최적화**:
  - 모바일 화면에서 과도했던 푸터 여백을 48px에서 24px로 축소.
  - 프로젝트 그리드 하단 여백을 96px에서 48px로 축소.
- **반응형 3계층 그리드 체계 확립**:
  - 데스크톱(1024px 이상): 3열 균등 그리드(`repeat(3, 1fr)`).
  - 태블릿(641px ~ 1023px, 768px 포함): 2열 그리드(`repeat(2, 1fr)`).
  - 모바일(640px 이하): 1열 전체 너비 스택.
- **VoiceBox 에디토리얼 디자인 시스템 구축**:
  - 인쇄 매거진 스타일의 고대비 흑백 레이아웃 구현(`assets/css/style.css`).
  - 0px 직각 모서리, 무(無)그림자, 2px 두꺼운 보더, `#EF4444` 시그널 레드 포인트 적용.
  - 한글 및 영문 가독성을 위해 Pretendard 단일 기본 폰트 채택.
- **프로젝트 쇼케이스 포털 허브 구축**:
  - 기존 단순 블로그 리디렉션을 단일 페이지 쇼케이스 포털로 전면 개편(`index.html`).
  - 유지보수 편의를 위해 프로젝트 데이터셋을 `data/projects.json`으로 분리.
  - 기본 프로젝트 등록: sosoFactory(계산기, 시작페이지), 개인 프로젝트(비트코인 퀀트, 블로그).
  - 한글 주석이 완비된 카테고리 필터 탭(전체 / sosoFactory / 개인 프로젝트) 구현(`assets/js/main.js`).
- **검색 엔진 최적화(SEO) 기초 마련**:
  - 시맨틱 HTML5 구조와 Open Graph / Twitter Cards 메타데이터 작성.
  - JSON-LD 구조화 데이터(`WebSite`, `Person`) 구성.
  - `robots.txt` 및 `sitemap.xml` 생성.
- **프로젝트 운영 가이드라인 수립**:
  - 개발 프로토콜(`GEMINI.md`) 및 제품 요구사항 정의서(`PRD.md`) 작성.

### 변경됨 (Changed)
- **개발 프로토콜(GEMINI.md) 정비**:
  - 한글 주석 및 한글 커밋 메시지 의무화 표준 명시.
  - 임의 커밋 및 임의 리셋 금지, 피드백 수신 시 텍스트 우선 설명 등 실효성 있는 운영 경계 확립.
- **카드 계층 및 레이아웃 단순화**:
  - 특정 카드에만 들어가던 상단 레드 보더(`border-top: 4px solid #EF4444`)와 `featured` 속성을 제거하여 모든 프로젝트에 균등한 비중 부여.
  - 사이트 브랜딩을 "HAKSOO"에서 "HS"로 통일(로고, 루브릭, JSON-LD, 푸터).
  - 필터 버튼 라벨 단순화: `[전체 (ALL)]`, `[sosoFactory]`, `[개인 프로젝트]`.
  - 부자연스러운 한글 줄바꿈 방지를 위해 `body`에 `word-break: keep-all;` 및 `overflow-wrap: break-word;` 적용.
  - 모든 외부 링크(블로그, 깃헙 등)에 Lucide `external-link`(↗) 아이콘을 적용하고 수직 정렬 최적화.

### 제거됨 (Removed)
- 기존 레거시 블로그 자동 이동 스크립트 및 메타 리프레시 로직 삭제.
- 푸터의 프레임워크 크레딧("Built with...") 문구를 제거하여 미니멀한 에디토리얼 감성 극대화.

