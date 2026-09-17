/**
 * ==========================================================================
 * VoiceBox Editorial Design System - 메인 스크립트 (main.js)
 * 프로젝트 데이터를 불러오고 필터링 및 동적 렌더링을 제어합니다.
 * ==========================================================================
 */

/**
 * 프로젝트 데이터 JSON 파일 경로 상수
 * @type {string}
 */
const PROJECTS_DATA_URL = 'data/projects.json';

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
 * 애플리케이션 초기화 함수
 * DOM이 로드된 후 프로젝트 데이터를 불러오고 이벤트 리스너를 바인딩합니다.
 */
async function initializeApp() {
  bindFilterEvents();
  await fetchAndRenderProjects();
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
 * 원격 JSON 파일로부터 프로젝트 목록 데이터를 수신하고 초기 렌더링하는 비동기 함수
 */
async function fetchAndRenderProjects() {
  if (!projectsGridContainer) return;

  try {
    const response = await fetch(PROJECTS_DATA_URL);
    if (!response.ok) {
      throw new Error(`데이터 로드 실패: HTTP ${response.status}`);
    }

    loadedProjectsList = await response.json();
    renderProjects(loadedProjectsList);
  } catch (error) {
    console.error('프로젝트 데이터 로드 중 오류 발생:', error);
    renderErrorMessage('프로젝트 정보를 불러오는 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
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
 * 프로젝트 카드 HTML 문자열을 생성하는 함수
 * @param {Object} project - 개별 프로젝트 데이터 객체
 * @returns {string} 완성된 HTML 문자열
 */
function createProjectCardHtml(project) {
  // 추천 프로젝트 여부에 따른 클래스 지정
  const featuredClass = project.featured ? 'featured' : '';
  
  // 뱃지 클래스 매핑
  const badgeClass = (project.badge || 'live').toLowerCase();

  // 기술 태그 HTML 생성
  const tagsHtml = (project.tags || [])
    .map((tag) => `<span class="tag-item">${escapeHtml(tag)}</span>`)
    .join('');

  // 라이브/실행 링크 버튼 생성 (있는 경우에만 렌더링)
  const liveButtonHtml = project.links && project.links.live
    ? `<a href="${escapeHtml(project.links.live)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">사이트 방문</a>`
    : '';

  // GitHub 저장소 링크 버튼 생성 (있는 경우에만 렌더링)
  const githubButtonHtml = project.links && project.links.github
    ? `<a href="${escapeHtml(project.links.github)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">GitHub</a>`
    : '';

  return `
    <article class="project-card ${featuredClass}" data-id="${escapeHtml(project.id)}">
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
    </article>
  `;
}

/**
 * 프로젝트 목록을 화면에 렌더링하는 함수
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
}

/**
 * 에러 메시지를 컨테이너에 표시하는 함수
 * @param {string} message - 사용자에게 안내할 에러 메시지
 */
function renderErrorMessage(message) {
  if (!projectsGridContainer) return;

  projectsGridContainer.innerHTML = `
    <div style="grid-column: 1 / -1; padding: 48px; border: 2px solid var(--color-secondary); background-color: #FEF2F2; text-align: center;">
      <p style="font-weight: 800; color: var(--color-secondary); margin-bottom: 8px;">오류 발생</p>
      <p style="color: var(--color-text-primary);">${escapeHtml(message)}</p>
    </div>
  `;
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

// DOM 준비 완료 시 앱 초기화 실행
document.addEventListener('DOMContentLoaded', initializeApp);
