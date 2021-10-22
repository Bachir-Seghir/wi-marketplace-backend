import { list } from '@keystone-next/keystone/schema';
import { text, relationship, select } from '@keystone-next/fields';

export const ProductOption = list({
  access: {
    read: () => true,
    create: () => true,
  },
  fields: {
    title: text({ isRequired: true }),
    type: select({
      dataType: 'enum',
      options: [
        { label: 'Image', value: 'image' },
        { label: 'Text', value: 'text' },
      ],
      defaultValue: 'text',
      isRequired: true,
      isIndexed: true,
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    values: relationship({ ref: 'OptionValue.ProductOption', many: true }),
    products: relationship({ ref: 'Product.options', many: true }),
  },
  ui: {
    hideCreate: true,
    hideDelete: true,
    labelField: 'title',
    listView: {
      initialColumns: ['title', 'values'],
    },
  },
});
