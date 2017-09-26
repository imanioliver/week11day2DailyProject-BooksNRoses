import React, {Component} from 'react';
import '../styles/App.css';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
    render() {
        return (
            <div className="container">

                <div className="row">
                    <h1 className="jumbotron">Books N' Roses: Appetite for Instruction</h1>
                    <BookList />
                    <BookDetail/>
                </div>
            </div>
        );
    }
}

export default App;
