import React from 'react';
import Navbar from './components/Navbar'
import PokeList from './components/PokeList'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokeDescription from './components/description/PokeDescription'
const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path ="/">
              <PokeList/>
            </Route>
            <Route path ="/pokemon/:name">
              <PokeDescription/>
            </Route>
          </Switch>
        </div>  
      </Router>  
    </ApolloProvider>
  );
}

export default App;
