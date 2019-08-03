import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react'

export const Header: React.FunctionComponent<{title: string}> = props => (
  <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonTitle>{props.title}</IonTitle>
    </IonToolbar>
  </IonHeader>
)
