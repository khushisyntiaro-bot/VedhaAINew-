// SEO Helper utilities for optimizing page content

/**
 * Update document meta tags dynamically
 * @param {Object} metadata - Object containing page metadata
 */
export const updatePageMetadata = (metadata) => {
  if (!metadata) return;

  // Update title
  if (metadata.title) {
    document.title = metadata.title;
  }

  // Update description
  if (metadata.description) {
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute("content", metadata.description);
    }
  }

  // Update keywords
  if (metadata.keywords) {
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      keywordsMeta.setAttribute("content", metadata.keywords);
    }
  }

  // Update Open Graph tags
  if (metadata.ogTitle) {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", metadata.ogTitle);
  }

  if (metadata.ogDescription) {
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", metadata.ogDescription);
  }

  // Update canonical URL
  if (metadata.canonical) {
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", metadata.canonical);
    } else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = metadata.canonical;
      document.head.appendChild(link);
    }
  }
};

/**
 * Add structured data (JSON-LD) to page
 * @param {Object} schema - Schema.org JSON-LD object
 */
export const addStructuredData = (schema) => {
  if (!schema) return;

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.innerHTML = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Generate breadcrumb structured data
 * @param {Array} breadcrumbs - Array of {name, url} objects
 */
export const generateBreadcrumbSchema = (breadcrumbs) => {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;

  const itemListElement = breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };
};

/**
 * Generate course schema for structured data
 * @param {Object} course - Course information
 */
export const generateCourseSchema = (course) => {
  if (!course) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.fullDesc,
    "url": `https://vedhaai.in/#/course/${course.id}`,
    "image": course.image || "https://vedhaai.in/vedhaailogo.png",
    "provider": {
      "@type": "Organization",
      "name": "VedhaAI",
      "url": "https://vedhaai.in"
    },
    "duration": course.duration,
    "courseCode": course.id,
    "numberOfCredits": "100",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "ratingCount": "500"
    }
  };
};

/**
 * Generate FAQ structured data
 * @param {Array} faqs - Array of {question, answer} objects
 */
export const generateFAQSchema = (faqs) => {
  if (!faqs || faqs.length === 0) return null;

  const mainEntity = faqs.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }));

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mainEntity
  };
};

/**
 * Validate image alt text
 * @param {Array} images - Array of image elements or objects
 */
export const validateImageAltText = (images) => {
  const missingAltText = [];
  
  images.forEach((img, index) => {
    if (!img.alt || img.alt.trim() === "") {
      missingAltText.push({
        index,
        src: img.src || "unknown",
        message: "Image missing alt text"
      });
    }
  });

  return {
    hasIssues: missingAltText.length > 0,
    issues: missingAltText
  };
};

/**
 * Generate SEO score report
 * @param {Object} report - Object containing various SEO metrics
 */
export const generateSEOScore = (report) => {
  let score = 100;
  const issues = [];

  if (!report.title) {
    score -= 15;
    issues.push("Page title missing");
  }

  if (!report.description) {
    score -= 10;
    issues.push("Meta description missing");
  }

  if (!report.h1) {
    score -= 15;
    issues.push("H1 heading missing");
  }

  if (report.missingAltText && report.missingAltText.length > 0) {
    score -= 10;
    issues.push(`${report.missingAltText.length} images missing alt text`);
  }

  if (!report.canonical) {
    score -= 5;
    issues.push("Canonical URL missing");
  }

  if (!report.structuredData) {
    score -= 10;
    issues.push("Structured data missing");
  }

  return {
    score: Math.max(0, score),
    issues,
    passed: score >= 85
  };
};

/**
 * Optimize keyword density
 * @param {string} text - Text content to analyze
 * @param {string} keyword - Keyword to check
 */
export const checkKeywordDensity = (text, keyword) => {
  if (!text || !keyword) return 0;

  const words = text.toLowerCase().split(/\s+/);
  const totalWords = words.length;
  const keywordCount = words.filter(word => word === keyword.toLowerCase()).length;
  const density = (keywordCount / totalWords) * 100;

  return {
    keyword,
    count: keywordCount,
    density: density.toFixed(2),
    optimal: density >= 0.5 && density <= 2.5
  };
};

/**
 * Generate Open Graph image URL for sharing
 * @param {string} title - Page title
 * @param {string} type - Type of content
 */
export const generateOGImage = (title, type = "course") => {
  // Returns OG image URL - can be customized per type
  // For production, generate dynamic OG images using a service like Vercel OG
  return `https://vedhaai.in/og-images/${type}.png`;
};
