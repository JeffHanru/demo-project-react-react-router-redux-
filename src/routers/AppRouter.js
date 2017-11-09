import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import IdeaDashboardPage from '../components/DashBoard/IdeaDashboardPage';
import AddIdeaPage from '../components/AddIdea/AddIdeaPage';
import EditIdeaPage from '../components/EditIdea/EditIdeaPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch >
        <Route path="/" component={IdeaDashboardPage} exact={true} />
        <Route path="/create" component={AddIdeaPage} />
        <Route path="/edit/:id" component={EditIdeaPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
