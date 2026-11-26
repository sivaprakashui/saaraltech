import heroAiData from './hero-ai-data.svg';
import heroCloudDevops from './hero-cloud-devops.svg';
import heroPhpModern from './hero-php-modern.svg';
import serviceBiAnalytics from './service-bi-analytics.svg';
import industrySupplyChain from './industry-supply-chain.svg';
import industryInsurance from './industry-insurance.svg';
import industryRetail from './industry-retail.svg';
import industryBanking from './industry-banking.svg';
import projectLogistics from './project-logistics.svg';
import projectInsurance from './project-insurance.svg';
import projectRetail from './project-retail.svg';
import projectBanking from './project-banking.svg';
import projectPhpErp from './project-php-erp.svg';
import projectCloudFinops from './project-cloud-finops.svg';

/**
 * Centralized Image Manifest for SaaralTech Solutions.
 * Replace any local SVG asset path here with production photography
 * stored inside src/assets/images/ without touching page components.
 */
export const SITE_IMAGES = {
  logo: '/assets/images/saaraltech-logo-white.png',
  logoWhite: '/assets/images/saaraltech-logo-white.png',
  logoOriginalTransparent: '/assets/images/saaraltech-logo-transparent.png',
  homeHeroBg: '/assets/images/home-hero-bg.webp',
  ctaSetsApartBg: '/assets/images/cta-sets-apart-bg.webp',
  projectsHeroBg: '/assets/aistudio/blueshade_05d94d05.jpg',
  projectsShowcaseBg: '/assets/aistudio/project_representative_10cc71dc.png',
  industriesHeroBg: '/assets/aistudio/industries_logo_8994ed2a.jpg',
  industriesSectionBg: '/assets/aistudio/testonial-bg_0b0c3dc3.png',
  aboutHeroBg: '/assets/aistudio/image_7e854ad1_9de6c98f.jpg',
  aboutMissionBg: '/assets/aistudio/About-Us_5ea5f5c4.jpg',
  servicesHeroBg: '/assets/aistudio/services2_57e699d7.png',
  heroSlides: {
    aiData: heroAiData,
    cloudDevops: heroCloudDevops,
    phpModern: heroPhpModern,
  },
  about: {
    overview: '/assets/aistudio/steve-a-johnson-ZPOoDQc8yMw-unsplash_3b7267e4.jpg',
  },
  services: {
    aiEngineering: heroAiData,
    dataBi: serviceBiAnalytics,
    phpModernization: heroPhpModern,
    cloudDevops: heroCloudDevops,
  },
  industries: {
    supplyChain: industrySupplyChain,
    insurance: industryInsurance,
    retail: industryRetail,
    banking: industryBanking,
  },
  projects: {
    logisticsPlatform: projectLogistics,
    insuranceClaims: projectInsurance,
    retailForecasting: projectRetail,
    bankingCompliance: projectBanking,
    phpErpMigration: projectPhpErp,
    cloudFinopsMesh: projectCloudFinops,
  },
} as const;
