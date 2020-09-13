import React from 'react';

import Teaser from '../components/Teasers';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Teaser',
  component: Teaser,
  decorators: [sassWrapper]
};

const teasermockup = {
  'contentId': '7.137',
  'inputTemplate': 'com.atex.plugins.teaser.Teaser',
  'image': {
    'image-byline': '',
    'image-contentId': '1.10005.1596502233',
    'image-subtitle': '',
    'image-subtitle-original': '227341'
  },
  'name': 'Dia do trabalho: futebol corta empregos por conta do coronavírus',
  'path': '/nacional/dia-do-trabalho-futebol-corta-empregos-por-conta-do-coronav%C3%ADrus-1.10909',
  'subject': 'AUXÍLIO EMERGENCIAL',
  'subtitle': 'Parada do futebol atinge em cheio finanças de clubes como o Flamengo',
  'time-published': '2020-05-01 07:49'
};

export const Default = () => {
  const status = {
    loading: false,
    error: false
  };
  return (
    <Teaser content={teasermockup} status={status} />
  );
};