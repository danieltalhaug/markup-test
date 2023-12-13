import { html, state } from '@beforesemicolon/markup';
import { Theme } from '../utils/Theme';
import { Button } from './Button';

const [count, updateCount] = state(0);
const title = 'Amount of tunnels from Oslo to Bergen:';

export function Counter() {
    return html`
        <article class="rounded-lg p-12 bg-${Theme.App}-950 flex flex-col justify-center items-center gap-8">
            <h2 class="text-md">${title}</h2>
            <p class="transition text-6xl">${count}</p>
            <div class="flex gap-2">
                ${Button({content: 'Add +'}, {
                    onClick: () => updateCount(count() + 1),
                })}
                ${Button({content: 'Subtract -', theme: Theme.Secondary}, {
                    onClick: () => updateCount((prev) => prev === 0 ? prev = 0 : prev - 1),
                })}
            </div>
        </article>
    `;
}