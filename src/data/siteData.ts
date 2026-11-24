import { SITE_IMAGES } from '@/src/assets/images';

export interface NavItem {
  label: string;
  href: string;
  key: 'home' | 'about' | 'services' | 'industries' | 'projects' | 'contact';
}

export const COMPANY_INFO = {
  name: 'SaaralTech Solutions',
  shortName: 'SaaralTech',
  website: 'www.saaraltech.com',
  websiteUrl: 'https://www.saaraltech.com',
  email: 'Operations@saaraltech.com',
  mobile: '+44 7404249392',
  mobileHref: 'tel:+447404249392',
  addressLines: ['192/54, Thiruvalluvar Street', 'East Tambaram, Chennai 45'],
  tagline: 'Cloud · Testing · Dev · Placement',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', key: 'home' },
  { label: 'About Us', href: '/about-us/', key: 'about' },
  { label: 'Services', href: '/services/', key: 'services' },
  { label: 'Industries', href: '/industries/', key: 'industries' },
  { label: 'Projects', href: '/projects/', key: 'projects' },
];

export interface HeroSlide {
  id: string;
  kicker: string;
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  image: string;
  imageAlt: string;
  highlightStat: string;
  highlightLabel: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'ai-data',
    kicker: 'AI and Data Engineering',
    headline: 'Production AI Pipelines Built for Enterprise Scale',
    description:
      'We architect unified data lakehouses, automated machine learning workflows, and real-time analytics engines that convert fragmented operational records into reliable decisions.',
    ctaLabel: 'Explore AI Engineering',
    ctaHref: '/services/#ai-data',
    secondaryLabel: 'Schedule Consultation',
    secondaryHref: '/contact-us/',
    image: SITE_IMAGES.heroSlides.aiData,
    imageAlt: 'Enterprise AI and data lakehouse pipeline architecture visualization',
    highlightStat: '99.95%',
    highlightLabel: 'Pipeline uptime SLA across streaming workloads',
  },
  {
    id: 'cloud-devops',
    kicker: 'DevOps and Cloud Engineering',
    headline: 'Resilient Multi-Cloud Infrastructure Without Operational Drag',
    description:
      'Standardize deployments with Terraform infrastructure-as-code, hardened Kubernetes clusters, and automated CI/CD release gates engineered for zero-downtime delivery.',
    ctaLabel: 'Explore Cloud DevOps',
    ctaHref: '/services/#devops-cloud',
    secondaryLabel: 'Review Sample Architectures',
    secondaryHref: '/projects/',
    image: SITE_IMAGES.heroSlides.cloudDevops,
    imageAlt: 'Multi-region Kubernetes and cloud DevOps topology diagram',
    highlightStat: '68%',
    highlightLabel: 'Average reduction in release cycle lead time',
  },
  {
    id: 'php-modernization',
    kicker: 'PHP Migration and Modernization',
    headline: 'Zero-Downtime Migration From Legacy Monoliths to PHP 8.3+',
    description:
      'Retire technical debt safely. We refactor aging PHP 5 and PHP 7 codebases into modular Laravel and Symfony APIs with automated test coverage and clean database schemas.',
    ctaLabel: 'Explore PHP Modernization',
    ctaHref: '/services/#php-modernization',
    secondaryLabel: 'Speak With Architects',
    secondaryHref: '/contact-us/',
    image: SITE_IMAGES.heroSlides.phpModern,
    imageAlt: 'Legacy PHP monolith to modular microservices transformation diagram',
    highlightStat: '3.4x',
    highlightLabel: 'Measured API throughput improvement post-migration',
  },
];

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  deliverables: string[];
  outcomes: { value: string; label: string }[];
  stack: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-data',
    index: '01.',
    title: 'AI and Data Engineering',
    shortTitle: 'AI & Data Engineering',
    summary:
      'End-to-end ingestion pipelines, lakehouse architectures, and domain-tuned AI models ready for production.',
    description:
      'Enterprise AI fails when underlying data foundations are brittle. SaaralTech Solutions designs fault-tolerant ETL/ELT pipelines, streaming event architectures, vector retrieval layers, and governed MLOps workflows that run reliably under strict compliance controls.',
    image: SITE_IMAGES.services.aiEngineering,
    imageAlt: 'AI and data engineering lakehouse architecture',
    deliverables: [
      'Medallion lakehouse design on Snowflake, Databricks, or BigQuery',
      'Real-time event streaming with Apache Kafka and Spark Structured Streaming',
      'Retrieval-augmented generation (RAG) and document extraction pipelines',
      'Automated data quality contracts, lineage tracking, and model monitoring',
    ],
    outcomes: [
      { value: '< 2 min', label: 'Streaming ingestion latency across distributed regions' },
      { value: '100%', label: 'Automated schema validation before warehouse load' },
    ],
    stack: ['Python', 'Apache Spark', 'Kafka', 'Snowflake', 'dbt', 'PyTorch'],
  },
  {
    id: 'data-bi',
    index: '02.',
    title: 'Data Analysis and Business Intelligence',
    shortTitle: 'Data Analysis & BI',
    summary:
      'Governed semantic layers, executive KPI workspaces, and predictive forecasting models tailored to operational leaders.',
    description:
      'Replace fragmented spreadsheet reporting with a single source of analytical truth. Our BI engineers model consistent business metrics, build interactive executive dashboards, and embed predictive demand and margin forecasts into daily operations.',
    image: SITE_IMAGES.services.dataBi,
    imageAlt: 'Business intelligence and predictive analytics dashboard visualization',
    deliverables: [
      'Enterprise semantic modeling and certified KPI definitions',
      'Power BI, Looker, and Tableau executive reporting workspaces',
      'Cohort retention, margin attribution, and revenue forecasting models',
      'Self-service analytical sandboxes with row-level security governance',
    ],
    outcomes: [
      { value: '14 hrs', label: 'Weekly manual reconciliation eliminated per finance unit' },
      { value: 'Single', label: 'Governed KPI dictionary shared across departments' },
    ],
    stack: ['Power BI', 'Looker', 'SQL', 'dbt Core', 'BigQuery', 'Apache Superset'],
  },
  {
    id: 'php-modernization',
    index: '03.',
    title: 'PHP Migration and Modernization',
    shortTitle: 'PHP Modernization',
    summary:
      'Incremental strangler-pattern upgrades from legacy PHP applications to typed PHP 8.3+ and modern API backends.',
    description:
      'Business-critical ERP, billing, and customer portals often run on unsupported PHP 5.x or early 7.x codebases. We execute phased, zero-downtime migrations using automated static analysis, Rector refactoring, strict type enforcement, and API-first decoupling.',
    image: SITE_IMAGES.services.phpModernization,
    imageAlt: 'Legacy PHP code migration and modular API architecture',
    deliverables: [
      'Comprehensive codebase audit, dependency mapping, and security hardening',
      'Incremental upgrade to PHP 8.3+, Laravel 11, or Symfony 7 LTS',
      'Automated PHPUnit / Pest regression suites before cutover',
      'Relational database schema normalization and read-replica optimization',
    ],
    outcomes: [
      { value: '0 min', label: 'Unplanned downtime during staged strangler cutovers' },
      { value: '3.4x', label: 'Faster request handling under PHP 8.3 OPcache JIT' },
    ],
    stack: ['PHP 8.3', 'Laravel', 'Symfony', 'Rector', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'devops-cloud',
    index: '04.',
    title: 'DevOps and Cloud Engineering',
    shortTitle: 'DevOps & Cloud',
    summary:
      'Infrastructure-as-code, container orchestration, continuous delivery pipelines, and cloud FinOps governance.',
    description:
      'Accelerate release cadence without compromising security or cloud spend. SaaralTech architects reproducible cloud environments across AWS, Azure, and GCP with automated compliance checks, blue-green deployment gates, and full-stack observability.',
    image: SITE_IMAGES.services.cloudDevops,
    imageAlt: 'Cloud DevOps container cluster and CI/CD automation diagram',
    deliverables: [
      'Modular Terraform and OpenTofu infrastructure-as-code provisioning',
      'Production Kubernetes (EKS / GKE / AKS) cluster hardening and autoscaling',
      'GitHub Actions & GitLab CI/CD pipelines with automated security scanning',
      'OpenTelemetry, Prometheus, Grafana observability and FinOps cost optimization',
    ],
    outcomes: [
      { value: '35%', label: 'Typical cloud compute cost reduction via right-sizing' },
      { value: '< 15 min', label: 'Automated rollback and multi-zone recovery time' },
    ],
    stack: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'Docker', 'GitHub Actions'],
  },
];

