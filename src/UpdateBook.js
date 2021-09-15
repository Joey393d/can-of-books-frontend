import React from 'react';

export default class UpdateBook extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    let elements = event.target.elements;
    let formData = {
      title: elements.title.value,
      description: elements.description.value,
    }
    console.log('updating', formData);

    
    let id = this.props.book._id
    this.props.onUpdate(id, formData);

    // reset the form
    event.target.reset();
    elements.title.focus();
  }

  render() {
    // More destructuring
    let { book } = this.props;

    // Defensive coding
    if (!book) return null;

    return (
      <form method="post" onSubmit={this.handleSubmit}>
        <input placeholder="title" name="title" defaultValue={book.title} />
        <input placeholder="description" name="description" defaultValue={book.description} />
        <button type="submit">
          Save!
        </button>
      </form>
    )
  }
}