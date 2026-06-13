const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center py-6">
      <button
        onClick={scrollToTop}
        className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
      >
        Back To Top
      </button>
    </div>
  );
};

export default BackToTop;