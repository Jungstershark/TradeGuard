export interface SessionPayload {
  userId: string;
  expiration: Date;
  role: string;
  [key: string]: any;  // Allow dynamic properties
}
