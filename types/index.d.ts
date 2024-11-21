export interface UploadFileProps {
  file: File;
  ownerId: string;
  accountId: string;
  path: string;
}

declare interface ActionType {
  label: string;
  icon: string;
  value: string;
}
