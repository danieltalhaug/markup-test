import { html } from '@beforesemicolon/markup';

const title = 'Markup test';

export function AppHeader() {
    return html`
        <header>
            <section class="p-8">
                <h1 class="text-lg text-white">${title}</h1>
            </section>
        </header>
    `;
}