export interface IndustryItem {
  id: string;
  index: string;
  title: string;
  headline: string;
  summary: string;
  challenge: string;
  solution: string;
  capabilities: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'supply-chain',
    index: '01.',
    title: 'Supply Chain and Logistics',
    headline: 'End-to-End Fleet Visibility and Predictive Inventory Control',
    summary:
      'Connect warehouse systems, carrier telemetry, and supplier EDI feeds into real-time routing and demand platforms.',
    challenge:
      'Disconnected WMS, ERP, and carrier feeds create blind spots across transit milestones, causing stockouts, demurrage penalties, and reactive expediting costs.',
    solution:
      'We build event-driven supply chain control towers that ingest GPS, IoT cold-chain, and customs events in real time, pairing them with ML lead-time forecasting.',
    capabilities: [
      'Real-time shipment exception alerting and ETA recalculation',
      'Multi-echelon safety stock optimization and supplier risk scoring',
      'Legacy PHP warehouse portal modernization to API-driven microservices',
      'Automated EDI / AS2 and carrier API integration layers',
    ],
    technologies: ['Apache Kafka', 'Snowflake', 'Python Forecasting', 'Kubernetes', 'Power BI'],
    image: SITE_IMAGES.industries.supplyChain,
    imageAlt: 'Supply chain and logistics routing telemetry visualization',
  },
  {
    id: 'insurance',
    index: '02.',
    title: 'Insurance',
    headline: 'Automated Claims Triage and Governed Actuarial Analytics',
    summary:
      'Accelerate policy administration, document extraction, and underwriting risk scoring with auditable data pipelines.',
    challenge:
      'Manual FNOL intake, siloed policy administration databases, and slow actuarial reporting cycles delay claim settlements and obscure loss-ratio trends.',
    solution:
      'SaaralTech deploys intelligent document processing for claims packets, modernizes legacy policy backends, and delivers real-time loss-ratio BI workspaces.',
    capabilities: [
      'Automated claims document classification and damage triage workflows',
      'Modernization of legacy PHP policy administration portals to PHP 8.3 LTS',
      'Actuarial data marts for reserving, loss triangles, and renewal pricing',
      'Role-governed audit trails meeting strict regulatory compliance',
    ],
    technologies: ['Document AI', 'dbt', 'PostgreSQL', 'Laravel', 'Terraform'],
    image: SITE_IMAGES.industries.insurance,
    imageAlt: 'Insurance actuarial risk modeling and claims shield graphic',
  },
  {
    id: 'retail',
    index: '03.',
    title: 'Retail',
    headline: 'Unified Omnichannel Commerce and SKU-Level Demand Forecasting',
    summary:
      'Synchronize POS, e-commerce, and fulfillment inventories while forecasting regional demand and promotional lift.',
    challenge:
      'High-traffic seasonal spikes overwhelm aging monolithic storefronts, while fragmented POS and online sales data distort replenishment and markdown timing.',
    solution:
      'We re-architect legacy commerce engines onto autoscaling cloud clusters and unify customer transaction streams into SKU-level pricing and inventory models.',
    capabilities: [
      'High-availability storefront modernization and headless API decoupling',
      'Near-real-time store and warehouse inventory synchronization',
      'Market-basket analysis, dynamic markdown modeling, and customer cohort BI',
      'Autoscaling Cloud DevOps infrastructure tuned for peak retail events',
    ],
    technologies: ['PHP 8.3', 'Redis', 'AWS EKS', 'BigQuery', 'Looker'],
    image: SITE_IMAGES.industries.retail,
    imageAlt: 'Omnichannel retail analytics and commerce inventory visual',
  },
  {
    id: 'banking',
    index: '04.',
    title: 'Banking and Financial Services',
    headline: 'High-Integrity Financial Pipelines and Automated Regulatory Reporting',
    summary:
      'Engineer deterministic data ledgers, anomaly monitoring, and resilient cloud infrastructure for regulated institutions.',
    challenge:
      'Batch reconciliation bottlenecks, manual compliance report assembly, and fragmented risk systems increase operational exposure and slow product releases.',
    solution:
      'Our engineers implement immutable audit-ready data pipelines, real-time transaction anomaly scoring, and zero-trust DevSecOps CI/CD governance.',
    capabilities: [
      'Automated reconciliation pipelines with deterministic data lineage',
      'Real-time transaction anomaly detection and alert routing',
      'Regulatory reporting data marts with automated validation checks',
      'Zero-trust Kubernetes infrastructure with encrypted secrets management',
    ],
    technologies: ['Apache Spark', 'Kafka', 'PostgreSQL', 'HashiCorp Vault', 'Grafana'],
    image: SITE_IMAGES.industries.banking,
    imageAlt: 'Banking financial ledger and compliance monitoring graphic',
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI & Data Engineering' | 'Data Analysis & BI' | 'PHP Modernization' | 'DevOps & Cloud';
  industry: 'Supply Chain & Logistics' | 'Insurance' | 'Retail' | 'Banking & Financial Services';
  summary: string;
  architectureOverview: string;
  challenge: string;
  outcomeMetrics: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
  sampleLabel: string;
}

