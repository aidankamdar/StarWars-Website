// Star Wars Data and Application Logic
const FALLBACK_DATA = JSON.parse(String.raw`{
  "title": "The Ultimate Star Wars Chronological Guide & Deep Analysis",
  "description": "A comprehensive database of all Star Wars media with chronological ordering, quality rankings, and detailed analysis for the perfect AI-powered website",
  "chronological_eras": {
    "dawn_of_jedi": {
      "era_name": "Dawn of the Jedi",
      "time_period": "25,025 BBY",
      "description": "The earliest era chronicling the origins of the Jedi Order and the discovery of the Force",
      "status": "Minimal content - mostly upcoming",
      "key_themes": [
        "Force discovery",
        "Jedi origins",
        "Ancient history"
      ],
      "media": [
        {
          "title": "Untitled James Mangold Film",
          "type": "Film",
          "status": "Announced - TBA",
          "description": "The first Jedi and the discovery of the Force",
          "recommendation": "Essential when released"
        }
      ]
    },
    "old_republic": {
      "era_name": "The Old Republic",
      "time_period": "1,032 BBY (era ends)",
      "description": "Ancient conflicts between Jedi and Sith, when both orders were numerous",
      "status": "No current canon content",
      "key_themes": [
        "Jedi vs Sith wars",
        "Ancient conflicts",
        "Force philosophy"
      ],
      "media": [
        {
          "note": "Currently no canon content announced for this era",
          "legends_note": "Rich Legends content exists (KOTOR games, comics)"
        }
      ]
    },
    "high_republic": {
      "era_name": "The High Republic",
      "time_period": "382-229 BBY",
      "description": "The golden age of the Jedi and Republic, featuring the Nihil conflict",
      "status": "Major multimedia initiative",
      "key_themes": [
        "Jedi at their peak",
        "Republic expansion",
        "Nihil threat",
        "Force mysteries"
      ],
      "phases": {
        "phase_1": {
          "name": "Light of the Jedi",
          "period": "232 BBY",
          "description": "Main story introducing the Nihil threat"
        },
        "phase_2": {
          "name": "Quest of the Jedi",
          "period": "382 BBY",
          "description": "Prequel phase showing origins of the conflict"
        },
        "phase_3": {
          "name": "Trials of the Jedi",
          "period": "229 BBY",
          "description": "Conclusion of the High Republic story"
        }
      },
      "essential_media": [
        {
          "title": "Light of the Jedi",
          "type": "Novel",
          "year": 2021,
          "rating": 8.5,
          "recommendation": "Essential - Best starting point",
          "description": "Perfect introduction to the era and main characters",
          "poster": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595531525i/50892284.jpg"
        },
        {
          "title": "The Rising Storm",
          "type": "Novel",
          "year": 2021,
          "rating": 8.5,
          "recommendation": "Essential",
          "description": "Escalates the conflict with the Nihil",
          "poster": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1605559890i/55710470.jpg"
        },
        {
          "title": "The Fallen Star",
          "type": "Novel",
          "year": 2022,
          "rating": 8.5,
          "recommendation": "Essential",
          "description": "Devastating conclusion to Phase I",
          "poster": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638381968i/58504830.jpg"
        },
        {
          "title": "The Acolyte",
          "type": "TV Series",
          "year": 2024,
          "rating": 6.5,
          "recommendation": "Good",
          "description": "Murder mystery in the High Republic era",
          "poster": "https://image.tmdb.org/t/p/w500/1bQbw5WmBSykmakDbCXgDjk4hFH.jpg"
        }
      ]
    },
    "fall_of_jedi": {
      "era_name": "Fall of the Jedi",
      "time_period": "60-19 BBY",
      "description": "The prequel trilogy era showing Anakin's rise and fall",
      "status": "Core Star Wars content",
      "key_themes": [
        "Chosen One prophecy",
        "Republic corruption",
        "Jedi decline",
        "Sith return"
      ],
      "essential_media": [
        {
          "title": "The Phantom Menace",
          "type": "Film",
          "year": 1999,
          "rating": 5.0,
          "recommendation": "Essential but flawed",
          "description": "Introduces Anakin and the prophecy",
          "poster": "https://image.tmdb.org/t/p/w500/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg"
        },
        {
          "title": "Attack of the Clones",
          "type": "Film",
          "year": 2002,
          "rating": 4.5,
          "recommendation": "Essential but flawed",
          "description": "Clone Wars begin, Anakin and Padm\u00e9 romance",
          "poster": "https://image.tmdb.org/t/p/w500/oZNPzxqM2s5DyVWab09NTQScDQt.jpg"
        },
        {
          "title": "The Clone Wars",
          "type": "TV Series",
          "year": "2008-2020",
          "rating": 7.8,
          "recommendation": "Masterpiece",
          "description": "Vastly improves prequel characterization",
          "poster": "https://image.tmdb.org/t/p/w500/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg"
        },
        {
          "title": "Revenge of the Sith",
          "type": "Film",
          "year": 2005,
          "rating": 6.8,
          "recommendation": "Essential",
          "description": "Anakin becomes Vader, Empire rises",
          "poster": "https://image.tmdb.org/t/p/w500/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg"
        },
        {
          "title": "Brotherhood",
          "type": "Novel",
          "year": 2022,
          "rating": 8.5,
          "recommendation": "Excellent",
          "description": "Perfect Clone Wars companion novel",
          "poster": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634070469i/58889518.jpg"
        }
      ]
    },
    "reign_of_empire": {
      "era_name": "Reign of the Empire",
      "time_period": "19-0 BBY",
      "description": "The dark times when the Empire rules and rebels emerge",
      "status": "Rich with content",
      "key_themes": [
        "Imperial oppression",
        "Jedi in hiding",
        "Rebellion formation",
        "Hope vs despair"
      ],
      "essential_media": [
        {
          "title": "The Bad Batch",
          "type": "TV Series",
          "year": "2021-2024",
          "rating": 7.5,
          "recommendation": "Good",
          "description": "Clone troopers adapt to the Empire",
          "poster": "https://image.tmdb.org/t/p/w500/6kJKCjeJh7ebe7dC00f9cHPLEee.jpg"
        },
        {
          "title": "Obi-Wan Kenobi",
          "type": "TV Series",
          "year": 2022,
          "rating": 6.5,
          "recommendation": "Good",
          "description": "Obi-Wan's exile and protecting Luke",
          "poster": "https://image.tmdb.org/t/p/w500/qJRB789ceLryrLvOKrZqLKr2CGf.jpg"
        },
        {
          "title": "Solo: A Star Wars Story",
          "type": "Film",
          "year": 2018,
          "rating": 6.5,
          "recommendation": "Mixed",
          "description": "Young Han Solo's origin story",
          "poster": "https://image.tmdb.org/t/p/w500/4oD6VEccFkorEBTEDXtpLAaz0Rl.jpg"
        },
        {
          "title": "Rebels",
          "type": "TV Series",
          "year": "2014-2018",
          "rating": 7.5,
          "recommendation": "Good",
          "description": "Ghost crew and early Rebellion",
          "poster": "https://image.tmdb.org/t/p/w500/zoERRBz8F5khCFTanggCjl9YOMy.jpg"
        },
        {
          "title": "Andor",
          "type": "TV Series",
          "year": "2022-2025",
          "rating": 9.5,
          "recommendation": "Masterpiece",
          "description": "Mature political drama, best Star Wars content",
          "poster": "https://image.tmdb.org/t/p/w500/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg"
        },
        {
          "title": "Rogue One",
          "type": "Film",
          "year": 2016,
          "rating": 8.5,
          "recommendation": "Masterpiece",
          "description": "Direct prequel to A New Hope",
          "poster": "https://image.tmdb.org/t/p/w500/i0yw1mFbB7sNGHCs7EXZPzFkdA1.jpg"
        }
      ]
    },
    "age_of_rebellion": {
      "era_name": "Age of Rebellion",
      "time_period": "0-4 ABY",
      "description": "The original trilogy era - galactic civil war",
      "status": "Core trilogy",
      "key_themes": [
        "Hope vs tyranny",
        "Hero's journey",
        "Force awakening",
        "Redemption"
      ],
      "essential_media": [
        {
          "title": "A New Hope",
          "type": "Film",
          "year": 1977,
          "rating": 8.4,
          "recommendation": "Masterpiece",
          "description": "The original Star Wars - Luke's journey begins",
          "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
        },
        {
          "title": "The Empire Strikes Back",
          "type": "Film",
          "year": 1980,
          "rating": 9.2,
          "recommendation": "Masterpiece",
          "description": "Often considered the best Star Wars film",
          "poster": "https://image.tmdb.org/t/p/w500/nNAeTmF4CtdSgMDplXTDPOpYzsX.jpg"
        },
        {
          "title": "Return of the Jedi",
          "type": "Film",
          "year": 1983,
          "rating": 8.0,
          "recommendation": "Masterpiece",
          "description": "Vader's redemption and Empire's fall",
          "poster": "https://image.tmdb.org/t/p/w500/pwvKOtohPQzIGbQzxGkZBvvR1lT.jpg"
        }
      ]
    },
    "new_republic": {
      "era_name": "New Republic",
      "time_period": "5-34 ABY",
      "description": "Post-Empire reconstruction and new threats emerging",
      "status": "Growing content",
      "key_themes": [
        "Rebuilding",
        "New Jedi",
        "Imperial remnants",
        "Next generation"
      ],
      "essential_media": [
        {
          "title": "The Mandalorian",
          "type": "TV Series",
          "year": "2019-",
          "rating": 8.5,
          "recommendation": "Excellent (S1-2), Mixed (S3)",
          "description": "Bounty hunter and Grogu in post-Empire galaxy",
          "poster": "https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg"
        },
        {
          "title": "The Book of Boba Fett",
          "type": "TV Series",
          "year": 2021,
          "rating": 6.0,
          "recommendation": "Mixed",
          "description": "Boba Fett becomes crime lord on Tatooine",
          "poster": "https://image.tmdb.org/t/p/w500/gNbdjDi1HamTCrfvM9JeA94bNi2.jpg"
        },
        {
          "title": "Ahsoka",
          "type": "TV Series",
          "year": 2023,
          "rating": 7.5,
          "recommendation": "Good",
          "description": "Ahsoka searches for Ezra and Thrawn",
          "poster": "https://image.tmdb.org/t/p/w500/laCJxobHoPVaLQTKxc14Y2zV64J.jpg"
        },
        {
          "title": "Skeleton Crew",
          "type": "TV Series",
          "year": 2024,
          "rating": 7.5,
          "recommendation": "Good",
          "description": "Kids' adventure in the Star Wars galaxy",
          "poster": "https://image.tmdb.org/t/p/w500/quesadaAK6GKFL0guZjpkUj1bEC.jpg"
        }
      ]
    },
    "rise_of_first_order": {
      "era_name": "Rise of the First Order",
      "time_period": "34-35 ABY",
      "description": "The sequel trilogy era with new galactic conflict",
      "status": "Complete but divisive",
      "key_themes": [
        "Legacy",
        "New vs old",
        "Balance",
        "Hope renewed"
      ],
      "essential_media": [
        {
          "title": "The Force Awakens",
          "type": "Film",
          "year": 2015,
          "rating": 7.5,
          "recommendation": "Good",
          "description": "New heroes emerge, Han Solo returns",
          "poster": "https://image.tmdb.org/t/p/w500/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg"
        },
        {
          "title": "The Last Jedi",
          "type": "Film",
          "year": 2017,
          "rating": 6.5,
          "recommendation": "Mixed (Divisive)",
          "description": "Luke trains Rey, Resistance on the run",
          "poster": "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg"
        },
        {
          "title": "The Rise of Skywalker",
          "type": "Film",
          "year": 2019,
          "rating": 5.0,
          "recommendation": "Poor",
          "description": "Palpatine returns, saga conclusion",
          "poster": "https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg"
        },
        {
          "title": "Resistance",
          "type": "TV Series",
          "year": "2018-2020",
          "rating": 5.0,
          "recommendation": "Poor",
          "description": "Animated series during sequel trilogy",
          "poster": "https://image.tmdb.org/t/p/w500/kQH6sWhyp8XCMybk0Fxpfkmvf0H.jpg"
        }
      ]
    }
  },
  "quality_rankings": {
    "masterpiece_tier": {
      "rating_range": "8.0-10.0",
      "description": "Essential viewing - the absolute best Star Wars has to offer",
      "entries": [
        {
          "title": "Andor",
          "rating": 9.5,
          "type": "TV Series"
        },
        {
          "title": "The Empire Strikes Back",
          "rating": 9.2,
          "type": "Film"
        },
        {
          "title": "A New Hope",
          "rating": 8.4,
          "type": "Film"
        },
        {
          "title": "Rogue One",
          "rating": 8.0,
          "type": "Film"
        }
      ]
    },
    "excellent_tier": {
      "rating_range": "7.5-7.9",
      "description": "High quality content that enhances the Star Wars universe",
      "entries": [
        {
          "title": "The Clone Wars",
          "rating": 7.8,
          "type": "TV Series"
        },
        {
          "title": "Return of the Jedi",
          "rating": 7.5,
          "type": "Film"
        },
        {
          "title": "The Mandalorian S1-2",
          "rating": 7.5,
          "type": "TV Series"
        },
        {
          "title": "The Force Awakens",
          "rating": 7.5,
          "type": "Film"
        }
      ]
    },
    "good_tier": {
      "rating_range": "6.5-7.4",
      "description": "Solid content worth watching for fans",
      "entries": [
        {
          "title": "The Bad Batch",
          "rating": 7.0,
          "type": "TV Series"
        },
        {
          "title": "Rebels",
          "rating": 7.0,
          "type": "TV Series"
        },
        {
          "title": "Skeleton Crew",
          "rating": 7.0,
          "type": "TV Series"
        },
        {
          "title": "Revenge of the Sith",
          "rating": 6.8,
          "type": "Film"
        },
        {
          "title": "Obi-Wan Kenobi",
          "rating": 6.5,
          "type": "TV Series"
        },
        {
          "title": "The Acolyte",
          "rating": 6.5,
          "type": "TV Series"
        }
      ]
    },
    "mixed_tier": {
      "rating_range": "5.5-6.4",
      "description": "Has good elements but significant flaws",
      "entries": [
        {
          "title": "The Last Jedi",
          "rating": 6.2,
          "type": "Film"
        },
        {
          "title": "Solo",
          "rating": 6.0,
          "type": "Film"
        },
        {
          "title": "The Mandalorian S3",
          "rating": 6.0,
          "type": "TV Series"
        },
        {
          "title": "The Book of Boba Fett",
          "rating": 5.5,
          "type": "TV Series"
        }
      ]
    },
    "poor_tier": {
      "rating_range": "Below 5.5",
      "description": "Significant issues, watch only for completeness",
      "entries": [
        {
          "title": "The Phantom Menace",
          "rating": 5.0,
          "type": "Film"
        },
        {
          "title": "Attack of the Clones",
          "rating": 4.5,
          "type": "Film"
        },
        {
          "title": "The Rise of Skywalker",
          "rating": 4.0,
          "type": "Film"
        },
        {
          "title": "Resistance",
          "rating": 4.0,
          "type": "TV Series"
        }
      ]
    }
  },
  "viewing_recommendations": {
    "first_time_viewers": {
      "order": "Release Order",
      "reasoning": "Experience the story as it was originally told",
      "start_with": [
        "A New Hope",
        "The Empire Strikes Back",
        "Return of the Jedi"
      ],
      "then": [
        "The Phantom Menace",
        "Attack of the Clones",
        "Revenge of the Sith"
      ],
      "essential_additions": [
        "The Clone Wars",
        "Rogue One",
        "Andor"
      ]
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
      "recommended_sequence": [
        "Andor",
        "The Empire Strikes Back",
        "A New Hope",
        "Rogue One",
        "The Clone Wars",
        "Return of the Jedi"
      ]
    }
  },
  "key_books": {
    "must_read_novels": [
      {
        "title": "Light of the Jedi",
        "author": "Charles Soule",
        "era": "High Republic",
        "rating": 8.5,
        "description": "Perfect introduction to the High Republic era"
      },
      {
        "title": "Brotherhood",
        "author": "Mike Chen",
        "era": "Clone Wars",
        "rating": 8.5,
        "description": "Essential Clone Wars companion"
      },
      {
        "title": "Master and Apprentice",
        "author": "Claudia Gray",
        "era": "Pre-Phantom Menace",
        "rating": 8.0,
        "description": "Excellent Qui-Gon and Obi-Wan story"
      },
      {
        "title": "Tarkin",
        "author": "James Luceno",
        "era": "Imperial",
        "rating": 7.5,
        "description": "Definitive Grand Moff Tarkin story"
      }
    ]
  },
  "website_structure": {
    "homepage": {
      "hero_section": "Ultimate Star Wars Chronological Guide",
      "quick_nav": [
        "Timeline",
        "Rankings",
        "Recommendations",
        "Search"
      ],
      "featured_content": "Latest releases and top-rated content"
    },
    "timeline_page": {
      "interactive_timeline": "Clickable eras with detailed breakdowns",
      "filters": [
        "Movies only",
        "TV shows",
        "Books",
        "Quality tier"
      ],
      "search": "Find specific content by title, character, or theme"
    },
    "rankings_page": {
      "sortable_lists": "By rating, era, type, release date",
      "detailed_reviews": "In-depth analysis of each entry",
      "user_ratings": "Community voting system"
    },
    "recommendation_engine": {
      "personalized": "Based on viewing history and preferences",
      "guided_paths": "Curated viewing orders for different goals",
      "skip_guides": "What you can safely skip"
    }
  }
}`);

