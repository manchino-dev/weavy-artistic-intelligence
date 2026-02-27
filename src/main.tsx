import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LazyMotion, domAnimation } from 'motion/react';
import { ThemeProvider } from './components/ThemeProvider.tsx';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LazyMotion features={domAnimation} strict>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LazyMotion>
  </StrictMode>,
);
