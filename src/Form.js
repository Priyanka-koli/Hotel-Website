import React from 'react';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {Name: '',email: '',query: ''};//room: 'Simple'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
     // this.handleChange3 = this.handleChange3.bind(this);
      
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({Name: event.target.value});
    }
    handleChange1(event) {
      this.setState({email: event.target.value});
    }
    handleChange2(event) {
      this.setState({query: event.target.query});
    }
   // handleChange3(event) {
      //  this.setState({room: event.target.room}); }
    handleSubmit(event) {
      alert('Thank You ' + this.state.Name + ' For Your Queries . We will soon contact you on your mail ' + this.state.email);
      event.preventDefault();
    }
  
    render(){
        return(
            <div lassName="form_element">
            <form onSubmit={this.handleSubmit}>
                <feildset className="feildset"> 
                    <legend className="heading"> FORM</legend>
                        <label className="label">NAME:</label>
                        <center> <input className="input" type="text" required value={this.state.Name} onChange={this.handleChange} /></center>
                        <label className="label"> EMAIL:</label>
                       <center> <input className="input" type="email" required value={this.state.email} onChange={this.handleChange1} /></center>
                        <label className="label">ANY QUERY:</label>
                       <center> <textarea className="input" value={this.state.query} onChange={this.handleChange2} /></center>
                        <center><input className="btn" type="submit" value="Submit" /></center>
                </feildset>
            </form>
        </div>
        );
    }
}
export default Form;