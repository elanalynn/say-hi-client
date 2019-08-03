import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonLabel,
  IonRouterLink
} from '@ionic/react'
import React from 'react'
import { person } from 'ionicons/icons'

export const UserCard: React.FunctionComponent<{user: any}> = ({user}) => (
  <IonRouterLink href={`profile/${user.id}`}>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{user.first_name} {user.last_name}</IonCardTitle>
        <IonCardSubtitle>{user.title}, {user.department}</IonCardSubtitle>
        <IonLabel>Slack name: @whoever</IonLabel>
      </IonCardHeader>
    </IonCard>
  </IonRouterLink>
)
