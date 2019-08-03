import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonContent,
  IonSearchbar,
  IonLabel,
  IonRow,
  IonRouterLink
  } from '@ionic/react';
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Header } from '../components/Header'
import '../styles/search.scss';

const ConnectedSearchPage: React.FunctionComponent<{users: any}> = ({users}) => {
  const [ searchResults, setSearchResults ] = useState()

  const handleSubmit = (event: any, users: any) => {
    users.forEach((user: any) => {
      if (matches(user, event.target.value)) {
        setSearchResults(user)
      } 
    })
  }

  const matches = (user: any, input: string) => {
    if (
      user.first_name.toLowerCase().includes(input.toLowerCase()) ||
      user.last_name.toLowerCase().includes(input.toLowerCase())
    ) {
      return user
    }
  }

  const UserCard: React.FunctionComponent<{user: any}> = ({user}) => (
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

  return (
    <>
      <Header title="Search" />
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Find by Name</IonCardSubtitle>
            <IonSearchbar onKeyUp={event => handleSubmit(event, users)}>First or Last</IonSearchbar>
          </IonCardHeader>
        </IonCard>
        <IonRow>
          { searchResults && <UserCard user={searchResults} /> }
        </IonRow>
      </IonContent>
    </>
  );
};

export const SearchPage = connect((users: any) => users)(ConnectedSearchPage);
