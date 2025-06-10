interface attachType {
  icon?: string;
  file?: string;
  fileSize?: string;
}

interface chatHistoryType {
  createdAt?: any;
  msg: string;
  senderId: number | string;
  type: string;
  attachment: attachType[];
  id: string;
}

export interface ChatType {
  id: number;
  name: string;
  status: string;
  thumb: string;
  recent: boolean;
  chatHistory: chatHistoryType[];
}
