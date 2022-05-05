import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'yurutech',
  apiKey: process.env.API_KEY,
});
