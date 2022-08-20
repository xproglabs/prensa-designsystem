Prerequisites:
- If you use Next.JS at least version 9.3.x
- React and React-dom (16.13.x)
- npm install sass (latest implementation dart-sass)
- There is no need to use preprocessors like node-sass-chockidar. React team has built in the sass-loader in last updates.

Use prensa on your project:
- npm install prensa
- Create index.scss file (here you can redefine tokens [@forward 'prensa/styles']
- Import prensa router in your index.scss file [@forward 'prensa/styles/router.scss']
- Create router.scss file (here goes all imports from your components [@forward 'path-to-component']
- Import router.scss in your root index.js file (pages.js for next)
- For every file SCSS you want to use the prensa you must `@use 'path-to-your-index.scss' as *`; 

<br>

**Lear about dart-sass implementation:**
- https://sass-lang.com/documentation/at-rules
- https://css-tricks.com/introducing-sass-modules/
