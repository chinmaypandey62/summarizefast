import Navigation from '@/components/Navigation';
import "./globals.css";

export const metadata = {
  title: "SummarizeFast - AI-Powered PDF Summarization",
  description: "Transform your PDFs into concise, intelligent summaries with AI technology. Upload, process, and get structured summaries in seconds.",
  keywords: "PDF summarization, AI document processing, text extraction, document analysis",
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
