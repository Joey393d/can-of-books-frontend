

import React from 'react';

class Book extends React.Component {
  render() {
    // Destructure to pull out values from props
    const { book, onDelete } = this.props;

    return (
      <p>
        <button onClick={() => onDelete(book._id)}>&times;</button>
          {book.name} : {book.description}
      </p>
    )
  }
}

export default Book;