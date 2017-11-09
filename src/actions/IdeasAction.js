import uuid from 'uuid';

// ADD_Idea
export const addIdea = (
    {
        title = '',
        body = '',
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_IDEA',
    idea: {
        id: uuid(),
        title,
        body,
        createdAt
    }
});

// REMOVE_Idea
export const removeIdea = ({ id } = {}) => ({
  type: 'REMOVE_IDEA',
  id
});

// EDIT_idea
export const editIdea = (id, updates) => ({
  type: 'EDIT_IDEA',
  id,
  updates
});
