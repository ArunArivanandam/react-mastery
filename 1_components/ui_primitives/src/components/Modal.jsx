import { useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ children, title, isOpen, onClose }) {
  // Close modal when 'Escape' key is pressed
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      // Prevent background scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // If the modal shouldn't be shown, render nothing
  if (!isOpen) return null;

  return createPortal(
    // Backdrop / Overlay
    <div
      className="fixed inset-0 z-1000 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Content Box */}
      <div
        className="w-full max-w-lg animate-fade-in rounded-lg bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="mb-4 flex items-center justify-between border-b border-gray-200 pb-3">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <button
            className="text-2xl leading-none text-gray-500 transition-colors hover:text-black focus:outline-none"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </header>

        <main className="text-base leading-relaxed text-gray-700">
          {children}
        </main>
      </div>
    </div>,
    document.body,
  );
  //   if (!isOpen) return null;

  //   return (
  //     <div
  //       onClick={onClose}
  //       className="fixed inset-0 bg-black/50 flex items-center justify-center"
  //     >
  //       <div
  //         onClick={(e) => e.stopPropagation()}
  //         className="bg-white rounded-lg p-6 w-125"
  //       >
  //         {title && <h2 className="text-xl font-bold text-gray-800">{title}</h2>}
  //         {children}
  //         <button
  //           onClick={onClose}
  //           className="bg-red-500 px-3 py-2 border border-gray-50 rounded-xl"
  //         >
  //           Close
  //         </button>
  //       </div>
  //     </div>
  //   );
}

export default Modal;
