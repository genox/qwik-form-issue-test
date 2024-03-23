import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { webfontDownload } from 'vite-plugin-webfont-dl';
import checker from 'vite-plugin-checker';
import { qwikSpeakInline } from 'qwik-speak/inline';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      qwikCity({ trailingSlash: false }),
      qwikVite(),
      qwikSpeakInline({
        supportedLangs: ['en', 'de'],
        defaultLang: 'en',
        autoKeys: true
      }),
      webfontDownload([
        'https://fonts.googleapis.com/css2?family=Dosis:wght@200;400;700;800&display=swap',
        'https://fonts.googleapis.com/css2?&family=Inter:wght@400;700;900&display=swap'
      ]),
      checker({
        // e.g. use TypeScript check
        typescript: true,
      }),
      tsconfigPaths(),
    ],
    build: {
      minify: true,
      sourcemap: false,
      emptyOutDir: true,
    },
    define: {
      __APP_VERSION__: JSON.stringify(`${mode}`),
    },
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});

