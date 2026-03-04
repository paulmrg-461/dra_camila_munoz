import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = 'Dra. Camila Muñoz - Armonización Orofacial',
  description = 'Especialista en Armonización Orofacial, Rinomodelación, Labios Rusos y Rejuvenecimiento Facial.',
  keywords = 'Dra. Camila Muñoz, Armonización Orofacial, Rinomodelación, Labios Rusos, Botox, Estética Facial',
  author = 'Dra. Camila Muñoz',
  image = '/logo_light.jpeg',
  url = 'https://dracamilamunoz.com'
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Dra. Camila Muñoz" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@dracamilamunoz" />

      {/* Additional SEO */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
}
