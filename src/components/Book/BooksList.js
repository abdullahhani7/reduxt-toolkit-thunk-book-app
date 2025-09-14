import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../store/bookSlice";

const BooksList = () => {
  const dispatch = useDispatch();
  const { book } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      <h2>Books List</h2>
      <ul className="list-group">
        <li className="list-group-item d-flex  justify-content-between align-items-center">
          <div>Cras justo odio</div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary">
              Read
            </button>
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BooksList;
