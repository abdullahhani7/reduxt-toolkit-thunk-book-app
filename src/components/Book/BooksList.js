const BooksList = ({ isLoading, bookList }) => {
  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? "Loading ..." : bookList}
    </div>
  );
};

export default BooksList;
