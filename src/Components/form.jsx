import React from "react";

class Form extends React.Component {
    state = {
            email: '',
            pwd:'',
            submit:'Submit'
        }
    
    onHandleChange =(e) =>{
        const{name, value} = e.target
        this.setState({
            [name]:value
        })
    }
    onHandleSubmit(){
        this.setState({
            submit: "Form Submitted"

        })
    }
    render () {
        return (
            <div className="container-fluid">
                <form>
                    <div className="mb-3">
                        <h1>Login</h1>
                        <label className="form-label">Email address</label>
                        <input type="text" 
                               className="form-control"
                               name="email" 
                               placeholder="Enter email..." 
                               required 
                               onChange={this.onHandleChange}></input>
                        <label className="form-label">Password</label>
                        <input type="password" name="pwd" 
                               className="form-control"
                               placeholder="Enter password..."
                               required 
                               onChange={this.onHandleChange}></input>
                        <div className="form-check">
                            <input className="form-check-input" 
                                   type="checkbox" 
                                   value= ""></input>
                            <label className="form-check-label" 
                                   for="flewCheckDefault">Remember me</label>
                        </div>
                        {/* <input value="Submit"></input> */}
                        <button type="button" 
                                className="btn btn-primary" 
                                onClick ={this.onHandleSubmit}>{this.state.submit}</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default Form;