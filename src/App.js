import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/MyCard/MyCard';
import { ThemeProvider } from './components/context/ThemeContext';
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch';
import AppWrapper from './components/context/AppWrapper';


function App() {
  return (
<ThemeProvider>
<AppWrapper>
    <div className="App">
    <ToggleSwitch/>
<MyCard/>
    </div>
    </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
