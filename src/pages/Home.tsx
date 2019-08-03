import {
  IonButton,
  IonCard,
  IonItem,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonLabel,
  IonList,
  IonListHeader,
  IonRouterLink,
  IonRow
  } from '@ionic/react'
import { person } from 'ionicons/icons'
import React from 'react'
import { connect } from 'react-redux'
import { Header } from '../components/Header'
import '../styles/home.scss'

const ConnectedHomePage: React.FunctionComponent<{users: any}> = ({users}) => {
  return (
    <>
      <Header title="Say Hi" />
      <IonContent>
        <IonRow class="ion-justify-content-center">
          <IonRouterLink href="search">
            <IonButton color="primary" class="ion-padding button-big">
              Meet a Guilder!
            </IonButton>
          </IonRouterLink>
        </IonRow>
        <IonCard>
          <img src="/assets/hero_travis.png" alt=""/>
          <IonCardHeader>
            <IonCardTitle>Make Connections!</IonCardTitle>
            <IonCardSubtitle>You've connected with... 12/{users.length} Guilders</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Latest Connections</IonLabel>
          </IonListHeader>
          { 
            users.map((user: any) => {
              return (
                <IonRouterLink href={`people/${user.id}`} key={user.id}>
                  <IonItem>
                    <IonIcon slot="start" color="dark" icon={person} />
                    <IonLabel>{user.first_name} {user.last_name}</IonLabel>
                    <IonLabel>{user.department}</IonLabel>
                  </IonItem>
                </IonRouterLink>
              )
            })
          }
        </IonList>
      </IonContent>
    </>
  )
}

export const  HomePage = connect(state => state)(ConnectedHomePage)
