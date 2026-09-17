# HS.HUB (`haksoo0918.github.io`)

> **HANDCRAFTED & HOBBY PROJECTS**  
> 가내수공업처럼 뚝딱뚝딱 만드는 **sosoFactory**의 실용적인 웹 도구들과, 비트코인 퀀트·블로그 등 **개인적인 취미와 호기심**으로 만든 프로젝트들을 모아둔 단일 페이지 쇼케이스 포털 허브입니다.

---

## 📌 주요 특징

* **VoiceBox Editorial Design System**:
  * 인쇄 매거진 감성의 고대비 흑백 기반과 절제된 시그널 레드(`#EF4444`) 악센트
  * 완벽한 직각 모서리(`border-radius: 0px`) 및 그림자 없는 두께감 있는 보더 구조(`2px solid`)
  * 한글과 영문 모두 완성도 높은 단일 기본 폰트 **Pretendard** 채택
* **데이터 기반 프로젝트 관리**:
  * [data/projects.json](data/projects.json) 파일 수정만으로 프로젝트 카드 자동 생성 및 업데이트
* **검색 엔진 최적화 (SEO & Crawlability)**:
  * 비-JS 크롤러(네이버, Daum, Bing, 메신저 스크래퍼)를 위한 정적 카드 사전 렌더링(SSR 효과)
  * 완벽한 시맨틱 마크업, JSON-LD 구조화 데이터(`WebSite`, `Person`), Open Graph / Twitter Card 메타데이터, 파비콘 및 사이트맵 구비
* **가볍고 빠른 정적 웹사이트**:
  * 복잡한 빌드 과정이나 무거운 번들러 없이 순수 HTML5, CSS3, Vanilla JavaScript로 구성

---

## 📂 프로젝트 디렉토리 구조

```text
.
├── index.html              # 메인 싱글 페이지 템플릿 (정적 마크업 및 시맨틱 구조)
├── robots.txt              # 검색 크롤러 접근 설정 및 사이트맵 경로
├── sitemap.xml             # 검색 엔진 색인용 사이트맵
├── data/
│   └── projects.json       # 프로젝트 카드 목록 데이터 (JSON)
├── assets/
│   ├── css/
│   │   └── style.css       # VoiceBox 에디토리얼 스타일시트 (8px 스케일 기반)
│   ├── js/
│   │   └── main.js         # 데이터 패칭, 카테고리 필터링, Lucide 아이콘 제어
│   └── images/
│       ├── favicon.svg     # 고대비 미니멀 벡터 파비콘
│       ├── favicon.png     # 구글 SERP 및 레거시 대응 32x32 파비콘
│       ├── og-image.png    # 1200x630px 소셜 공유 대표 이미지
│       └── projects/       # 프로젝트 카드별 16:9 썸네일 이미지 보관 폴더
├── PRD.md                  # 제품 요구사항 정의서
├── DESIGN.md               # VoiceBox 디자인 시스템 명세서
├── GEMINI.md               # 개발 프로토콜 및 가이드라인
├── TODO.md                 # 사용자 준비 사항 및 실서비스 배포 체크리스트
└── CHANGELOG.md            # 변경 이력 기록서
```

---

## 🛠️ 프로젝트 카드 추가 및 관리 방법

신규 프로젝트를 등록하려면 [data/projects.json](data/projects.json) 파일에 아래 형식으로 객체를 추가합니다:

```json
{
  "id": "new-app",
  "title": "프로젝트 이름",
  "category": "sosoFactory",
  "categoryLabel": "sosoFactory",
  "thumbnail": "assets/images/projects/new-app.png",
  "description": "프로젝트에 대한 핵심 설명",
  "tags": ["Web App", "Utility", "JavaScript"],
  "badge": "LIVE",
  "links": {
    "live": "https://...",
    "github": "https://github.com/haksoo0918/..."
  }
}
```

* `category`: `sosoFactory` 또는 `personal`
* `badge`: `LIVE`, `EXTERNAL`, `BETA` 등
* `thumbnail`: 이미지가 없을 경우 깨지지 않고 직각 텍스트 플레이스홀더 박스가 자동으로 표시됩니다.

---

## 🚀 로컬 테스트 및 배포

### 로컬 환경 실행
정적 파일이므로 별도의 설치 과정 없이 웹 브라우저로 바로 실행 가능합니다:

```bash
# 로컬 개발 웹서버 실행 예시 (Python 3)
python -m http.server 8000
```
브라우저에서 `http://localhost:8000`으로 접속하여 확인합니다.

### GitHub Pages 배포
원격 저장소의 `master` 브랜치에 푸시하면 GitHub Pages를 통해 실서비스에 즉시 반영됩니다:

```bash
git push origin master
```
GitHub 저장소의 `Settings` > `Pages`에서 Source가 `Deploy from a branch`, 브랜치가 `master / (root)`로 설정되어 있는지 확인합니다.
