import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/tailwind.output.css';
import App from './App';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import ThemedSuspense from './components/ThemedSuspense';
import { ScreensProvider } from './context/ScreensContext'
import { ThemeProvider } from './context/ThemeContext'
import { SidebarProvider } from './context/SidebarContext'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ScreensProvider>
      <ThemeProvider>
        <SidebarProvider>
          <Suspense fallback={<ThemedSuspense />}>
            <Router>
              <App />
            </Router>
          </Suspense>
        </SidebarProvider>
      </ThemeProvider>
    </ScreensProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
