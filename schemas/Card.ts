import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';

export const Card = list({
  access: {
    read: true,
  },
  fields: {
    title: text({ isRequired: true }),
    image: text({ isRequired: true }),
  },
  ui: {
    labelField: 'title',
  },
});
