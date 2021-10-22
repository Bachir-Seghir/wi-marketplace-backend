import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';

export const Category = list({
  fields: {
    name: text({ isRequired: true }),
    // each category belongs to One Department
    department: relationship({ ref: 'Department.categories', many: false }),
    // each  category have multi subCategories
    subCategories: relationship({
      ref: 'SubCategory.category',
      many: true,
    }),
    products: relationship({ ref: 'Product.category', many: true }),
  },
  ui: {
    labelField: 'name',
    listView: {
      initialColumns: ['name', 'department'],
    },
  },
});