export const SAMPLE_PROJECTS: ProjectItem[] = [
  {
    id: 'logistics-control-tower',
    title: 'Multi-Carrier Freight Telemetry & ETA Control Tower',
    category: 'AI & Data Engineering',
    industry: 'Supply Chain & Logistics',
    summary:
      'Sample reference architecture consolidating GPS carrier streams, port schedules, and warehouse inventory into a real-time delay prediction engine.',
    architectureOverview:
      'Built on an event-driven Kafka backbone feeding Spark Structured Streaming and a Snowflake medallion lakehouse, paired with gradient-boosted transit delay models.',
    challenge:
      'Sample scenario addressing fragmented carrier webhooks and manual spreadsheet tracking across 40+ regional distribution hubs.',
    outcomeMetrics: [
      'Sub-90s telemetry ingestion across simulated fleet streams',
      '22% earlier exception detection in sample route benchmarks',
      'Unified API serving warehouse dispatch dashboards',
    ],
    technologies: ['Apache Kafka', 'Spark', 'Snowflake', 'Python', 'Terraform'],
    image: SITE_IMAGES.projects.logisticsPlatform,
    imageAlt: 'Freight telemetry and route control tower sample architecture',
    sampleLabel: 'Sample Architecture',
  },
  {
    id: 'insurance-claims-triage',
    title: 'Intelligent Claims Intake & Policy Modernization Suite',
    category: 'AI & Data Engineering',
    industry: 'Insurance',
    summary:
      'Sample solution blueprint pairing OCR/LLM document extraction with a modernized PHP 8.3 claims routing backend.',
    architectureOverview:
      'Combines asynchronous document parsing queues, structured schema validation, and a modular Symfony 7 claims workflow API with role-based audit logging.',
    challenge:
      'Sample scenario eliminating multi-day manual sorting of PDF loss notices, repair estimates, and adjuster correspondence.',
    outcomeMetrics: [
      '70% faster initial claims packet classification in benchmark tests',
      'Full schema audit trail per claim state transition',
      'Automated adjuster queue balancing by claim complexity',
    ],
    technologies: ['Python', 'Symfony 7', 'PostgreSQL', 'Redis', 'Docker'],
    image: SITE_IMAGES.projects.insuranceClaims,
    imageAlt: 'Automated insurance claims triage sample architecture',
    sampleLabel: 'Sample Architecture',
  },
  {
    id: 'retail-demand-bi',
    title: 'Omnichannel SKU Demand & Margin Intelligence Workspace',
    category: 'Data Analysis & BI',
    industry: 'Retail',
    summary:
      'Sample analytical platform unifying POS transactions, e-commerce baskets, and regional promotion calendars into executive BI views.',
    architectureOverview:
      'Uses dbt Core transformations on BigQuery to maintain a certified semantic layer consumed by Power BI dashboards and automated replenishment exports.',
    challenge:
      'Sample scenario resolving conflicting revenue figures between store POS batches and online order management systems.',
    outcomeMetrics: [
      'Daily SKU-level sell-through visibility across 300+ sample store nodes',
      'Automated Monday morning margin variance packs',
      'Row-level security isolating regional merchandising views',
    ],
    technologies: ['BigQuery', 'dbt Core', 'Power BI', 'SQL', 'Airflow'],
    image: SITE_IMAGES.projects.retailForecasting,
    imageAlt: 'Retail omnichannel demand and margin BI sample architecture',
    sampleLabel: 'Sample Architecture',
  },
  {
    id: 'banking-regulatory-lakehouse',
    title: 'Deterministic Reconciliation & Compliance Reporting Hub',
    category: 'Data Analysis & BI',
    industry: 'Banking & Financial Services',
    summary:
      'Sample financial data platform engineered for automated ledger reconciliation, lineage auditing, and regulatory report generation.',
    architectureOverview:
      'Implements immutable append-only staging tables, automated reconciliation rules in dbt/SQL, and encrypted Grafana/Looker operational scorecards.',
    challenge:
      'Sample scenario replacing fragile end-of-month manual spreadsheet merges across payment gateways and core settlement ledgers.',
    outcomeMetrics: [
      '100% deterministic lineage from report cell back to raw transaction',
      'Automated exception flagging within 15 minutes of settlement close',
      'Zero-trust role-based access enforcement',
    ],
    technologies: ['PostgreSQL', 'dbt', 'Looker', 'Python', 'Vault'],
    image: SITE_IMAGES.projects.bankingCompliance,
    imageAlt: 'Banking regulatory compliance and reconciliation sample architecture',
    sampleLabel: 'Sample Architecture',
  },
  {
    id: 'php-erp-modernization',
    title: 'Legacy PHP 5.6 Wholesale ERP to Modular PHP 8.3 APIs',
    category: 'PHP Modernization',
    industry: 'Supply Chain & Logistics',
    summary:
      'Sample phased strangler-pattern migration transforming a tightly coupled legacy wholesale ERP into tested Laravel 11 services.',
    architectureOverview:
      'Introduces an API gateway proxy routing modernized invoicing, inventory, and auth modules to PHP 8.3 microservices while retiring legacy modules incrementally.',
    challenge:
      'Sample scenario addressing end-of-life PHP 5.6 security exposure and sluggish query performance during peak order windows.',
    outcomeMetrics: [
      '3.4x higher request throughput under PHP 8.3 OPcache JIT',
      '85%+ automated Pest/PHPUnit coverage on migrated billing modules',
      'Zero downtime during progressive traffic cutover',
    ],
    technologies: ['PHP 8.3', 'Laravel 11', 'Rector', 'MySQL 8', 'Redis'],
    image: SITE_IMAGES.projects.phpErpMigration,
    imageAlt: 'PHP 8.3 ERP modernization sample architecture',
    sampleLabel: 'Sample Architecture',
  },
  {
    id: 'cloud-finops-mesh',
    title: 'Multi-Region Kubernetes & FinOps Automation Platform',
    category: 'DevOps & Cloud',
    industry: 'Banking & Financial Services',
    summary:
      'Sample cloud foundation delivering reproducible Terraform modules, autoscaling EKS workloads, and continuous cost governance.',
    architectureOverview:
      'Standardizes AWS EKS cluster provisioning via modular Terraform, GitHub Actions OIDC pipelines, Prometheus observability, and Karpenter node right-sizing.',
    challenge:
      'Sample scenario resolving configuration drift across staging/production environments and escalating idle compute spend.',
    outcomeMetrics: [
      '35% simulated compute reduction via Karpenter spot/right-sizing',
      'Under 12-minute full-environment recovery via declarative IaC',
      'Automated container CVE gating prior to registry promotion',
    ],
    technologies: ['AWS EKS', 'Terraform', 'GitHub Actions', 'Prometheus', 'Grafana'],
    image: SITE_IMAGES.projects.cloudFinopsMesh,
    imageAlt: 'Multi-region Kubernetes and FinOps automation sample architecture',
    sampleLabel: 'Sample Architecture',
  },
];
