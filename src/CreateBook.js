import React from 'react';

export default class CreateBook extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    let elements = event.target.elements;
    let formData = {
      title: elements.name.value,
      description: elements.description.value,
    }
    console.log('saving', formData);

    this.props.onSave(formData);
    // reset the form
    event.target.reset();
    elements.name.focus();
  }

  render() {
    return (
      <form method="post" onSubmit={this.handleSubmit}>
        <input placeholder="name" name="name" />
        <input placeholder="description" name="description" />
        <button type="submit">
          Save!
        </button>
      </form>
    )
  }
}