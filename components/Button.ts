import { html } from '@beforesemicolon/markup';
import { Theme } from '../utils/Theme';

export function Button({content = 'Button', theme = Theme.Primary}, { type = 'button', onClick = () => {} }) {
    return html`
        <button
            class="flex gap-1 justify-center align-center rounded-sm px-4 py-1 active:ring-1 ring-amber-900 text-center bg-${theme}-500 hover:bg-${theme}-600 transition"
            type="${type}"
            onclick="${onClick}"
        >
            <span class="text-sm text-white">
                ${content}
            </span>
        </button>
    `;
}