class StarWarsApp {
    constructor() {
        this.data = null;
        this.currentFilter = 'all';
        this.sortBy = 'rating';
        this.sortOrder = 'desc';
        this.heroQuotes = [
            { text: 'Hello there!', speaker: 'Obi-Wan Kenobi', voice: 'en-GB', rate: 0.95 },
            { text: 'Do. Or do not. There is no try.', speaker: 'Master Yoda', voice: 'en-US', pitch: 1.2, rate: 0.9 },
            { text: 'Never tell me the odds.', speaker: 'Han Solo', voice: 'en-US', rate: 1.05 },
            { text: 'This is the way.', speaker: 'Din Djarin', voice: 'en-US', rate: 0.85 },
            { text: 'I am one with the Force and the Force is with me.', speaker: 'Chirrut Imwe', voice: 'en-US', rate: 0.92 }
        ];
        this.currentHeroQuoteIndex = 0;
        this.heroQuoteTimer = null;
        this.heroQuoteElements = null;
        this.heroQuoteDelay = 9000;
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
        this.startHeroQuotes();
    }

    async loadData() {
        try {
            const response = await fetch('star_wars_ultimate_guide.json');
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            this.data = await response.json();
        } catch (error) {
            console.warn('Falling back to bundled Star Wars data:', error);
            this.data = this.getFallbackData();
        }
    }

