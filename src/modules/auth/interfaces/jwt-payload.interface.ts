export interface JwtPayload {
  email?: string;
  role?: string;
  created?: string;
  hash?: string;
  jti?: string;
}
