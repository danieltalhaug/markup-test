import { html } from '@beforesemicolon/markup';
import { AppHeader } from './components/AppHeader';
import { AppFooter } from './components/AppFooter';
import { Counter } from './components/Counter';
import { Theme } from './utils/Theme';

const app = document.getElementById('app');

const App = () => {
	return html`
		<div class="container-sm mx-auto bg-${Theme.App}-900 h-screen text-white text-base">
			${AppHeader()}
			<main class="h-full flex justify-center items-center">
				${Counter()}
			</main>
			${AppFooter()}
		</div>
	`;
};

App().render(app);