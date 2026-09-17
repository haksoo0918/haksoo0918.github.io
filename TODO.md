# TODO: 프로젝트 허브 완성을 위해 준비할 항목들

본 웹사이트(`HS.HUB`)의 실서비스 연결 및 완성도 향상을 위해 사용자가 직접 채워 넣거나 준비해 주실 항목 목록입니다.

---

## 1. 프로젝트 배포 URL 연결
현재 일부 프로젝트 링크가 임시(`#`)로 되어 있습니다. 실제 배포된 URL을 알려주시거나 `data/projects.json` 파일에서 직접 수정하실 수 있습니다.

- [ ] **계산기 (Calculator)** 배포 URL 연결 (`links.live`)
- [ ] **시작페이지 (Start Page)** 배포 URL 연결 (`links.live`)
- [ ] **비트코인 퀀트 (Bitcoin Quant)** 깃헙 페이지 및 저장소 URL 검토
  - 현재 임시 연결: `https://haksoo0918.github.io/bitcoin-quant/`
- [ ] **블로그 (Blog)** 주소 확인
  - 현재 연결: `https://blog.haksoo0918.workers.dev/`

---

## 2. 프로젝트 썸네일 이미지 준비
VoiceBox 디자인 시스템에 맞춰 각 프로젝트 카드의 상단 썸네일(16:9 비율 추천)을 넣어주시면 훨씬 생동감 있는 화면이 됩니다.  
*(이미지가 없어도 깨지지 않고 세련된 텍스트 플레이스홀더 박스가 자동으로 표시됩니다)*

- [ ] **계산기 썸네일**: `assets/images/projects/calculator.png`
- [ ] **시작페이지 썸네일**: `assets/images/projects/startpage.png`
- [ ] **비트코인 퀀트 썸네일**: `assets/images/projects/bitcoin-quant.png`
- [ ] **블로그 썸네일**: `assets/images/projects/blog.png`

> 💡 **썸네일 권장 규격**:
> - 해상도: `800 x 450` 또는 `1280 x 720` (16:9 가로형)
> - 파일 포맷: `png` 또는 `webp`
> - 이미지 저장 위치: 프로젝트 내 `assets/images/projects/` 폴더

---

## 3. GitHub 레포지토리 링크 확인
각 카드의 "GitHub ↗" 버튼 클릭 시 이동할 저장소 주소입니다.

- [ ] 계산기 GitHub 레포 URL (`https://github.com/haksoo0918/...`)
- [ ] 시작페이지 GitHub 레포 URL (`https://github.com/haksoo0918/...`)
- [ ] 비트코인 퀀트 GitHub 레포 URL (`https://github.com/haksoo0918/...`)

---

## 4. 추가하고 싶은 프로젝트 등록
향후 새로운 프로젝트가 생겼을 때, [data/projects.json](file:///c:/Users/hakso/_work/haksoo0918.github.io/data/projects.json) 파일에 아래 형식으로 복사해 추가하시면 화면에 자동으로 카드가 생성됩니다.

```json
{
  "id": "new-project-id",
  "title": "프로젝트 이름",
  "category": "sosoFactory 또는 personal",
  "categoryLabel": "sosoFactory 또는 개인 프로젝트",
  "thumbnail": "assets/images/projects/new-project.png",
  "description": "프로젝트 한 줄 설명",
  "tags": ["React", "TypeScript", "Web"],
  "badge": "LIVE",
  "links": {
    "live": "https://...",
    "github": "https://github.com/haksoo0918/..."
  }
}
```

---

## 5. 원격 저장소 배포 (GitHub Pages)
모든 로컬 확인이 끝나면 다음 명령어로 배포하실 수 있습니다:

```bash
git push origin master
```
GitHub Pages 설정에서 `master` 브랜치 루트(`/`)가 배포 브랜치로 지정되어 있는지 확인하시면 바로 전 세계에 공개됩니다.
