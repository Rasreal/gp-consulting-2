/**
 * Feature Flags Configuration
 * 
 * This file contains flags to enable/disable various features and sections
 * throughout the website. Toggle these flags to control visibility.
 */

export const featureFlags = {
  // Home page sections
  homePage: {
    showTestimonials: false,  // Toggle client testimonials section
    showTeamSection: false,   // Toggle team section
    // CTA button options - choose one
    ctaType: 'contact', // 'contact' for "Связаться с нами", 'book' for "Забронировать встречу"
  },
  
  // About page sections
  aboutPage: {
    showTeamSection: true,   // Toggle team section
  },
  
  // Cases page settings
  casesPage: {
    maxCasesToShow: 2,       // Number of cases to display
    tagType: 'industries',   // 'industries' or 'solutions'
  },
  
  // Contact page settings
  contactPage: {
    showMap: false,          // Toggle map display
  }
}; 