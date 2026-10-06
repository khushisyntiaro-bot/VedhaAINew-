import javaImage from "../assets/java.jpg";
import advancedJavaImage from "../assets/advancedjava.jpg";
import javaWithDsaImage from "../assets/javawithdsa.jpg";
import javaWithFlutterImage from "../assets/javawithflutter.jpg";
import javaCourseFullImage from "../assets/java-course-fullimage.png";
import python1Image from "../assets/python-1.webp";
import sqlLogoImage from "../assets/sqllogo.webp";
import advancedExcelImage from "../assets/advanced-excel-training-course.png";
import top5PythonLibsImage from "../assets/Top-5-Python-Librari.jpg";
import powerBiImage from "../assets/Power-BI.jpg";
import pythonAiImage from "../assets/python+AI.jpg";
import dataAnalysisImage from "../assets/data analysis.jpg";

const ALL_COURSES = [
  {
    id: "core-java",
    title: "Core Java",
    slug: "core-java",
    category: "Java Ecosystem",
    isAIProgram: false,
    shortDesc: "Solidify object-oriented programming, memory management, multithreading, and foundational software engineering in Java 21.",
    fullDesc: "A rigorous deep-dive into Core Java architecture. Learn OOPs concepts, Java Virtual Machine (JVM) internals, Collections Framework, Exception Handling, I/O Streams, Lambdas, and Multithreading through hands-on coding labs.",
    duration: "8 Weeks",
    level: "Beginner",
    mode: "Live Online + Hybrid Labs",
    prerequisites: "Basic computer literacy. No prior coding experience required.",
    technologies: ["Java 21", "JVM Internals", "JUnit 5", "Git", "Maven", "IntelliJ IDEA"],
    capstoneProjects: [
      "Banking & Transaction Management Console Engine",
      "High-Throughput File Compression & Processing Utility",
      "Inventory & Order Processing Multi-threaded Simulator"
    ],
    internshipRole: "Junior Java Developer Intern",
    careerOutcomes: ["Core Java Developer", "Software Trainee", "Automation Engineer"],
    syllabus: [
      {
        weekOrPhase: "Weeks 1-2",
        title: "Java Fundamentals & Control Systems",
        topics: ["JDK/JRE/JVM Architecture", "Data Types, Type Casting & Operators", "Control Flow & Decision Loops", "Arrays & String Manipulation Methods"]
      },
      {
        weekOrPhase: "Weeks 3-4",
        title: "Mastering Object-Oriented Principles",
        topics: ["Classes, Objects & Constructors", "Inheritance, Polymorphism & Dynamic Binding", "Encapsulation, Abstraction & Interfaces", "Package Architecture & Access Modifiers"]
      },
      {
        weekOrPhase: "Weeks 5-6",
        title: "Collections, Generics & Exception Framework",
        topics: ["List, Set, Map, Queue Deep-Dive", "Generics & Custom Collection Implementations", "Robust Checked & Unchecked Exception Handling", "Java 8+ Stream API & Lambda Expressions"]
      },
      {
        weekOrPhase: "Weeks 7-8",
        title: "Multithreading, I/O Streams & Unit Testing",
        topics: ["Thread Lifecycle, Synchronization & Concurrency", "File I/O, NIO.2 & Serialization", "JUnit 5 Unit Testing & Clean Code Standards", "Final Capstone Project Submission & Code Review"]
      }
    ],
    batchStarts: "Starts Monday & Weekend Batches",
    rating: 4.9,
    enrolledStudents: 1420,
    highlightTag: "Foundation Track",
    imageUrl: javaImage
  },
  {
    id: "core-java-advanced-java",
    title: "Core Java + Advanced Java",
    slug: "core-java-advanced-java",
    category: "Java Ecosystem",
    isAIProgram: false,
    shortDesc: "From core fundamentals to enterprise Spring Boot microservices, JDBC, JPA/Hibernate, and RESTful API architecture.",
    fullDesc: "Master end-to-end backend engineering in Java. Covers Core Java essentials followed by JDBC, Servlets, JSP, Spring Framework, Spring Boot, Hibernate ORM, REST API development, and PostgreSQL/MySQL integration with production deployment patterns.",
    duration: "14 Weeks",
    level: "Beginner to Advanced",
    mode: "Live Online + Hybrid Labs",
    prerequisites: "Willingness to learn. Coding fundamentals covered from day one.",
    technologies: ["Java 21", "Spring Boot 3", "Hibernate / JPA", "JDBC", "PostgreSQL", "Postman", "Docker", "Maven"],
    capstoneProjects: [
      "Enterprise E-Commerce Microservices Backend with JWT Auth",
      "Hospital Patient & Appointment Booking REST API",
      "Real-time FinTech Payment Gateway Integrator"
    ],
    internshipRole: "Java Backend Developer Intern",
    careerOutcomes: ["Backend Engineer", "Spring Boot Developer", "Java Enterprise Consultant"],
    syllabus: [
      {
        weekOrPhase: "Weeks 1-4",
        title: "Core Java & Data Structures Foundation",
        topics: ["JVM Internals & OOPs Paradigm", "Advanced Collections & Streams API", "Concurrency & Multithreading", "Design Patterns in Java (Singleton, Factory, Builder)"]
      },
      {
        weekOrPhase: "Weeks 5-8",
        title: "Database Connectivity & Enterprise Servlets",
        topics: ["JDBC Architecture & Connection Pooling", "Servlets, Filter Pipelines & HTTP Protocol", "JSP & Session Management Mechanics", "Relational Schema Design & SQL Optimization"]
      },
      {
        weekOrPhase: "Weeks 9-11",
        title: "Spring Framework & Spring Boot 3",
        topics: ["Spring Core, Inversion of Control (IoC) & DI", "Spring Boot Auto-configuration & Starter Modules", "Building RESTful Web Services with Spring Web", "Spring Security 6 with JWT Token Authentication"]
      },
      {
        weekOrPhase: "Weeks 12-14",
        title: "Hibernate/JPA ORM & Production Deployment",
        topics: ["Entity Mapping, One-to-Many & Many-to-Many", "HQL, Criteria Queries & Lazy/Eager Fetching", "Dockerizing Spring Boot Services & Cloud Deployment", "Live Client Capstone & Internship Onboarding"]
      }
    ],
    batchStarts: "New Batch Every 2 Weeks",
    rating: 4.95,
    enrolledStudents: 2840,
    highlightTag: "Top Seller",
    imageUrl: advancedJavaImage
  },
  {
    id: "core-java-advanced-java-dsa-basic",
    title: "Core Java + Advanced Java + DSA Basic",
    slug: "core-java-advanced-java-dsa-basic",
    category: "Java Ecosystem",
    isAIProgram: false,
    shortDesc: "The complete software engineer bundle: Core Java, enterprise Spring Boot backend, and foundational Data Structures & Algorithms.",
    fullDesc: "Tailored for students aiming for high-paying product company interviews and guaranteed internship roles. Blends enterprise Java backend mastery with problem-solving DSA fundamentals (Arrays, Linked Lists, Stacks, Queues, Trees, Binary Search, Sorting, and Time/Space Complexity).",
    duration: "18 Weeks",
    level: "Beginner to Advanced",
    mode: "Live Online + Hybrid Labs",
    prerequisites: "No prerequisites. Zero to interview-ready roadmap.",
    technologies: ["Java 21", "Spring Boot", "Data Structures", "Algorithms", "Hibernate", "JUnit", "LeetCode Framework", "Git"],
    capstoneProjects: [
      "High-Performance URL Shortener & Cache (DSA + Spring Boot)",
      "Ride-Hailing Location Matching Algorithm & API Service",
      "Real-Time Collaborative Document Backend with Custom Queues"
    ],
    internshipRole: "Software Development Engineer (SDE) Intern",
    careerOutcomes: ["SDE-1 Java", "Backend Systems Developer", "Full Lifecycle Java Engineer"],
    syllabus: [
      {
        weekOrPhase: "Weeks 1-5",
        title: "Core Java Deep-Dive & Clean Architecture",
        topics: ["Language syntax, Memory Stack & Heap analysis", "Complete OOPs, Interfaces & Abstract Classes", "Collections Framework internals & performance comparison", "Exception architectures & Lambda pipelines"]
      },
      {
        weekOrPhase: "Weeks 6-10",
        title: "DSA Fundamentals & Interview Problem Solving",
        topics: ["Time & Space Complexity (Big-O Notation)", "Arrays, Strings, Two-Pointer & Sliding Window", "Linked Lists (Singly, Doubly, Circular)", "Stacks, Queues, Recursion & Backtracking basics", "Searching & Sorting Algorithms (Binary Search, Merge/Quick Sort)", "Binary Trees, BST Traversal basics & Hash Maps"]
      },
      {
        weekOrPhase: "Weeks 11-15",
        title: "Advanced Java, Spring Boot & REST APIs",
        topics: ["Spring Boot 3 RESTful Microservices", "Hibernate ORM & Spring Data JPA", "Spring Security with Role-Based Access Control", "PostgreSQL & Redis Caching Layer"]
      },
      {
        weekOrPhase: "Weeks 16-18",
        title: "Full-System Capstone & Live Internship Placement",
        topics: ["End-to-End Distributed Project Build", "Mock Technical Rounds & Live Coding Drills", "Guaranteed Internship Matching with Partner Companies"]
      }
    ],
    batchStarts: "Next Cohort Starting Soon",
    rating: 4.98,
    enrolledStudents: 3100,
    highlightTag: "Most Comprehensive",
    imageUrl: javaWithDsaImage
  },
  {
    id: "java-flutter-fullstack",
    title: "Java (Backend) + Flutter Frontend",
    slug: "java-flutter-fullstack",
    category: "Java Ecosystem",
    isAIProgram: false,
    shortDesc: "Build complete cross-platform mobile apps with Flutter (iOS & Android) powered by robust Java Spring Boot backend microservices.",
    fullDesc: "Become a Full-Stack Mobile & Backend Specialist. Build high-performance, beautiful native apps using Dart and Flutter, seamlessly integrated with scalable Java Spring Boot REST APIs, WebSocket real-time updates, Firebase Auth, and cloud databases.",
    duration: "16 Weeks",
    level: "Beginner to Advanced",
    mode: "Live Online + Hybrid Labs",
    prerequisites: "Basic programming concepts beneficial but not mandatory.",
    technologies: ["Java 21", "Spring Boot", "Flutter 3.x", "Dart", "State Management (Bloc/Provider)", "REST APIs", "PostgreSQL", "WebSockets"],
    capstoneProjects: [
      "Food Delivery & Live Rider Tracking Cross-Platform App",
      "EdTech Learning Management App with Offline Sync & Video Streaming",
      "Personal Finance & Expense Tracker with Real-Time Analytics"
    ],
    internshipRole: "Full Stack Mobile (Java + Flutter) Intern",
    careerOutcomes: ["Full Stack Mobile Developer", "Flutter App Engineer", "Java Backend & API Specialist"],
    syllabus: [
      {
        weekOrPhase: "Weeks 1-5",
        title: "Java Backend & Spring Boot Microservices",
        topics: ["Java Core & OOPs", "Spring Boot 3 REST APIs & Controllers", "Spring Data JPA & PostgreSQL DB", "JWT Authentication & Security Filters"]
      },
      {
        weekOrPhase: "Weeks 6-9",
        title: "Flutter UI & Dart Programming",
        topics: ["Dart 3 Language Features & Async/Await", "Flutter Widget Tree, Layouts & Material 3 / Cupertino Design", "Custom Animations, Forms & Navigation Routing", "Responsive Design for Mobile & Web"]
      },
      {
        weekOrPhase: "Weeks 10-13",
        title: "State Management & API Integration",
        topics: ["State Management using Bloc & Provider", "Integrating Dio/Http with Java REST Endpoints", "Local Caching with Hive / SQLite & Offline Mode", "Push Notifications & WebSockets Integration"]
      },
      {
        weekOrPhase: "Weeks 14-16",
        title: "App Store Readiness & Guaranteed Internship",
        topics: ["Building Release APKs & iOS Bundles", "CI/CD Pipeline with GitHub Actions", "Live Enterprise Capstone Deployment", "Internship Placement Induction"]
      }
    ],
    batchStarts: "Weekend & Weekday Slots Open",
    rating: 4.92,
    enrolledStudents: 1890,
    highlightTag: "High Demand",
    imageUrl: javaWithFlutterImage
  },
  {
    id: "java-with-ai",
    title: "Java with AI",
    slug: "java-with-ai",
    category: "AI Programs",
    isAIProgram: true,
    shortDesc: "Empower enterprise Java backend applications with Generative AI, Spring AI, LLM orchestration, and RAG pipelines.",
    fullDesc: "Modernize enterprise Java engineering with artificial intelligence. Learn how to integrate LLMs, Gemini API, Spring AI, vector databases (PGVector, Pinecone), retrieval-augmented generation (RAG), semantic search, and autonomous agents into Java Spring Boot applications.",
    duration: "12 Weeks",
    level: "Intermediate",
    mode: "Live Interactive Online",
    prerequisites: "Basic knowledge of Java or object-oriented programming.",
    technologies: ["Java 21", "Spring AI", "Google Gemini API", "LangChain4j", "PGVector", "ChromaDB", "Ollama", "Spring Boot 3"],
    capstoneProjects: [
      "Enterprise AI Document Intelligence & Automated Summarizer Service",
      "AI-Powered Code Reviewer & Bug Detection CI/CD Bot for Java",
      "Intelligent Customer Support Agent with Multi-turn RAG Knowledge Base"
    ],
    internshipRole: "AI Backend Engineer Intern",
    careerOutcomes: ["Enterprise AI Engineer", "Java AI Solutions Architect", "GenAI Backend Specialist"],
    syllabus: [
      {
        weekOrPhase: "Weeks 1-3",
        title: "Java Core & Modern Spring AI Foundations",
        topics: ["Java 21 Modern Syntax & Virtual Threads", "Introduction to Spring AI & LangChain4j Ecosystem", "Connecting to LLM APIs (Gemini, Claude, OpenAI) from Java", "Prompt Engineering & Structured JSON Output Parsing in Java"]
      },
      {
        weekOrPhase: "Weeks 4-6",
        title: "Vector Databases, Embeddings & Semantic Search",
        topics: ["Text Embeddings & Vector Mathematics", "Integrating PGVector with Spring Data JPA", "Semantic Search & Hybrid Keyword Filtering", "Chunking Strategies & Document Ingestion Pipelines"]
      },
      {
        weekOrPhase: "Weeks 7-9",
        title: "Retrieval Augmented Generation (RAG) in Java",
        topics: ["Building Production RAG Pipelines with Spring AI", "Context Window Management & Token Optimization", "Guardrails, Content Filtering & Hallucination Mitigation", "Local LLMs with Ollama and Java bindings"]
      },
      {
        weekOrPhase: "Weeks 10-12",
        title: "Autonomous Agents & Guaranteed Internship Assignment",
        topics: ["Tool Calling & Function Execution in Java", "Multi-Agent Workflows & Memory Systems", "Live AI Enterprise System Deployment", "Direct Internship Placement with AI Startups"]
      }
    ],
    batchStarts: "Fast-Track Batch Available",
    rating: 4.97,
    enrolledStudents: 1250,
    highlightTag: "Future-Ready",
    imageUrl: javaCourseFullImage
  },
  {
    id: "python-core",
    title: "Python",
    slug: "python",
    category: "Python & AI",
    isAIProgram: false,
    shortDesc: "From zero to proficient in Python 3. Learn syntax, data structures, OOPs, file manipulation, and problem-solving.",
    fullDesc: "Master the world\u2019s most popular, versatile programming language. Understand Python syntax, functional programming, object-oriented design, modules, virtual environments, regular expressions, and unit testing to build solid software foundations.",
    duration: "8 Weeks",
    level: "Beginner",
    mode: "Live Online + Hybrid Labs",
    prerequisites: "None. Absolute beginners welcome.",
    technologies: ["Python 3.12", "VS Code", "PyTest", "Git", "Virtualenv", "Jupyter"],
    capstoneProjects: [
      "Automated System Health & File Management CLI Tool",
      "Web Scraping & Real-Time Data Extractor Engine",
      "Interactive Text-Based RPG Game with State Persistence"
    ],
    internshipRole: "Python Junior Developer Intern",
    careerOutcomes: ["Junior Python Developer", "Automation Associate", "Software Support Engineer"],
    syllabus: [
      {
        weekOrPhase: "Weeks 1-2",
        title: "Python Syntax & Core Mechanics",
        topics: ["Variables, Dynamic Typing & Expressions", "Conditionals, Loops & Comprehensions", "Strings, Slicing & Formatting", "Functions, Scope & Docstrings"]
      },
      {
        weekOrPhase: "Weeks 3-4",
        title: "Data Structures & Functional Patterns",
        topics: ["Lists, Tuples, Dictionaries & Sets", "Lambda, Map, Filter & Reduce", "Iterators & Generators", "Exception Handling with Custom Exceptions"]
      },
      {
        weekOrPhase: "Weeks 5-6",
        title: "Object-Oriented Programming & Modules",
        topics: ["Classes, Objects, __init__ & Dunder Methods", "Inheritance, Composition & Polymorphism", "Creating Custom Modules & Packages", "File I/O, JSON & CSV Handling"]
      },
      {
        weekOrPhase: "Weeks 7-8",
        title: "Testing, Tooling & Capstone Deployment",
        topics: ["Virtual Environments & Dependency Management", "Unit Testing with PyTest & Mocking", "Building CLI Tools with Argparse & Click", "Capstone Code Review & Internship Kickoff"]
      }
    ],
    batchStarts: "Every Monday",
    rating: 4.88,
    enrolledStudents: 2200,
    highlightTag: "Beginner Friendly",
    imageUrl: python1Image
  },
  {
    id: "sql-basic-to-advanced",
    title: "SQL Basic to Advanced",
    slug: "sql-basic-to-advanced",
    category: "Data & Analytics",
    isAIProgram: false,
    shortDesc: "Master database querying, relational modeling, complex joins, window functions, CTEs, indexing, and query optimization.",
    fullDesc: "Comprehensive masterclass on SQL and relational databases. Query PostgreSQL, MySQL, and modern data warehouses like BigQuery. Write performant subqueries, window functions, stored procedures, triggers, and analyze multi-million-row datasets with ease.",
    duration: "6 Weeks",
    level: "Beginner to Advanced",
    mode: "Live Interactive Online",
    prerequisites: "No coding knowledge required.",
    technologies: ["PostgreSQL", "MySQL", "DBeaver", "Window Functions", "CTEs", "Query Tuning", "BigQuery"],
    capstoneProjects: [
      "Multi-Tenant SaaS Database Schema Design & Optimization",
      "Financial Cohort Retention & Churn SQL Analytics Pipeline",
      "E-Commerce Sales Performance & Fraud Detection Query Suite"
    ],
    internshipRole: "SQL Developer / Database Analyst Intern",
    careerOutcomes: ["Database Analyst", "SQL Developer", "Junior Data Engineer"],
    syllabus: [
      {
        weekOrPhase: "Weeks 1-2",
        title: "Relational Foundations & Core DDL/DML",
        topics: ["RDBMS Concepts, Primary & Foreign Keys", "SELECT, WHERE, ORDER BY, GROUP BY, HAVING", "Data Aggregation & Mathematical/String Functions", "Table Creation, Constraints & Alterations"]
      },
      {
        weekOrPhase: "Weeks 3-4",
        title: "Advanced Joins, Subqueries & CTEs",
        topics: ["INNER, LEFT, RIGHT, FULL OUTER & CROSS Joins", "Correlated Subqueries & Exists Operators", "Common Table Expressions (WITH Clauses & Recursive CTEs)", "Set Operations (UNION, INTERSECT, EXCEPT)"]
      },
      {
        weekOrPhase: "Weeks 5-6",
        title: "Window Functions, Indexing & Performance Tuning",
        topics: ["Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG)", "Partitioning & Rolling Averages Calculations", "B-Tree Indexing, EXPLAIN ANALYZE & Query Optimization", "Stored Procedures, Triggers & Guaranteed Internship Assignment"]
      }
    ],
    batchStarts: "Morning & Evening Batches",
    rating: 4.94,
    enrolledStudents: 1950,
    highlightTag: "Essential Skill",
    imageUrl: sqlLogoImage
  },
  {
    id: "excel-basic-to-advanced",
    title: "Excel Basic to Advanced",
    slug: "excel-basic-to-advanced",
    category: "Data & Analytics",
    isAIProgram: false,
    shortDesc: "From basic formulas to dynamic array formulas, XLOOKUP, Pivot Tables, Power Query, Macros, and interactive KPI dashboards.",
    fullDesc: "Transform raw data into high-impact executive dashboards. Master advanced formulas (XLOOKUP, INDEX/MATCH, SUMIFS, LAMBDA), automated data transformation with Power Query, dynamic Pivot Tables, what-if analysis, and business reporting standards.",
    duration: "4 Weeks",
    level: "Beginner to Advanced",
    mode: "Live Interactive Online",
    prerequisites: "Basic computer usage.",
    technologies: ["Microsoft Excel 365", "Power Query", "Pivot Tables & Charts", "VBA Macros Basics", "Data Modeling"],
    capstoneProjects: [
      "Executive Financial KPI & Revenue Forecast Dashboard",
      "Automated HR Payroll & Employee Attendance Tracker",
      "Supply Chain Inventory & Reorder Trigger System"
    ],
    internshipRole: "Business Operations & Excel Analyst Intern",
    careerOutcomes: ["MIS Executive", "Operations Analyst", "Financial Reporting Associate"],
    syllabus: [
      {
        weekOrPhase: "Week 1",
        title: "Excel Interface, Navigation & Essential Formulas",
        topics: ["Grid Layout, Shortcuts & Data Formatting Best Practices", "Logical Formulas (IF, AND, OR, IFS)", "Text & Date-Time Functions (TEXTSPLIT, DATEDIF, EDATE)", "Conditional Formatting & Data Validation Rules"]
      },
      {
        weekOrPhase: "Week 2",
        title: "Advanced Lookup & Dynamic Arrays",
        topics: ["XLOOKUP, VLOOKUP, INDEX/MATCH Masterclass", "Dynamic Array Formulas (FILTER, UNIQUE, SORT, SEQUENCE)", "SUMIFS, COUNTIFS, AVERAGEIFS Multi-condition Aggregations", "LAMBDA Functions & Custom Defined Functions"]
      },
      {
        weekOrPhase: "Week 3",
        title: "Pivot Tables, Slicers & Visual Dashboards",
        topics: ["Building Interactive Pivot Tables & Calculated Fields", "Connecting Multiple Tables with Data Model (Relationships)", "Slicers, Timelines & Dynamic Interactive Charts", "Designing Clean Executive KPI Dashboards"]
      },
      {
        weekOrPhase: "Week 4",
        title: "Power Query Automation & Internship Capstone",
        topics: ["Extracting & Transforming messy data with Power Query", "Unpivoting, Merging & Appending Datasets automatically", "Intro to Macros & One-Click Automation", "Live Business Case Study & Internship Certification"]
      }
    ],
    batchStarts: "Weekend Masterclasses Available",
    rating: 4.89,
    enrolledStudents: 2600,
    highlightTag: "Quick Upskill",
    imageUrl: advancedExcelImage
  },
  {
    id: "python-libraries",
    title: "Python + Libraries",
    slug: "python-libraries",
    category: "Python & AI",
    isAIProgram: false,
    shortDesc: "Harness the core Python ecosystem: NumPy, Pandas, Matplotlib, Seaborn, Requests, BeautifulSoup, and Scikit-Learn basics.",
    fullDesc: "Bridge standard Python into practical data manipulation, web scraping, API development, and scientific computing. Clean massive datasets with Pandas, compute numerical matrices with NumPy, visualize insights with Matplotlib/Seaborn, and automate web data gathering.",
    duration: "10 Weeks",
    level: "Intermediate",
    mode: "Live Online + Hybrid Labs",
    prerequisites: "Basic Python programming familiarity.",
    technologies: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Requests", "BeautifulSoup4", "Scikit-Learn", "FastAPI"],
    capstoneProjects: [
      "Global Stock Market Trends & Volatility Analysis Platform",
      "Real Estate Price Prediction & Web Scraped Market Index",
      "Customer Segmentation & Behavior Visualizer"
    ],
    internshipRole: "Python Data & Automation Intern",
    careerOutcomes: ["Python Data Specialist", "Automation Developer", "Data Research Associate"],
    syllabus: [
      {
        weekOrPhase: "Weeks 1-2",
        title: "Python Recap & NumPy Vectorized Computing",
        topics: ["Advanced Python Constructs Review", "N-Dimensional Arrays & Broadcasting", "Vectorized Operations & Mathematical Matrix Algebra", "Performance Benchmarking vs Pure Python"]
      },
      {
        weekOrPhase: "Weeks 3-5",
        title: "Pandas Data Wrangling & Manipulation",
        topics: ["DataFrames, Series, Indexing & Slicing", "Handling Missing Values, Duplicates & Data Types", "Groupby, Aggregations, Pivot Tables & Melt", "Time-Series Data Analysis & Window Operations"]
      },
      {
        weekOrPhase: "Weeks 6-7",
        title: "Data Visualization with Matplotlib & Seaborn",
        topics: ["Distribution Plots, Box Plots & Heatmaps", "Pairplots, Categorical Plots & Custom Themes", "Interactive Plotting with Plotly Basics", "Visual Storytelling & Insight Extraction"]
      },
      {
        weekOrPhase: "Weeks 8-10",
        title: "Web Scraping, APIs & Capstone Deployment",
        topics: ["HTTP Protocols, Requests & REST API Integration", "Web Scraping with BeautifulSoup4 & HTML Parsing", "Building Lightweight Micro-APIs with FastAPI", "100% Guaranteed Internship Project Submission"]
      }
    ],
    batchStarts: "Flexible Morning / Evening Slots",
    rating: 4.93,
    enrolledStudents: 1680,
    highlightTag: "Industry Favorite",
    imageUrl: top5PythonLibsImage
  },
  {
    id: "powerbi",
    title: "PowerBI",
    slug: "powerbi",
    category: "Data & Analytics",
    isAIProgram: false,
    shortDesc: "Master data modeling, advanced DAX calculations, Power Query ETL, custom visuals, and enterprise Power BI Service reporting.",
    fullDesc: "Transform disconnected data sources into coherent, visually immersive, and interactive business intelligence reports. Learn star schema data modeling, write complex DAX metrics (CALCULATE, ALL, RELATED, Time Intelligence), and publish live enterprise reports.",
    duration: "6 Weeks",
    level: "Beginner to Advanced",
    mode: "Live Interactive Online",
    prerequisites: "Basic understanding of tables / spreadsheets is helpful.",
    technologies: ["Power BI Desktop", "DAX (Data Analysis Expressions)", "Power Query M", "Power BI Service", "SQL Integration", "Data Modeling"],
    capstoneProjects: [
      "Enterprise Executive SaaS Revenue & Retention Dashboard",
      "Supply Chain Logistics, Fleet & Delivery Performance Monitor",
      "Healthcare Clinic Patient Wait Time & Resource Optimization Report"
    ],
    internshipRole: "Power BI / Business Intelligence Intern",
    careerOutcomes: ["Power BI Developer", "BI Analyst", "Reporting Specialist"],
    syllabus: [
      {
        weekOrPhase: "Weeks 1-2",
        title: "Power BI Architecture & Data Transformation",
        topics: ["Power BI Desktop Ecosystem & Interface", "Extracting Data from SQL, Excel, Web & APIs", "Power Query ETL: Transforming, Cleansing & Merging", "Creating Star Schema & Snowflake Data Models"]
      },
      {
        weekOrPhase: "Weeks 3-4",
        title: "DAX (Data Analysis Expressions) Deep-Dive",
        topics: ["Calculated Columns vs Measures", "The Engine of DAX: Filter Context & Row Context", "CALCULATE, FILTER, ALL, ALLEXCEPT, VALUES", "Time Intelligence Functions (YTD, MTD, YoY Growth, Rolling 12M)"]
      },
      {
        weekOrPhase: "Weeks 5-6",
        title: "Report Design, Power BI Service & Internship Capstone",
        topics: ["Visual Formatting, Drill-Throughs & Bookmarks", "Row-Level Security (RLS) & Workspace Sharing", "Scheduled Data Refreshes & Gateways", "Live Industry Capstone & Guaranteed Internship Placement"]
      }
    ],
    batchStarts: "Cohort Starts Every 2 Weeks",
    rating: 4.96,
    enrolledStudents: 2450,
    highlightTag: "High Placement Rate",
    imageUrl: powerBiImage
  },
  {
    id: "python-with-ai",
    title: "Python + AI",
    slug: "python-ai",
    category: "AI Programs",
    isAIProgram: true,
    shortDesc: "Harness Python for Artificial Intelligence: GenAI, LLMs, LangChain, OpenAI/Gemini APIs, Prompt Engineering, and AI Agents.",
    fullDesc: "Step directly into the frontier of modern AI engineering. Build production-grade generative AI applications, semantic search engines, RAG pipelines, fine-tuned assistants, and multi-agent systems with Python, LangChain, LlamaIndex, vector databases, and Gemini AI.",
    duration: "14 Weeks",
    level: "Beginner to Advanced",
    mode: "Live Online + Hybrid Labs",
    prerequisites: "Enthusiasm for AI. Coding is taught systematically.",
    technologies: ["Python 3.12", "Google Gemini API", "LangChain", "LlamaIndex", "ChromaDB / Pinecone", "Streamlit", "Hugging Face", "FastAPI"],
    capstoneProjects: [
      "Multimodal AI Financial Analyst & Chart Reading Agent",
      "Autonomous Customer Support Multi-Agent Swarm with Tool Calling",
      "Enterprise Knowledge Base RAG Search with Fact Verification"
    ],
    internshipRole: "Generative AI & Machine Learning Intern",
    careerOutcomes: ["AI Engineer", "GenAI Developer", "Python AI Specialist"],
    syllabus: [
      {
        weekOrPhase: "Weeks 1-3",
        title: "Python for AI & Math Fundamentals",
        topics: ["Modern Python 3.12 & Async Programming", "NumPy & Pandas for AI Data Preparation", "Probability, Linear Algebra & Embedding Math Intuition", "Introduction to Machine Learning workflows"]
      },
      {
        weekOrPhase: "Weeks 4-7",
        title: "LLM Foundations & Prompt Engineering Mastery",
        topics: ["Transformer Architecture & Attention Mechanism Intuition", "Integrating Google Gemini API, OpenAI & Open-Source Models", "Zero-shot, Few-shot, Chain-of-Thought & ReAct Prompting", "Structured Outputs with Pydantic & Instructor"]
      },
      {
        weekOrPhase: "Weeks 8-11",
        title: "RAG Pipelines, Vector Stores & LangChain",
        topics: ["Document Ingestion, Chunking & Hybrid Embeddings", "Vector DBs: Chroma, Pinecone & FAISS", "LangChain & LlamaIndex Architecture", "Evaluation, Guardrails & Token Cost Optimization"]
      },
      {
        weekOrPhase: "Weeks 12-14",
        title: "AI Agents, Production Apps & Guaranteed Internship",
        topics: ["Building Autonomous Tool-Calling Agents (LangGraph)", "Deploying Interactive AI UIs with Streamlit & FastAPI", "End-to-End Enterprise Capstone Project", "Direct Placement into Partner AI Startups"]
      }
    ],
    batchStarts: "Exclusive Cohort - Limited Seats",
    rating: 4.99,
    enrolledStudents: 3400,
    highlightTag: "Flagship AI Track",
    imageUrl: pythonAiImage
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    slug: "data-analysis",
    category: "Data & Analytics",
    isAIProgram: false,
    shortDesc: "The complete end-to-end Data Analyst suite: Advanced Excel, SQL, Python (Pandas/Seaborn), Power BI, and business storytelling.",
    fullDesc: "The ultimate all-in-one Data Analyst curriculum designed to turn you into a job-ready data professional. Master data extraction with SQL, cleaning and statistical modeling with Python and Excel, dynamic visual storytelling with Power BI, and presenting actionable business metrics.",
    duration: "16 Weeks",
    level: "Beginner to Advanced",
    mode: "Live Online + Hybrid Labs",
    prerequisites: "No coding background required. Designed for freshers and career switchers.",
    technologies: ["Advanced Excel", "PostgreSQL / SQL", "Python (Pandas, NumPy)", "Seaborn & Matplotlib", "Power BI Desktop", "Statistics & EDA", "Git"],
    capstoneProjects: [
      "Omnichannel Retail Sales, Customer Lifetime Value & Churn Prediction",
      "Healthcare Analytics: Hospital Readmission & Treatment Cost Analysis",
      "Marketing Campaign ROI & Attribution Modeling Pipeline"
    ],
    internshipRole: "Data Analyst / Junior Business Analyst Intern",
    careerOutcomes: ["Data Analyst", "Business Intelligence Analyst", "Product Analyst", "Operations Data Lead"],
    syllabus: [
      {
        weekOrPhase: "Weeks 1-4",
        title: "Business Statistics & Advanced Excel Mastery",
        topics: ["Descriptive Statistics, Distributions & Hypothesis Testing", "Advanced Lookup Functions (XLOOKUP, INDEX/MATCH)", "Power Query ETL & Data Modeling in Excel", "Dynamic Executive KPI Dashboards"]
      },
      {
        weekOrPhase: "Weeks 5-8",
        title: "SQL Database Querying & Aggregation Engine",
        topics: ["Relational Database Design & Normalization", "Complex Joins, Subqueries & CTEs", "Window Functions (RANK, ROW_NUMBER, Running Totals)", "Database Performance Tuning & Indexing"]
      },
      {
        weekOrPhase: "Weeks 9-12",
        title: "Python for Exploratory Data Analysis (EDA)",
        topics: ["Data Wrangling with Pandas & NumPy", "Visualizing Patterns with Seaborn & Plotly", "Handling Missing Data, Outliers & Skewness", "Feature Engineering & Correlation Analysis"]
      },
      {
        weekOrPhase: "Weeks 13-16",
        title: "Power BI Storytelling & Guaranteed Internship Placement",
        topics: ["Building Star Schema Models & Complex DAX Measures", "Designing Interactive Corporate Power BI Dashboards", "Executive Presentation & Business Case Defense", "Direct Internship Onboarding with Partner Analytics Teams"]
      }
    ],
    batchStarts: "Weekend & Regular Weekday Batches",
    rating: 4.97,
    enrolledStudents: 4120,
    highlightTag: "All-In-One Career Track",
    imageUrl: dataAnalysisImage
  }
];
const HIRING_PARTNERS = [
  { name: "Infosys", category: "IT Services", hiresCount: "120+" },
  { name: "TCS", category: "Enterprise Tech", hiresCount: "145+" },
  { name: "Capgemini", category: "Consulting & Tech", hiresCount: "95+" },
  { name: "Wipro", category: "Digital Solutions", hiresCount: "80+" },
  { name: "Cognizant", category: "Cloud & AI", hiresCount: "110+" },
  { name: "Persistent Systems", category: "Product Engineering", hiresCount: "65+" },
  { name: "Tech Mahindra", category: "Telecom & AI", hiresCount: "70+" },
  { name: "LTIMindtree", category: "Data & Cloud", hiresCount: "85+" },
  { name: "InnovateAI Labs", category: "AI & GenAI Startup", hiresCount: "40+" },
  { name: "DataSprint Analytics", category: "BI & FinTech", hiresCount: "50+" }
];
const STUDENT_TESTIMONIALS = [
  {
    id: "1",
    name: "Aarav Sharma",
    role: "Java Backend Intern \u2192 Full-time Engineer",
    company: "Persistent Systems",
    courseTaken: "Core Java + Advanced Java + DSA Basic",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    comment: "The 100% internship guarantee was the reason I joined VedhaAI. Within 2 weeks of completing my capstone project, I was placed in a paid internship at a product firm. The Spring Boot + DSA training made all the interview rounds feel smooth.",
    stipendOrPackage: "\u20B928,000/mo Internship",
    badge: "100% Placed"
  },
  {
    id: "2",
    name: "Priya Iyer",
    role: "AI Engineer Intern",
    company: "InnovateAI Labs",
    courseTaken: "Python + AI",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    comment: "VedhaAI didn\u2019t just teach standard Python syntax; we built real RAG pipelines with Gemini API and LangChain. The mentor code reviews were brutally detailed and taught me real industry standards.",
    stipendOrPackage: "\u20B935,000/mo Internship",
    badge: "Top Performer"
  },
  {
    id: "3",
    name: "Rohan Deshmukh",
    role: "Data Analyst Intern",
    company: "DataSprint Analytics",
    courseTaken: "Data Analysis (All-in-One)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    comment: "I was a non-tech graduate switching fields. The structured pathway from Excel to SQL, Python, and PowerBI gave me the confidence to handle multi-million row datasets. VedhaAI arranged 3 interview rounds directly!",
    stipendOrPackage: "\u20B925,000/mo Internship",
    badge: "Non-Tech to Tech"
  },
  {
    id: "4",
    name: "Sneha Patel",
    role: "Full Stack Flutter & Java Intern",
    company: "MobilityX Tech",
    courseTaken: "Java (Backend) + Flutter Frontend",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    comment: "Building a live food delivery app with Spring Boot backend and Flutter frontend in class gave me a portfolio that instantly stood out on LinkedIn. The mentors are seasoned industry architects.",
    stipendOrPackage: "\u20B930,000/mo Internship",
    badge: "Dual Certified"
  }
];
const MENTORS_LIST = [
  {
    id: "m1",
    name: "Vikramaditya Sen",
    title: "Lead Architect & Java Specialist",
    exCompany: "Oracle / Amazon",
    experience: "14+ Years Exp",
    specialization: "Spring Boot 3, Distributed Microservices, JVM Concurrency & Low-latency Systems.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
  },
  {
    id: "m2",
    name: "Dr. Ananya Ray",
    title: "AI Research Lead & GenAI Architect",
    exCompany: "Google Research / DeepMind Fellow",
    experience: "11+ Years Exp",
    specialization: "LangChain, LLM Fine-Tuning, Multi-Modal RAG Pipelines & Autonomous Agents.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80"
  },
  {
    id: "m3",
    name: "Karthik Raman",
    title: "Head of Data Engineering & Analytics",
    exCompany: "Walmart Global Tech",
    experience: "12+ Years Exp",
    specialization: "Advanced SQL, Star Schema, Power BI Enterprise Architecture & Big Data Pipelines.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
  },
  {
    id: "m4",
    name: "Shweta Kulkarni",
    title: "Senior Mobile & Full-Stack Lead",
    exCompany: "Swiggy / Uber Tech",
    experience: "10+ Years Exp",
    specialization: "Flutter Cross-Platform Architecture, RESTful API Integration & Cloud Microservices.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80"
  }
];
const INTERNSHIP_PARTNERS = [
  {
    name: "Persistent Systems",
    industry: "Product Engineering",
    rolesAvailable: ["Java Backend Intern", "Spring Boot Trainee", "Full Stack Trainee"]
  },
  {
    name: "InnovateAI Labs",
    industry: "AI & GenAI Solutions",
    rolesAvailable: ["AI Engineer Intern", "Python LangChain Developer", "RAG Specialist"]
  },
  {
    name: "DataSprint Analytics",
    industry: "BI & FinTech",
    rolesAvailable: ["Data Analyst Intern", "Power BI Specialist", "SQL Analytics Associate"]
  },
  {
    name: "MobilityX Tech",
    industry: "Mobile SaaS",
    rolesAvailable: ["Flutter App Intern", "Java Cloud Intern", "API Integration Trainee"]
  },
  {
    name: "Cognizant Digital",
    industry: "Enterprise Cloud",
    rolesAvailable: ["Junior Software Engineer", "Database Associate", "QA Automation Intern"]
  },
  {
    name: "LTIMindtree",
    industry: "Data & Cloud",
    rolesAvailable: ["Cloud Analytics Intern", "Java Enterprise Trainee", "Python ETL Intern"]
  },
  {
    name: "Capgemini Tech",
    industry: "Consulting & Engineering",
    rolesAvailable: ["Backend Associate", "Business Intelligence Analyst", "Software Trainee"]
  },
  {
    name: "FinFlow Technologies",
    industry: "FinTech Platforms",
    rolesAvailable: ["Spring Boot Intern", "SQL Data Engineer Intern", "Analytics Trainee"]
  }
];
const FAQ_LIST = [
  {
    q: "How does the 100% Guaranteed Internship at VedhaAI work?",
    a: "Every student who completes our curriculum and submits all capstone projects receives a formal internship placement with our verified network of 450+ tech companies and startups. The internship includes an official offer letter, industry code reviews, project mentor supervision, and an experience certificate upon completion."
  },
  {
    q: "Are the classes conducted live or pre-recorded?",
    a: "All VedhaAI classes are 100% Live & Interactive, conducted by senior software architects and AI practitioners. You also receive lifetime access to high-definition session recordings, notes, GitHub repos, and daily doubt-clearing rooms."
  },
  {
    q: "Can non-technical students or beginners join courses like Python or Java?",
    a: "Absolutely! Our foundation tracks (Core Java, Python, SQL Basic to Advanced, Excel, and Data Analysis) start from zero prior programming knowledge with patient, step-by-step guidance."
  },
  {
    q: "What is included in the Free Counseling and Demo Class?",
    a: "Our Free Counseling is a 1-on-1 session with a career mentor who evaluates your background, career goals, and creates a tailored study roadmap. The Free Demo Class lets you attend a live hands-on coding session to experience our teaching methodology firsthand before enrolling."
  },
  {
    q: "What certificates will I receive after course completion?",
    a: "You receive two verifiable credentials: (1) An Industry-Standard Course Completion Certificate detailing your technical competencies, and (2) An Official Internship Experience Certificate from our partner tech company with project verification."
  },
  {
    q: "What are the batch timings and format options?",
    a: "We offer flexible Morning Batches (7:30 AM - 9:00 AM), Evening Batches (7:00 PM - 8:30 PM & 8:30 PM - 10:00 PM), and dedicated Weekend Super-Batches for college students and working professionals."
  }
];
export {
  ALL_COURSES,
  FAQ_LIST,
  HIRING_PARTNERS,
  INTERNSHIP_PARTNERS,
  MENTORS_LIST,
  STUDENT_TESTIMONIALS
};
