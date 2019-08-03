import {
  IonContent,
  IonList,
  IonItem,
  IonIcon
} from '@ionic/react';
import { person } from 'ionicons/icons'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../components/Header'
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
      <Header title="People" />
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
