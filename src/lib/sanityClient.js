import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: 'dx5o03mz', // e.g., 'o6y8klcs'
  dataset: 'production',
  apiVersion: '2025-04-01', // safe current version
  useCdn: true, // faster, cached, read-only
});
