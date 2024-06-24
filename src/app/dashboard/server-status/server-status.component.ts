import { Component, OnDestroy, OnInit, signal, } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  
  private interval?: NodeJS.Timeout;

  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      const random = Math.random(); // 0 - 1 (excluded)
      if (random < 0.5) {
        this.currentStatus.set('online')
      } else if (random < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
