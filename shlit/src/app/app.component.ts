import { Component, OnInit, NgZone } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/components/common/messageservice';
declare const device;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private messageService: MessageService, private zone: NgZone) {}
  applicationName = environment.appName;
  batteryStatus: string;
  ngOnInit() {
    document.addEventListener('deviceready', () => {
      this.zone.run(() => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Infos Systems',
          detail: JSON.stringify(device)
        });
      });

      window.addEventListener('batterystatus', status => {
        this.zone.run(() => {
          this.batteryStatus = JSON.stringify(status);
        });
      });
    });
  }
}
