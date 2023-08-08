const esbuild = require('esbuild')

const copyrightMessage = `/**
 * Copyright © ${new Date(Date.now()).getFullYear()} XPROG <xproglabs@gmail.com>
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
 * KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */`

async function run() {
  await esbuild.build({
    entryPoints: [
      { in: 'hooks/index.ts', out: 'hooks' },
      { in: 'primitives/Accordion/index.ts', out: 'primitives/Accordion' },
      { in: 'primitives/Block/index.ts', out: 'primitives/Block' },
      { in: 'primitives/Button/index.ts', out: 'primitives/Button' },
      { in: 'primitives/Calendar/index.tsx', out: 'primitives/Calendar' },
      { in: 'primitives/Carousel/index.ts', out: 'primitives/Carousel' },
      { in: 'primitives/CircularProgress/index.ts', out: 'primitives/CircularProgress' },
      { in: 'primitives/Drawer/index.ts', out: 'primitives/Drawer' },
      { in: 'primitives/IconButton/index.ts', out: 'primitives/IconButton' },
      { in: 'primitives/ImageGallery/index.tsx', out: 'primitives/ImageGallery' },
      { in: 'primitives/Link/index.ts', out: 'primitives/Link' },
      { in: 'primitives/Tabs/index.ts', out: 'primitives/Tabs' },
      { in: 'primitives/Typography/index.ts', out: 'primitives/Typography' },
      { in: 'news/Footer/index.ts', out: 'news/Footer' },
      { in: 'news/PageBlock/index.ts', out: 'news/PageBlock' },
      { in: 'news/SideMenu/index.ts', out: 'news/SideMenu' },
      { in: 'news/Teaser/index.ts', out: 'news/Teaser' },
      { in: 'news/Topbar/index.ts', out: 'news/Topbar' }
    ],
    target: [
      'node13'
    ],
    logLevel: 'info',
    outdir: 'dist',
    packages: 'external',
    platform: 'node',
    bundle: true,
    minify: true,
    sourcemap: false,
    banner: {
      js: copyrightMessage
    }
  })
}

run()