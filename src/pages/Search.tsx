import {
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonLabel,
  IonRow,
  IonRouterLink
  } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import '../styles/search.scss';

const ConnectedSearchPage: React.FunctionComponent = () => {
  const [ users, setUsers ] = useState([])
  const [ searchResults, setSearchResults ] = useState()
  useEffect(() => {
    if (!users.length) {
      axios.get('http://localhost:3000/users').then(res => setUsers(res.data))
    }
  })

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
    <IonRouterLink href={`people${user.id}`}>
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
      {/* TODO: Extract this header into a component */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Say Hi!</IonTitle>
        </IonToolbar>
      </IonHeader>

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

export default connect((users: any) => users)(ConnectedSearchPage);
