import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

import FacebookEmbed, {facebook_amp_script} from '../components/embeds/Facebook';
import InstagramEmbed, {instagram_amp_script} from '../components/embeds/Instagram';
import TwitterEmbed, {twitter_amp_script} from '../components/embeds/Twitter';
import YouTubeEmbed, {youtube_amp_script} from '../components/embeds/YouTube';
import ImageGallery from '../components/ImageGallery';
import styles from '../styles/Home.module.css';

const H1 = styled.h1`
  font-family: inherit;
  color: red;
`;
const Main = styled.main`
  padding: 5rem 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const config = {amp: true};

export default function Home() {
  const tweetId = '1242733524710387713';
  const instagramUrl = 'https://www.instagram.com/p/Bz4H4mahyOq';
  const facebookUrl = 'https://www.facebook.com/HugoGloss/posts/10158171335166146';
  const youtubeUrl = 'https://www.youtube.com/watch?v=qJzT_Ww8q9g';
  const imageGallery = [
    {
      caption: 'Mariane criou empresa com foco na economia sustentável (Fotos: Divulgação)',
      contentId: '1.3658',
      value: 'http://qa.diariodaregiao.com.br/image/policy:1.3658/image.jpg?f=2x1&w=1200'
    },
    {
      caption: 'O cabeleireiro Douglas Negrett montou salão para valorizar estética negra (Guilherme Baffi 7/5/2021)',
      contentId: '1.34636',
      value: 'http://qa.diariodaregiao.com.br/image/policy:1.34636/image.jpg?f=2x1&w=1200'
    },
    {
      caption: 'Isadora, filha da médica Luciana Casseb, com camiseta da marca ',
      contentId: '1.34723',
      value: 'http://qa.diariodaregiao.com.br/image/policy:1.34723/image.jpg?f=2x1&w=1200'
    }
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {twitter_amp_script}
        {instagram_amp_script}
        {facebook_amp_script}
        {youtube_amp_script}
      </Head>

      <Main>
        <H1>Videos Youtube</H1>
        <YouTubeEmbed url={youtubeUrl} />
        <YouTubeEmbed url={youtubeUrl} />
        <H1>Componente aqui</H1>
        <ImageGallery items={imageGallery} />
        <TwitterEmbed tweetId={tweetId} />
        <InstagramEmbed url={instagramUrl} />
        <FacebookEmbed url={facebookUrl} />
      </Main>
    </div>
  );
}
