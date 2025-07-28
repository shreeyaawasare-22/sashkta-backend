import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SOSButton from './components/SOSButton';
import DangerPrediction from './components/DangerPrediction';
import OfflineSOS from './components/OfflineSOS';
import TrustedEscort from './components/TrustedEscort';
import PublicTransportMode from './components/PublicTransportMode';
import HiddenRecorder from './components/HiddenRecorder';
import TamperDetection from './components/TamperDetection';
function App() {
  return (
    <div className="container my-4">
      <h2 className="text-center">Sashkta: Women’s Safety App</h2>
      <SOSButton />
      <DangerPrediction />
      <OfflineSOS />
      <TrustedEscort />
      <PublicTransportMode />
      <HiddenRecorder />
      <TamperDetection />
    </div>
  );
}

export default App;
