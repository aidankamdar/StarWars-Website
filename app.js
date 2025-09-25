// Star Wars Data and Application Logic
class StarWarsApp {
    constructor() {
        this.data = null;
        this.currentFilter = 'all';
        this.sortBy = 'rating';
        this.sortOrder = 'desc';
        this.init();
    }

    async init() {
        await this.loadData();
        this.setupNavigation();
        this.setupSearch();
        this.setupModal();
        this.populateHomePage();
        this.setupTimelinePage();
        this.setupRankingsPage();
        this.setupRecommendationsPage();
    }

    async loadData() {
        try {
            // Using the provided Star Wars data structure
            this.data = {
                "title": "The Ultimate Star Wars Chronological Guide & Deep Analysis",
                "description": "A comprehensive database of all Star Wars media with chronological ordering, quality rankings, and detailed analysis for the perfect AI-powered website",
                "chronological_eras": {
                    "dawn_of_jedi": {
                        "era_name": "Dawn of the Jedi",
                        "time_period": "25,025 BBY",
                        "description": "The earliest era chronicling the origins of the Jedi Order and the discovery of the Force",
                        "status": "Minimal content - mostly upcoming",
                        "key_themes": ["Force discovery", "Jedi origins", "Ancient history"],
                        "media": [{
                            "title": "Untitled James Mangold Film",
                            "type": "Film",
                            "status": "Announced - TBA",
                            "description": "The first Jedi and the discovery of the Force",
                            "recommendation": "Essential when released",
                            "year": "TBA",
                            "rating": 0
                        }]
                    },
                    "old_republic": {
                        "era_name": "The Old Republic",
                        "time_period": "1,032 BBY (era ends)",
                        "description": "Ancient conflicts between Jedi and Sith, when both orders were numerous",
                        "status": "No current canon content",
                        "key_themes": ["Jedi vs Sith wars", "Ancient conflicts", "Force philosophy"],
                        "media": [{
                            "note": "Currently no canon content announced for this era",
                            "legends_note": "Rich Legends content exists (KOTOR games, comics)"
                        }]
                    },
                    "high_republic": {
                        "era_name": "The High Republic",
                        "time_period": "382-229 BBY",
                        "description": "The golden age of the Jedi and Republic, featuring the Nihil conflict",
                        "status": "Major multimedia initiative",
                        "key_themes": ["Jedi at their peak", "Republic expansion", "Nihil threat", "Force mysteries"],
                        "essential_media": [
                            {"title": "Light of the Jedi", "type": "Novel", "year": 2021, "rating": 8.5, "recommendation": "Essential - Best starting point", "description": "Perfect introduction to the era and main characters"},
                            {"title": "The Rising Storm", "type": "Novel", "year": 2021, "rating": 8.5, "recommendation": "Essential", "description": "Escalates the conflict with the Nihil"},
                            {"title": "The Fallen Star", "type": "Novel", "year": 2022, "rating": 8.5, "recommendation": "Essential", "description": "Devastating conclusion to Phase I"},
                            {"title": "The Acolyte", "type": "TV Series", "year": 2024, "rating": 6.5, "recommendation": "Good", "description": "Murder mystery in the High Republic era"}
                        ]
                    },
                    "fall_of_jedi": {
                        "era_name": "Fall of the Jedi",
                        "time_period": "60-19 BBY",
                        "description": "The prequel trilogy era showing Anakin's rise and fall",
                        "status": "Core Star Wars content",
                        "key_themes": ["Chosen One prophecy", "Republic corruption", "Jedi decline", "Sith return"],
                        "essential_media": [
                            {"title": "The Phantom Menace", "type": "Film", "year": 1999, "rating": 5.0, "recommendation": "Essential but flawed", "description": "Introduces Anakin and the prophecy"},
                            {"title": "Attack of the Clones", "type": "Film", "year": 2002, "rating": 4.5, "recommendation": "Essential but flawed", "description": "Clone Wars begin, Anakin and Padmé romance"},
                            {"title": "The Clone Wars", "type": "TV Series", "year": "2008-2020", "rating": 7.8, "recommendation": "Masterpiece", "description": "Vastly improves prequel characterization"},
                            {"title": "Revenge of the Sith", "type": "Film", "year": 2005, "rating": 6.8, "recommendation": "Essential", "description": "Anakin becomes Vader, Empire rises"},
                            {"title": "Brotherhood", "type": "Novel", "year": 2022, "rating": 8.5, "recommendation": "Excellent", "description": "Perfect Clone Wars companion novel"}
                        ]
                    },
                    "reign_of_empire": {
                        "era_name": "Reign of the Empire",
                        "time_period": "19-0 BBY",
                        "description": "The dark times when the Empire rules and rebels emerge",
                        "status": "Rich with content",
                        "key_themes": ["Imperial oppression", "Jedi in hiding", "Rebellion formation", "Hope vs despair"],
                        "essential_media": [
                            {"title": "The Bad Batch", "type": "TV Series", "year": "2021-2024", "rating": 7.0, "recommendation": "Good", "description": "Clone troopers adapt to the Empire"},
                            {"title": "Obi-Wan Kenobi", "type": "TV Series", "year": 2022, "rating": 6.5, "recommendation": "Good", "description": "Obi-Wan's exile and protecting Luke"},
                            {"title": "Solo: A Star Wars Story", "type": "Film", "year": 2018, "rating": 6.0, "recommendation": "Mixed", "description": "Young Han Solo's origin story"},
                            {"title": "Rebels", "type": "TV Series", "year": "2014-2018", "rating": 7.0, "recommendation": "Good", "description": "Ghost crew and early Rebellion"},
                            {"title": "Andor", "type": "TV Series", "year": "2022-2025", "rating": 9.5, "recommendation": "Masterpiece", "description": "Mature political drama, best Star Wars content"},
                            {"title": "Rogue One", "type": "Film", "year": 2016, "rating": 8.0, "recommendation": "Masterpiece", "description": "Direct prequel to A New Hope"}
                        ]
                    },
                    "age_of_rebellion": {
                        "era_name": "Age of Rebellion",
                        "time_period": "0-4 ABY",
                        "description": "The original trilogy era - galactic civil war",
                        "status": "Core trilogy",
                        "key_themes": ["Hope vs tyranny", "Hero's journey", "Force awakening", "Redemption"],
                        "essential_media": [
                            {"title": "A New Hope", "type": "Film", "year": 1977, "rating": 8.4, "recommendation": "Masterpiece", "description": "The original Star Wars - Luke's journey begins"},
                            {"title": "The Empire Strikes Back", "type": "Film", "year": 1980, "rating": 9.2, "recommendation": "Masterpiece", "description": "Often considered the best Star Wars film"},
                            {"title": "Return of the Jedi", "type": "Film", "year": 1983, "rating": 7.5, "recommendation": "Good", "description": "Vader's redemption and Empire's fall"}
                        ]
                    },
                    "new_republic": {
                        "era_name": "New Republic",
                        "time_period": "5-34 ABY",
                        "description": "Post-Empire reconstruction and new threats emerging",
                        "status": "Growing content",
                        "key_themes": ["Rebuilding", "New Jedi", "Imperial remnants", "Next generation"],
                        "essential_media": [
                            {"title": "The Mandalorian", "type": "TV Series", "year": "2019-", "rating": 7.5, "recommendation": "Excellent (S1-2), Mixed (S3)", "description": "Bounty hunter and Grogu in post-Empire galaxy"},
                            {"title": "The Book of Boba Fett", "type": "TV Series", "year": 2021, "rating": 5.5, "recommendation": "Mixed", "description": "Boba Fett becomes crime lord on Tatooine"},
                            {"title": "Ahsoka", "type": "TV Series", "year": 2023, "rating": 6.5, "recommendation": "Good", "description": "Ahsoka searches for Ezra and Thrawn"},
                            {"title": "Skeleton Crew", "type": "TV Series", "year": 2024, "rating": 7.0, "recommendation": "Good", "description": "Kids' adventure in the Star Wars galaxy"}
                        ]
                    },
                    "rise_of_first_order": {
                        "era_name": "Rise of the First Order",
                        "time_period": "34-35 ABY",
                        "description": "The sequel trilogy era with new galactic conflict",
                        "status": "Complete but divisive",
                        "key_themes": ["Legacy", "New vs old", "Balance", "Hope renewed"],
                        "essential_media": [
                            {"title": "The Force Awakens", "type": "Film", "year": 2015, "rating": 7.5, "recommendation": "Good", "description": "New heroes emerge, Han Solo returns"},
                            {"title": "The Last Jedi", "type": "Film", "year": 2017, "rating": 6.2, "recommendation": "Mixed (Divisive)", "description": "Luke trains Rey, Resistance on the run"},
                            {"title": "The Rise of Skywalker", "type": "Film", "year": 2019, "rating": 4.0, "recommendation": "Poor", "description": "Palpatine returns, saga conclusion"},
                            {"title": "Resistance", "type": "TV Series", "year": "2018-2020", "rating": 4.0, "recommendation": "Poor", "description": "Animated series during sequel trilogy"}
                        ]
                    }
                },
                "quality_rankings": {
                    "masterpiece_tier": {
                        "rating_range": "8.0-10.0",
                        "description": "Essential viewing - the absolute best Star Wars has to offer",
                        "entries": [
                            {"title": "Andor", "rating": 9.5, "type": "TV Series", "year": "2022-2025", "description": "Mature political drama, best Star Wars content"},
                            {"title": "The Empire Strikes Back", "rating": 9.2, "type": "Film", "year": 1980, "description": "Often considered the best Star Wars film"},
                            {"title": "A New Hope", "rating": 8.4, "type": "Film", "year": 1977, "description": "The original Star Wars - Luke's journey begins"},
                            {"title": "Rogue One", "rating": 8.0, "type": "Film", "year": 2016, "description": "Direct prequel to A New Hope"}
                        ]
                    },
                    "excellent_tier": {
                        "rating_range": "7.5-7.9",
                        "description": "High quality content that enhances the Star Wars universe",
                        "entries": [
                            {"title": "The Clone Wars", "rating": 7.8, "type": "TV Series", "year": "2008-2020", "description": "Vastly improves prequel characterization"},
                            {"title": "Return of the Jedi", "rating": 7.5, "type": "Film", "year": 1983, "description": "Vader's redemption and Empire's fall"},
                            {"title": "The Mandalorian S1-2", "rating": 7.5, "type": "TV Series", "year": "2019-", "description": "Bounty hunter and Grogu in post-Empire galaxy"},
                            {"title": "The Force Awakens", "rating": 7.5, "type": "Film", "year": 2015, "description": "New heroes emerge, Han Solo returns"}
                        ]
                    },
                    "good_tier": {
                        "rating_range": "6.5-7.4",
                        "description": "Solid content worth watching for fans",
                        "entries": [
                            {"title": "The Bad Batch", "rating": 7.0, "type": "TV Series", "year": "2021-2024", "description": "Clone troopers adapt to the Empire"},
                            {"title": "Rebels", "rating": 7.0, "type": "TV Series", "year": "2014-2018", "description": "Ghost crew and early Rebellion"},
                            {"title": "Skeleton Crew", "rating": 7.0, "type": "TV Series", "year": 2024, "description": "Kids' adventure in the Star Wars galaxy"},
                            {"title": "Revenge of the Sith", "rating": 6.8, "type": "Film", "year": 2005, "description": "Anakin becomes Vader, Empire rises"},
                            {"title": "Obi-Wan Kenobi", "rating": 6.5, "type": "TV Series", "year": 2022, "description": "Obi-Wan's exile and protecting Luke"},
                            {"title": "The Acolyte", "rating": 6.5, "type": "TV Series", "year": 2024, "description": "Murder mystery in the High Republic era"}
                        ]
                    },
                    "mixed_tier": {
                        "rating_range": "5.5-6.4",
                        "description": "Has good elements but significant flaws",
                        "entries": [
                            {"title": "The Last Jedi", "rating": 6.2, "type": "Film", "year": 2017, "description": "Luke trains Rey, Resistance on the run"},
                            {"title": "Solo", "rating": 6.0, "type": "Film", "year": 2018, "description": "Young Han Solo's origin story"},
                            {"title": "The Mandalorian S3", "rating": 6.0, "type": "TV Series", "year": "2019-", "description": "Later seasons with mixed reception"},
                            {"title": "The Book of Boba Fett", "rating": 5.5, "type": "TV Series", "year": 2021, "description": "Boba Fett becomes crime lord on Tatooine"}
                        ]
                    },
                    "poor_tier": {
                        "rating_range": "Below 5.5",
                        "description": "Significant issues, watch only for completeness",
                        "entries": [
                            {"title": "The Phantom Menace", "rating": 5.0, "type": "Film", "year": 1999, "description": "Introduces Anakin and the prophecy"},
                            {"title": "Attack of the Clones", "rating": 4.5, "type": "Film", "year": 2002, "description": "Clone Wars begin, Anakin and Padmé romance"},
                            {"title": "The Rise of Skywalker", "rating": 4.0, "type": "Film", "year": 2019, "description": "Palpatine returns, saga conclusion"},
                            {"title": "Resistance", "rating": 4.0, "type": "TV Series", "year": "2018-2020", "description": "Animated series during sequel trilogy"}
                        ]
                    }
                },
                "viewing_recommendations": {
                    "first_time_viewers": {
                        "order": "Release Order",
                        "reasoning": "Experience the story as it was originally told",
                        "start_with": ["A New Hope", "The Empire Strikes Back", "Return of the Jedi"],
                        "then": ["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith"],
                        "essential_additions": ["The Clone Wars", "Rogue One", "Andor"]
                    },
                    "chronological_order": {
                        "order": "Timeline Order", 
                        "reasoning": "Experience the complete saga in story chronological order",
                        "best_for": "Rewatching fans who know the story",
                        "start_with": "High Republic or Phantom Menace"
                    },
                    "quality_focused": {
                        "order": "Best First",
                        "reasoning": "Start with the highest quality content",
                        "recommended_sequence": ["Andor", "The Empire Strikes Back", "A New Hope", "Rogue One", "The Clone Wars", "Return of the Jedi"]
                    }
                }
            };
        } catch (error) {
            console.error('Error loading Star Wars data:', error);
        }
    }

