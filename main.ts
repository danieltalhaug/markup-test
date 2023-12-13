import { html, state } from '@beforesemicolon/markup';
const app = document.getElementById('app');
const greet = 'Hello world! This is a boilerplate with Markup, tailwind and Vite :)';

html`
	<h1 class="text-red-500">${greet}</h1>
`.render(app);