import {BrowserRouter as  Router, Route , Switch } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import Donate from './containers/Donate';
import Mainpage from './containers/Mainpage';
import List from './containers/List';


import React, { useEffect ,Component} from 'react';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';


export default class App extends Component {


        constructor(props) {
          super(props)

          this.state ={
              isLoggedIn : false
               
              }
            }

  
render()
{
         /* if (this.state.isLoggedIn)
          {
              return(
                <div>

                  Welcome
                </div>


                );
          }
          else
          {
           */ 

            return (
              <div className="App">
                  <Router>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/signin"  component={Signin} />
                    <Route path="/signup"  component={Signup} />
                    <Route path="/mainpage"  component={Mainpage} />
                    <Route path="/donate"  component={Donate} />
                    <Route path="/list" component={List}/>
                    
                  </Switch>

                  </Router>
              </div>



              );
            }



}
