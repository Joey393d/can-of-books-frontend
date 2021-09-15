

import React from 'react';
import UpdateBook from './UpdateBook';

class Book extends React.Component {
  state = { update: false };

  handleUpdate = async (id, bookInfo) => {
    
    this.setState({ update: false });

    
    await this.props.onUpdate(id, bookInfo);
  }











  render() {
    // Destructure to pull out values from props
    const { book, onDelete } = this.props;
    return (
      <div>
        <button onClick={() => onDelete(book._id)}>&times;</button>
          {book.title} : {book.description}
      
          {this.state.update
          ? (
            <>
              <UpdateBook book={book} onUpdate={this.handleUpdate} />
              <button onClick={() => this.setState({ update: false })}>Cancel</button>
            </>
          )
          : (
            <>
              
              <button onClick={() => this.setState({ update: true })}>Edit</button>
            </>
          )
        }
      </div>  
    )
  }
}

export default Book;