import React from 'react';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  
  componentDidMount() {
    this.fetchBooks();
  }

  async fetchBooks() {
    let apiUrl = `${process.env.REACT_APP_SERVER}/books`;

    try {
      let results = await axios.get(apiUrl);
      this.setState({ books: results.data });
    }
    catch (err) {
      console.log(err);
    }
  }
  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

           {this.state.books.length > 0 &&
             
                <>
                  <h2>Books!</h2>
                  {this.state.books.map(book => (
                    <p key={book.name}>{book.name}{book.description}{book.status}{book.email}</p>
                  ))}
                  
                </>
            }
        
      </>
    )
  }
}


export default BestBooks;
