import { SessionModel } from '@/database/models/session';
import { deepnovaDatabase } from '@/database/type';
import { getServerDefaultAgentConfig } from '@/server/globalConfig';

export class AgentService {
  private readonly userId: string;
  private readonly db: deepnovaDatabase;

  constructor(db: deepnovaDatabase, userId: string) {
    this.userId = userId;
    this.db = db;
  }

  async createInbox() {
    const sessionModel = new SessionModel(this.db, this.userId);
    const defaultAgentConfig = getServerDefaultAgentConfig();
    await sessionModel.createInbox(defaultAgentConfig);
  }
}
