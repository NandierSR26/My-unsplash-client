import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AddImage } from './components/AddImage';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainApp } from './components/MainApp';

export const App = () => {
  
  return (
    <Provider store={ store }>
      <Header />
      <AddImage />
      <MainApp />
      <Footer />
    </Provider>
  )
}