    setupNavigation() {
        // Navigation between pages
        const navLinks = document.querySelectorAll('.nav-link');
        const navCards = document.querySelectorAll('.nav-card');
        const pages = document.querySelectorAll('.page');

        const showPage = (pageId) => {
            // Hide all pages
            pages.forEach(page => page.classList.remove('active'));
            // Remove active class from all nav links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Show target page
            const targetPage = document.getElementById(`${pageId}-page`);
            if (targetPage) {
                targetPage.classList.add('active');
            }
            
            // Add active class to corresponding nav link
            const targetNav = document.querySelector(`.nav-link[data-page="${pageId}"]`);
            if (targetNav) {
                targetNav.classList.add('active');
            }
        };

        // Set up nav link click handlers
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = link.dataset.page;
                if (pageId) {
                    showPage(pageId);
                }
            });
        });

        // Set up nav card click handlers
        navCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = card.dataset.page;
                if (pageId) {
                    showPage(pageId);
                }
            });
        });

        // Button navigation inside nav cards
        document.querySelectorAll('.nav-card .btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const pageId = btn.closest('.nav-card').dataset.page;
                if (pageId) {
                    showPage(pageId);
                }
            });
        });
    }

    setupSearch() {
        const searchInput = document.getElementById('globalSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.trim();
                if (query.length > 2) {
                    this.performSearch(query);
                }
            });
        }
    }

    performSearch(query) {
        const results = [];
        Object.values(this.data.chronological_eras).forEach(era => {
            const media = era.essential_media || era.media || [];
            media.forEach(item => {
                if (item.title && item.title.toLowerCase().includes(query.toLowerCase())) {
                    results.push({...item, era: era.era_name});
                }
            });
        });

        // Also search in quality rankings
        Object.values(this.data.quality_rankings).forEach(tier => {
            tier.entries.forEach(item => {
                if (item.title.toLowerCase().includes(query.toLowerCase())) {
                    const existing = results.find(r => r.title === item.title);
                    if (!existing) {
                        results.push({...item, era: 'Various'});
                    }
                }
            });
        });

        this.showSearchResults(results, query);
    }

    showSearchResults(results, query) {
        const modal = document.getElementById('contentModal');
        const title = document.getElementById('modalTitle');
        const body = document.getElementById('modalBody');

        title.textContent = `Search Results for "${query}"`;
        
        if (results.length === 0) {
            body.innerHTML = '<p>No results found. Try a different search term.</p>';
        } else {
            body.innerHTML = `
                <div class="search-results">
                    ${results.map(item => `
                        <div class="media-card" data-title="${item.title}">
                            <div class="media-info">
                                <h4>${item.title}</h4>
                                <div class="media-meta">
                                    <span class="media-type">${item.type || 'Unknown'}</span>
                                    <span class="media-year">${item.year || 'TBA'}</span>
                                    ${item.rating ? `<div class="media-rating">
                                        <span class="rating-stars">${this.generateStars(item.rating)}</span>
                                        <span class="rating-value">${item.rating}</span>
                                    </div>` : ''}
                                </div>
                                <p>${item.description || 'No description available.'}</p>
                                <small><strong>Era:</strong> ${item.era}</small>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;

            // Add click handlers to search result cards
            body.querySelectorAll('.media-card').forEach(card => {
                card.addEventListener('click', () => {
                    const title = card.dataset.title;
                    this.showContentDetail(title);
                });
            });
        }

        modal.classList.remove('hidden');
    }

    setupModal() {
        const modal = document.getElementById('contentModal');
        const closeBtn = document.getElementById('modalClose');

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.classList.add('hidden');
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
            }
        });
    }

    populateHomePage() {
        // Populate featured content (highest rated items)
        const featuredContainer = document.getElementById('featuredContent');
        if (!featuredContainer) return;

        const allMedia = this.getAllMedia();
        const featured = allMedia
            .filter(item => item.rating >= 8.0)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 6);

        featuredContainer.innerHTML = featured.map(item => `
            <div class="media-card" data-title="${item.title}">
                <div class="media-info">
                    <h4>${item.title}</h4>
                    <div class="media-meta">
                        <span class="media-type">${item.type}</span>
                        <span class="media-year">${item.year}</span>
                        <div class="media-rating">
                            <span class="rating-stars">${this.generateStars(item.rating)}</span>
                            <span class="rating-value">${item.rating}</span>
                        </div>
                    </div>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');

        // Add click handlers to featured content cards
        featuredContainer.querySelectorAll('.media-card').forEach(card => {
            card.addEventListener('click', () => {
                const title = card.dataset.title;
                this.showContentDetail(title);
            });
        });
    }

    setupTimelinePage() {
        this.populateTimeline();
        this.setupTimelineFilters();
    }

    populateTimeline() {
        const container = document.getElementById('timelineContent');
        if (!container) return;

        const eras = this.data.chronological_eras;

        container.innerHTML = Object.values(eras).map(era => `
            <div class="era-card" data-era="${era.era_name}">
                <div class="era-header">
                    <div>
                        <h3 class="era-title">${era.era_name}</h3>
                        <span class="era-period">${era.time_period}</span>
                    </div>
                </div>
                <p>${era.description}</p>
                <div class="era-themes">
                    ${era.key_themes?.map(theme => `<span class="theme-tag">${theme}</span>`).join('') || ''}
                </div>
                <div class="era-media">
                    ${this.renderEraMedia(era)}
                </div>
            </div>
        `).join('');

        // Add click handlers to all media cards in timeline
        this.addMediaCardHandlers('#timelineContent');
    }

    renderEraMedia(era) {
        const media = era.essential_media || era.media || [];
        if (media.length === 0) return '<p>No current canon content</p>';

        return media.map(item => {
            if (item.note) return `<p><em>${item.note}</em></p>`;
            
            return `
                <div class="media-card" data-title="${item.title}">
                    <div class="media-info">
                        <h4>${item.title}</h4>
                        <div class="media-meta">
                            <span class="media-type">${item.type}</span>
                            <span class="media-year">${item.year || 'TBA'}</span>
                            ${item.rating ? `<div class="media-rating">
                                <span class="rating-stars">${this.generateStars(item.rating)}</span>
                                <span class="rating-value">${item.rating}</span>
                            </div>` : ''}
                        </div>
                        <p>${item.description}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    addMediaCardHandlers(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (container) {
            container.querySelectorAll('.media-card[data-title]').forEach(card => {
                card.addEventListener('click', () => {
                    const title = card.dataset.title;
                    this.showContentDetail(title);
                });
            });
        }
    }

    setupTimelineFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                this.currentFilter = btn.dataset.filter;
                this.filterTimelineContent();
            });
        });
    }

    filterTimelineContent() {
        const mediaCards = document.querySelectorAll('.era-card .media-card');
        
        mediaCards.forEach(card => {
            const mediaInfo = card.querySelector('.media-info');
            const typeElement = mediaInfo?.querySelector('.media-type');
            const ratingElement = mediaInfo?.querySelector('.rating-value');
            
            let show = false;
            
            if (this.currentFilter === 'all') {
                show = true;
            } else if (this.currentFilter === 'masterpiece') {
                const rating = ratingElement ? parseFloat(ratingElement.textContent) : 0;
                show = rating >= 8.0;
            } else {
                const type = typeElement ? typeElement.textContent : '';
                show = type === this.currentFilter;
            }
            
            card.style.display = show ? 'flex' : 'none';
        });
    }

    setupRankingsPage() {
        this.populateRankings();
        this.setupRankingSorting();
    }

    populateRankings() {
        const container = document.getElementById('rankingsContent');
        if (!container) return;

        const rankings = this.data.quality_rankings;

        container.innerHTML = Object.entries(rankings).map(([tierKey, tier]) => `
            <div class="tier-section" data-tier="${tierKey}">
                <div class="tier-header">
                    <h3 class="tier-title">${this.formatTierName(tierKey)}</h3>
                    <div class="tier-range">${tier.rating_range}</div>
                    <p>${tier.description}</p>
                </div>
                <div class="tier-items">
                    ${tier.entries.map(item => `
                        <div class="media-card" data-title="${item.title}">
                            <div class="media-info">
                                <h4>${item.title}</h4>
                                <div class="media-meta">
                                    <span class="media-type">${item.type}</span>
                                    <span class="media-year">${item.year || 'Unknown'}</span>
                                    <div class="media-rating">
                                        <span class="rating-stars">${this.generateStars(item.rating)}</span>
                                        <span class="rating-value">${item.rating}</span>
                                    </div>
                                </div>
                                <p>${item.description || 'No description available.'}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');

        // Add click handlers to ranking cards
        this.addMediaCardHandlers('#rankingsContent');
    }

    setupRankingSorting() {
        const sortSelect = document.getElementById('sortBy');
        const sortOrderBtn = document.getElementById('sortOrder');

        if (sortSelect) {
            sortSelect.addEventListener('change', () => {
                this.sortBy = sortSelect.value;
                this.sortRankings();
            });
        }

        if (sortOrderBtn) {
            sortOrderBtn.addEventListener('click', () => {
                this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
                sortOrderBtn.innerHTML = this.sortOrder === 'desc' ? '⬇ Descending' : '⬆ Ascending';
                this.sortRankings();
            });
        }
    }

    sortRankings() {
        const allItems = this.getAllRankingItems();
        const sorted = this.sortItems(allItems, this.sortBy, this.sortOrder);
        this.renderSortedRankings(sorted);
    }

    getAllRankingItems() {
        const items = [];
        Object.values(this.data.quality_rankings).forEach(tier => {
            tier.entries.forEach(item => items.push(item));
        });
        return items;
    }

    sortItems(items, sortBy, order) {
        return items.sort((a, b) => {
            let aVal = a[sortBy];
            let bVal = b[sortBy];
            
            if (sortBy === 'rating') {
                aVal = parseFloat(aVal);
                bVal = parseFloat(bVal);
            }
            
            const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
            return order === 'desc' ? -comparison : comparison;
        });
    }

    renderSortedRankings(items) {
        const container = document.getElementById('rankingsContent');
        if (!container) return;

        container.innerHTML = `
            <div class="tier-section">
                <div class="tier-header">
                    <h3 class="tier-title">Sorted Results</h3>
                    <p>Sorted by ${this.sortBy} (${this.sortOrder === 'desc' ? 'descending' : 'ascending'})</p>
                </div>
                <div class="tier-items">
                    ${items.map(item => `
                        <div class="media-card" data-title="${item.title}">
                            <div class="media-info">
                                <h4>${item.title}</h4>
                                <div class="media-meta">
                                    <span class="media-type">${item.type}</span>
                                    <span class="media-year">${item.year || 'Unknown'}</span>
                                    <div class="media-rating">
                                        <span class="rating-stars">${this.generateStars(item.rating)}</span>
                                        <span class="rating-value">${item.rating}</span>
                                    </div>
                                </div>
                                <p>${item.description || 'No description available.'}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Re-add click handlers after re-rendering
        this.addMediaCardHandlers('#rankingsContent');
    }

    setupRecommendationsPage() {
        this.populateRecommendations();
    }

    populateRecommendations() {
        const recommendations = this.data.viewing_recommendations;
        
        // First-time viewers
        this.populateRecommendationPath('firstTimeOrder', recommendations.first_time_viewers);
        
        // Chronological order
        this.populateChronologicalOrder();
        
        // Quality-focused
        this.populateRecommendationPath('qualityOrder', recommendations.quality_focused);
        
        // Skip guide
        this.populateSkipGuide();
    }

    populateRecommendationPath(containerId, recommendation) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let pathItems = [];
        
        if (recommendation.start_with) {
            pathItems = [...recommendation.start_with];
            if (recommendation.then) {
                pathItems = [...pathItems, ...recommendation.then];
            }
            if (recommendation.essential_additions) {
                pathItems = [...pathItems, ...recommendation.essential_additions];
            }
        } else if (recommendation.recommended_sequence) {
            pathItems = recommendation.recommended_sequence;
        }

        container.innerHTML = pathItems.map((title, index) => `
            <div class="path-item" data-title="${title}">
                <div class="path-number">${index + 1}</div>
                <div class="path-content">
                    <h5>${title}</h5>
                    <p>${this.getMediaDescription(title)}</p>
                </div>
            </div>
        `).join('');

        // Add click handlers to path items
        container.querySelectorAll('.path-item[data-title]').forEach(item => {
            item.addEventListener('click', () => {
                const title = item.dataset.title;
                this.showContentDetail(title);
            });
        });
    }

    populateChronologicalOrder() {
        const container = document.getElementById('chronologicalOrder');
        if (!container) return;

        const chronologicalItems = this.getChronologicalOrder();
        
        container.innerHTML = chronologicalItems.slice(0, 8).map((item, index) => `
            <div class="path-item" data-title="${item.title}">
                <div class="path-number">${index + 1}</div>
                <div class="path-content">
                    <h5>${item.title}</h5>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');

        // Add click handlers to chronological path items
        container.querySelectorAll('.path-item[data-title]').forEach(item => {
            item.addEventListener('click', () => {
                const title = item.dataset.title;
                this.showContentDetail(title);
            });
        });
    }

    getChronologicalOrder() {
        const items = [];
        Object.values(this.data.chronological_eras).forEach(era => {
            const media = era.essential_media || era.media || [];
            media.forEach(item => {
                if (item.title && !item.note) {
                    items.push({...item, era: era.era_name});
                }
            });
        });
        return items;
    }

    populateSkipGuide() {
        const container = document.getElementById('skipContent');
        if (!container) return;

        const poorTier = this.data.quality_rankings.poor_tier;
        
        container.innerHTML = poorTier.entries.map(item => `
            <div class="skip-item" data-title="${item.title}">
                <h4>${item.title}</h4>
                <p>Rating: ${item.rating}/10 - ${item.description}</p>
                <small>Can be skipped if you're short on time</small>
            </div>
        `).join('');

        // Add click handlers to skip items
        container.querySelectorAll('.skip-item[data-title]').forEach(item => {
            item.addEventListener('click', () => {
                const title = item.dataset.title;
                this.showContentDetail(title);
            });
        });
    }

    getAllMedia() {
        const allMedia = [];
        Object.values(this.data.chronological_eras).forEach(era => {
            const media = era.essential_media || era.media || [];
            media.forEach(item => {
                if (item.title && !item.note && item.rating) {
                    allMedia.push({...item, era: era.era_name});
                }
            });
        });
        
        // Also add from quality rankings to ensure we have complete data
        Object.values(this.data.quality_rankings).forEach(tier => {
            tier.entries.forEach(item => {
                const existing = allMedia.find(m => m.title === item.title);
                if (!existing && item.title) {
                    allMedia.push({...item, era: 'Various'});
                }
            });
        });
        
        return allMedia;
    }

    getMediaDescription(title) {
        const allMedia = this.getAllMedia();
        const item = allMedia.find(m => m.title === title);
        return item ? item.description : 'Classic Star Wars content';
    }

    showContentDetail(title) {
        const allMedia = this.getAllMedia();
        const item = allMedia.find(m => m.title === title);
        
        if (!item) {
            console.log('Item not found:', title);
            return;
        }

        const modal = document.getElementById('contentModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');

        modalTitle.textContent = item.title;
        modalBody.innerHTML = `
            <div class="content-detail">
                <div class="content-meta">
                    <span class="media-type">${item.type}</span>
                    <span class="media-year">${item.year || 'TBA'}</span>
                    ${item.rating ? `<div class="media-rating">
                        <span class="rating-stars">${this.generateStars(item.rating)}</span>
                        <span class="rating-value">${item.rating}/10</span>
                    </div>` : ''}
                </div>
                <p><strong>Era:</strong> ${item.era}</p>
                <p><strong>Description:</strong> ${item.description}</p>
                ${item.recommendation ? `<p><strong>Recommendation:</strong> ${item.recommendation}</p>` : ''}
                ${item.status ? `<p><strong>Status:</strong> ${item.status}</p>` : ''}
            </div>
        `;

        modal.classList.remove('hidden');
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating / 2);
        const halfStar = (rating % 2) >= 1;
        let stars = '★'.repeat(fullStars);
        if (halfStar) stars += '☆';
        return stars.padEnd(5, '☆');
    }

    formatTierName(tierKey) {
        return tierKey.replace('_tier', '').replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new StarWarsApp();
});