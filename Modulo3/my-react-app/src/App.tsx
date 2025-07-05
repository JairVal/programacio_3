import './App.css';
import { DaisyButton } from './daisy-ui/DaisyButton';
import { DaisyCard } from './daisy-ui/DaisyCard';
import { DaisyModal } from './daisy-ui/DaisyModal';
import {DaisyInsignia} from './daisy-ui/DaisyInsignia';
import { DaisyChat } from './daisy-ui/DaisyChat';

import { DaisyCarrusel } from './daisy-ui/DaisyCarrusel';
export default function App() {
  return (
    <div className="container p-4">
      <DaisyButton />
      <DaisyCard />
      <DaisyModal />
      <DaisyInsignia />
      <DaisyChat />
      <DaisyCarrusel />
      
    </div>
  );
}