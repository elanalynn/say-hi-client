import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonText,
  IonRow
} from '@ionic/react';
import React from 'react';
import Question from '../components/Question'

const ProfilePage: React.FunctionComponent = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

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

export default ProfilePage;
