export interface SessionPayload {
  userId: string;
  expiration: Date;
  token: string;
  role: string;
  [key: string]: any;  // Allow dynamic properties
}
