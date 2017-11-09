import React from 'react';
import { connect } from 'react-redux';
import IdeaForm from '../shared/IdeaForm';
import { editIdea, removeIdea } from '../../actions/IdeasAction';

export class EditIdeaPage extends React.Component {
    onSubmit = (idea) => {
        console.log('edit submit')
        this.props.editIdea(this.props.idea.id, idea);
        this.props.history.push('/');
    };
    render() {
        return (
            <div className="container">
                <h1>Edit Idea</h1>
                <IdeaForm
                    idea={this.props.idea}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    idea: state.ideas.find((idea) => idea.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    editIdea: (id, expense) => dispatch(editIdea(id, expense)),
    removeIdea: (data) => dispatch(removeIdea(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditIdeaPage);
