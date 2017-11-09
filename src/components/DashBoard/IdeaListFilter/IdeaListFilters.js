import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByTitle, setStartDate, setEndDate } from '../../../actions/filters';
import { fetchUsers, fetchUsersAllDelete } from "../../../actions/request"

export class IdeaListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'title') {
            this.props.sortByTitle();
        }
    };

    onFetchUser = (e) => {
        this.props.fetchData();
    };

    onFetchDeleteAll = (e) => {
        this.props.fetchUsersAllDelete();
    };

    render() {
        return (
            <div>
                <h2>Search</h2>
                <button className="btn" onClick={this.onFetchUser}>Fetch User</button>
                <button className="btn" onClick={this.onFetchDeleteAll}>Delete All Users</button>
                <input
                    style={{verticalAlign:'top'}}
                    type="text"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
                <select
                    style={{verticalAlign:'top'}}
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="title">Title</option>
                </select>
                <DateRangePicker
                    style={{verticalAlign:'top'}}
                    //get default value from reducers(default state)
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
      );
    }
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByTitle: () => dispatch(sortByTitle()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    fetchData:()=>dispatch(fetchUsers()),
    fetchUsersAllDelete:()=>dispatch(fetchUsersAllDelete())
});

export default connect(mapStateToProps, mapDispatchToProps)(IdeaListFilters);
