import React, { Fragment } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../store/bookSlice";

import "./book.css";

const PostContainer = () => {
  const dispatch = useDispatch();
  const { book, isLoading } = useSelector((state) => state.book);

  const bookList =
    book &&
    book.map((book) => (
      <ul className="list-group" key={book.id}>
        <li className="list-group-item d-flex  justify-content-between align-items-center">
          <div>{book.title}</div>
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
    ));

  useEffect(() => {
    dispatch(getBooks({ name: "Abdullah" }));
  }, [dispatch]);

  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList isLoading={isLoading} bookList={bookList} />
        </div>
        <div className="col side-line">
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
