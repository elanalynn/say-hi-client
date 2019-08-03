import {
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterLink
} from '@ionic/react'
import React from 'react'
import { person } from 'ionicons/icons'

export const UserListItem: React.FunctionComponent<{user: any}> = ({user}) => (
  <IonRouterLink href={`people/${user.id}`} key={user.id}>
    <IonItem>
      <IonIcon color="medium" size="small" icon={person} />
      <IonLabel> &nbsp; {user.first_name} {user.last_name}</IonLabel>
      <IonLabel>{user.department}</IonLabel>
    </IonItem>
  </IonRouterLink>
)
