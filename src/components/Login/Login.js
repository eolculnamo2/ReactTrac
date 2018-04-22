import React from 'react';

class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            register: false
        }
    }
    handleSubmit(){
        var uri;
        var load;

        if(this.state.register){
            uri = '/authenticate/register';
            load = {
                username: this.refs.newUser.value,
                password: this.refs.newPassword.value,
                confirmPassword: this.refs.confirmPassword.value,
                email: this.refs.email.value
            }
        }
        else{
            uri = '/authenticate/login'
            load = {
                username: this.refs.username.value,
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
          return response.json()
        })
        .then((data)=>{
          if(data.name == 'UserExistsError'){
            alert('User name already exists')
          }
          else if(data.name == 'authenticated'){
            this.props.changePage('categories',null,null,true)
          }
          else if(data.name == 'invalid-credentials'){
            alert('Invalid Credentials')
          }
          else{
            alert('Authentication Error')
          }
        })

    }
    registration(){
        return(
            <div>
                <h3>Login:</h3>
                <input ref='newUser' />
                <h3>Password:</h3>
                <input ref='newPassword' type='password' />
                <h3>Confirm Password:</h3>
                <input ref='confirmPassword' type='password' />
                <h3>Email:</h3>
                <input ref='email' />
                <br/>
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
            )
    }
    existing(){
        return(
            <div>
                <h3>Login:</h3>
                <input ref='username' />
                <h3>Password:</h3>
                <input ref='password' type='password' />
                <br/>
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
