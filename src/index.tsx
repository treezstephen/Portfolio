import { createRoot } from 'react-dom/client';

import './styles/stylesheets/app.scss';

import { App } from './pages/App';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<App />);
