import React from 'react';
import { connect } from 'react-redux';
import ItemListItem from './ideaListItem/ItemListItem';
import ideasSelector from '../../../selectors/IdeasSelector';

export const IdeaList = (props) => (
    <div>
        <h2>Ideas List (Click title will go to the edit page, click content will enable the edit function in this page)</h2>
        <div className="itemList">
            {
                props.ideas.length === 0 ? (
                    <p>Time to make a idea!</p>
                ) : (
                    props.ideas.map((ideas) => {
                        return <ItemListItem key={ideas.id} {...ideas} />;
                    })
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        ideas: ideasSelector(state.ideas, state.filters)
    };
};

export default connect(mapStateToProps)(IdeaList);
