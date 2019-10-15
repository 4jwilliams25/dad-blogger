import React from "react";
import "./App.css";

import TopNav from "./components/TopNav";
import NewPostForm from "./components/NewPostForm";
import Dashboard from "./components/Dashboard";
import axios from "axios";

class App extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get("http://localhost:8000/posts").then(res =>
      this.setState(
        {
          posts: res.data
        },
        () => console.log("STATE:", this.state)
      )
    );
  }

  render() {
    return (
      <div>
        <TopNav />
        <NewPostForm />
        <Dashboard />
      </div>
    );
  }
}

export default App;
