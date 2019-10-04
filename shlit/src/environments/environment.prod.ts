import { DataService } from 'src/services/data.service';
import { DataDurService } from 'src/services/data-dur.service';
import { MessageService } from 'primeng/components/common/messageservice';

export const environment = {
  production: true,
  appName: 'Shopping liste',
  serviceUrl: 'http://www.monservice.com',
  providers: [
    { provide: DataService, useClass: DataDurService },
    MessageService
  ]
};
