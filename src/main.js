import './style.css'

// --- Configuration ---
const GITHUB_USERNAME = 'himanshurajora';
const CACHE_TTL = 1000 * 60 * 60 * 6; // 6 hours
const CACHE_KEY_REPOS = 'hj_github_repos';
const CACHE_KEY_STATS = 'hj_github_stats';

// --- DOM Elements ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const reposContainer = document.getElementById('repos-container');
const statsContainer = document.getElementById('stats-container');

// --- Mobile Menu Toggle ---
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// --- Active Section Indicator ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav div.hidden a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-accent-violet');
    link.classList.add('text-text-muted');
    if (link.getAttribute('href').includes(current)) {
      link.classList.remove('text-text-muted');
      link.classList.add('text-accent-violet');
    }
  });
});

// --- GitHub API & Caching ---

async function fetchGitHubData() {
  try {
    // Check Cache
    const cachedRepos = getCachedData(CACHE_KEY_REPOS);

    if (cachedRepos) {
      renderRepos(cachedRepos);
      renderStats(cachedRepos);
      return;
    }

    // Fetch from API
    // Note: GitHub public API has rate limits (60/hr). 
    // We fetch all public repos to calculate stats and show latest ones.
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&type=owner`);

    if (!response.ok) {
      if (response.status === 403) {
        console.warn('GitHub API rate limit exceeded');
        renderRateLimitError();
        return;
      }
      throw new Error('GitHub API failed');
    }

    const repos = await response.json();

    // Filter out forks if desired, or keep them. Let's keep sources only for "My Projects" feel
    const sourceRepos = repos.filter(repo => !repo.fork);

    // Save to Cache
    setCachedData(CACHE_KEY_REPOS, sourceRepos);

    renderRepos(sourceRepos);
    renderStats(sourceRepos);

  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    renderError();
  }
}

function getCachedData(key) {
  const item = localStorage.getItem(key);
  if (!item) return null;

  const parsed = JSON.parse(item);
  if (Date.now() > parsed.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return parsed.data;
}

function setCachedData(key, data) {
  const item = {
    data: data,
    expiry: Date.now() + CACHE_TTL,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

// --- Rendering ---

function renderRepos(repos) {
  if (!reposContainer) return;

  // Sort by stars then updated
  const topRepos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 3);

  reposContainer.innerHTML = topRepos.map(repo => `
    <a href="${repo.html_url}" target="_blank" class="block p-4 rounded-lg border border-border bg-background hover:border-accent-violet/50 transition-all group">
      <div class="flex justify-between items-start mb-2">
        <h4 class="font-bold text-text-primary group-hover:text-accent-violet transition-colors">${repo.name}</h4>
        <div class="flex items-center gap-1 text-xs text-text-muted">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          ${repo.stargazers_count}
        </div>
      </div>
      <p class="text-sm text-text-muted line-clamp-2 mb-3">${repo.description || 'No description available.'}</p>
      <div class="flex items-center gap-3 text-xs">
        ${repo.language ? `<span class="flex items-center gap-1 text-accent-cyan"><span class="w-2 h-2 rounded-full bg-accent-cyan"></span>${repo.language}</span>` : ''}
        <span class="text-text-muted">Updated ${new Date(repo.updated_at).toLocaleDateString()}</span>
      </div>
    </a>
  `).join('');
}

function renderStats(repos) {
  if (!statsContainer) return;

  // Calculate Language Distribution
  const languages = {};
  repos.forEach(repo => {
    if (repo.language) {
      languages[repo.language] = (languages[repo.language] || 0) + 1;
    }
  });

  const sortedLangs = Object.entries(languages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  const totalRepos = repos.length;
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

  // Generate Simple Bar Chart for Languages
  const chartHtml = sortedLangs.map(([lang, count]) => {
    const percentage = (count / totalRepos) * 100;
    return `
      <div class="space-y-1">
        <div class="flex justify-between text-xs text-text-muted">
          <span>${lang}</span>
          <span>${count}</span>
        </div>
        <div class="h-2 bg-surface rounded-full overflow-hidden">
          <div class="h-full bg-accent-violet" style="width: ${percentage}%"></div>
        </div>
      </div>
    `;
  }).join('');

  statsContainer.innerHTML = `
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="p-4 rounded-lg bg-surface/50 text-center">
        <div class="text-2xl font-bold text-text-primary">${totalRepos}</div>
        <div class="text-xs text-text-muted">Public Repos</div>
      </div>
      <div class="p-4 rounded-lg bg-surface/50 text-center">
        <div class="text-2xl font-bold text-text-primary">${totalStars}</div>
        <div class="text-xs text-text-muted">Total Stars</div>
      </div>
    </div>
    <div class="space-y-3">
      <h4 class="text-sm font-bold text-text-primary mb-2">Top Languages</h4>
      ${chartHtml}
    </div>
  `;
}

function renderRateLimitError() {
  if (reposContainer) reposContainer.innerHTML = '<p class="text-sm text-text-muted">GitHub API rate limit exceeded. Please try again later.</p>';
  if (statsContainer) statsContainer.innerHTML = '<p class="text-sm text-text-muted">Stats unavailable due to rate limit.</p>';
}

function renderError() {
  if (reposContainer) reposContainer.innerHTML = '<p class="text-sm text-text-muted">Failed to load GitHub data.</p>';
  if (statsContainer) statsContainer.innerHTML = '<p class="text-sm text-text-muted">Stats unavailable.</p>';
}

// --- Init ---
fetchGitHubData();