import fs from 'fs'
import fetch from 'node-fetch'

const version = 31
const url = `https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200..900&family=Noto+Serif+TC:wght@200..900&display=swap`

async function fetchCss(url) {
  const req = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36'
    }
  })
  const css = await req.text()
  return css
}

async function generateCss(css) {
  css = css.replaceAll('https://fonts.gstatic.com/s', '/fonts')
  fs.writeFileSync(`v${version}.css`, css)
}

async function fetchFont(url, filename) {
  const rsp = await fetch(url, {
    headers: { 'Content-Type': 'application/octet-stream' }
  })
  const font = await rsp.arrayBuffer()
  // eslint-disable-next-line no-undef
  fs.writeFileSync(`./v${version}/` + filename, Buffer.from(font), 'binary')
}

async function downloadFonts(css) {
  const urls = css.match(/https:\/\/[^\s]+\.woff2/g)

  for (let url of urls) {
    const filename = url.split('/').pop()
    console.log('download font', filename)
    await fetchFont(url, filename)
  }
}

async function main() {
  const css = await fetchCss(url)
  await downloadFonts(css)
  await generateCss(css)
}

main()
