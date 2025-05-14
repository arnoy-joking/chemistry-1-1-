document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const currentVideoTitle = document.getElementById('current-video-title');
  const currentVideoDuration = document.getElementById('current-video-duration');
  const videoThumbnailContainer = document.getElementById('video-thumbnail-container');
  const youtubeEmbedContainer = document.getElementById('youtube-embed-container');
  const youtubeIframe = document.getElementById('youtube-iframe');
  const videoThumbnail = document.getElementById('video-thumbnail');
  const downloadPdfBtn = document.getElementById('download-pdf-btn');
  const openYoutubeBtn = document.getElementById('open-youtube-btn');
  const classList = document.getElementById('class-list');
  const filterContainer = document.querySelector('.filter-scroll');
  const currentYear = document.getElementById('current-year');
  
  // Current state
  let currentVideoId = '';
  let currentFilterCategory = null;
  
  // Set current year in footer
  currentYear.textContent = new Date().getFullYear();
  
  // Initialize app
  initializeApp();
  
  function initializeApp() {
    renderCategoryFilters();
    renderClassList();
    loadLastWatchedVideo();
    setupEventListeners();
  }
  
  function renderCategoryFilters() {
    // Get unique categories from classData
    const categories = ['All Classes', ...new Set(classData.map(cls => cls.category))];
    
    // Generate HTML for category filters
    const filtersHtml = categories.map(category => {
      const isActive = category === currentFilterCategory || (category === 'All Classes' && currentFilterCategory === null);
      return `
        <button class="category-btn ${isActive ? 'active' : ''}" data-category="${category === 'All Classes' ? '' : category}">
          ${category}
        </button>
      `;
    }).join('');
    
    // Insert HTML into filter container
    filterContainer.innerHTML = filtersHtml;
    
    // Add event listeners to category buttons
    document.querySelectorAll('.category-btn').forEach(button => {
      button.addEventListener('click', function() {
        const category = this.dataset.category;
        currentFilterCategory = category || null;
        
        // Update active state
        document.querySelectorAll('.category-btn').forEach(btn => {
          btn.classList.toggle('active', 
            (btn.dataset.category === category) || 
            (btn.dataset.category === '' && category === '')
          );
        });
        
        // Re-render class list with filter
        renderClassList();
      });
    });
  }
  
  function renderClassList() {
    // Filter class data based on current filter
    const filteredClasses = currentFilterCategory 
      ? classData.filter(cls => cls.category === currentFilterCategory)
      : classData;
    
    // Generate HTML for class list
    const classListHtml = filteredClasses.map(cls => {
      const isSelected = cls.videoId === currentVideoId;
      
      return `
        <li class="class-item ${isSelected ? 'selected' : ''}" data-video-id="${cls.videoId}">
          ${isSelected ? '<div class="selected-indicator"></div>' : ''}
          <div class="class-item-content">
            <div class="class-info">
              <div class="class-icon">
                <i class="fas fa-play-circle"></i>
                ${isSelected ? `
                  <div class="playing-indicator">
                    <div class="playing-indicator-ping"></div>
                    <div class="playing-indicator-dot"></div>
                  </div>
                ` : ''}
              </div>
              <div class="class-details">
                <h3 class="class-title">${cls.title}</h3>
                <div class="class-meta">
                  <span class="class-meta-item">
                    <i class="far fa-clock"></i>
                    ${cls.duration}
                  </span>
                  <span class="class-meta-item">
                    <i class="far fa-calendar-alt"></i>
                    ${cls.date}
                  </span>
                  ${isSelected ? `
                    <span class="now-playing">
                      <i class="fas fa-circle"></i>
                      Now Playing
                    </span>
                  ` : ''}
                </div>
              </div>
            </div>
            <a href="https://www.bondipathshala.com.bd/pdf/${cls.pdfLink}" target="_blank" class="class-pdf-link" onclick="event.stopPropagation()">
              <i class="fas fa-file-pdf"></i>
              PDF
            </a>
          </div>
        </li>
      `;
    }).join('');
    
    // Insert HTML into class list
    classList.innerHTML = classListHtml;
    
    // Add event listeners to class items
    document.querySelectorAll('.class-item').forEach(item => {
      item.addEventListener('click', function() {
        const videoId = this.dataset.videoId;
        selectVideo(videoId);
      });
    });
  }
  
  function loadLastWatchedVideo() {
    // Try to load the last watched video from localStorage
    const lastWatchedVideoId = localStorage.getItem('lastWatchedVideoId');
    if (lastWatchedVideoId) {
      selectVideo(lastWatchedVideoId);
    } else if (classData.length > 0) {
      // Default to first video if no saved video
      selectVideo(classData[0].videoId);
    }
  }
  
  function selectVideo(videoId) {
    // Find the class data for this video
    const classItem = classData.find(cls => cls.videoId === videoId);
    if (!classItem) return;
    
    // Update current state
    currentVideoId = videoId;
    
    // Update localStorage
    localStorage.setItem('lastWatchedVideoId', videoId);
    
    // Update UI
    currentVideoTitle.textContent = classItem.title;
    currentVideoDuration.textContent = classItem.duration;
    
    // Update video thumbnail
    videoThumbnail.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    videoThumbnail.alt = classItem.title;
    
    // Reset video player - show thumbnail again
    videoThumbnailContainer.classList.remove('hidden');
    youtubeEmbedContainer.classList.add('hidden');
    
    // Update button actions
    downloadPdfBtn.onclick = function() {
      window.open(`https://www.bondipathshala.com.bd/pdf/${classItem.pdfLink}`, '_blank');
    };
    
    openYoutubeBtn.onclick = function() {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    };
    
    // Re-render class list to update selection
    renderClassList();
  }
  
  function loadYoutubeVideo(videoId) {
    // Set iframe src
    youtubeIframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&fs=1&iv_load_policy=3&cc_load_policy=0`;
    
    // Hide thumbnail and show iframe
    videoThumbnailContainer.classList.add('hidden');
    youtubeEmbedContainer.classList.remove('hidden');
  }
  
  function setupEventListeners() {
    // Click on thumbnail to play video
    videoThumbnailContainer.addEventListener('click', function() {
      loadYoutubeVideo(currentVideoId);
    });
    
    // Handle back button to reset history
    window.addEventListener('popstate', function() {
      if (window.location.pathname === '/') {
        window.history.replaceState(null, '', '/');
      }
    });
    
    // Clean up history stack on page load
    if (window.history.length > 2) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }
});
