// src/routes/gallery/+page.server.js
import { sanity } from '$lib/sanityClient';

export const ssr = false;


export async function load() {
    const query = `*[_type == "galleryImage" && defined(image.asset)] | order(_createdAt desc){
        _id,
        title,
        alt,
        caption,
        image {
          ...,
          asset->
        }
      }`;
      
      
      

  const images = await sanity.fetch(query);

  return {
    images
  };
}