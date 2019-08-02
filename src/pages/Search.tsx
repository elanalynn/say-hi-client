import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonSearchbar
  } from '@ionic/react';
import React from 'react';
import './Home.css';

const SearchPage: React.FunctionComponent = () => {
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
        <IonCard class="welcome-card">
          <IonCardHeader>
            <IonCardSubtitle>Find by Name</IonCardSubtitle>
            <IonSearchbar>search?</IonSearchbar>
            <IonCardContent>...</IonCardContent>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </>
  );
};

export default SearchPage;
