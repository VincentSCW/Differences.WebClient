export interface User {
  id: string;
  displayName: string;
  email?: string;
  roles?: string[];
  avatarUrl?: string;
  contributeValue?: number;
  reputationValue?: number;
}
