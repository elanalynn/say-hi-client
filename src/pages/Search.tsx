import {
  IonContent,
  IonLabel,
  IonSearchbar,
  IonRow
  } from '@ionic/react';
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Header } from '../components/Header'
import { UserCard } from '../components/UserCard'
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

  const matches = (user: any, input: string): any => {
    const match: boolean = (
      user.first_name.toLowerCase().includes(input.toLowerCase()) ||
      user.last_name.toLowerCase().includes(input.toLowerCase())
    )

    return match && user
  }

  return (
    <>
      <Header title="Search" />
      <IonContent>
        <IonRow>
          <IonLabel position="stacked">Find by Name</IonLabel>
          <IonSearchbar onKeyUp={event => handleSubmit(event, users)} />
        </IonRow>
        <IonRow>
          { searchResults && <UserCard user={searchResults} /> }
        </IonRow>
      </IonContent>
    </>
  )
}

export const SearchPage = connect((users: any) => users)(ConnectedSearchPage)
