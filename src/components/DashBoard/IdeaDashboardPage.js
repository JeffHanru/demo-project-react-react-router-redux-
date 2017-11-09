import React from 'react';
import IdeaList from './ideaList/IdeaList';
import IdeaListFilters from './IdeaListFilter/IdeaListFilters';
import UserList from './IdeaListFilter/UserList'

const IdeaDashboardPage = () => (
    <div className="container">
        <h1>Idea Dashboard</h1>
        <IdeaListFilters />
        <UserList/>
        <IdeaList />
  </div>
);

export default IdeaDashboardPage;
