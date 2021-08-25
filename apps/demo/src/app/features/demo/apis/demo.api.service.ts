import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class DemoApiService {
  defaultHeaders: { name: string; value: string | string[] } = { name: 'Content-Type', value: 'application/json' };
  constructor(private readonly http: HttpClient) {}
}
