/**
 * ==========================================================================
 * VoiceBox Editorial Design System - 메인 스크립트 (main.js)
 * 프로젝트 데이터를 불러오고 필터링, 직각 썸네일 렌더링 및 Lucide 아이콘 변환을 제어합니다.
 * ==========================================================================
 */

/**
 * 프로젝트 데이터 JSON 파일 경로 상수
 * @type {string}
 */
const PROJECTS_DATA_URL = 'data/projects.json';

/**
 * 오프라인 환경(로컬 file:// 더블클릭 등) 및 CORS 차단 시 사용할 기본 프로젝트 폴백 데이터
 * @type {Array<Object>}
 */
const DEFAULT_PROJECTS_FALLBACK = [
  {
    "id": "calculator",
    "title": "계산기 (Calculator)",
    "category": "sosoFactory",
    "categoryLabel": "sosoFactory",
    "thumbnail": "assets/images/projects/calculator.png",
    "description": "필요해서 손수 만들어 쓰는 반응형 웹 계산기 유틸리티입니다.",
    "tags": ["Web App", "Utility", "JavaScript"],
    "badge": "LIVE",
    "links": {
      "live": "#",
      "github": "https://github.com/haksoo0918"
    }
  },
  {
    "id": "startpage",
    "title": "시작페이지 (Start Page)",
    "category": "sosoFactory",
    "categoryLabel": "sosoFactory",
    "thumbnail": "assets/images/projects/startpage.png",
    "description": "자주 찾는 링크와 일상 도구를 한눈에 모아둔 개인 맞춤형 브라우저 시작 대시보드입니다.",
    "tags": ["Web App", "Productivity", "Dashboard"],
    "badge": "LIVE",
    "links": {
      "live": "#",
      "github": "https://github.com/haksoo0918"
    }
  },
  {
    "id": "bitcoin-quant",
    "title": "비트코인 퀀트 (Bitcoin Quant)",
    "category": "personal",
    "categoryLabel": "개인 프로젝트",
    "thumbnail": "assets/images/projects/bitcoin-quant.png",
    "description": "가상자산 시장 데이터를 분석하고 개인적인 호기심으로 트레이딩 전략을 실험해보는 퀀트 프로젝트입니다.",
    "tags": ["Quant", "Trading", "Python", "Backtesting"],
    "badge": "LIVE",
    "links": {
      "live": "https://haksoo0918.github.io/bitcoin-quant/",
      "github": "https://github.com/haksoo0918/bitcoin-quant"
    }
  },
  {
    "id": "tech-blog",
    "title": "블로그 (Blog)",
    "category": "personal",
    "categoryLabel": "개인 프로젝트",
    "thumbnail": "assets/images/projects/blog.png",
    "description": "생각과 일상, 소소한 취미 개발 이야기를 자유롭게 적어두는 개인 블로그입니다.",
    "tags": ["Blog", "Life & Notes", "Cloudflare Workers"],
    "badge": "EXTERNAL",
    "links": {
      "live": "https://blog.haksoo0918.workers.dev/",
      "github": "https://github.com/haksoo0918"
    }
  }
];

/**
 * 프로젝트 카드들이 렌더링될 DOM 컨테이너 요소
 * @type {HTMLElement|null}
 */
const projectsGridContainer = document.getElementById('projects-grid');

/**
 * 카테고리 필터 칩 버튼 목록
 * @type {NodeListOf<HTMLButtonElement>}
 */
const filterChips = document.querySelectorAll('.filter-chip');

/**
 * 현재 로드된 전체 프로젝트 데이터 캐시 배열
 * @type {Array<Object>}
 */
let loadedProjectsList = [];

/**
 * Lucide 아이콘 변환을 실행하는 함수
 * DOM에 추가된 [data-lucide] 태그들을 인라인 SVG 아이콘으로 일괄 렌더링합니다.
 */
function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

/**
 * 카테고리 필터 칩 클릭 이벤트 리스너를 등록하는 함수
 */
function bindFilterEvents() {
  if (!filterChips.length) return;

  filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      // 이미 활성화된 필터인 경우 무시
      if (chip.classList.contains('active')) return;

      // 활성 클래스 전환
      filterChips.forEach((btn) => btn.classList.remove('active'));
      chip.classList.add('active');

      // 선택된 카테고리로 필터링 실행
      const selectedCategory = chip.dataset.category || 'all';
      filterProjectsByCategory(selectedCategory);
    });
  });
}

/**
 * 원격 JSON 파일로부터 프로젝트 목록 데이터를 수신하고 렌더링하는 비동기 함수
 * 로컬 파일 시스템(`file://`)이나 네트워크 오류 시 내장 폴백 데이터로 자동 전환합니다.
 */
async function fetchAndRenderProjects() {
  if (!projectsGridContainer) return;

  try {
    const response = await fetch(PROJECTS_DATA_URL);
    if (!response.ok) {
      throw new Error(`데이터 로드 응답 에러: HTTP ${response.status}`);
    }

    loadedProjectsList = await response.json();
    renderProjects(loadedProjectsList);
  } catch (error) {
    // file:// 환경 또는 fetch 실패 시에도 더블클릭으로 바로 볼 수 있도록 폴백 데이터 사용
    console.warn('projects.json fetch 실패, 기본 내장 데이터를 사용합니다:', error);
    loadedProjectsList = DEFAULT_PROJECTS_FALLBACK;
    renderProjects(loadedProjectsList);
  }
}

