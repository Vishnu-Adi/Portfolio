export const RESUME_DATA = `
VISHNU ADITHYA
Software Engineer / Machine Learning
B.Tech in Computer Science and Engineering, VIT Vellore
CGPA: 9.22/10.0

CONTACT
Phone: 9176376376
Email: vishnuadithya7@gmail.com
LinkedIn: https://www.linkedin.com/in/vishnu-adithya-261477255
GitHub: https://github.com/Vishnu-Adi
Portfolio: https://vishnu-adithya-portfolio.netlify.app

PROFILE
Software engineer and machine learning builder with a B.Tech in Computer Science and Engineering from VIT Vellore. I build reliable systems across embedded networking, NLP pipelines, Salesforce automation, browser-native applications, and AI learning products. My recent work includes Cisco router software, RoBERTa-based classification, peer-to-peer file transfer, and an AI tutor with auditable learner memory.

EDUCATION
Vellore Institute of Technology, Vellore, India
Bachelor of Technology in Computer Science and Engineering
CGPA: 9.22/10.0
Aug 2022 - May 2026

EXPERIENCE

1. Software Development Engineer Intern at EmbedUR Systems, Chennai, Tamil Nadu (Jan 2026 - Present)
- Develop and test embedded software components for Cisco router platforms as part of a cross-functional systems team, working across hardware and software layers.
- Implement and validate networking protocol features in C/C++, debugging low-level packet-handling logic and partnering with senior engineers on code reviews to ensure correctness before release.
- Tech: C, C++, Embedded Systems, Networking Protocols, Cisco

2. Business Analyst and Developer Intern at Bank of New York Mellon, Chennai, Tamil Nadu (May 2025 - Jul 2025)
- Designed and shipped Salesforce automation solutions by analyzing client requirements, boosting operational efficiency by 30% and cutting manual processing time for internal workflows.
- Managed zero-downtime deployments for critical Salesforce updates and resolved functional issues for internal teams, maintaining system uptime through release cycles.
- Tech: Salesforce, Automation, Deployment, Process Improvement

3. Machine Learning Intern, CTY Program at Hewlett Packard Enterprise, Remote (Jan 2025 - May 2025)
- Architected an NLP pipeline for a Query Classification System that routed complex, unstructured queries from financial reports, cutting manual triage effort for the analytics team.
- Engineered the classification engine with fine-tuned RoBERTa and ML ensemble models, achieving 97.3% accuracy on automated sentiment and topic analysis.
- Tech: NLP, RoBERTa, Transformers, Ensemble Learning, Model Evaluation

PROJECTS

1. WebDrop - Browser-Native AirDrop
- Browser-native peer-to-peer file-sharing app that requires no native install and no manual device selection, using only built-in browser platform APIs.
- Nearby phones pair through a physical bump detected by the device-motion sensor and an ultrasonic Web Audio handshake; files stream over WebRTC data channels with chunked OPFS storage.
- Tech: JavaScript, WebRTC, OPFS, Web Audio, Device Motion
- Demo: https://web-drop-lyart.vercel.app/

2. VeriScope - Unbiased AI News Aggregator
- Developed a Python and Next.js news-analysis platform that applies NLP algorithms to detect and neutralize slanted language across articles.
- Designed a responsive interface with data visualizations for bias scores and analysis, helping users compare coverage across sources more fairly.
- Tech: Python, Next.js, NLP, Data Visualization
- Source: https://github.com/Vishnu-Adi/VeriScope

3. Tutor-System - AI Learning Platform
- Built an AI tutor with function-calling tools, a realtime voice tutor that separates foreground and background models, and source-aware chat grounded in the user's own PDFs.
- Engineered an auditable learner-memory layer with embeddings, semantic retrieval, and mastery tracking on an approximately 6,000-line Express backend.
- Tech: TypeScript, React 19, OpenRouter, Deepgram, Dexie/IndexedDB, Express

PROJECT NOTES AND TRADEOFFS

WebDrop: The hard part is coordinating proximity, signaling, connection state and storage in a browser without a native file-transfer layer. A future version should make interrupted transfers and progress states more explicit.
VeriScope: A numerical bias score is useful only when the reader can inspect the language signals behind it. The visualization should make the model legible without pretending language is perfectly objective.
Tutor-System: The challenge is keeping source context, retrieval and mastery state coherent over a long conversation. A useful memory layer should leave a trace so remembered details can be explained and corrected.

FIELD NOTES

The browser is already a system: WebDrop made the browser boundary impossible to ignore.
A good interface hides complexity, not responsibility: reliability is part of the experience whether or not someone sees the infrastructure.
Retrieval is a design decision: memory is not a feature until it can be explained.

RESEARCH

Cross-Domain Transfer Learning for WSN Anomaly Detection - PLOS ONE (Under review)
- Authored a research paper proposing a hybrid Isolation Forest/LSTM framework to address cross-domain transfer learning challenges in IoT wireless sensor networks.
- Tech: Isolation Forest, LSTM, IoT, Transfer Learning

TECHNICAL SKILLS

Languages: Python, Java, C, C++, JavaScript, TypeScript, SQL, R, Swift, HTML/CSS
Machine Learning and Data Science: PyTorch, Scikit-learn, XGBoost, NLP, RoBERTa/Transformers, LSTM, Isolation Forest, Model Fine-Tuning, Predictive Modeling, Pandas, NumPy, Matplotlib
Frameworks and Libraries: React, Next.js, Node.js, Express, Flask, WebRTC, REST APIs
Databases and Cloud: MongoDB, MySQL, Firebase, AWS (EC2), Docker, Dexie/IndexedDB
Tools and Platforms: Git, GitHub, Power BI, Tableau, Salesforce, Power Automate, CI/CD, MCP, Agile
`;
