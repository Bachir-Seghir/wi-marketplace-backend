import { list } from '@keystone-next/keystone/schema';
import { relationship } from '@keystone-next/fields';

export const ProductOverview = list({
  fields: {
    items: relationship({ ref: 'OverviewObj.ProductOverview', many: true }),
    // each product overview can have multiple items
    product: relationship({
      ref: 'Product.overview',
      many: false,
      ui: {
        createView: { fieldMode: 'hidden' },
        listView: { fieldMode: 'read' },
        itemView: { fieldMode: 'read' },
      },
    }),
  },
  ui: {
    hideCreate: true,
    hideDelete: true,
  },
});
