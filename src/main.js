import App from './App.svelte';

const app = new App({
	target: document.getElementById('svelte_app'),
	hydrate: true,
});

export default app;