import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    templateProps: window.templateProps || {
      headline: 'Hello Sam',
      showLogos: true,
      backgroundImage: ''
    }
  }
});

export default app;
