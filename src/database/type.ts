import type { NeonDatabase } from 'drizzle-orm/neon-serverless';

import * as schema from './schemas';

export type deepnovaDatabaseSchema = typeof schema;

export type deepnovaDatabase = NeonDatabase<deepnovaDatabaseSchema>;

export type Transaction = Parameters<Parameters<deepnovaDatabase['transaction']>[0]>[0];
