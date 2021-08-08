// import React from 'react';

// import Image from '../components/Image';
// import ImageBackground from '../components/Image/Background';
// import imageMockup from '../mockup/image.json';
// import {sassWrapper} from '../utils/SassWrapper';

// export default {
//   title: 'Image',
//   component: Readme,
//   decorators: [sassWrapper]
// };

// export const Readme = () => {
//   return (
//     <p>
//       <h3>Image</h3>
//     </p>
//   );
// };

// export const Default = () => {
//   const propsAbsolute = {
//     content: imageMockup[0],
//     lazyLoad: null
//   };
//   const propsContentId = {
//     content: imageMockup[3],
//     lazyLoad: null
//   };
//   return (
//     <>
//       <pre>Image {imageMockup[0]['image-path']}</pre>
//       <Image {...propsAbsolute} />
//       <pre>Image {imageMockup[3]['image-contentId']}</pre>
//       <Image {...propsContentId} />
//     </>
//   );
// };

// export const Background = () => {
//   const propsAbsolute = {
//     content: imageMockup[1],
//     height: 380,
//     lazyLoad: null
//   };
//   const propsContentId = {
//     content: imageMockup[2],
//     height: 380,
//     lazyLoad: null
//   };
//   return (
//     <>
//       <pre>Image.background {imageMockup[1]['image-path']}</pre>
//       <ImageBackground {...propsAbsolute} />
//       <pre>Image.background {imageMockup[2]['image-contentId']}</pre>
//       <ImageBackground {...propsContentId} />
//     </>
//   );
// };