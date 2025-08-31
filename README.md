# SummarizeFast - AI-Powered Document & Image Summarization

🚀 **Live Demo**: [https://summarizefast.vercel.app/](https://summarizefast.vercel.app/)  
📂 **GitHub**: [https://github.com/chinmaypandey62/summarizefast](https://github.com/chinmaypandey62/summarizefast)

Transform your PDFs, documents, and images into concise, intelligent summaries with AI technology. Upload, process, and get structured summaries in seconds.

## 🎯 Project Overview

This Document Summary Assistant was built as a technical assessment project, demonstrating full-stack development capabilities with modern web technologies and AI integration. The application processes various document formats and generates intelligent summaries using Google's Gemini AI.

## ✨ Features

### Core Functionality
- **📄 Multi-Format Document Support**: PDF, Word documents, text files, markdown, RTF, CSV, JSON, XML
- **🖼️ Image Processing with OCR**: JPG, PNG, GIF, WebP, BMP, SVG with advanced text extraction
- **🤖 AI-Powered Summarization**: Integration with Google Gemini AI for intelligent content analysis
- **📏 Flexible Summary Lengths**: Short (2-3 sentences), Medium (1-2 paragraphs), Long (3-4 paragraphs)
- **⚡ Real-time Processing**: Lightning-fast document analysis and summary generation

### User Experience
- **🎨 Modern UI/UX**: Clean, intuitive interface with glassmorphism design elements
- **📱 Mobile-First Responsive**: Optimized dark theme with mobile-specific navigation
- **🖱️ Drag & Drop Interface**: Easy file upload with visual feedback and progress indicators
- **🔄 Live Preview**: Split-pane layout showing original document alongside summary
- **⏳ Smart Loading States**: Progress indicators and error handling for better UX

### Technical Features
- **🔍 Advanced OCR**: Tesseract.js integration for scanned document text extraction
- **🛡️ Error Handling**: Comprehensive error management with retry mechanisms
- **🎯 File Validation**: Support for multiple file types with size limits (10MB max)
- **🌐 Production Ready**: Deployed on Vercel with optimized performance

## 🏗️ Technical Architecture

### Frontend Stack
- **Framework**: Next.js 15.5.2 (React 18+ with App Router)
- **Styling**: Custom CSS with CSS Variables for theming
- **UI Components**: Custom-built components with consistent design system
- **State Management**: React Hooks (useState, useEffect) for local state
- **File Processing**: FileReader API for client-side file handling

### Backend & AI
- **API Routes**: Next.js API routes for serverless functions
- **AI Integration**: Google Gemini AI API for content summarization
- **OCR Processing**: Tesseract.js for image text extraction
- **PDF Processing**: PDF-parse library for document text extraction

### Deployment & Performance
- **Platform**: Vercel (Serverless deployment)
- **Performance**: Optimized bundle size, lazy loading, and caching
- **SEO**: Meta tags optimization and structured data
- **Accessibility**: WCAG compliant design patterns

## 📁 Project Structure

```
document-summary-assistant/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API endpoints
│   │   │   └── summarize/     # Summary generation API
│   │   ├── summarize/         # Summary page
│   │   ├── globals.css        # Global styles & CSS variables
│   │   ├── layout.js          # Root layout component
│   │   └── page.js            # Homepage
│   ├── components/            # Reusable React components
│   │   ├── Button.js          # Custom button component
│   │   ├── FileViewer.js      # Document preview component
│   │   ├── Navigation.js      # Header navigation
│   │   └── UploadArea.js      # File upload interface
│   └── styles/                # Component-specific CSS
│       ├── Button.css
│       ├── Homepage.css
│       ├── Navigation.css
│       ├── SummarizePage.css
│       └── UploadArea.css
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
├── next.config.mjs          # Next.js configuration
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Google AI API key (for Gemini integration)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/chinmaypandey62/summarizefast.git
cd document-summary-assistant
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Environment Setup**
Create a `.env.local` file in the root directory:
```env
GOOGLE_AI_API_KEY=your_gemini_api_key_here
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open the application**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🔧 API Integration

### Google Gemini AI
The application uses Google's Gemini AI for intelligent summarization:
- **Endpoint**: `/api/summarize`
- **Method**: POST (FormData)
- **Features**: Content analysis, key point extraction, structured summaries
- **Error Handling**: Retry logic for rate limiting and service overload

### File Processing Pipeline
1. **Upload**: File validation and format detection
2. **Text Extraction**: 
   - PDFs: Direct text extraction using pdf-parse
   - Images: OCR processing with Tesseract.js
   - Documents: Native text reading
3. **AI Processing**: Content analysis and summary generation
4. **Response**: Structured JSON with summary and metadata

## 📱 Mobile Optimization

- **Responsive Design**: Mobile-first CSS approach with breakpoints
- **Touch Interactions**: Optimized for mobile touch interfaces
- **Dark Theme**: Comprehensive dark mode with glassmorphism effects
- **Performance**: Optimized bundle size and lazy loading for mobile networks

## 🧪 Testing & Quality

- **Error Handling**: Comprehensive error boundaries and user feedback
- **File Validation**: Type checking and size limits
- **Rate Limiting**: API retry logic with exponential backoff
- **Cross-browser**: Tested across modern browsers
- **Performance**: Lighthouse optimization for Core Web Vitals

## 🚀 Deployment

The application is deployed on Vercel with automatic deployments from the main branch.

### Production Build
```bash
npm run build
npm start
```

### Environment Variables (Production)
- `GOOGLE_AI_API_KEY`: Google Gemini AI API key

## 🎨 Design System

### Color Scheme
- **Primary**: Blue (#2563eb) with variants
- **Surfaces**: Dynamic light/dark theme support
- **Text**: High contrast ratios for accessibility

### Typography
- **Primary Font**: System fonts (-apple-system, Segoe UI, Roboto)
- **Monospace**: SF Mono, Monaco, Inconsolata for code

### Components
- Consistent spacing using CSS custom properties
- Glassmorphism effects with backdrop-filter
- Smooth transitions and micro-interactions

## 🔍 Technical Approach (Assessment Summary)

This project demonstrates modern full-stack development practices with React/Next.js, showcasing:

**Problem-Solving**: Implemented intelligent file processing pipeline with OCR and AI integration, addressing real-world document processing challenges with comprehensive error handling and user experience optimization.

**Code Quality**: Clean, modular architecture with separation of concerns, custom CSS design system, and production-ready deployment practices. Used modern React patterns and Next.js features for optimal performance.

**Functionality**: Complete document summarization workflow from upload to AI-generated summaries, supporting multiple file formats with mobile-responsive design and real-time processing feedback.

**Documentation**: Comprehensive README with clear setup instructions, architecture overview, and technical decisions explanation for maintainability and team collaboration.

## 📄 Supported File Types

### Documents
- **PDF**: Direct text extraction with formatting preservation
- **Microsoft Word**: .doc, .docx support
- **Text Files**: .txt, .md, .rtf, .csv
- **Structured Data**: JSON, XML

### Images (with OCR)
- **Common Formats**: JPG, JPEG, PNG, GIF
- **Web Formats**: WebP, SVG
- **Other**: BMP, TIFF
- **Maximum Size**: 10MB per file

## 🙏 Acknowledgments

- **Google Gemini AI**: For intelligent summarization capabilities
- **Tesseract.js**: For OCR text extraction
- **Next.js**: For the React framework and deployment platform
- **Vercel**: For seamless hosting and deployment

---

**Built with ❤️ for technical assessment - Demonstrating modern web development practices and AI integration**
