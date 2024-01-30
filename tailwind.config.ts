import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    cecom_blue: '#0648A6FF',
                    lightgray30: '#D9D9D955',
                    lightgray50: '#D9D9D980',
                    lightgray100: '#D9D9D9FF',
                }
            },
            fontFamily: {
                'gmarket-b': ['GmarketSansBold'],
                'gmarket-m': ['GmarketSansMedium'],
                'gmarket-l': ['GmarketSansLight'],
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}
export default config
