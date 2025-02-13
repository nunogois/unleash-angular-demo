// src/app/feature-toggle.service.ts
import { Injectable } from '@angular/core';
import { UnleashClient, IConfig } from 'unleash-proxy-client';

@Injectable({
  providedIn: 'root'
})
export class UnleashService {
  private client: UnleashClient;

  constructor() {
    // Configure Unleash options
    const options: IConfig = {
      url: 'https://eu.app.unleash-hosted.com/demo/api/frontend', // Update with your Unleash instance / Edge URL
      clientKey: 'unleash-angular-demo:development.6ecc25ed9e4dfcb7bf07ba0659291068a7505daecd5a0b54538599b3', // Use your frontend token here
      appName: 'unleash-angular-demo',
      refreshInterval: 2,
      // You can pass additional options here.
    };

    // Initialize the Unleash client
    this.client = new UnleashClient(options);

    // Start the client (this begins the background polling)
    this.client.start();
  }

  /**
   * Returns the Unleash client.
   * Consumers can check the client's readiness (via isReady, events, etc.) before using it.
   */
  getClient(): UnleashClient {
    return this.client;
  }
}