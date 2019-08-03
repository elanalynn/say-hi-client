import {
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonText,
  IonRow
} from '@ionic/react'
import React from 'react'
import { connect } from 'react-redux'
import { Header } from '../components/Header'
import Question from '../components/Question'
import '../styles/profile.scss'

const ConnectedProfilePage: React.FunctionComponent = () => {
  return (
    <>
      <Header title="Profile" />
      <IonContent>
        <IonItem>
          <IonLabel position="floating" color="medium" class="ion-padding-bottom">First Name</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating" color="medium" class="ion-padding-bottom">Last Name</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating" color="medium" class="ion-padding-bottom">Title/Role</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating" color="medium" class="ion-padding-bottom">Department</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonRow>
            <IonText color="dark">Add 3 questions that people should ask you.</IonText>
          </IonRow>
        <IonItem>
          <Question questionOrder="One"/>
          <Question questionOrder="Two"/>
          <Question questionOrder="Three"/>
        </IonItem>
        </IonContent>
    </>
  );
};

export const ProfilePage = connect(state => state)(ConnectedProfilePage)
