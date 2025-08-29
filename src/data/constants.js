export const Bio = {
  name: "Aditi Patil Raman",
  roles: [
    "Data Enthusiast",
  ],
  description:
    "I’m passionate about turning raw data into actionable insights. From building real-time streaming pipelines to designing interactive dashboards, I love creating solutions that not only work technically but also make sense to the people using them. My work blends analytics, engineering, and problem-solving, with a constant curiosity to learn, adapt, and deliver impact. ",
  github: "https://www.linkedin.com/in/aditi-patil-raman-452199248/",
  resume: "https://drive.google.com/file/d/1KwxsT5JGjTCDV-tKQr9QVETzbzXpcxfM/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/aditi-patil-raman-452199248/",
  
};

export const skills = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Python",
        image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "R Programming",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg",
      },
      {
        name: "SQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Big Data & Streaming:",
    skills: [
      {
        name: "Hadoop",
        image:"https://www.svgrepo.com/show/355048/hadoop.svg",
      },
      {
        name: "Spark",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg",
      },
      {
        name: "EMR",
        image:
          "https://icon.icepanel.io/AWS/svg/Analytics/EMR.svg",
      },
      {
        name: "Apache Kafka",
        image:
          "https://www.svgrepo.com/show/305719/apachekafka.svg",
      },
    ],
  },
  {
    title: "Cloud Platforms and Services",
    skills: [
      {
        name: "Amazon Web Services(AWS)",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png?20170912170050",
      },
      {
        name: "Amazon S3",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/856px-Amazon-S3-Logo.svg.png?20220427001138",
      },
      {
        name: "Amazon Redshift",
        image:
          "https://cdn.worldvectorlogo.com/logos/aws-redshift-logo.svg",
      },
      {
        name: "AWS Glue",
        image:
          "https://icon.icepanel.io/AWS/svg/Analytics/Glue.svg",
      },
      {
        name: "AWS Lambda",
        image:
          "https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg",
      },
      {
        name: "Amazon Athena",
        image:
          "https://icon.icepanel.io/AWS/svg/Analytics/Athena.svg",
      },
      
      {
        name: "Google Cloud Platform",
        image:
          "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      },
    ],
  },
  {
    title: "Databases & Warehousing:",
    skills: [
      {
        name: "PostgreSQL",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1080px-Postgresql_elephant.svg.png?20080116191800",
      },
      {
        name: "Amazon Redshift",
        image:
          "https://icon.icepanel.io/AWS/svg/Analytics/Redshift.svg",
      },
      {
        name: "Snowflake",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Snowflake_Logo.svg/368px-Snowflake_Logo.svg.png?20210330073721",
      },
      {
        name: "Looker Studio",
        image:
          "https://www.svgrepo.com/show/354012/looker-icon.svg",
      },
    ],
  },
  {
    title: "Visualization Tools",
    skills: [
      {
        name: "Tableau",
        image: "https://www.svgrepo.com/show/354427/tableau.svg",
      },
      {
        name: "Power BI",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/1200px-New_Power_BI_Logo.svg.png?20210102182532",
      },
      {
        name: "Amazon Quicksight",
        image: "https://icon.icepanel.io/AWS/svg/Analytics/QuickSight.svg",
      },
      {
        name: "Looker Studio",
        image:
          "https://www.svgrepo.com/show/354012/looker-icon.svg",
      },
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      {
        name: "Data Cleaning",
        image:
          "https://cdn.iconscout.com/icon/premium/png-512-thumb/data-cleaning-3135434-2607530.png?f=webp&w=512",
      },
      {
        name: "Data Transformation",
        image:
          "https://cdn.iconscout.com/icon/premium/png-512-thumb/data-transformation-5180522-4320589.png?f=webp&w=512",
      },
      {
        name: "ETL Process",
        image:
          "https://cdn.iconscout.com/icon/premium/png-512-thumb/etl-10518500-8480490.png?f=webp&w=512",
      },
      {
        name: "Data Modelling",
        image:
          "https://www.svgrepo.com/show/438985/sql.svg",
      },
      {
        name: "Data Warehousing",
        image:
          "https://www.svgrepo.com/show/486283/data-center-data-warehouse.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Charlotte_49ers_logo.svg/396px-Charlotte_49ers_logo.svg.png?20220710050501",
    role: "Graduate Assistant - Data Engineer",
    company: "University of North Carolina",
    date: "October 2023 - May 2025",
    desc: "I optimized Banner’s PostgreSQL queries using CTEs, window functions, and CASE statements to analyze student records, course enrollments, and grades for trend monitoring and progress tracking. Processed thousands of DocuSign form submissions stored as JSON files in S3, using AWS Glue Crawlers to catalog and structure the data before loading it into Redshift. Improved Redshift query performance by applying distribution keys on department_id and sort keys on submission_date, enabling faster aggregations and operational insights. Designed Tableau dashboards connected to both Redshift and PostgreSQL to visualize key academic metrics, streamline approval workflows, and support departmental resource planning.",
    skills: [
      "SQL", 
      "PostgreSQL Database",
      "Amazon S3",
      "AWS Glue",
      "AWS Redshift",
      "Tableau",
      "Communication", 
      "Data Analysis & Reporting"
    ],
  },
  {
    id: 0,
    img: "https://companieslogo.com/img/orig/BEL.NS-40caa314.png?t=1720244491",
    role: "Data Analyst Intern - Defense Application",
    company: "Bharat Electronics Limited",
    date: "June 2022 - May 2023",
    desc: "I used Python (Pandas) in Jupyter Notebook to preprocess aircraft sensor data, performing schema alignment, conditional filtering, time-based slicing, and applying custom functions to prepare it for analysis. The cleaned data was exported to MySQL using SQLAlchemy, where I wrote complex queries with JOINs, CTEs, and CASE statements to analyze fault patterns, high-risk components, and temperature-related error trends. I also built dashboards to track recurring faults and component issues, providing operational insights and supporting better maintenance planning.",
    skills: [
      "Tableau", 
      "Power BI", 
      "Python(Pandas)", 
      "SQL"
    ],
     }
];

export const education = [
  {
    id: 0,
    img: "https://i.etsystatic.com/23898732/r/il/a259b6/6022190175/il_fullxfull.6022190175_iyz8.jpg",
    school: "University Of North Carolina",
    date: "Aug 2023 - May 2025",
    grade: "3.8 GPA",
    course : "Business Intelligence and Analytics, Knowledge Based Systems, Applied databases, Visual Analytics. ",
    degree: "Masters of Science - Information Technology",
  },
  {
    id: 1,
    img: "https://i0.wp.com/sjbit.edu.in/wp-content/uploads/2021/07/VTU-Logo-250x250-1.png?w=250&ssl=1",
    school: "Visvesvaraya Technological University (VTU)",
    date: "July 2019 - June 2023",
    grade: "8.5 CGPA",
    course : "Database Management Systems, Big Data Analytics, Data Mining, Machine Learning.",
    degree: "Bachelor of Engineering - Computer Science",
  }
];

export const publication = [
{
  id: 1,
  name: "Smart Parking for Urban Cities Using IoT and Edge AI, DOI: 10.17148/IJARCCE.2023.12468, April 2023",
  conference: "The International Journal of Advanced Research in Computer and Communication Engineering",
  link: "https://www.researchgate.net/publication/370130779_Smart_Parking_for_Urban_Cities_Using_IoT_and_Edge_AI"
  }

]
export const certifications = [
  {
    title: "AWS Certified Data Engineer Associate Certification",
    
    skills: [
      {
        link: "https://www.credly.com/badges/1dbd6528-a156-425c-85b1-c10347ed1cee",
      },
    ],
  },
  {
    title: "Google Data Analytics Professional Certificate",
   
    skills: [
      {
        link: "https://www.credly.com/badges/cb19bc9c-b042-4e2f-80ba-78527e1d49c6/print",
      },
    ],
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
   
    skills: [
      {
        link: "https://www.credly.com/badges/19623052-d0c4-4cff-a253-ef1a2871a0d7/public_url",
      },
    ],
  },
  {
    title: "AWS Certified AI Practitioner ",
   
    skills: [
      {
        link: "https://www.credly.com/badges/f13ffad9-84ff-4269-b299-3abdaea222fd",
      },
    ],
  },
];


export const projects = [
  {
    id: 9,
    title: "Financial Loan Assessment",
    description:
      "I transformed loan data from a CSV file to MS SQL Server, focusing on data cleaning and error correction. I developed KPIs for loan applications and ratios to distinguish between performing and non-performing loans. I also created Tableau dashboards to visualize loan metrics and validated the calculations using SQL Server Management Studio.",
    image:
      "https://i.imgur.com/aATVd1l.jpeg",
    tags: [
      "Tableau", 
      "SQL Querying", 
      "Microsoft SQL Server",
      "SQL Server Management Studio"
    ],
    github: "https://github.com/aditirpatil11/Financial-Loan-Assessment.git",
    webapp: "https://public.tableau.com/views/FinancialLoanAssessment/SummaryDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  },
  {
    id: 0,
    title: "Real-Time Event Streaming Pipeline for E-Commerce",
    description:
      "I designed and deployed a real-time event streaming pipeline for an e-commerce platform using Apache Kafka on AWS EC2, with Python scripts simulating continuous user activity such as product views, cart additions, and purchases. AWS Lambda functions were configured to consume events from Kafka, process them in real time, and store structured JSON data in Amazon S3 for downstream analytics. AWS Glue was integrated to catalog and structure the event data, enabling seamless SQL querying in Amazon Athena to analyze customer behavior patterns and product performance. I validated the end-to-end pipeline by running analytical queries in Athena to ensure data accuracy, timeliness, and reliability.",
    image:
      "https://i.imgur.com/Dgthbpw.jpeg",
    tags: [
      " Apache Kafka, Python, AWS EC2, AWS Lambda, AWS Glue, S3, Athena"

    ],
  },
  {
    id: 0,
    title: "Predictive Employee Turnover Analysis",
    description:
      "I implemented a database schema in Google BigQuery to manage and analyze employee data for turnover prediction. By connecting Google Colab to BigQuery, I facilitated efficient data access and manipulation. I built a churn model using PyCaret and Random Forest to identify at-risk employees, exporting the results back to BigQuery. Additionally, I created a Looker Studio dashboard to visualize turnover risks and analyze factors affecting employee retention.",
    image:
      "https://i.imgur.com/FgMDEdp.jpeg",
    tags: [
      "Google Cloud BigQuery", "Python (Colab)", "PyCaret", "Random Forest Classifier", "Looker Studio"

    ],
    
    github: "https://github.com/aditirpatil11/Predictive-Employee-Turnover-Analysis.git",
    webapp: "https://lookerstudio.google.com/u/0/reporting/7ffc1bcd-2646-48ef-ab05-d7690e2e9c4d/page/QXJ8D?s=tBJizqacXv0",
  },
  
  {
    id: 2,
    title: "Analysis of Covid-19 in India",
    description: "Developed an interactive Tableau dashboard to visualize COVID-19 data in India by integrating six CSV files sourced from Kaggle, including Statewise Testing Details, COVID-19 India, COVID Vaccine Statewise, Age Group Details, ICMR Testing Labs,** and **Individual Details. Created various visualizations such as line charts, bar charts, and donut charts to analyze key statistics, including state-wise cases, vaccination doses administered, and age group distributions. Demonstrated expertise in data blending and effective visualization techniques to enhance data insights.",
    image:
      "https://i.imgur.com/zKgMi8a.jpeg",
    tags: ["Tableau", "Data Integration", "Data Cleaning", "Data Transformation",],
    github: "https://github.com/aditirpatil11/Analysis-of-Covid19-in-India.git",
    webapp: "https://public.tableau.com/views/Covid-19dashboard_17249218927630/Covid-19?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

  },
  {
    id: 3,
    title: "Video Games Sales Analysis",
    description:
      "In my project, I developed an interactive Tableau dashboard to visualize video game sales data from a dataset with about 70,000 rows and 11 columns, including attributes like rank, name, platform, year, genre, publisher, and total sales. I created a flexible 'Zone Sales' parameter that allows users to select different sales categories, utilizing a CASE statement for dynamic display. The dashboard features visualizations that compare Year and the selected Zone Sales, with filters to exclude null values. I enhanced interactivity by adding Start Date and End Date parameters for date range selection, as well as visualizations for the Top 10 Video Game Sales, Top 10 Publishers, and Top 10 Platforms, creating an engaging and insightful user experience.",
    image:
      "https://i.imgur.com/LmtBhuv.jpeg",
    tags: ["Tableau", "Data Analysis", "Data Visualization", "Data Cleaning"],
    github: "https://github.com/aditirpatil11/Video-Games-Sales-Analysis.git",
    webapp: "https://public.tableau.com/views/Video-Game-Sales_17250388043890/Video-Game-Sales?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  },
  {
    id: 10,
    title: "Real Estate Management",
    description:
      "Developed an interactive Power BI dashboard for real estate property management, showcasing my data visualization and analysis skills. The dashboard features various visualizations, including a bar chart for properties by bedroom count, cards for total properties and waterfront status percentages, and a line chart indicating the number of properties built over the years. I integrated a map to display property locations across different states and applied extensive formatting to enhance visual appeal. Custom DAX measures calculated key metrics, while interactive elements like filters and a custom hide/show functionality improved user experience. The project was published to the Power BI service for online access, with a focus on mobile responsiveness and performance optimization. This comprehensive dashboard effectively facilitates real estate analytics and informed decision-making.",
    image:
      "https://i.imgur.com/i3MwVni.jpeg",
    tags: ["Power BI", "DAX", "Performance Optimisation"],
    category: "android app",
    github: "https://github.com/aditirpatil11/Real-Estate-Management.git",
    webapp: "https://app.powerbi.com/links/XSzpNUBOr1?ctid=88d59d7d-aecb-41b2-90c5-55595de02536&pbi_source=linkShare&bookmarkGuid=bf858f2d-2c45-42a9-9914-84450d27287a",
  },
  {
    id: 1,
    title: "Zomato Restaurants Analysis",
    description:
      "I conducted an in-depth analysis of Zomato restaurant data using Power BI to derive meaningful insights. I sourced a comprehensive dataset from Kaggle and integrated the CSV file into Power BI. Throughout the process, I cleaned and transformed the dataset by identifying and rectifying errors to ensure data accuracy and consistency. I developed key metrics, including the total number of restaurants, countries, and cities represented in the dataset. Finally, I designed a Power BI dashboard to visualize these key insights and trends in restaurant distribution and performance.",
      image: 
      "https://i.imgur.com/JVYweDS.jpeg",
    tags: [
      "Power BI",  
      "Data Transformation",
      "Data Modeling",
    ],
    github: "https://github.com/aditirpatil11/Zomato-Restaurant-Analysis.git",
    webapp: "https://app.powerbi.com/links/31AHqdKF1J?ctid=88d59d7d-aecb-41b2-90c5-55595de02536&pbi_source=linkShare",
  },
  {
    id: 4,
    title: "Ideal Customer Profile Insights",
    description:
      "Developed an interactive dashboard in Power BI focused on customer personality analysis using the Four P’s marketing strategy (Product, Price, Place, Promotion). The project involved importing and transforming a customer dataset to derive insights on demographics and purchasing behaviors. Key visualizations included average income by education and marital status, customer distribution by year of birth, and product purchase preferences. Utilized donut and pie charts to illustrate customer segments based on education, complaints, and purchase locations, enabling better strategic marketing decisions. The dashboard enhanced understanding of customer profiles, facilitating data-driven modifications to products and marketing approaches.",
    image:
      "https://i.imgur.com/rGWRhbc.jpeg",
    tags: ["Power BI", "Data Analysis", "Data Transformation", "Marketing Strategy", "Statistical Analysis"],
    category: "web app",
    github: "https://github.com/aditirpatil11/Ideal-Customer-Profile-Insights.git",
    webapp: "https://app.powerbi.com/links/CNVcFLVA_1?ctid=88d59d7d-aecb-41b2-90c5-55595de02536&pbi_source=linkShare",
  }
 
];
export const activities = [
  {
    id: 0,
    img: "https://snead.edu/wp-content/uploads/2021/02/Rotaract-1.png",
    school: "Rotaract Club",
    date: "Jan 2021 - April 2023",
    desc: "During my undergraduate studies, I actively contributed to community service projects, organizing blood donation camps and essential distribution drives. I designed impactful posters using Figma to raise awareness and boost participation for these initiatives. Additionally, I secured resources, recruited and managed volunteers, and ensured the smooth execution of events from set-up to completion. I was responsible for managing timelines, budgets, and resources, resulting in successful and meaningful outcomes. By effectively communicating project goals to club members and volunteers, I fostered strong engagement and collaboration throughout these initiatives.",
    degree: "Program Co-Ordinator",
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJFZjCm01vzoszysqz3rMqunE0X5jrafqDOA&s",
    school: "Yuva Spark - NGO",
    date: "Oct 2022 - April 2023",
    desc: "As an Educational Technology Implementation Volunteer, I contributed to the introduction of interactive Smart Class technology in rural schools, creating modern learning environments for underprivileged students. I conducted training workshops to equip instructors with the skills to effectively use Smart Class tools, while also collaborating with them on course materials and lesson plans. Additionally, I worked closely with NGOs to develop tailored digital content that aligned with the unique needs of rural students, enhancing their overall learning experience through educational technology integration.",
    degree: "Educational Technology Implementation Volunteer",
  }
];



export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
