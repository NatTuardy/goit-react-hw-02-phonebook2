import { Component } from "react";
import { generate } from "shortid";
import InputField from "../InputField/InputField";
import {list} from "../../fields/fields"

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = generate();
    const { name, number } = this.state;
    const newContact = { id, name, number };
    this.props.onSubmit(newContact);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="form-control mb-3">
          <InputField {...list.name} value={name} onChange={this.handleChange}/>
          <InputField {...list.number} value={number} onChange={this.handleChange}/>
          <div class="col-12">
            <button type="submit" className="btn btn-primary">
            Add contact
            </button>
          </div>
        </form>
      </>
    );
  }
}
export default ContactForm;
