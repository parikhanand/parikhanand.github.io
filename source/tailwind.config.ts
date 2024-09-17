import { join } from 'path';
import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
    ],
    theme: {
        extend: {}
    },
    plugins: [
        typography,
        forms,
        skeleton({
            themes: {
                preset: [
                    {
                        name: 'wintry',
                        enhancements: true
                    }
                ]
            }
        })
    ]
} satisfies Config;
