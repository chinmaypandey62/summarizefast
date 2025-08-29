import Navigation from '@/components/Navigation';
import "./globals.css";

export const metadata = {
  title: "SummarizeFast - AI-Powered Document & Image Summarization",
  description: "Transform your PDFs, documents, and images into concise, intelligent summaries with AI technology. Upload, process, and get structured summaries in seconds.",
  keywords: "PDF summarization, document summarization, image OCR, AI document processing, text extraction, document analysis, scanned documents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body>
        <Navigation />
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
