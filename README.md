# PrepEasy: AI-Powered Job Interview Preparation Platform

A sophisticated web application that provides AI-powered mock interviews with real-time voice interaction, instant feedback, and personalized question generation. Built with modern web technologies and integrated with advanced AI services.

## Demo Video

Watch a full walkthrough of PrepEasy in action:

[Watch the 10-minute demo on Google Drive](https://drive.google.com/drive/folders/1QdrkNaSJrTcRXbSIBJwAR-1oCbG-g4AB?dmr=1&ec=wgc-drive-globalnav-goto)

## Table of Contents
- Introduction
- Tech Stack
- Features
- Quick Start
- Development
- Deployment
- Support

## Introduction

Built with Next.js for the user interface and backend logic, Firebase for authentication and data storage, styled with TailwindCSS and using Vapi's voice agents, PrepEasy is a website project designed to help you learn integrating AI models with your apps. The platform offers a sleek and modern experience for job interview preparation.

## Tech Stack
- Next.js
- Firebase
- Tailwind CSS
- Vapi AI
- shadcn/ui
- Google Gemini
- Zod

## Features

**Authentication**: Sign Up and Sign In using password/email authentication handled by Firebase.

**Create Interviews**: Easily generate job interviews with help of Vapi voice assistants and Google Gemini.

**Get feedback from AI**: Take the interview with AI voice agent, and receive instant feedback based on your conversation.

**Modern UI/UX**: A sleek and user-friendly interface designed for a great experience.

**Interview Page**: Conduct AI-driven interviews with real-time feedback and detailed transcripts.

**Dashboard**: Manage and track all your interviews with easy navigation.

**Responsiveness**: Fully responsive design that works seamlessly across devices.

## Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:
- Git
- Node.js
- npm (Node Package Manager)

### Cloning the Repository

```bash
git clone https://github.com/Mansimishra19/PrepEasy.git
cd PrepEasy
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

Replace the placeholder values with your actual Firebase, Vapi credentials.

### Running the Project

```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the project.

## Development

### Available Scripts
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Key Components
- **Agent.tsx**: Main interview interface with Vapi AI integration
- **InterviewCard.tsx**: Display component for interview sessions
- **AuthForm.tsx**: Authentication forms
- **Header.tsx**: Navigation and user menu

## Deployment

### Vercel Deployment (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
1. Build the application: `npm run build`
2. Start production server: `npm run start`
3. Configure your hosting provider with the built files

## Support

For questions, issues, or feature requests:
- Create an issue in the GitHub repository
- Contact: mansim1404@gmail.com

---

**Built for better interview preparation**
