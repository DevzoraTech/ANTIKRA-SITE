import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// @ts-expect-error This project intentionally keeps the build dependency-free of Node typings.
import { mkdir, readFile, writeFile } from 'node:fs/promises'
// @ts-expect-error This project intentionally keeps the build dependency-free of Node typings.
import { dirname, resolve } from 'node:path'
import {
  OG_IMAGE,
  absoluteUrl,
  createPageJsonLd,
  defaultKeywords,
  seoPages,
} from './src/domain/seo'

declare const process: { cwd(): string }

function escapeAttribute(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function staticSeoPages(): Plugin {
  return {
    name: 'antikra-static-seo-pages',
    async closeBundle() {
      const outputRoot = resolve(process.cwd(), 'dist')
      const baseHtml = await readFile(resolve(outputRoot, 'index.html'), 'utf8')

      for (const seo of Object.values(seoPages)) {
        if (seo.path === '/' || seo.noindex) continue

        const canonical = absoluteUrl(seo.path)
        const robots = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        let html = baseHtml
          .replace(/<title>[^<]*<\/title>/i, `<title>${escapeAttribute(seo.title)}</title>`)
          .replace(/<link rel="canonical" href="[^"]*"\s*\/>/i, `<link rel="canonical" href="${canonical}" />`)
          .replace('</head>', `  <script type="application/ld+json" id="antikra-static-page-jsonld">${JSON.stringify(createPageJsonLd(seo)).replace(/</g, '\\u003c')}</script>\n  </head>`)

        html = html.replace(
          /(<meta\s+name="description"\s+content=")[^"]*("\s*\/?>)/i,
          `$1${escapeAttribute(seo.description)}$2`,
        )
        html = html.replace(
          /(<meta\s+name="keywords"\s+content=")[^"]*("\s*\/?>)/i,
          `$1${escapeAttribute(seo.keywords ?? defaultKeywords)}$2`,
        )
        html = html.replace(
          /(<meta\s+name="robots"\s+content=")[^"]*("\s*\/?>)/i,
          `$1${robots}$2`,
        )
        html = html.replace(/(<meta\s+property="og:title"\s+content=")[^"]*("\s*\/?>)/i, `$1${escapeAttribute(seo.title)}$2`)
        html = html.replace(/(<meta\s+property="og:description"\s+content=")[^"]*("\s*\/?>)/i, `$1${escapeAttribute(seo.description)}$2`)
        html = html.replace(/(<meta\s+property="og:url"\s+content=")[^"]*("\s*\/?>)/i, `$1${canonical}$2`)
        html = html.replace(/(<meta\s+property="og:type"\s+content=")[^"]*("\s*\/?>)/i, `$1${seo.type === 'article' ? 'article' : 'website'}$2`)
        html = html.replace(/(<meta\s+property="og:image"\s+content=")[^"]*("\s*\/?>)/i, `$1${OG_IMAGE}$2`)
        html = html.replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*("\s*\/?>)/i, `$1${escapeAttribute(seo.title)}$2`)
        html = html.replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*("\s*\/?>)/i, `$1${escapeAttribute(seo.description)}$2`)
        html = html.replace(
          /(<meta property="og:locale" content="en_US" \/>\s*){2}/,
          '<meta property="og:locale" content="en_US" />\n    ',
        )

        const outputPath = resolve(outputRoot, seo.path.slice(1), 'index.html')
        await mkdir(dirname(outputPath), { recursive: true })
        await writeFile(outputPath, html)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), staticSeoPages()],
})
