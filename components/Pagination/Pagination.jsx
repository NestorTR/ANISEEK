const Pagination = ({ currentPage, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="pagination__button"
      >
        Anterior
      </button>
      <span className="pagination__current">Página {currentPage}</span>
      <button onClick={handleNext} className="pagination__button">
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
