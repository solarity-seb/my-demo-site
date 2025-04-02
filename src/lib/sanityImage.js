import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
    projectId: 'dx5o03mz', // e.g., 'o6y8klcs'
    dataset: 'production',
    apiVersion: '2025-04-01', // safe current version
    useCdn: true, // faster, cached, read-only
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
