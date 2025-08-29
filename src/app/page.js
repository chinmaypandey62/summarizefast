import Link from 'next/link';
import Button from '@/components/Button';
import UploadArea from '@/components/UploadArea';

export default function HomePage() {
  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Transform Documents & Images into{' '}
              <span className="hero-accent">Intelligent Summaries</span>
            </h1>
            <p className="hero-description">
              Harness the power of AI to extract key insights from your documents and images. 
              Upload PDFs, scanned documents, or images and get structured, concise summaries in seconds.
            </p>
            
            <div className="hero-upload-section">
              <UploadArea variant="compact" />
              <div className="upload-divider">
                <span>or</span>
              </div>
              <div className="hero-actions">
                <Link href="/summarize">
                  <Button size="large" variant="outline">
                    Browse Examples
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our AI Assistant?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📄</div>
              <h3>Document & Image Processing</h3>
              <p>Advanced text extraction from PDFs, scanned documents, and images with high accuracy.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI-Powered OCR</h3>
              <p>Cutting-edge AI technology with OCR capabilities that understands both text and visual content.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Get your summaries in seconds, not minutes. Optimized for speed across all formats.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Multiple Formats & Lengths</h3>
              <p>Support for PDFs, JPEG, PNG images. Choose from short, medium, or long summaries.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
