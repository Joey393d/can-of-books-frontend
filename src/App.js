import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { withAuth0 } from 'auth0';
import Book from './book'
import axios from 'axios';
import CreateBook from './CreateBook';

const SERVER = process.env.REACT_APP_SERVER;



class App extends React.Component {
  state = {
    books: null,
    showAddBook: false,
  };

  toggleShowAddBook = () => {
    this.setState({
      showAddBook: !this.state.showAddBook,
    });
  }



 componentDidUpdate() {
   if (!this.state.books)
   this.fetchBooks();

 }


 async fetchBooks() {
  const { auth0 } = this.props;
  if (!auth0.isAuthenticated) {
    return; 
  }

  let claims = await auth0.getIdTokenClaims();
  console.log(claims);
  
  let jwt = claims.__raw;

  let apiUrl = `${SERVER}/cats`;
  try {
    // TODO: filter by location!
    let results = await axios.get(apiUrl, {
      headers: {
        // Use Authorization header for Authentication
        'Authorization': `Bearer ${jwt}`,
      },
    });
    this.setState({ cats: results.data });
  }
  catch (err) {
    console.log(err);
  }
}
 


 



 
  

  // async fetchBooks() {
  //   let apiUrl = `${process.env.REACT_APP_SERVER}/books`;

  //   try {
  //     let results = await axios.get(apiUrl);
  //     this.setState({ books: results.data });
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // }

  handleSave = async bookInfo => {
    let apiUrl = `${SERVER}/books`;
    let results = await axios.post(apiUrl, bookInfo);
    let newBook = results.data;
    console.log(newBook);



    this.setState({
      books: this.state.books.concat(newBook)
      // books:[newBook, this.state.books]
    })

    this.fetchBooks();
  }


  handleUpdate = async (bookId, bookInfo) => {
    let apiUrl = `${SERVER}/books/${bookId}`;
    await axios.put(apiUrl, bookInfo);

   
    await this.fetchBooks();
  }


  handleDelete = async bookId => {
    let apiUrl = `${SERVER}/books/${bookId}`;
    await axios.delete(apiUrl);





  this.setState(state => ({
    
    books: state.books.filter(book => book._id !== bookId)
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

    const { auth0 } = this.props;
    console.log('auth0 in App', auth0);

    return (
      <>
        <Router>
        <nav>
            <h1>World of Books</h1>
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
            {auth0.isLoading
              ? <p>Spinner</p>
              : auth0.isAuthenticated
                ? (
                  <>
                    Welcome back, {auth0.user.nickname}
                    <LogoutButton />
                  </>
                )
                : <LoginButton />}

          </nav>
          {/* <Header user={this.state.user} onLogout={this.logoutHandler} /> */}
          <Switch>
            <Route exact path="/">
           
            </Route>
            <Route exact path="/books">
            <CreateBook onSave={this.handleSave} />
            {this.state.books &&
            
            this.state.books.length > 0 &&
            <>
              <h2>Books!</h2>
              {!this.state.showAddBook &&
                <button onClick = {this.toggleShowAddBook}>
                  Add book!
                  </button>
              }

              <CreateBook
              show = {this.state.showAddBook}
              onCancel = {this.toggleShowAddBook}
              onSave={this.handleSave}
              />



              {this.state.books.map(book => (
                <Book
                key={book._id}
                book={book}
                onDelete={this.handleDelete}
                onUpdate={this.handleUpdate}

                
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

export default withAuth0(App);
