Prerequisites:
- If you use Next.JS at least version 9.3.x
- React and React-dom (16.13.x)
- npm install sass (latest implementation dart-sass)

Use xprog-ds on your project:
- npm install xprog-ds
- Create index.scss file (here goes your stylesheet import [@forward 'xprog-ds/styles']
- Create router.scss file (here goes all imports from your components [@forward 'path-to-component']
- Import router.scss in your root index.js file (pages.js for next)
- For every file SCSS you want to use the xprog-ds you must `@use 'path-to-your-index.scss' as *`; 

<br>

**Styleguide documentation: https://zeroheight.com/80cad880e**

<br>

Lear about dart-sass implementation:
- https://sass-lang.com/documentation/at-rules
- https://css-tricks.com/introducing-sass-modules/
