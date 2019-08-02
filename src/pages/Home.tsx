import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonRouterLink
  } from '@ionic/react';
import { person } from 'ionicons/icons';
import React from 'react';
import './Home.css';

const HomePage: React.FunctionComponent = () => {
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
            <IonCardSubtitle>Make Connections!</IonCardSubtitle>
            <IonCardTitle>You've met...</IonCardTitle>
            <IonCardContent>12/302 Guilders</IonCardContent>
          </IonCardHeader>
        </IonCard>
        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Latest Connections</IonLabel>
          </IonListHeader>
          <IonItem href="https://ionicframework.com/docs/" target="_blank">
            <IonIcon slot="start" color="medium" icon={person} />
            <IonLabel>Elana Kopelevich</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/" target="_blank">
            <IonIcon slot="start" color="medium" icon={person} />
            <IonLabel>Elana Kopelevich</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/" target="_blank">
            <IonIcon slot="start" color="medium" icon={person} />
            <IonLabel>Elana Kopelevich</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};

export default HomePage;
