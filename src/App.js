import React,{Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import axios from 'axios';
class App extends Component {
 state = {
   user: [],
   loading: false
 }
async componentDidMount(){
   this.setState({loading:true});
   const res = await axios.get("https://api.github.com/users");
   this.setState({user: res.data,loading:false});
    
 }
  render(){
   return(   
    <div >
     <Navbar title = "GitHub Finder"/>
     <div className = "container">
      <Users users = {this.state.user} loading = {this.state.loading}/>  
     </div>
    </div>
    )
  
  }
}

export default App;







/*
<Navbar />
      <div className = "container">
       <Users loading = {this.state.loading} users = {this.state.user} />

state = {
   user : [], 
   loading : false 
 }

 async componentDidMount(){
  this.setState({ loading: true }); 
  const res = await axios.get('https://api.github.com/users');
  this.setState({ user: res.data , loading: false });
  // this.setState({user:res.data});
 }




*/