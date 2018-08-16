import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {posts : []}
  }
  componentWillMount() {
    axios.get('/posts').then(response=> 
    this.setState({posts:response.data})).catch(errors=> console.log(errors))
  }
  render() {
    return (
      <div className="App">
      {this.state.posts.map(post=>
      <div key={post.id} style={{border:'1px'}}>
        <p>
          title: {post.title}
        </p>
        <p>
          description: {post.description}
        </p>
      </div>
      )}
         
      </div>
    );
  }
}

export default App;
