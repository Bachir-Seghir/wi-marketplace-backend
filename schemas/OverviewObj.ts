import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';

export const OverviewObj = list({
  fields: {
    key: text({ isRequired: true }),
    value: text({ isRequired: true, isUnique: true }),
    ProductOverview: relationship({
      ref: 'ProductOverview.items',
      many: false,
      ui: {
        createView: { fieldMode: 'hidden' },
        listView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'hidden' },
      },
    }),
    // eache overview item have a single product overview
  },
  ui: {
    hideCreate: true,
    hideDelete: true,
    labelField: 'key',
    listView: {
      initialColumns: ['key', 'value'],
    },
  },
});
