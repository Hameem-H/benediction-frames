import { useEffect } from "react";

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  trailerId?: string;
  title?: string;
}

export function TrailerModal({
  isOpen,
  onClose,
  trailerId,
  title = "Official Trailer",
}: TrailerModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock scroll on body when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Performance: Return null when closed or no trailerId so iframe is NOT rendered
  if (!isOpen || !trailerId) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} Modal`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6 md:p-10 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (X) */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center text-foreground/80 hover:text-foreground bg-black/60 hover:bg-black/90 transition-colors text-xl font-light focus:outline-none"
        >
          ✕
        </button>

        {/* Dynamic YouTube iframe - loads ONLY when open, destroyed when closed */}
        <iframe
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1`}
          title={`${title} Trailer`}
          className="h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
