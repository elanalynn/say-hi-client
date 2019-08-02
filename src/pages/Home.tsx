import {
  IonButton,
  IonButtons,
  IonCard,
  IonItem,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonRouterLink
  } from '@ionic/react';
import { person } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import './Home.css';

const ConnectedHomePage: React.FunctionComponent = () => {
  const [ users, setUsers ] = useState([])
  console.log('users', users)
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
      <IonContent class="">
        <IonRouterLink href="search">
          <IonButton color="primary" class="">
            Meet a Guilder!
          </IonButton>
        </IonRouterLink>
        <IonCard class="welcome-card">
          <img src="/assets/hero_travis.png" alt=""/>
          <IonCardHeader>
            <IonCardTitle>Make Connections!</IonCardTitle>
            <IonCardSubtitle>You've connected with... 12/{users.length} Guilders</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Latest Connections</IonLabel>
          </IonListHeader>
          { 
            users.map((user: any) => {
              return (
                <IonRouterLink href={`people/${user.id}`} key={user.id}>
                  <IonItem>
                    <IonIcon slot="start" color="dark" icon={person} />
                    <IonLabel>{user.first_name} {user.last_name}</IonLabel>
                    <IonLabel>{user.department}</IonLabel>
                  </IonItem>
                </IonRouterLink>
              )
            })
          }
        </IonList>
      </IonContent>
    </>
  );
};

export default connect((users: any) => users)(ConnectedHomePage);
