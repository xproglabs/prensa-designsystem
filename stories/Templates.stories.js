// import {find} from 'lodash';
// import React from 'react';

// import Block from '../components/Block';
// import {
//   Featured, 
//   GridNews
// } from '../components/Templates';
// import pagelist from '../mockup/pagelist.json';
// import {sassWrapper} from '../utils/SassWrapper';

// export default {
//   title: 'Templates',
//   component: Block,
//   decorators: [sassWrapper]
// };

// export const Featured1 = () => {
//   const status = {loading: false, error: false};
//   const template = find(pagelist, {contentId: '1.1984'});
//   return <Featured content={template} status={status} />;
// };

// export const Featured3 = () => {
//   const status = {loading: false, error: false};
//   const template = find(pagelist, {contentId: '1.1985'});
//   return <Featured content={template} status={status} />;
// };

// export const GridCom3 = () => {
//   const status = {loading: false, error: false};
//   const template = find(pagelist, {contentId: '1.1983'});
//   return <GridNews content={template} status={status} />;
// };

// export const GridCom4 = () => {
//   const status = {loading: false, error: false};
//   const template = find(pagelist, {contentId: '1.1986'});
//   return <GridNews content={template} status={status} />;
// };