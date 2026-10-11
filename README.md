# CortexAI

> A modern, microservices-driven multi-agent AI workspace featuring intelligent routing, live code sandboxes, multimodal document synthesis, and automated billing.

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![LangChain](https://img.shields.io/badge/Orchestration-LangChain%20%2F%20LangGraph-1C3C3C)](https://langchain.com/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Redis](https://img.shields.io/badge/Cache-Redis-DC382D?logo=redis&logoColor=white)](https://redis.io/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## 📌 Overview / About

**CortexAI** is a comprehensive, production-ready AI workspace built on a decoupled microservices architecture. It unifies specialized autonomous agents—including code generation with live in-browser preview, presentation/PDF synthesis, web research, visual reasoning, and vector-backed document QA—into a single, cohesive developer-friendly interface.

### The Problem It Solves
Traditional AI workflows are fragmented: developers and creators switch constantly between conversational chatbots, code sandboxes, document generation tools, and search engines. CortexAI solves this by routing requests through a central **API Gateway** to specialized agents orchestrated with **LangGraph**, while managing user credits, persistent conversation history, and cloud artifact storage in a scalable, microservices infrastructure.

---

## ✨ Features

- 🧠 **Intelligent Multi-Agent Graph (LangGraph)**: Auto-routes user prompts to specialized domain agents (Chat, Coding, PDF/RAG, PPT, Vision, and Web Search).
- 💻 **Live Code Artifacts & Sandbox**: Integrated Monaco Editor with real-time multi-file (`index.html`, `style.css`, `script.js`) live preview and one-click code copying.
- 📊 **Automated Presentation & PDF Synthesis**: Generates downloadable PowerPoint decks (`pptxgenjs`) and formatted PDF documents (`pdfkit`), persisted on AWS S3 with presigned URLs.
- 🔍 **Real-Time Web Search & Document RAG**: Live web information retrieval powered by Tavily Search and vector semantic search powered by Qdrant.
- 🎙️ **Voice Prompts (Speech-to-Text)**: Native browser Web Speech API integration for hands-free prompt dictation.
- 💳 **Credit & Billing System**: Secure checkout with Razorpay, instant webhook/signature verification, and automatic credit deductions per AI invocation.
- 🔐 **Firebase & JWT Authentication**: Google OAuth authentication with HTTP-only cookies and role/credit enforcement at the API Gateway.
- ⚡ **Scalable Microservices Backend**: Independent services for Gateway, Auth, Chat, Billing, and Agents communicating via REST and Redis caching.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite, Tailwind CSS v4, Redux Toolkit, Motion, Monaco Editor (`@monaco-editor/react`), Lucide Icons, React Syntax Highlighter |
| **API Gateway** | Express.js, `express-http-proxy`, Cookie Parser, Morgan, CORS |
| **AI & Orchestration** | LangChain, LangGraph, Google Gemini (`@google/generative-ai`), Groq, OpenRouter, Tavily Search |
| **Vector DB & Storage** | Qdrant Vector Cloud, AWS S3 (`@aws-sdk/client-s3`), Multer |
| **Databases & Cache** | MongoDB (Mongoose), Redis |
| **Payment Gateway** | Razorpay Node SDK |
| **Authentication** | Firebase Auth (Client & Admin SDK) |
| **Document Engines** | PDFKit, PPTXGenJS, PDF-Parse |
| **DevOps & Containers** | Docker, Docker Compose |

---

## 🖼️ Screenshots / Demo

> *Add application screenshots and demo GIFs here.*

| Chat & Multi-Agent Interface | Live Code Artifacts & Preview |
| :---: | :---: |
| ![Chat Interface Placeholder](https://via.placeholder.com/600x350/0d0f14/ffffff?text=CortexAI+Chat+Interface) | ![Artifacts Preview Placeholder](https://via.placeholder.com/600x350/0d0f14/ffffff?text=Live+Code+Artifacts+Sandbox) |

| Document & PPT Generation | Plans & Razorpay Billing |
| :---: | :---: |
| ![Document Generation Placeholder](https://via.placeholder.com/600x350/0d0f14/ffffff?text=PDF+%26+PPT+Document+Generation) | ![Billing Drawer Placeholder](https://via.placeholder.com/600x350/0d0f14/ffffff?text=Billing+Drawer+%26+Pricing) |

- **Live Demo**: [TODO: Add Live Demo Link]
- **GitHub Repository**: [https://github.com/abhishek23027kushwaha/cortexAi.git](https://github.com/abhishek23027kushwaha/cortexAi.git)

---

## 📂 Folder Structure

```text
cortexAi/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD deployment workflow
├── backend/
│   ├── docker-compose.yml          # Redis & container orchestration
│   ├── gateway/                    # Reverse proxy & API Gateway (Port 8000)
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── utils/
│   ├── services/
│   │   ├── agent/                  # Multi-agent LangGraph service (Port 8003)
│   │   │   ├── agents/             # Chat, Coding, Vision, PDF, PPT, Search
│   │   │   ├── config/             # Multer, S3, Memory
│   │   │   ├── graph/              # LangGraph workflow graphs
│   │   │   └── utils/              # S3 upload/download, generators, credits
│   │   ├── auth/                   # Authentication & user profile (Port 8001)
│   │   │   ├── config/             # DB & Firebase configuration
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   └── routes/
│   │   ├── billing/                # Razorpay checkout & plans (Port 8004)
│   │   │   ├── config/             # Plans & Razorpay client
│   │   │   ├── controllers/
│   │   │   └── models/
│   │   └── chat/                   # Conversation & message storage (Port 8002)
│   │       ├── controllers/
│   │       ├── models/
│   │       └── routes/
│   └── shared/
│       └── redis/                  # Shared Redis client connection
└── frontend/                       # React 19 + Vite client (Port 5173)
    ├── public/
    └── src/
        ├── components/             # Artifact, ChatArea, ChatInput, SideBar, BillingDrawer
        ├── features/               # API feature actions
        ├── pages/                  # Home view
        ├── redux/                  # Redux slices (user, conversation, message)
        └── utils/                  # Axios & Firebase client configs
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js** (v18.x or v20.x recommended)
- **npm** or **yarn**
- **Docker & Docker Compose** (for Redis)
- **MongoDB** instance (local or MongoDB Atlas)
- **Firebase Project** (with Authentication enabled)
- API credentials for **Groq**, **Google Gemini**, **Tavily**, **OpenRouter**, **AWS S3**, **Qdrant**, and **Razorpay**.

---

### Installation Steps

#### 1. Clone the repository
```bash
git clone https://github.com/abhishek23027kushwaha/cortexAi.git
cd cortexAi
```

#### 2. Start Redis with Docker Compose
```bash
cd backend
docker-compose up -d
cd ..
```

#### 3. Install dependencies across services

```bash
# Install Gateway dependencies
cd backend/gateway && npm install && cd ../..

# Install Auth Service dependencies
cd backend/services/auth && npm install && cd ../../..

# Install Chat Service dependencies
cd backend/services/chat && npm install && cd ../../..

# Install Billing Service dependencies
cd backend/services/billing && npm install && cd ../../..

# Install Agent Service dependencies
cd backend/services/agent && npm install && cd ../../..

# Install Frontend dependencies
cd frontend && npm install && cd ..
```

---

### ⚙️ Environment Variables Setup

Create a `.env` file in each respective directory based on the templates below:

#### `backend/gateway/.env`
```env
PORT=8000
FRONTEND_URL=http://localhost:5173
AUTH_SERVICE=http://localhost:8001
CHAT_SERVICE=http://localhost:8002
AGENT_SERVICE=http://localhost:8003
BILLING_SERVICE=http://localhost:8004
JWT_SECRET=your_jwt_secret_here
```

#### `backend/services/auth/.env`
```env
PORT=8001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_here
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY=your_firebase_private_key
```

#### `backend/services/chat/.env`
```env
PORT=8002
MONGODB_URI=your_mongodb_connection_string
```

#### `backend/services/billing/.env`
```env
PORT=8004
MONGODB_URI=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
AUTH_SERVICE=http://localhost:8001
```

#### `backend/services/agent/.env`
```env
PORT=8003
MONGODB_URI=your_mongodb_connection_string
REDIS_URL=redis://localhost:6379
CHAT_SERVICE=http://localhost:8002
AUTH_SERVICE=http://localhost:8001

# AI & LLM Providers
GROQ_API_KEY=your_groq_api_key
GOOGLE_API_KEY=your_google_gemini_api_key
OPENROUTER_API_KEY=your_openrouter_api_key
TAVILY_API_KEY=your_tavily_search_api_key

# Vector Database
QDRANT_API_KEY=your_qdrant_api_key
QDRANT_URL=your_qdrant_cluster_url

# AWS S3 Storage
AWS_REGION=your_aws_region
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_KEY=your_aws_secret_key
AWS_BUCKET_NAME=your_s3_bucket_name
```

#### `frontend/.env`
```env
VITE_API_URL=http://localhost:8000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

---

### Running the Services Locally

Open separate terminal tabs or use a process manager (e.g., `concurrently` / `pm2`):

```bash
# Terminal 1 - Gateway
cd backend/gateway && npm run dev

# Terminal 2 - Auth Service
cd backend/services/auth && npm run dev

# Terminal 3 - Chat Service
cd backend/services/chat && npm run dev

# Terminal 4 - Agent Service
cd backend/services/agent && npm run dev

# Terminal 5 - Billing Service
cd backend/services/billing && npm run dev

# Terminal 6 - Frontend Client
cd frontend && npm run dev
```

The frontend will be available at: `http://localhost:5173`  
The Gateway will be listening at: `http://localhost:8000`

---

## 📡 API Endpoints

All external client requests are routed through the API Gateway (`http://localhost:8000`).

### Authentication (`/api/auth`)
| Method | Route | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/login` | Authenticates Firebase ID token, sets session cookie |
| `GET` | `/api/auth/logout` | Clears authentication token cookie |
| `POST` | `/api/auth/update-plan` | Internal/Billing webhook to upgrade user tier |
| `POST` | `/api/auth/deduct-credits` | Internal route to deduct credits upon agent execution |
| `GET` | `/api/me` | Fetches authenticated user profile & credit balance |

### Chat & History (`/api/chat`)
| Method | Route | Description |
| :--- | :--- | :--- |
| `GET` | `/api/chat/create-conversation` | Initializes a new conversation session |
| `GET` | `/api/chat/get-conversations` | Retrieves list of all conversations for current user |
| `POST` | `/api/chat/update-conversation` | Updates conversation title and timestamp |
| `POST` | `/api/chat/save-message` | Saves user or assistant message to database |
| `GET` | `/api/chat/get-messages/:conversationId` | Fetches complete message history for conversation |

### Agent Service (`/api/agent`)
| Method | Route | Description |
| :--- | :--- | :--- |
| `POST` | `/api/agent/chat` | Dispatches prompt & file upload (`multipart/form-data`) to LangGraph agent |

### Billing (`/api/billing`)
| Method | Route | Description |
| :--- | :--- | :--- |
| `POST` | `/api/billing/create` | Creates a new Razorpay checkout order |
| `POST` | `/api/billing/verify` | Validates Razorpay HMAC SHA256 signature and adds credits |

---

## 💡 Usage

1. **Sign In**: Launch the app and authenticate using Google OAuth via the modal.
2. **Select an Agent Mode**:
   - **Auto**: Lets the graph select the optimal tool or agent.
   - **Coding**: Prompts generate multi-file HTML/CSS/JS code, opened automatically in the side Artifacts pane.
   - **PDF**: Extracts insights from uploaded documents or formats responses as structured PDF downloads.
   - **PPT**: Converts topics and outlines into styled PowerPoint presentation files.
   - **Vision**: Analyzes uploaded images with multimodal models.
   - **Search**: Executes live queries over the web using Tavily.
3. **Inspect Artifacts**: Click on the artifact panel on the right side to inspect code in Monaco Editor or toggle to the **Preview** tab to run it live.
4. **Upgrade Plan**: Open the billing drawer to purchase additional credits through Razorpay checkout.

---

## 🗺️ Future Improvements / Roadmap

- [ ] Webhook support for automated subscription renewal handling.
- [ ] Multi-turn autonomous tool execution for full-stack repository scaffolding.
- [ ] Export artifacts directly to GitHub repositories via GitHub API.
- [ ] Collaborative real-time multi-user chat sessions using WebSockets.
- [ ] Dark/Light mode theme toggle customization.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).

---

## 👤 Author / Contact

- **Author**: Abhishek Kushwaha
- **GitHub**: [@abhishek23027kushwaha](https://github.com/abhishek23027kushwaha)
- **Repository**: [https://github.com/abhishek23027kushwaha/cortexAi](https://github.com/abhishek23027kushwaha/cortexAi)
- **Email**: [TODO: Add Contact Email]
