import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList
} from '@ionic/react';
import { person } from 'ionicons/icons'
import React from 'react'
import { connect } from 'react-redux'
import { Header } from '../components/Header'
import '../styles/people.scss'

const ConnectedPeoplePage: React.FunctionComponent<{users: any}> = ({users}) => {
  return (
    <>
      <Header title="People" />
      <IonContent>
        <IonList>
          {
            users.map((user: any) => (
                    <IonItem key={user.id}>
                      <IonIcon slot="start" color="dark" icon={person} />
                      <IonLabel>{user.first_name} {user.last_name}</IonLabel>
                      <IonLabel>{user.department}</IonLabel>
                    </IonItem>
            ))
          }
        </IonList>
      </IonContent>
    </>
  );
};

export const PeoplePage = connect(state => state)(ConnectedPeoplePage)
