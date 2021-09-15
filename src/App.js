import React from 'react';

import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Book from './book'
import axios from 'axios';
import CreateBook from './CreateBook';

const SERVER = process.env.REACT_APP_SERVER;



class App extends React.Component {
  state = { books: [] };

 
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

  handleSave = async bookInfo => {
    let apiUrl = `${SERVER}/books`;
    let results = await axios.post(apiUrl, bookInfo);
    let newBook = results.data;
    console.log(newBook);



    this.setState({
      books:[newBook, this.state.books]
    })
  }


  handleDelete = async bookId => {
    let apiUrl = `${SERVER}/books/${bookId}`;
    await axios.delete(apiUrl);





  this.setState(state => ({
    // Filter out the deleted cat
    cats: state.books.filter(book => book.id !== bookId)
  }));
}

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    return (
      <>
        <Router>
        <nav>
            <h1>World of Books</h1>
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
            
          </nav>
          {/* <Header user={this.state.user} onLogout={this.logoutHandler} /> */}
          <Switch>
            <Route exact path="/">
           
            </Route>
            <Route exact path="/books">
            <CreateBook onSave={this.handleSave} />
            {this.state.books.length > 0 &&
            <>
              <h2>Books!</h2>
              {this.state.books.map(book => (
                <Book
                key={book.id}
                book={book}

                onDelete={this.handleDelete}
                />
              ))}
              </>
              }
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
