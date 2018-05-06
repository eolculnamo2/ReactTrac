import React from 'react';
import './Login.scss';

class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            register: false
        }
    }
    componentDidMount(){
      window.addEventListener('keypress',(e)=>{
          var press = e.which || e.keycode;
          if(press == 13){
            this.handleSubmit();
          }
      });
    }
    handleSubmit(){
        var uri;
        var load;

        if(this.state.register){
            uri = '/authenticate/register';
            load = {
                username: this.refs.newUser.value.toLowerCase().trim(),
                password: this.refs.newPassword.value,
                confirmPassword: this.refs.confirmPassword.value,
                email: this.refs.email.value
            }
        }
        else{
            uri = '/authenticate/login'
            load = {
                username: this.refs.username.value.toLowerCase().trim(),
                password: this.refs.password.value
            }
        }

        fetch(uri,{
            method: "POST",
            body: JSON.stringify(load),
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin"
          })
        .then((response)=>{
          if(response.status != 200){
            alert("Invalid Credentials")
          }
          else{
            return response.json()
          }
        })
        .then((data)=>{
          if(data.name == 'authenticated'){
              if(uri == '/authenticate/register'){
                fetch('/email/welcomeUser',{
                    method: "POST",
                    body: JSON.stringify(load),
                    headers: { "Content-Type": "application/json" },
                    credentials: "same-origin"
                  })
              }
            this.props.changePage('categories',null,null,true,null,data.user)
          }
        })

    }
    registration(){
        return(
            <div className="login-main">
                <h3>Login:</h3>
                <input ref='newUser' />
                <h3>Password:</h3>
                <input ref='newPassword' type='password' />
                <h3>Confirm Password:</h3>
                <input ref='confirmPassword' type='password' />
                <h3>Email:</h3>
                <input ref='email' />
                <br/>
                <div className="buttons-flex">
                  <button
                     onClick={()=>{this.setState({register: false})}}
                     >
                     Back
                      </button>
                  <button
                       onClick={this.handleSubmit.bind(this)}
                      >
                      Register
                      </button>
                </div>
            </div>
            )
    }
    existing(){
        return(
            <div className="login-main">
                <h3>{"<Login />"}</h3>
                <input name="username" ref='username' />
                <h3>{"<Password />"}</h3>
                <input name="password" ref='password' type='password' />
                <br/>
                <div className="buttons-flex">
                  <button
                      onClick={()=>{this.setState({register: true})}}
                      >
                      New User
                      </button>
                  <button
                      onClick={this.handleSubmit.bind(this)}
                      >
                      Login
                      </button>
                  </div>
            </div>
            )
    }

    render(){
        if(this.state.register){
            return this.registration();
        }
        else{
            return this.existing();
        }
    }
}

export default Login;
