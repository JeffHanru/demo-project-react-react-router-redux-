import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class IdeaForm extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          title:props.idea? props.idea.title:'',
          body:props.idea?props.idea.body:'',
          createdAt: props.idea ? moment(props.idea.createdAt) : moment()
      };
  }
  onTitleChange = (e) => {
      console.log(e.target.value)
      const title = e.target.value;
      this.setState(() => ({ title  }));
  };
  onNoteChange = (e) => {
      const body = e.target.value;
      this.setState(() => ({ body }));
  };
  onSubmit = (e) => {
      e.preventDefault();

      if (!this.state.title) {
          this.setState(() => ({ error: 'Please provide title' }));
      } else {
          this.setState(() => ({ error: '' }));
          this.props.onSubmit({
              title: this.state.title,
              createdAt: this.state.createdAt.valueOf(),
              body: this.state.body
          });
      }
  };
  render() {
      return (
          <div className="ideaEditBox">
              <form onSubmit={this.onSubmit}>
                  <h2>Title</h2>
                  <input
                      type="text"
                      placeholder="title"
                      autoFocus
                      value={this.state.title}
                      onChange={this.onTitleChange}
                      style={{display:'inline-block'}}
                  />
              {this.state.error && <span style={{color:'red'}}>{this.state.error}</span>}
                  <h2>Content</h2>
                  <textarea
                      placeholder="Add a note for your idea (optional)"
                      value={this.state.body}
                      onChange={this.onNoteChange}
                      className="ideaContentUpdate"
                  >
                  </textarea>
                  <div style={{paddingTop:'20px'}}>
                      <button className="btn">{this.props.idea?'Edit Idea':'Create Idea'}</button>
                  </div>
              </form>
          </div>
      )
  }
}
