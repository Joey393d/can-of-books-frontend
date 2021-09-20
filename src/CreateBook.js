import React from 'react';

export default class CreateBook extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    let elements = event.target.elements;
    let formData = {
      title: elements.title.value,
      description: elements.description.value,
    }
    console.log('saving', formData);

    this.props.onSave(formData);
    // reset the form
    event.target.reset();
    elements.title.focus();
  }

  render() {
    const { show, onCancel } = this.props;

    if (!show) return null;


    return (
   
      <form method="post" onSubmit={this.handleSubmit}>
        <input placeholder="title" name="title" />
        <input placeholder="description" name="description" />
        <button type="submit">
          Save!
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
       
    )
  }
}