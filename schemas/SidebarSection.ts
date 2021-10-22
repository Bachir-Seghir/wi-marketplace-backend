import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';

export const SidebarSection = list({
  fields: {
    name: text({ isRequired: true }),
    // each  Department have multi categories
    items: relationship({ ref: 'Department.section', many: true }),
  },
  ui: {
    labelField: 'name',
  },
});
