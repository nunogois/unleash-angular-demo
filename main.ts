import {Component, computed} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import { UnleashService } from './app/unleash.service';

@Component({
  selector: 'app-root',
  template: `
  @if (loading()) {
    <p>Loading...</p>
  } @else {
    <p [style.color]="enabled() ? 'green' : 'red'">
      {{ enabled() ? 'Feature is enabled!' : 'Feature is disabled.' }}
    </p>
  }
  `,
})
export class PlaygroundComponent {
  client = this.unleashService.getClient();
  loading = () => !this.client.isReady();
  enabled = () => this.client.isEnabled('unleash-angular-demo');

  constructor(private unleashService: UnleashService) {}
}

bootstrapApplication(PlaygroundComponent);
