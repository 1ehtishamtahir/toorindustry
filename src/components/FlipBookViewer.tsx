"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import * as pdfjsLib from "pdfjs-dist";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, ZoomIn, ZoomOut } from "lucide-react";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.mjs`;

interface FlipBookInstance {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
    getCurrentPageIndex: () => number;
    getPageCount: () => number;
  };
}

interface FlipBookViewerProps {
  pdfUrl: string;
  title: string;
}

export default function FlipBookViewer({ pdfUrl, title }: FlipBookViewerProps) {
  const [pages, setPages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [pageDimensions, setPageDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const flipBookRef = useRef<FlipBookInstance | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 800);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const loadPdf = async () => {
      setIsLoading(true);
      try {
        const pdf = await pdfjsLib.getDocument({ url: pdfUrl }).promise;
        setTotalPages(pdf.numPages);

        const firstPage = await pdf.getPage(1);
        const unscaledViewport = firstPage.getViewport({ scale: 1 });
        const pdfWidth = unscaledViewport.width;
        const pdfHeight = unscaledViewport.height;

        const maxDisplayWidth = isMobile ? 320 : 520;
        const maxDisplayHeight = isMobile ? 500 : 740;

        const scaleX = maxDisplayWidth / pdfWidth;
        const scaleY = maxDisplayHeight / pdfHeight;
        const fitScale = Math.min(scaleX, scaleY);

        const displayWidth = Math.round(pdfWidth * fitScale);
        const displayHeight = Math.round(pdfHeight * fitScale);

        setPageDimensions({ width: displayWidth, height: displayHeight });

        const renderScale = fitScale * 2;
        const renderedPages: string[] = [];

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: renderScale });

          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const ctx = canvas.getContext("2d")!;

          await page.render({ canvasContext: ctx, canvas, viewport }).promise;
          renderedPages.push(canvas.toDataURL("image/jpeg", 0.9));
        }

        setPages(renderedPages);
      } catch (err) {
        console.error("Failed to load PDF:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadPdf();
  }, [pdfUrl, isMobile]);

  const flipToNext = useCallback(() => {
    flipBookRef.current?.pageFlip().flipNext();
  }, []);

  const flipToPrev = useCallback(() => {
    flipBookRef.current?.pageFlip().flipPrev();
  }, []);

  const handlePageFlip = useCallback((e: { data: number }) => {
    setCurrentPage(e.data);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  const handleZoomIn = useCallback(() => {
    setZoom((z) => Math.min(z + 0.2, 2.5));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom((z) => Math.max(z - 0.2, 0.5));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") flipToNext();
      if (e.key === "ArrowLeft") flipToPrev();
      if (e.key === "f" || e.key === "F") toggleFullscreen();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [flipToNext, flipToPrev, toggleFullscreen]);

  if (isLoading) {
    return (
      <div className="flipbook-loading">
        <div className="flipbook-spinner" />
        <p>Loading catalogue...</p>
      </div>
    );
  }

  if (pages.length === 0) {
    return (
      <div className="flipbook-loading">
        <p>Failed to load catalogue. Please try again.</p>
      </div>
    );
  }

  const { width: pageWidth, height: pageHeight } = pageDimensions;

  return (
    <div className="flipbook-viewer" ref={containerRef}>
      <div className="flipbook-toolbar">
        <div className="flipbook-title">{title}</div>
        <div className="flipbook-controls">
          <button onClick={handleZoomOut} className="flipbook-btn" title="Zoom Out">
            <ZoomOut size={16} />
          </button>
          <span className="flipbook-zoom-label">{Math.round(zoom * 100)}%</span>
          <button onClick={handleZoomIn} className="flipbook-btn" title="Zoom In">
            <ZoomIn size={16} />
          </button>
          <button onClick={toggleFullscreen} className="flipbook-btn" title="Fullscreen">
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </div>

      <div className="flipbook-stage">
        <button
          className="flipbook-nav flipbook-nav-prev"
          onClick={flipToPrev}
          disabled={currentPage === 0}
          aria-label="Previous page"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          className="flipbook-book"
          style={{ transform: `scale(${zoom})` }}
        >
          <HTMLFlipBook
            ref={flipBookRef}
            width={pageWidth}
            height={pageHeight}
            size="fixed"
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={handlePageFlip}
            className="flipbook-book-inner"
            startPage={0}
            drawShadow={true}
            flippingTime={800}
            useMouseEvents={true}
            swipeDistance={30}
            clickEventForward={false}
            style={{}}
            minWidth={200}
            maxWidth={800}
            minHeight={300}
            maxHeight={1000}
            autoSize={false}
            usePortrait={false}
            startZIndex={0}
            showPageCorners={true}
            disableFlipByClick={false}
          >
            {pages.map((src, i) => (
              <div key={i} className="flipbook-page">
                <img src={src} alt={`Page ${i + 1}`} draggable={false} />
              </div>
            ))}
          </HTMLFlipBook>
        </div>

        <button
          className="flipbook-nav flipbook-nav-next"
          onClick={flipToNext}
          disabled={currentPage >= pages.length - 1}
          aria-label="Next page"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flipbook-footer">
        <span className="flipbook-page-info">
          Page {currentPage + 1} of {totalPages}
        </span>
        <div className="flipbook-progress">
          <div
            className="flipbook-progress-bar"
            style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
