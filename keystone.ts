import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';

import { User } from './schemas/User';

import { SidebarSection } from './schemas/SidebarSection';
import { Department } from './schemas/Department';
import { Category } from './schemas/Category';
import { SubCategory } from './schemas/SubCategory';

import { Card } from './schemas/Card';

import { Product } from './schemas/Product';

import { ProductOption } from './schemas/ProductOption';
import { OptionValue } from './schemas/OptionValue';

import { ProductOverview } from './schemas/ProductOverview';
import { OverviewObj } from './schemas/OverviewObj';

import { Tag } from './schemas/Tag';

import { CartItem } from './schemas/CartItem';

const databaseUrl = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 365, // One (1) hour of active session
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // add initial role to this initial user
  },
});

export default withAuth(
  config({
    // @ts-ignore
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
      port: 5000,
    },

    db: {
      adapter: 'mongoose',
      url: databaseUrl,
    },
    lists: createSchema({
      User,
      SidebarSection,
      Department,
      Category,
      SubCategory,
      Card,
      Product,
      ProductOption,
      OptionValue,
      ProductOverview,
      OverviewObj,
      Tag,
      CartItem,
    }),
    ui: {
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: 'id name email',
    }),
  })
);
