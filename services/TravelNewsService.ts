// ============================================================
// 🌍 Global Horizons Travel News & Tips Service
// ============================================================

export interface TravelNews {
  id: string;
  title: string;
  description: string;
  content: string;
  imageUrl?: string;
  source: string;
  publishedAt: string;
  category: 'news' | 'tips' | 'destination' | 'safety' | 'deals';
  tags: string[];
  url: string;
}

export interface TravelTip {
  id: string;
  title: string;
  content: string;
  category: 'budget' | 'packing' | 'safety' | 'cultural' | 'transportation';
  destination?: string;
  difficulty: 'beginner' | 'intermediate' | 'expert';
  rating: number;
  tags: string[];
}

export interface WeatherData {
  destination: string;
  temperature: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number;
  forecast: {
    date: string;
    high: number;
    low: number;
    condition: string;
  }[];
}

export interface TravelAlert {
  id: string;
  country: string;
  level: 1 | 2 | 3 | 4; // State Department levels
  title: string;
  description: string;
  lastUpdated: string;
  category: 'security' | 'health' | 'weather' | 'political';
  urgent: boolean;
}

export class TravelNewsService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5';
  private weatherApiKey = process.env.OPENWEATHER_API_KEY || 'demo';
  private newsCache = new Map<string, { data: any; timestamp: number }>();
  private cacheTimeout = 30 * 60 * 1000; // 30 minutes

  constructor() {
    // Initialize service
  }

  // ============================================================
  // 🗞️ TRAVEL NEWS FEEDS
  // ============================================================

  /**
   * Get latest travel news from multiple RSS feeds
   */
  async getTravelNews(limit = 20): Promise<TravelNews[]> {
    const cacheKey = `travel-news-${limit}`;
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    try {
      // Combine news from multiple sources
      const news = await Promise.allSettled([
        this.fetchTravelPulseNews(),
        this.fetchLonelyPlanetTips(),
        this.fetchBudgetTravelTips(),
        this.fetchTravelLeisureNews()
      ]);

      const allNews: TravelNews[] = [];
      
      news.forEach(result => {
        if (result.status === 'fulfilled' && result.value) {
          allNews.push(...result.value);
        }
      });

      // Sort by date and limit results
      const sortedNews = allNews
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, limit);

      this.setCache(cacheKey, sortedNews);
      return sortedNews;

    } catch (error) {
      console.error('Failed to fetch travel news:', error);
      return this.getFallbackNews();
    }
  }

  /**
   * Get travel tips by category
   */
  async getTravelTips(category?: string, destination?: string): Promise<TravelTip[]> {
    const cacheKey = `travel-tips-${category}-${destination}`;
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    try {
      const tips = await this.fetchCuratedTips(category, destination);
      this.setCache(cacheKey, tips);
      return tips;
    } catch (error) {
      console.error('Failed to fetch travel tips:', error);
      return this.getFallbackTips();
    }
  }

  // ============================================================
  // 🌤️ WEATHER INTEGRATION
  // ============================================================

  /**
   * Get weather data for destination
   */
  async getDestinationWeather(destination: string): Promise<WeatherData | null> {
    const cacheKey = `weather-${destination}`;
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    try {
      const [current, forecast] = await Promise.all([
        this.fetchCurrentWeather(destination),
        this.fetchWeatherForecast(destination)
      ]);

      const weatherData: WeatherData = {
        destination,
        temperature: current.main.temp,
        condition: current.weather[0].main,
        description: current.weather[0].description,
        humidity: current.main.humidity,
        windSpeed: current.wind.speed,
        forecast: forecast.list.slice(0, 5).map((item: any) => ({
          date: item.dt_txt,
          high: item.main.temp_max,
          low: item.main.temp_min,
          condition: item.weather[0].main
        }))
      };

      this.setCache(cacheKey, weatherData);
      return weatherData;

    } catch (error) {
      console.error('Failed to fetch weather:', error);
      return null;
    }
  }

  // ============================================================
  // 🚨 TRAVEL ALERTS & ADVISORIES
  // ============================================================

  /**
   * Get travel alerts for destinations
   */
  async getTravelAlerts(countries: string[]): Promise<TravelAlert[]> {
    const cacheKey = `alerts-${countries.join(',')}`;
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    try {
      const alerts = await Promise.all(
        countries.map(country => this.fetchCountryAlert(country))
      );

      const validAlerts = alerts.filter(alert => alert !== null) as TravelAlert[];
      this.setCache(cacheKey, validAlerts);
      return validAlerts;

    } catch (error) {
      console.error('Failed to fetch travel alerts:', error);
      return [];
    }
  }

  // ============================================================
  // 🔄 RSS FEED PARSERS
  // ============================================================

  private async fetchTravelPulseNews(): Promise<TravelNews[]> {
    // Simulate RSS feed parsing - in production, use a proper RSS parser
    return [
      {
        id: 'tp-1',
        title: 'New Flight Routes Open to Popular Destinations',
        description: 'Airlines announce new routes to trending vacation spots',
        content: 'Major airlines have announced new direct routes to popular vacation destinations, making travel more convenient for passengers...',
        source: 'Travel Pulse',
        publishedAt: new Date().toISOString(),
        category: 'news',
        tags: ['flights', 'routes', 'airlines'],
        url: 'https://travelpulse.com/news'
      },
      {
        id: 'tp-2',
        title: 'Summer Travel Safety Tips',
        description: 'Essential safety guidelines for summer travelers',
        content: 'As summer travel season approaches, here are essential safety tips to ensure your vacation goes smoothly...',
        source: 'Travel Pulse',
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        category: 'safety',
        tags: ['summer', 'safety', 'tips'],
        url: 'https://travelpulse.com/safety'
      }
    ];
  }

  private async fetchLonelyPlanetTips(): Promise<TravelNews[]> {
    return [
      {
        id: 'lp-1',
        title: 'Hidden Gems in Southeast Asia',
        description: 'Discover lesser-known destinations in Southeast Asia',
        content: 'Beyond the popular tourist spots, Southeast Asia offers incredible hidden gems waiting to be explored...',
        source: 'Lonely Planet',
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        category: 'destination',
        tags: ['asia', 'hidden gems', 'backpacking'],
        url: 'https://lonelyplanet.com/destinations'
      }
    ];
  }

  private async fetchBudgetTravelTips(): Promise<TravelNews[]> {
    return [
      {
        id: 'bt-1',
        title: '10 Ways to Save Money on Your Next Trip',
        description: 'Proven strategies to reduce travel costs',
        content: 'Travel doesn\'t have to break the bank. Here are 10 proven ways to save money on your next adventure...',
        source: 'Budget Travel',
        publishedAt: new Date(Date.now() - 10800000).toISOString(),
        category: 'tips',
        tags: ['budget', 'savings', 'money'],
        url: 'https://budgettravel.com/tips'
      }
    ];
  }

  private async fetchTravelLeisureNews(): Promise<TravelNews[]> {
    return [
      {
        id: 'tl-1',
        title: 'Best Hotels of 2025 Revealed',
        description: 'Top luxury and boutique hotels for this year',
        content: 'Travel + Leisure reveals the best hotels of 2025, featuring stunning properties from around the world...',
        source: 'Travel + Leisure',
        publishedAt: new Date(Date.now() - 14400000).toISOString(),
        category: 'news',
        tags: ['hotels', 'luxury', 'awards'],
        url: 'https://travelandleisure.com/hotels'
      }
    ];
  }

  // ============================================================
  // 🌤️ WEATHER API CALLS
  // ============================================================

  private async fetchCurrentWeather(destination: string): Promise<any> {
    if (this.weatherApiKey === 'demo') {
      // Return mock data for demo
      return {
        main: { temp: 25, humidity: 65 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 3.5 }
      };
    }

    const response = await fetch(
      `${this.baseUrl}/weather?q=${encodeURIComponent(destination)}&appid=${this.weatherApiKey}&units=metric`
    );
    
    if (!response.ok) throw new Error('Weather API failed');
    return response.json();
  }

  private async fetchWeatherForecast(destination: string): Promise<any> {
    if (this.weatherApiKey === 'demo') {
      // Return mock forecast data
      return {
        list: Array.from({ length: 5 }, (_, i) => ({
          dt_txt: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString(),
          main: { temp_max: 28 + i, temp_min: 18 + i },
          weather: [{ main: 'Clear' }]
        }))
      };
    }

    const response = await fetch(
      `${this.baseUrl}/forecast?q=${encodeURIComponent(destination)}&appid=${this.weatherApiKey}&units=metric`
    );
    
    if (!response.ok) throw new Error('Weather forecast API failed');
    return response.json();
  }

  // ============================================================
  // 🚨 TRAVEL ALERT INTEGRATION
  // ============================================================

  private async fetchCountryAlert(country: string): Promise<TravelAlert | null> {
    // Mock alert data - in production, integrate with State Department API
    const mockAlerts: Record<string, TravelAlert> = {
      'Iraq': {
        id: 'alert-iraq',
        country: 'Iraq',
        level: 4,
        title: 'Do Not Travel',
        description: 'Do not travel to Iraq due to terrorism, kidnapping, armed conflict, and civil unrest.',
        lastUpdated: '2025-06-12T00:00:00Z',
        category: 'security',
        urgent: true
      },
      'Lebanon': {
        id: 'alert-lebanon',
        country: 'Lebanon',
        level: 4,
        title: 'Do Not Travel',
        description: 'Do not travel to Lebanon due to crime, terrorism, civil unrest, and kidnapping.',
        lastUpdated: '2025-06-24T00:00:00Z',
        category: 'security',
        urgent: true
      }
    };

    return mockAlerts[country] || null;
  }

  // ============================================================
  // 💡 CURATED TIPS
  // ============================================================

  private async fetchCuratedTips(category?: string, destination?: string): Promise<TravelTip[]> {
    const allTips: TravelTip[] = [
      {
        id: 'tip-budget-1',
        title: 'Book Flights on Tuesday',
        content: 'Airlines often release deals on Monday night, making Tuesday the best day to find discounted flights.',
        category: 'budget',
        difficulty: 'beginner',
        rating: 4.5,
        tags: ['flights', 'booking', 'timing']
      },
      {
        id: 'tip-packing-1',
        title: 'Roll Clothes Instead of Folding',
        content: 'Rolling clothes saves 30% more space than folding and reduces wrinkles.',
        category: 'packing',
        difficulty: 'beginner',
        rating: 4.8,
        tags: ['packing', 'space-saving', 'organization']
      },
      {
        id: 'tip-safety-1',
        title: 'Share Your Itinerary',
        content: 'Always share your travel itinerary with someone at home for safety and peace of mind.',
        category: 'safety',
        difficulty: 'beginner',
        rating: 5.0,
        tags: ['safety', 'communication', 'emergency']
      },
      {
        id: 'tip-cultural-1',
        title: 'Learn Basic Local Phrases',
        content: 'Learning "hello", "thank you", and "excuse me" in the local language shows respect and opens doors.',
        category: 'cultural',
        difficulty: 'intermediate',
        rating: 4.6,
        tags: ['language', 'culture', 'respect']
      }
    ];

    let filteredTips = allTips;

    if (category) {
      filteredTips = filteredTips.filter(tip => tip.category === category);
    }

    if (destination) {
      filteredTips = filteredTips.filter(tip => 
        tip.destination === destination || tip.tags.includes(destination.toLowerCase())
      );
    }

    return filteredTips;
  }

  // ============================================================
  // 🗂️ FALLBACK DATA
  // ============================================================

  private getFallbackNews(): TravelNews[] {
    return [
      {
        id: 'fallback-1',
        title: 'Plan Your Next Adventure',
        description: 'Discover amazing destinations around the world',
        content: 'Start planning your next travel adventure with Global Horizons. We offer comprehensive travel services including flights, hotels, tours, and visa assistance.',
        source: 'Global Horizons',
        publishedAt: new Date().toISOString(),
        category: 'tips',
        tags: ['planning', 'destinations'],
        url: '/services'
      }
    ];
  }

  private getFallbackTips(): TravelTip[] {
    return [
      {
        id: 'fallback-tip-1',
        title: 'Book Early for Better Deals',
        content: 'Booking your travel arrangements 2-3 months in advance often results in significant savings.',
        category: 'budget',
        difficulty: 'beginner',
        rating: 4.5,
        tags: ['booking', 'savings', 'planning']
      }
    ];
  }

  // ============================================================
  // 🔄 CACHE MANAGEMENT
  // ============================================================

  private getFromCache(key: string): any {
    const cached = this.newsCache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }
    return null;
  }

  private setCache(key: string, data: any): void {
    this.newsCache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  /**
   * Clear all cached data
   */
  clearCache(): void {
    this.newsCache.clear();
  }
}

// Export singleton instance
export const travelNewsService = new TravelNewsService();
export default travelNewsService;