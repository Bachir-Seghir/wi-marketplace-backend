import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';

export const SubCategory = list({
  fields: {
    name: text({ isRequired: true }),
    // each subCategory belongs to One category
    category: relationship({ ref: 'Category.subCategories', many: false }),
    products: relationship({ ref: 'Product.subCategory', many: true }),
  },
  ui: {
    labelField: 'name',
    listView: {
      initialColumns: ['name', 'category'],
    },
  },
});
