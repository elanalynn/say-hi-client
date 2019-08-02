import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar
  } from '@ionic/react';
import React from 'react';
import './Home.css';

const PeoplePage: React.FunctionComponent = () => {
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
          <img src="/assets/shapes.svg" alt=""/>
          <IonCardHeader>
            <IonCardSubtitle>Make Connections!</IonCardSubtitle>
            <IonCardTitle>You've met...</IonCardTitle>
            <IonCardContent>12/302 Guilders</IonCardContent>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </>
  );
};

export default PeoplePage;
