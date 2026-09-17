# PRD: 프로젝트 쇼케이스 및 포트폴리오 허브 (haksoo0918.github.io)

## 1. 개요 (Overview)
- **목적**: 원 페이지(Single-Page) 기반으로 개인 프로젝트(Private/Personal)와 **sosoFactory** 유틸리티/웹 앱 프로젝트들을 한눈에 탐색하고 바로 접속할 수 있는 포털 허브 웹사이트를 구축합니다.
- **방향성**: 군더더기 없는 원 페이지 구성, 빠른 로딩, 즉각적인 서비스 바로가기 제공.

## 2. 콘텐츠 및 섹션 구성

### 2.1 Hero & Navigation
- 사이트 타이틀: 소소하게 만들고, 취미로 굴리는 개인 프로젝트 허브
- 소개 문구: 가내수공업처럼 뚝딱뚝딱 만드는 sosoFactory의 실용적인 웹 도구들과 비트코인 퀀트, 블로그 등 개인적인 취미와 호기심으로 만든 작업물 아카이브
- 네비게이션: Projects / Blog / GitHub (모두 외부 링크 아이콘 일관 적용)

### 2.2 sosoFactory Projects (가내수공업 웹 도구)
- 필요에 의해 손수 만들어 쓰는 가볍고 실용적인 웹 유틸리티 섹션
- **계산기 (Calculator)**: 실용적인 반응형 웹 계산기
- **시작페이지 (Start Page)**: 개인 맞춤형 브라우저 새 탭 / 시작 대시보드

### 2.3 취미 프로젝트 (Personal Hobby & Labs)
- 개인적인 관심사와 호기심에서 출발한 취미 개발 프로젝트 섹션
- **비트코인 퀀트 (Bitcoin Quant)**: 가상자산 시장 분석 및 알고리즘 트레이딩 백테스팅 실험
- **블로그 (Blog)**: 생각, 일상, 취미 개발 기록 아카이브 (`https://blog.haksoo0918.workers.dev/`)

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
