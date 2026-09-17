# PRD: 프로젝트 쇼케이스 및 포트폴리오 허브 (haksoo0918.github.io)

## 1. 개요 (Overview)
- **목적**: 원 페이지(Single-Page) 기반으로 개인 프로젝트(Private/Personal)와 **sosoFactory** 유틸리티/웹 앱 프로젝트들을 한눈에 탐색하고 바로 접속할 수 있는 포털 허브 웹사이트를 구축합니다.
- **방향성**: 군더더기 없는 원 페이지 구성, 빠른 로딩, 즉각적인 서비스 바로가기 제공.

## 2. 콘텐츠 및 섹션 구성

### 2.1 Hero & Navigation
- 프로필 타이틀 (예: *Haksoo's Workspace / Portfolio Hub*)
- 간결한 소개 문구 및 주요 소셜/GitHub 링크
- 섹션 바로가기 네비게이션 (sosoFactory / Personal & Labs / Blog)
- 테마 토글 (Dark / Light 모드)

### 2.2 sosoFactory Projects (Web Apps & Utilities)
- 일상 및 업무에 바로 사용할 수 있는 실용 웹 서비스 섹션
- **계산기 (Calculator)**: 빌드된 웹 앱 바로가기 링크
- **시작페이지 (Start Page / NewTab)**: 빌드된 웹 앱 바로가기 링크
- 특징: "Launch Web App" 형태의 시각적 강조 버튼, 상태 뱃지 (Live)

### 2.3 Personal Projects & Labs (Finance & Dev)
- 심도 있는 개발 및 연구 프로젝트 섹션
- **비트코인 퀀트 (Bitcoin Quant)**: 암호화폐 퀀트 트레이딩/백테스팅/분석 프로젝트 소개, 기술 스택, 저장소 또는 대시보드 링크
- **기술 블로그 (Tech Blog)**: `https://blog.haksoo0918.workers.dev/` 바로가기 및 블로그 성격 안내
- 특징: 기술 스택 태그, 프로젝트 유형 뱃지

### 2.4 인터랙션 및 편의 기능
- 카테고리 필터 탭 (전체 / sosoFactory / Personal / Tools)
- 카드 호버 인터랙션 및 반응형 그리드 (모바일 스마트폰에서도 쾌적하게 접근)
- `projects.json` 분리 데이터 관리로 추후 프로젝트 간편 추가 지원

## 3. UI/UX 디자인 시스템 (VoiceBox Editorial System)
`design.md`의 **VoiceBox** 디자인 시스템을 100% 준수하여 구축합니다.

- **브랜드 컬러**:
  - Primary (Black): `#0A0A0A`
  - Secondary Accent (Red): `#EF4444` (화면당 1~2개 요소에 절제하여 강렬한 포인트로 활용)
  - Background / Tertiary (White): `#FAFAFA`
  - Surface: `#F5F5F5` / Surface Raised: `#E5E5E5`
  - Borders: `#E5E5E5` (Subtle), `#D4D4D4` (Medium), `#0A0A0A` (Strong)
- **타이포그래피**:
  - 단일 기본 폰트로 **Pretendard** 채택 (영문/한글 모두 지원하는 완성도 높은 고가독성 폰트)
  - Display / Headline: Pretendard 800~900 (ExtraBold/Black)으로 볼드한 매거진 에디토리얼 느낌 연출
  - Body / UI: Pretendard 400~600 (Regular/Medium/SemiBold)
  - 기타 외부 폰트는 배제하여 로딩 속도 및 일관성 최적화
- **형태 및 섀도우 규칙**:
  - `border-radius: 0px` (완전한 직각, 날카롭고 절제된 기하학적 매거진 룩)
  - 그림자 제거 (`box-shadow: none`), 두께감 있는 보더(`2px solid`)로 구조 형성
  - 카드 호버 시 보더 강조(`border: 2px solid #0A0A0A`), 주요 버튼 호버 시 `#EF4444` 액센트 전환
