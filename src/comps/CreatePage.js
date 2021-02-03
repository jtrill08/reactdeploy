import React from "react";
import './CreatePage.css';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
   

    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xjvpoeon"
        method="POST"
      >
        <h1 class="heading"> Want to create your own prompt page? </h1> 
        <h2 class="heading2"> Sign up to receive early access :) </h2>
        <label type="emailTitle">Email:</label>
        <input type="email" name="email" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button type="submitButton">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}