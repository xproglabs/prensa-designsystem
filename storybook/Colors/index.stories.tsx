import tokens from '../../tokens/theme.json';
import Block from '../../components/Block'

import { styled } from '../../stitches.config';
import { ComponentMeta } from '@storybook/react';


export default {
  title: "PrensaDS/Colors",
  component: Block,
} as ComponentMeta<typeof Block>;

const ColorBlock = styled('div');

const textStyle = {
  backgroundColor:'rgb(255 255 255 / 75%)',
  borderRadius: '8px',
  margin: '14px 12px',
  textAlign: 'center',
  padding: '4px',
  fontSize: '11px',
  wordBreak: 'break-word',
};

export const Default = () => {
  let lastType = '';
  return (Object.keys(tokens.colors)).map(color => {
    const selfType = color.replace(/\d+/g, '');
    if (!lastType) {
      lastType = selfType
    }

    const isLast = lastType !== selfType;

    if (isLast) {
      lastType = selfType;
    }

    console.log({
      selfType,
      lastType,
      isLast
    });

    return (
      <>
      {isLast
          ? <ColorBlock css={{height:'1rem', width: '100%'}}></ColorBlock> 
          : null}
        <ColorBlock css={{$$size: '90px', display:'inline-block',width:'$$size', height: '$$size',backgroundColor: `$colors$${color}`}}>
          <ColorBlock css={{...textStyle}}>
          {color}
          <br/>
          {tokens.colors[color]}
          </ColorBlock>
        </ColorBlock>
        
      </>
  )})
};

// {color.indexOf('900') !== -1 || (color.indexOf('v1') !== -1  && color.indexOf('3') !== -1 ) 
//           ? <ColorBlock css={{height:'1rem', width: '100%'}}></ColorBlock> 
//           : null}