/**
 * 카테고리 식별자에 따라 프로젝트를 필터링하여 렌더링하는 함수
 * @param {string} category - 필터링할 카테고리 문자열 ('all', 'sosoFactory', 'personal')
 */
function filterProjectsByCategory(category) {
  if (category === 'all') {
    renderProjects(loadedProjectsList);
    return;
  }

  const filteredList = loadedProjectsList.filter((project) => project.category === category);
  renderProjects(filteredList);
}

/**
 * 이미지 로드 실패 시 직각 미니멀 플레이스홀더로 교체하는 인라인 핸들러
 * @param {HTMLImageElement} imgElement - 에러가 발생한 이미지 요소
 * @param {string} title - 프로젝트 타이틀
 */
window.handleThumbnailError = function(imgElement, title) {
  const container = imgElement.parentElement;
  if (!container) return;
  
  // 깨진 이미지 태그 대신 VoiceBox 감성의 플레이스홀더 블록으로 교체
  container.innerHTML = `
    <div class="thumbnail-placeholder">
      <span>${escapeHtml(title)}</span>
    </div>
  `;
};

/**
 * 프로젝트 카드 HTML 문자열을 생성하는 함수
 * 썸네일 영역, 카테고리 뱃지, 설명, 태그, 외부 링크 버튼을 구조화합니다.
 * @param {Object} project - 개별 프로젝트 데이터 객체
 * @returns {string} 완성된 HTML 문자열
 */
function createProjectCardHtml(project) {
  // 뱃지 클래스 매핑
  const badgeClass = (project.badge || 'live').toLowerCase();

  // 기술 태그 HTML 생성
  const tagsHtml = (project.tags || [])
    .map((tag) => `<span class="tag-item">${escapeHtml(tag)}</span>`)
    .join('');

  // 외부 실행/방문 링크 버튼 (external-link 아이콘)
  const liveButtonHtml = project.links && project.links.live
    ? `<a href="${escapeHtml(project.links.live)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">사이트 방문 <i data-lucide="external-link" class="icon-sm"></i></a>`
    : '';

  // GitHub 저장소 링크 버튼 (external-link 아이콘)
  const githubButtonHtml = project.links && project.links.github
    ? `<a href="${escapeHtml(project.links.github)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">GitHub <i data-lucide="external-link" class="icon-sm"></i></a>`
    : '';

  // 썸네일 HTML 생성 (이미지가 없거나 로드 실패 시 플레이스홀더로 폴백)
  const thumbnailHtml = project.thumbnail
    ? `<div class="card-thumbnail">
         <img src="${escapeHtml(project.thumbnail)}" alt="${escapeHtml(project.title)} 미리보기" loading="lazy" onerror="handleThumbnailError(this, '${escapeHtml(project.title).replace(/'/g, "\\'")}')" />
       </div>`
    : `<div class="card-thumbnail">
         <div class="thumbnail-placeholder"><span>${escapeHtml(project.title)}</span></div>
       </div>`;

  return `
    <article class="project-card" data-id="${escapeHtml(project.id)}">
      ${thumbnailHtml}
      <div class="card-body">
        <div>
          <div class="card-header">
            <span class="card-category">${escapeHtml(project.categoryLabel || project.category)}</span>
            <span class="status-badge ${badgeClass}">${escapeHtml(project.badge || 'LIVE')}</span>
          </div>
          <h3 class="card-title">${escapeHtml(project.title)}</h3>
          <p class="card-description">${escapeHtml(project.description)}</p>
        </div>

        <div>
          <div class="card-tags">
            ${tagsHtml}
          </div>
          <div class="card-actions">
            ${liveButtonHtml}
            ${githubButtonHtml}
          </div>
        </div>
      </div>
    </article>
  `;
}

/**
 * 프로젝트 목록을 화면에 렌더링하고 Lucide 아이콘을 생성하는 함수
 * @param {Array<Object>} projects - 렌더링할 프로젝트 객체 배열
 */
function renderProjects(projects) {
  if (!projectsGridContainer) return;

  if (!projects || projects.length === 0) {
    projectsGridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 48px; border: 2px solid var(--border-medium); text-align: center;">
        <p style="font-weight: 700; color: var(--color-text-secondary);">해당 카테고리에 등록된 프로젝트가 없습니다.</p>
      </div>
    `;
    return;
  }

  const cardsHtml = projects.map(createProjectCardHtml).join('');
  projectsGridContainer.innerHTML = cardsHtml;

  // 새로 삽입된 카드 내 data-lucide 아이콘 일괄 렌더링
  refreshIcons();
}

/**
 * XSS 방지를 위해 특수문자를 이스케이프 처리하는 유틸리티 함수
 * @param {string} unsafeString - 원본 문자열
 * @returns {string} 안전하게 이스케이프된 문자열
 */
function escapeHtml(unsafeString) {
  if (!unsafeString) return '';
  return String(unsafeString)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * 애플리케이션 초기화 함수
 * DOM이 로드된 후 프로젝트 데이터를 불러오고 이벤트 리스너를 바인딩합니다.
 */
async function initializeApp() {
  bindFilterEvents();
  await fetchAndRenderProjects();
  refreshIcons();
}

// DOM 준비 완료 시 앱 초기화 실행
document.addEventListener('DOMContentLoaded', initializeApp);
