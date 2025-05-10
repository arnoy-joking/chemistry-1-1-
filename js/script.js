
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const sidebarToggleDesktop = document.getElementById('sidebar-toggle-desktop');
    const mobileSidebarToggle = document.getElementById('mobile-sidebar-toggle');
    
    const classListDesktopContainer = document.getElementById('class-list-desktop');
    const classListMobileContainer = document.getElementById('class-list-mobile');
    
    const lectureViewerContent = document.getElementById('lecture-viewer-content');
    const studyToolDescription = document.getElementById('study-tool-description');
    const generateStudyPlanBtn = document.getElementById('generate-study-plan-btn');
    const studyPlanError = document.getElementById('study-plan-error');
    const studyPlanResult = document.getElementById('study-plan-result');

    let selectedClassId = null;
    let selectedLectureId = null;

    // Populate current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Sidebar toggle functionality
    function toggleSidebar(collapse) {
        const isCollapsed = typeof collapse === 'boolean' ? collapse : sidebar.classList.contains('collapsed');
        if (typeof collapse === 'boolean') {
            sidebar.classList.toggle('collapsed', collapse);
            mainContent.classList.toggle('sidebar-collapsed', collapse);
        } else {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('sidebar-collapsed');
        }
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
    }

    if (sidebarToggleDesktop) {
        sidebarToggleDesktop.addEventListener('click', () => toggleSidebar());
    }

    if (mobileSidebarToggle) {
        mobileSidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open'); // For mobile overlay
        });
    }
    
    // Restore sidebar state
    if (window.innerWidth > 768) { // Only apply for desktop
        const storedSidebarState = localStorage.getItem('sidebarCollapsed');
        if (storedSidebarState === 'true') {
            toggleSidebar(true);
        } else {
            toggleSidebar(false); // Explicitly open if not stored or false
        }
    }


    function createLectureItem(lecture, classObj) {
        const lectureItem = document.createElement('li');
        lectureItem.className = 'lecture-item';
        lectureItem.textContent = lecture.name;
        lectureItem.dataset.lectureId = lecture.id;
        lectureItem.dataset.classId = classObj.id;
        lectureItem.tabIndex = 0;

        lectureItem.addEventListener('click', () => {
            selectLecture(classObj.id, lecture.id);
            if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open'); // Close mobile sidebar on selection
            }
        });
        lectureItem.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                selectLecture(classObj.id, lecture.id);
                 if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                }
            }
        });
        return lectureItem;
    }

    function createClassSection(classObj, isMobile = false) {
        const classSection = document.createElement('div');
        classSection.className = 'class-category';

        const header = document.createElement('div');
        header.className = 'class-item-header';
        header.tabIndex = 0;
        
        const nameSpan = document.createElement('span');
        nameSpan.className = 'class-item-name';
        nameSpan.textContent = classObj.name;
        header.appendChild(nameSpan);

        const chevron = document.createElement('span');
        chevron.className = 'chevron';
        chevron.innerHTML = '&#9654;'; // Right-pointing triangle
        header.appendChild(chevron);

        const lecturesList = document.createElement('ul');
        lecturesList.className = 'lectures-list';

        classObj.lectures.forEach(lecture => {
            lecturesList.appendChild(createLectureItem(lecture, classObj));
        });

        classSection.appendChild(header);
        classSection.appendChild(lecturesList);

        header.addEventListener('click', () => {
            const isOpen = lecturesList.classList.toggle('open');
            chevron.innerHTML = isOpen ? '&#9660;' : '&#9654;'; // Down/Right triangle
            chevron.classList.toggle('open', isOpen);
            header.setAttribute('aria-expanded', isOpen);
        });
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                 const isOpen = lecturesList.classList.toggle('open');
                 chevron.innerHTML = isOpen ? '&#9660;' : '&#9654;';
                 chevron.classList.toggle('open', isOpen);
                 header.setAttribute('aria-expanded', isOpen);
            }
        });
        
        return classSection;
    }

    function populateClassLists() {
        if (classListDesktopContainer) {
            classListDesktopContainer.innerHTML = ''; // Clear existing
            classes.forEach(classObj => {
                classListDesktopContainer.appendChild(createClassSection(classObj, false));
            });
        }
        if (classListMobileContainer) {
            classListMobileContainer.innerHTML = ''; // Clear existing
            classes.forEach(classObj => {
                classListMobileContainer.appendChild(createClassSection(classObj, true));
            });
        }
    }
    
    function displayWelcomeMessage() {
        lectureViewerContent.innerHTML = `
            <div class="placeholder-text">
                <img src="https://picsum.photos/seed/chemistry/400/300" alt="Chemistry lab" data-ai-hint="chemistry lab">
                <h2 class="card-title">Welcome to ChemPrep HQ</h2>
                <p class="muted">Select a class and lecture to get started.</p>
            </div>`;
        if (studyToolDescription) studyToolDescription.textContent = "Select a lecture to generate a study plan.";
        if (generateStudyPlanBtn) generateStudyPlanBtn.disabled = true;
        if (studyPlanResult) studyPlanResult.hidden = true;
        if (studyPlanError) studyPlanError.hidden = true;
    }

    function selectLecture(classId, lectureId) {
        selectedClassId = classId;
        selectedLectureId = lectureId;

        const classObj = classes.find(c => c.id === classId);
        if (!classObj) return displayWelcomeMessage();
        const lecture = classObj.lectures.find(l => l.id === lectureId);
        if (!lecture) return displayWelcomeMessage();

        // Update lecture viewer
        lectureViewerContent.innerHTML = `
            <div class="card-header">
                <h2 class="card-title" id="lecture-title">${lecture.name}</h2>
            </div>
            <div class="tabs-container">
                <div class="tabs-list">
                    <button class="tab-trigger active" data-tab="video">Lecture Video</button>
                    <button class="tab-trigger" data-tab="pdf">Lecture Notes (PDF)</button>
                </div>
                <div id="video-content" class="tab-content">
                    <div class="video-container">
                        <iframe src="${lecture.videoUrl}" title="${lecture.name} Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div id="pdf-content" class="tab-content" hidden>
                    ${lecture.pdfUrl ? `
                        <p>PDF viewing is available by download.</p>
                        <a href="${lecture.pdfUrl}" download target="_blank" rel="noopener noreferrer" class="button outline">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                            Download PDF
                        </a>` : 
                        '<p>No PDF available for this lecture.</p>'
                    }
                </div>
            </div>`;
            
        setupTabs();

        // Update active state in class lists
        document.querySelectorAll('.lecture-item').forEach(item => {
            item.classList.toggle('active', item.dataset.lectureId === lectureId && item.dataset.classId === classId);
        });
        
        // Expand parent class if not already
        document.querySelectorAll('.class-item-header').forEach(header => {
            const list = header.nextElementSibling;
            if (list && list.querySelector(`.lecture-item[data-lecture-id="${lectureId}"][data-class-id="${classId}"]`)) {
                if (!list.classList.contains('open')) {
                    list.classList.add('open');
                    const chevron = header.querySelector('.chevron');
                    if (chevron) {
                         chevron.innerHTML = '&#9660;';
                         chevron.classList.add('open');
                    }
                    header.setAttribute('aria-expanded', 'true');
                }
            }
        });


        // Update Study Tool
        if(studyToolDescription) studyToolDescription.textContent = `Generate a study plan for "${lecture.name}".`;
        if(generateStudyPlanBtn) generateStudyPlanBtn.disabled = false;
        if(studyPlanResult) studyPlanResult.hidden = true;
        if(studyPlanError) studyPlanError.hidden = true;
    }
    
    function setupTabs() {
        const tabTriggers = lectureViewerContent.querySelectorAll('.tab-trigger');
        const tabContents = lectureViewerContent.querySelectorAll('.tab-content');

        tabTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const tabName = trigger.dataset.tab;

                tabTriggers.forEach(t => t.classList.remove('active'));
                trigger.classList.add('active');

                tabContents.forEach(content => {
                    content.hidden = content.id !== `${tabName}-content`;
                });
            });
        });
    }

    // Accordion functionality
    function setupAccordion(triggerElement, contentElement) {
        if (!triggerElement || !contentElement) return;
        const chevron = triggerElement.querySelector('.chevron');

        triggerElement.addEventListener('click', () => {
            const isExpanded = triggerElement.getAttribute('aria-expanded') === 'true';
            triggerElement.setAttribute('aria-expanded', !isExpanded);
            contentElement.hidden = isExpanded;
            if (chevron) {
                chevron.innerHTML = !isExpanded ? '&#9660;' : '&#9654;'; // Down/Right triangle
                chevron.classList.toggle('open', !isExpanded);
            }
        });
    }
    
    setupAccordion(document.getElementById('study-tool-trigger'), document.getElementById('study-tool-content'));
    setupAccordion(document.getElementById('mobile-class-list-trigger'), document.getElementById('class-list-mobile-content'));


    // Study Plan Generator (Placeholder)
    if (generateStudyPlanBtn) {
        generateStudyPlanBtn.addEventListener('click', () => {
            if (!selectedLectureId || !selectedClassId) {
                studyPlanError.textContent = "Please select a class and lecture first.";
                studyPlanError.hidden = false;
                studyPlanResult.hidden = true;
                return;
            }
            
            const currentClass = classes.find(c => c.id === selectedClassId);
            const currentLecture = currentClass.lectures.find(l => l.id === selectedLectureId);

            studyPlanError.hidden = true;
            studyPlanResult.innerHTML = `
                <div class="study-plan-output">
                    <h3>Study Plan for ${currentLecture.name}</h3>
                    <pre>This is a placeholder study plan. In a full application, an AI would generate this based on:\n- Class: ${currentClass.name}\n- Lecture Notes (excerpt): ${currentLecture.notes.substring(0,100)}...\n- Video Transcript (excerpt): ${currentLecture.transcript.substring(0,100)}...\n\nKey Topics (Placeholder):\n1. Core Concept A\n2. Important Detail B\n3. Example Application C</pre>
                </div>`;
            studyPlanResult.hidden = false;
        });
    }
    
    // Initial population
    populateClassLists();
    
    // Attempt to select first lecture of first class by default or from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const initialClassId = urlParams.get('classId');
    const initialLectureId = urlParams.get('lectureId');

    if (initialClassId && initialLectureId) {
        const classExists = classes.some(c => c.id === initialClassId && c.lectures.some(l => l.id === initialLectureId));
        if (classExists) {
            selectLecture(initialClassId, initialLectureId);
        } else {
            displayWelcomeMessage(); // Fallback if URL params are invalid
        }
    } else if (classes.length > 0 && classes[0].lectures.length > 0) {
        selectLecture(classes[0].id, classes[0].lectures[0].id);
    } else {
        displayWelcomeMessage();
    }

    // Adjust main content margin based on sidebar visibility on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mainContent.classList.toggle('sidebar-collapsed', sidebar.classList.contains('collapsed'));
            sidebar.classList.remove('open'); // Ensure mobile overlay is closed
        } else {
            mainContent.classList.remove('sidebar-collapsed'); // No margin adjustment needed for mobile overlay
        }
    });
});

// Basic tab styling (can be enhanced in CSS)
const styleEl = document.createElement('style');
styleEl.textContent = `
.tabs-container { margin-top: 1rem; }
.tabs-list { display: flex; border-bottom: 1px solid var(--border-color); margin-bottom: 1rem; }
.tab-trigger { 
    padding: 0.5rem 1rem; 
    cursor: pointer; 
    border: none; 
    background: none; 
    color: var(--muted-foreground);
    border-bottom: 2px solid transparent;
    margin-bottom: -1px; /* Overlap with container border */
    font-weight: 500;
}
.tab-trigger.active { 
    color: var(--primary-color);
    border-bottom-color: var(--primary-color);
}
.tab-trigger:hover:not(.active) {
    color: var(--foreground);
}
`;
document.head.appendChild(styleEl);

