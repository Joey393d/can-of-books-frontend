import React from 'react';
import axios from 'axios';
const SERVER = process.env.REACT_APP_SERVER;
// class BestBooks extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       books: []
//     }
//   }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  class BookList extends React.Component {
    state = { books: null };
 
    componentDidMount() {
      this.fetchBooks();
    }
 
    //fetchBooks = async () => {
    async fetchBooks() {
      let results = await axios.get(`${SERVER}/books`);
      let books = results.data;
      console.log('books!', books);
      this.setState({ books });
    }



    render() {
      const books = this.state.books;
 
      // Simple conditional - show books if there are any
      return (
        <div>
          <h1>Books!</h1>
          {books && books.length > 0 && <ul>{books.map(books)}</ul>}
        </div>
      );
    }
 
 }



  // render() {

  //   /* TODO: render user's books in a Carousel */

  //   return (
  //     <>
  //       <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

  //          {this.state.books.length > 0 &&
             
  //               <>
  //                 <h2>Books!</h2>
  //                 {this.state.books.map(book => (
  //                   <p key={book.name}>{book.name}{book.description}{book.status}{book.email}</p>
  //                 ))}
                  
  //               </>
  //           }
        
  //     </>
  //   )
  // }
 
   
   



export default BookList;
