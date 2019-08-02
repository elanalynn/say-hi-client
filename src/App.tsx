import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { IonApp, IonPage, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from './declarations';
import { setUsers } from './actions/index'

// TODO: Maybe move to barrel file?
import Menu from './components/Menu';
import Home from './pages/Home';
import Search from './pages/Search';
import Profile from './pages/Profile';
import People from './pages/People';
import { home, person, contacts, search } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/core/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

// TODO: Decide what can be removed here
/* Optional CSS utils that can be commented out */
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';

const appPages: AppPage[] = [
  { title: 'Search', url: '/search', icon: search },
  { title: 'Profile', url: '/profile', icon: person },
  { title: 'People', url: '/people', icon: contacts },
  { title: 'Home', url: '/home', icon: home }
];

const ConnectedApp: React.FunctionComponent = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu appPages={appPages} />
          <IonPage id="main">
            <IonRouterOutlet>
              <Route path="/:tab(home)" component={Home} exact={true} />
              <Route path="/search" component={Search} exact={true} />
              <Route path="/profile" component={Profile} exact={true} />
              <Route path="/people/:id" component={Profile} exact={true} />
              <Route path="/people" component={People} exact={true} />
              <Route path="/" render={() => <Redirect to="/home" />} />
            </IonRouterOutlet>
          </IonPage>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  )
};

const mapDispatchToProps = (dispatch: any) => ({
  setUsers: (payload: any) => dispatch(setUsers(payload))
})

const App = connect(
  state => state,
  mapDispatchToProps
)(ConnectedApp);

export default App;
