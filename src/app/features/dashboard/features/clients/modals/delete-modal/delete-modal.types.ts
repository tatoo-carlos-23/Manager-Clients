import { ClientCollectModel } from '@mc/api/clients';

export interface IDeleteModalData {
  onFinish?: () => void;
  client: ClientCollectModel;
}
