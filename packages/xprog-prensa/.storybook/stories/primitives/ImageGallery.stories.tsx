import React from 'react'

import { ImageGallery } from '../../../primitives/ImageGallery/index'

export default { title: 'Primitives/ImageGallery', component: ImageGallery }

export const Default = () => {
  const galleryList = [
    {
      id: 'policy:1.1036593',
      type: 'com.atex.standard.image.ImageContentDataBean',
      version: 'policy:1.1036593:1672580521',
      byline: 'Divulgação/Assembleia SP',
      caption: 'Cerimônia de posse de Tarcísio como novo governador do Estado de São Paulo',
      url: 'https://images.unsplash.com/photo-1616959313137-186688889054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4170&q=80'
    },
    {
      id: 'policy:1.1036587',
      type: 'com.atex.standard.image.ImageContentDataBean',
      version: 'policy:1.1036587:1672578473',
      byline: 'Reprodução/Rede Alesp',
      caption: 'Tarcísio de Freitas e o presidente da Alesp, Carlão Pignatari',
      url: 'https://images.unsplash.com/photo-1628586165208-0ac525a54757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80'
    },
    {
      id: 'policy:1.1036594',
      type: 'com.atex.standard.image.ImageContentDataBean',
      version: 'policy:1.1036594:1672580549',
      byline: 'Divulgação/Assembleia SP',
      caption: 'Cerimônia de posse de Tarcísio como novo governador do Estado de São Paulo',
      url: 'https://images.unsplash.com/photo-1628586165208-0ac525a54757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80'
    },
    {
      id: 'policy:1.1036596',
      type: 'com.atex.standard.image.ImageContentDataBean',
      version: 'policy:1.1036596:1672580575',
      byline: 'Divulgação/Assembleia SP',
      caption: 'Cerimônia de posse de Tarcísio como novo governador do Estado de São Paulo',
      url: 'https://images.unsplash.com/photo-1628586165208-0ac525a54757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80'
    },
    {
      id: 'policy:1.1036597',
      type: 'com.atex.standard.image.ImageContentDataBean',
      version: 'policy:1.1036597:1672580604',
      byline: 'Divulgação/Assembleia SP',
      caption: 'Cerimônia de posse de Tarcísio como novo governador do Estado de São Paulo',
      url: 'https://images.unsplash.com/photo-1628586165208-0ac525a54757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80'
    }
  ]
  return (
    <ImageGallery
      captionProps={{ enabled: true }}
      showThumbs={true}
      items={galleryList}
    />
  )
}
