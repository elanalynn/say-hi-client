import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonIcon
  } from '@ionic/react';
import { person } from 'ionicons/icons'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/people.scss';

const PeoplePage: React.FunctionComponent = () => {
  const [ users, setUsers ] = useState([])
  useEffect(() => {
    if (!users.length) {
      axios.get('http://localhost:3000/users').then(res => setUsers(res.data))
    }
  })
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Say Hi!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {
            users.map((user: any) => (
                    <IonItem key={user.id}>
                      <IonIcon slot="start" color="dark" icon={person} />
                      {user.first_name} {user.last_name}
                    </IonItem>
            ))
          }
        </IonList>
      </IonContent>
    </>
  );
};

export default PeoplePage;
