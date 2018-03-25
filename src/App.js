import React, { Component } from 'react';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import Header from './components/Header';
import firebase from 'firebase'; 


class App extends Component {

    constructor(props){
      super(props);
     /* Initialize Firebase*/
      var config = {
        apiKey: "AIzaSyA2zdW-h07LQUZLVmcbkc46RONPz23UzDE",
        authDomain: "onesignal-44991.firebaseapp.com",
        databaseURL: "https://onesignal-44991.firebaseio.com",
        projectId: "onesignal-44991",
        storageBucket: "onesignal-44991.appspot.com",
        messagingSenderId: "1089209754756"
      };
      firebase.initializeApp(config);
  }

  render() {
    return (
     <div className="container">
        <Header title="Simple Firebase App" />
        <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageList db={firebase} />
              </div>
        </div>
        <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageBox db={firebase} mid={"0"} />
              </div>
            </div>
     </div>
    );
  }
}

export default App;
