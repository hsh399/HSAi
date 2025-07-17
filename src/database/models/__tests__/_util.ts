import { clientDB, initializeDB } from '@/database/client/db';
import { deepnovaDatabase } from '@/database/type';

const isServerDBMode = process.env.TEST_SERVER_DB === '1';

export const getTestDB = async () => {
  if (isServerDBMode) {
    const { getTestDBInstance } = await import('@/database/core/dbForTest');
    return await getTestDBInstance();
  }

  await initializeDB();
  return clientDB as deepnovaDatabase;
};
