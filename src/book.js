

import React from 'react';

class Book extends React.Component {
  render() {
    // Destructure to pull out values from props
    const { book, onDelete } = this.props;

    return (
      <p>
        <button onClick={() => onDelete(book.id)}>&times;</button>
          {book.title} : {book.description}
      </p>
    )
  }
}

export default Book;