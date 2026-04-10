export default function BackToTop({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-800 transition-colors duration-200 shadow-lg"
    >
      ↑
    </button>
  );
}
