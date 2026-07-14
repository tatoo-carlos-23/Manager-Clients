import { ClientCollectModel } from '@mc/api/clients';

export interface IAddModalData {
  onFinish?: () => void;
  client?: ClientCollectModel;
}
