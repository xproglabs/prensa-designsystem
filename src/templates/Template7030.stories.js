// import React from 'react';
// import Template from './Template7030'
// import data from './Template7030.json'
// import {get} from 'lodash'

// export default {
//   title: 'Templates/7030',
//   component: Template
// };

// const FEATURED_LAYOUT = {
//   featured: {
//     box: {
//       aligny: ['top', 'between'],
//       height: ['auto', '366px'],
//       pb: [3, 3],
//       pt: [3, 3],
//     },
//     box_wrap: {
//       aligny: ['top', 'between'],
//       height: ['auto', '366px']
//     },
//     datetime_enabled: true,
//     image: {
//       enabled: false,
//       mb: [0, 0]
//     },
//     title: {
//       enabled: true,
//       font_size: ['32px', '44px'],
//       line_height: ['36px', '48px']
//     },
//     subject: subject_filled,
//     subtitle: {
//       color: 'neutral3',
//       enabled: true,
//       font_size: ['18px', '18px'],
//       line_height: ['26px', '26px']
//     },
//   }
// }

// const FEATURED_RELATED_LAYOUT = {
//   featured_related: {
//     box: {
//       pb: [3, 3],
//       pt: [3, 3]
//     },
//     box_wrap: {
//       aligny: ['top', 'top'],
//       height: ['auto', 'auto']
//     },
//     datetime_enabled: true,
//     image: {
//       enabled: false,
//       mb: [0, 0]
//     },
//     title: {
//       enabled: true,
//       font_size: ['24px', '24px'],
//       line_height: ['28px', '28px']
//     },
//     subject: subject_default,
//     subtitle: {
//       enabled: false
//     }
//   }
// }

// export const DefaultComponent = () => {

//   const items = get(data, 'content.items')
//   if (items.length < 3) return <pre>sem conteudo</pre>

//   const slot70_items = [ items[0] ]
//   const slot30_items = [ items[1], items[2] ]

//   return (
//     <Template
//       slot70={{
//         column_items: 1,
//         column_padding: '0px',
//         layout: FEATURED_LAYOUT.featured,
//         slot: slot70_items,
//       }}
//       slot30={{
//         column_items: 1,
//         column_padding: 0,
//         layout: FEATURED_RELATED_LAYOUT.featured_related,
//         slot: slot30_items
//       }}
//     />
//   );
// };
