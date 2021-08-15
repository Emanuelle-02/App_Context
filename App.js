import React from 'react';
import { Routes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { SimplesProvider } from './src/contexts/SimplesProvider';
import { ResumeProvider } from './src/contexts/ResumeProvider';

export default function App() {
  return (
    <ResumeProvider>
      <SimplesProvider>
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
      </SimplesProvider>
    </ResumeProvider>
  );
}
