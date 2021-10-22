import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';

export const Department = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({ isRequired: true }),
    // each  Department have multi categories
    categories: relationship({ ref: 'Category.department', many: true }),
    products: relationship({ ref: 'Product.department', many: true }),
    section: relationship({ ref: 'SidebarSection.items', many: false }),
  },
  ui: {
    labelField: 'name',
  },
});
