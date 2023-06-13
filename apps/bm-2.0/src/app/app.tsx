import * as React from 'react';

import styled from 'styled-components';

import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const FeesModule = React.lazy(() => import('fees/Module'));

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/remote-app1">RemoteApp1</Link>
        </li>

       </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="mf-host" />} />
        <Route path="/remote-app1" element={<FeesModule />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