    getFallbackData() {
        return JSON.parse(JSON.stringify(FALLBACK_DATA));
    }

    startHeroQuotes() {
        const container = document.querySelector('.obiwan-quote');
        const textEl = container?.querySelector('.obiwan-quote__text');
        const speakerEl = container?.querySelector('.obiwan-quote__speaker');
        const audioBtn = container?.querySelector('.obiwan-quote__audio');

        if (!container || !textEl || !speakerEl || !audioBtn || !this.heroQuotes.length) {
            return;
        }

        this.heroQuoteElements = { container, textEl, speakerEl, audioBtn };

        container.setAttribute('tabindex', '0');
        container.setAttribute('role', 'button');
        container.setAttribute('aria-label', 'Cycle through featured Star Wars quotes');

        audioBtn.dataset.defaultLabel = audioBtn.getAttribute('aria-label') || 'Play quote audio';
        audioBtn.disabled = !this.canUseSpeechSynthesis();

        this.renderHeroQuote(this.currentHeroQuoteIndex, true);

        this.heroQuoteDelay = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 15000 : 9000;

        this.restartHeroQuoteTimer();

        audioBtn.addEventListener('click', () => this.playQuoteAudio());

        container.addEventListener('click', (event) => {
            if (event.target.closest('.obiwan-quote__audio')) {
                return;
            }
            this.advanceHeroQuote(true);
        });

        container.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.advanceHeroQuote(true);
            }
        });

        if (this.canUseSpeechSynthesis()) {
            const updateAvailability = () => {
                if (this.heroQuoteElements?.audioBtn) {
                    this.heroQuoteElements.audioBtn.disabled = !this.canUseSpeechSynthesis();
                }
            };

            updateAvailability();

            if (typeof window.speechSynthesis.addEventListener === 'function') {
                window.speechSynthesis.addEventListener('voiceschanged', updateAvailability, { once: false });
            } else {
                window.speechSynthesis.onvoiceschanged = updateAvailability;
            }
        }
    }

    renderHeroQuote(index, skipTransition = false) {
        if (!this.heroQuoteElements) {
            return;
        }

        const { container, textEl, speakerEl, audioBtn } = this.heroQuoteElements;
        const quote = this.heroQuotes[index];
        if (!quote) {
            return;
        }

        const applyQuote = () => {
            textEl.textContent = quote.text;
            speakerEl.textContent = `— ${quote.speaker}`;
            const labelText = this.canUseSpeechSynthesis() ? `Play ${quote.speaker} quote` : `Read ${quote.speaker} quote`;
            audioBtn.setAttribute('aria-label', labelText);
            const labelNode = audioBtn.querySelector('.obiwan-quote__label');
            if (labelNode) {
                labelNode.textContent = this.canUseSpeechSynthesis() ? 'Play' : 'Read';
            }
            audioBtn.disabled = !this.canUseSpeechSynthesis();
            audioBtn.classList.remove('is-speaking');
            audioBtn.setAttribute('aria-pressed', 'false');
            if (this.canUseSpeechSynthesis()) {
                window.speechSynthesis.cancel();
            }
        };

        if (skipTransition) {
            applyQuote();
        } else {
            container.classList.add('is-transitioning');
            window.setTimeout(() => {
                applyQuote();
                container.classList.remove('is-transitioning');
            }, 180);
        }
    }

    restartHeroQuoteTimer() {
        if (this.heroQuoteTimer) {
            clearInterval(this.heroQuoteTimer);
        }
        this.heroQuoteTimer = window.setInterval(() => {
            this.advanceHeroQuote();
        }, this.heroQuoteDelay);
    }

    advanceHeroQuote(manual = false) {
        this.currentHeroQuoteIndex = (this.currentHeroQuoteIndex + 1) % this.heroQuotes.length;
        this.renderHeroQuote(this.currentHeroQuoteIndex);
        if (manual) {
            this.restartHeroQuoteTimer();
        }
    }

    playQuoteAudio() {
        if (!this.canUseSpeechSynthesis()) {
            return;
        }

        const quote = this.heroQuotes[this.currentHeroQuoteIndex];
        if (!quote) {
            return;
        }

        const { audioBtn } = this.heroQuoteElements || {};
        if (audioBtn) {
            audioBtn.classList.add('is-speaking');
            audioBtn.setAttribute('aria-pressed', 'true');
            const labelNode = audioBtn.querySelector('.obiwan-quote__label');
            if (labelNode) {
                labelNode.textContent = 'Playing';
            }
        }

        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(quote.text);
        const voices = window.speechSynthesis.getVoices();
        if (quote.voice && voices.length) {
            const match = voices.find(v => v.lang && v.lang.toLowerCase().startsWith(quote.voice.toLowerCase()));
            if (match) {
                utterance.voice = match;
            }
        }
        if (quote.rate) {
            utterance.rate = quote.rate;
        }
        if (quote.pitch) {
            utterance.pitch = quote.pitch;
        }

        utterance.onend = () => {
            this.resetAudioButtonLabel();
        };
        utterance.onerror = () => {
            this.resetAudioButtonLabel();
        };

        window.speechSynthesis.speak(utterance);
    }

    resetAudioButtonLabel() {
        const { audioBtn } = this.heroQuoteElements || {};
        if (!audioBtn) {
            return;
        }
        audioBtn.classList.remove('is-speaking');
        audioBtn.setAttribute('aria-pressed', 'false');
        const labelNode = audioBtn.querySelector('.obiwan-quote__label');
        if (labelNode) {
            labelNode.textContent = this.canUseSpeechSynthesis() ? 'Play' : 'Read';
        }
    }

    canUseSpeechSynthesis() {
        return typeof window !== 'undefined' && 'speechSynthesis' in window && typeof window.SpeechSynthesisUtterance === 'function';
    }

    setupNavigation() {
        // Navigation between pages
        const navLinks = document.querySelectorAll('.nav-link');
        const navCards = document.querySelectorAll('.nav-card');
        const quickLinks = document.querySelectorAll('.hero-quick-link');
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

        const attachNavigation = (elements) => {
            elements.forEach(element => {
                element.addEventListener('click', (e) => {
                    e.preventDefault();
                    const pageId = element.dataset.page;
                    const action = element.dataset.action;

                    if (pageId) {
                        showPage(pageId);
                        const targetSection = document.getElementById(`${pageId}-page`);
                        if (targetSection) {
                            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }

                    if (action === 'focus-search') {
                        const searchInput = document.getElementById('globalSearch');
                        if (searchInput) {
                            searchInput.focus();
                            searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                    }
                });

                if (element.getAttribute('role') === 'button') {
                    element.addEventListener('keydown', (event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            element.click();
                        }
                    });
                }
            });
        };

        attachNavigation(navLinks);
        attachNavigation(navCards);
        attachNavigation(quickLinks);

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
                ${item.poster ? `<div class="media-poster">
                    <img src="${item.poster}" alt="${item.title} Poster" loading="eager" onerror="console.log('Failed to load:', this.src); this.style.display='none';">
                </div>` : ''}
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
                    ${item.poster ? `<div class="media-poster">
                        <img src="${item.poster}" alt="${item.title} Poster" loading="eager" onerror="console.log('Failed to load:', this.src); this.style.display='none';">
                    </div>` : ''}
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
                    ${tier.entries.map(item => {
                        const fullItem = this.findMediaWithPoster(item.title);
                        return `
                        <div class="media-card" data-title="${item.title}">
                            ${fullItem.poster ? `<div class="media-poster">
                                <img src="${fullItem.poster}" alt="${item.title} Poster" loading="eager" onerror="console.log('Failed to load:', this.src); this.style.display='none';">
                            </div>` : ''}
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
                                <p>${fullItem.description || item.description || 'No description available.'}</p>
                            </div>
                        </div>
                    `}).join('')}
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
                ${item.poster ? `<div class="content-poster">
                    <img src="${item.poster}" alt="${item.title} Poster" onerror="this.style.display='none'">
                </div>` : ''}
                <div class="content-info">
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

    findMediaWithPoster(title) {
        const allMedia = this.getAllMedia();
        return allMedia.find(m => m.title === title) || { title };
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new StarWarsApp();
});
