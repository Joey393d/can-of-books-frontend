import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import BestBooks from './BestBooks'
class App extends React.Component {
  

  // componentDidMount() {
  //   this.fetchBooks();
  // }

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


  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
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
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
           
            </Route>
            <Route exact path="/books">
           {new BestBooks()}
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
