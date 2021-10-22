import { list } from '@keystone-next/keystone/schema';
import { text, relationship, select } from '@keystone-next/fields';

export const OptionValue = list({
  fields: {
    name: text({ isRequired: true }),
    value: text({ isRequired: true }),
    ProductOption: relationship({
      ref: 'ProductOption.values',
      ui: {
        createView: { fieldMode: 'hidden' },
        listView: { fieldMode: 'read' },
        itemView: { fieldMode: 'read' },
      },
    }),
  },
  ui: {
    labelField: 'name',
    listView: {
      initialColumns: ['name', 'value'],
    },
  },
});
