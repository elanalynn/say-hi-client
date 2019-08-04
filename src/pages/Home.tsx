import {
  IonButton,
  IonContent,
  IonLabel,
  IonList,
  IonListHeader,
  IonRouterLink,
  IonRow,
  IonText
} from '@ionic/react'
import React from 'react'
import { connect } from 'react-redux'
import { Header } from '../components/Header'
import { UserListItem } from '../components/UserListItem'
import '../styles/home.scss'

const ConnectedHomePage: React.FunctionComponent<{users: any}> = ({users}) => {
  return (
    <>
      <Header title="Say Hi" />
      <IonContent>
        <IonRow class="ion-justify-content-center">
          <IonRouterLink href="search">
            <IonButton color="primary" class="button-big">
              Get Started
            </IonButton>
          </IonRouterLink>
        </IonRow>
        <IonRow class="ion-margin ion-justify-content-center">
          <img src="/assets/hero_travis.png" alt=""/>
          <IonText class="ion-margin">Make Connections!</IonText>
          { !!users.length && <IonText>You've connected with... 12/{users.length} Guilders</IonText> }
        </IonRow>
        <IonList>
          <IonListHeader>
            <IonLabel>Latest Connections</IonLabel>
          </IonListHeader>
          { users.map((user: any) => <UserListItem user={user} key={user.id}/>) }
        </IonList>
      </IonContent>
    </>
  )
}

export const  HomePage = connect(state => state)(ConnectedHomePage)
