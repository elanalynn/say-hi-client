import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { IonApp, IonPage, IonRouterOutlet, IonSplitPane } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import axios from 'axios'

import { AppPage } from './declarations'

// TODO: Maybe move to barrel file?
import Menu from './components/Menu'
import { HomePage } from './pages/Home'
import { SearchPage } from './pages/Search'
import { ProfilePage } from './pages/Profile'
import { PeoplePage } from './pages/People'
import { home, person, contacts, search } from 'ionicons/icons'

/* Core CSS required for Ionic components to work properly */
import '@ionic/core/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/core/css/normalize.css'
import '@ionic/core/css/structure.css'
import '@ionic/core/css/typography.css'

// TODO: Decide what can be removed here
/* Optional CSS utils that can be commented out */
import '@ionic/core/css/padding.css'
import '@ionic/core/css/float-elements.css'
import '@ionic/core/css/text-alignment.css'
// import '@ionic/core/css/text-transformation.css'
import '@ionic/core/css/flex-utils.css'
// import '@ionic/core/css/display.css'

const appPages: AppPage[] = [
  { title: 'Search', url: '/search', icon: search },
  { title: 'Profile', url: '/profile', icon: person },
  { title: 'People', url: '/people', icon: contacts },
  { title: 'Home', url: '/home', icon: home }
];

const ConnectedApp: React.FunctionComponent<{dispatch: any}> = props => {
  const apiUrl: string = 'https://say-hi-api.herokuapp.com' 
  useEffect(() => {
    axios.get(apiUrl).then(res => props.dispatch({type: 'SET_USERS', payload: res.data}))
  })

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu appPages={appPages} />
          <IonPage id="main">
            <IonRouterOutlet>
              <Route path="/:tab(home)" component={HomePage} exact={true} />
              <Route path="/search" component={SearchPage} exact={true} />
              <Route path="/profile" component={ProfilePage} exact={true} />
              <Route path="/profile/:id" component={ProfilePage} exact={true} />
              <Route path="/people" component={PeoplePage} exact={true} />
              <Route path="/" render={() => <Redirect to="/home" />} />
            </IonRouterOutlet>
          </IonPage>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  )
} 

export const App = connect(state => state)(ConnectedApp)
