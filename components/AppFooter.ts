import { html } from '@beforesemicolon/markup';
import { Theme } from '../utils/Theme';

const url = 'https://markup.beforesemicolon.com/'

export function AppFooter() {
    return html`
        <footer class="bg-${Theme.App}-950 p-8">
            <p class="text-center">
                Fun little project for testing
                <a class="text-${Theme.Primary}-300 hover:text-${Theme.Primary}-400 transition" href="${url}" target="_blank">Markup</a>
                while riding the extraordinarily long train ride between Bergen and Oslo, like bullet trains when?
            </p>
        </footer>
    `;
}