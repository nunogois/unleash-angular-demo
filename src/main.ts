import { Component } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
// biome-ignore lint/style/useImportType: Angular needs this to not be a type-only import
import { UnleashService } from './app/unleash.service'

@Component({
  selector: 'app-root',
  template: `
    @if (!client.isReady()) {
    <p>Loading...</p>
    } @else { @let isEnabled = client.isEnabled('unleash-angular-demo');
    <p [style.color]="isEnabled ? 'green' : 'red'">
      {{ isEnabled ? 'Feature is enabled!' : 'Feature is disabled.' }}
    </p>
    }
  `
})
export class PlaygroundComponent {
  client = this.unleashService.getClient()

  constructor(private unleashService: UnleashService) {}
}

bootstrapApplication(PlaygroundComponent)
