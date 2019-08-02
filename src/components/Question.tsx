import {
  IonItem,
  IonLabel,
  IonRadioGroup,
  IonRadio,
  IonInput,
  IonRow,
  IonCard
} from '@ionic/react';
import React from 'react';

const QuestionTypeQuestion = ({questionOrder = ''}) => (
  <IonCard class="ion-padding">
    <IonRow>
      <IonLabel>Question {questionOrder}</IonLabel>
    </IonRow>
    <IonRow>
      <IonLabel position="floating" color="medium">Question Type</IonLabel>
      <IonRadioGroup>
        <IonItem>
          <IonLabel>Text</IonLabel>
          <IonRadio slot="start" value="true" checked />
        </IonItem>

        <IonItem>
          <IonLabel>True/False</IonLabel>
          <IonRadio slot="start" value="false" />
        </IonItem>

        <IonItem>
          <IonLabel>Multiple Choice</IonLabel>
          <IonRadio slot="start" value="false" />
        </IonItem>
      </IonRadioGroup>
    </IonRow>
    <IonRow>
      <IonLabel position="floating" color="medium" class="ion-padding-bottom">Question </IonLabel>
      <IonInput></IonInput>
    </IonRow>
    <IonRow>
      <IonLabel position="floating" color="medium" class="ion-padding-bottom">Answer</IonLabel>
      <IonInput></IonInput>
    </IonRow>
  </IonCard>
)

export default QuestionTypeQuestion