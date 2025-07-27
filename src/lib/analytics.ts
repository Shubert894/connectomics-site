import { analytics } from './firebase';

/**
 * Track Discord link clicks across the application
 * @param source - The source/location where the Discord link was clicked (e.g., 'homepage_hero', 'footer', etc.)
 */
export const trackDiscordClick = (source: string) => {
  if (analytics) {
    import('firebase/analytics').then(({ logEvent }) => {
      logEvent(analytics!, 'discord_link_click', {
        source: source,
        timestamp: new Date().toISOString()
      });
    });
  }
};

/**
 * Track page views (can be expanded for other analytics events)
 * @param pageName - The name of the page being viewed
 */
export const trackPageView = (pageName: string) => {
  if (analytics) {
    import('firebase/analytics').then(({ logEvent }) => {
      logEvent(analytics!, 'page_view', {
        page_name: pageName,
        timestamp: new Date().toISOString()
      });
    });
  }
};

/**
 * Generic event tracking function for future use
 * @param eventName - The name of the event
 * @param parameters - Additional parameters for the event
 */
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (analytics) {
    import('firebase/analytics').then(({ logEvent }) => {
      logEvent(analytics!, eventName, {
        ...parameters,
        timestamp: new Date().toISOString()
      });
    });
  }
};
