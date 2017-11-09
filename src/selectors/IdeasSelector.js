import moment from 'moment';

// Get visible ideas

export default (ideas, { text, sortBy, startDate, endDate }) => {
  return ideas.filter((idea) => {
      const createdAtMoment = moment(idea.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
      const textMatch = idea.body.toLowerCase().includes(text.toLowerCase())||idea.title.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
    });
    return ideas
};
