import React from "react";

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            emailValid: false,
            passwordValid: false,
            email:'',
            pwd: '',
            rememberMe:false,
            submitClick: false
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onClickHandleSubmit= this.onClickHandleSubmit.bind(this);
        this.onClickCheck = this.onClickCheck.bind(this);
    }
    
    onChangeEmail(event) {
        const newEmail = event.target.value;//create a newEmail for store that
        const reg = /^\S+@\S+\.\S+$/g; // create var reg for validation for email
        const isEmail = reg.test(newEmail); //if neEmail Validation is OK then store in isEmail var
        
        this.setState({
            email: newEmail,
            emailValid :isEmail
        })
    }
    onChangePassword(event){
        let newPasswordValid = false; //create a var newPasswordValid for condition default is false
        if(event.target.value.length >= 6) {
            newPasswordValid = true
        }else{
            newPasswordValid = false
        }
        this.setState({
            password: event.target.value,
            passwordValid: newPasswordValid
        })
    }

    onClickCheck(event) {
        event.preventDefault();
        this.setState({
            rememberMe: true
        })
    }
    onClickHandleSubmit(event) {
        event.preventDefault();
        this.setState ({
            submitClick: true
        })
    }
    
    render () {
        if(this.state.submitClick === true) {
            return (
                <div  className="container-fluid">
                    <div className="row">
                        <div className="col-ls-4">
                            <h2>Form Submitted</h2>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            
            <div className="container-fluid">
                <div className="row">
                        <div className="col-ls-4">
                        <form className="form-group needs-validation container-fluid" onSubmit = {this.state.submitMessage}>
                    <div className="mb-3">
                        <h1>Login</h1>
                        <label className="form-label">Email address</label>
                        <input type="text" 
                               className="form-control"
                               name="email" 
                               placeholder="Enter email..." 
                               required 
                               className={ this.state.emailValid ? 'form-control is-valid' : 'form-control is-invalid'}
                               onChange={this.onChangeEmail}></input>
                        <label className="form-label">Password</label>
                        <input type="password" name="pwd" 
                               className={ this.state.passwordValid ? 'form-control is-valid' : 'form-control is-invalid'}
                               placeholder="Enter password..."
                               required 
                               onChange={this.onChangePassword}></input>
                        <div className="form-check">
                            <input className="form-check-input" 
                                   type="checkbox" 
                                   name="Remember"
                                   
                                   onClick = {this.onClickCheck}></input>
                            <label className="form-check-label" 
                                   for="flewCheckDefault">Remember me</label>
                        </div>
                        
                        <input type="submit" 
                                value="Submit"
                                disabled={ !this.state.emailValid || !this.state.passwordValid}
                                className="btn btn-primary" 
                                onClick={this.onClickHandleSubmit} />
                    </div>
                    
                </form>           
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default Form;