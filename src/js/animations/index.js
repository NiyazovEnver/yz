import './mainTL';

import Highway from '@dogstudio/highway';
import Default, {Contacts,Projects, Details, Main } from './highway';

try {
  const H = new Highway.Core({
    renderers: {
      contacts: Contacts,
      details: Details,
      projects: Projects,
      main: Main
    },
    transitions: {
      default: Default
    }
  });
} catch (e) {}
