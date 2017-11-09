import React from 'react';
import { connect } from 'react-redux';
import IdeaForm from '../shared/IdeaForm';
import { addIdea } from '../../actions/IdeasAction';

export class AddIdeaPage extends React.Component {
    onSubmit = (idea) => {
        console.log(`add submit ${idea}`);
        this.props.addIdea(idea);
        this.props.history.push('/');
    };
    render() {
        return (
          <div className="container">
              <h1>Create Idea</h1>
              <IdeaForm
                onSubmit={this.onSubmit}
              />
          </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
  addIdea: (idea) => dispatch(addIdea(idea))
});

export default connect(undefined, mapDispatchToProps)(AddIdeaPage);
