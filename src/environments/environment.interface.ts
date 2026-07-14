import { FirebaseOptions } from '@angular/fire/app';

export interface IEnvironment {
  configFirebase: {
    apiKeys: FirebaseOptions;
    collections: {
      clients: 'CLIENTS';
      users: 'USERS';
    };
  };
}
