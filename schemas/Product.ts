import { list } from '@keystone-next/keystone/schema';
import { text, integer, relationship } from '@keystone-next/fields';

export const Product = list({
  fields: {
    title: text({ isRequired: true }),
    description: text({ isRequired: true, ui: { displayMode: 'textarea' } }),
    price: integer({ isRequired: true, defaultValue: 0 }),
    discount: integer({ isRequired: true, defaultValue: 0 }),
    stock: integer({ isRequired: true, defaultValue: 1 }),
    seller: relationship({
      ref: 'User.products',
      defaultValue: ({ context }) => ({
        connect: { id: context.session.itemId },
      }),
      ui: {
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
        listView: { fieldMode: 'read' },
      },
    }),
    options: relationship({ ref: 'ProductOption.products', many: true }),
    overview: relationship({ ref: 'ProductOverview.product', many: false }),
    tags: relationship({ ref: 'Tag.products', many: true }),
    department: relationship({ ref: 'Department.products', many: false }),
    category: relationship({ ref: 'Category.products', many: false }),
    subCategory: relationship({ ref: 'SubCategory.products', many: false }),
  },
  ui: {
    labelField: 'title',
    listView: {
      initialColumns: [
        'title',
        'price',
        'stock',
        'department',
        'category',
        'subCategory',
        'seller',
      ],
      pageSize: 10,
    },
  },
});
