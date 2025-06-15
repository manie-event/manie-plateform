export interface ContactMessage {
  id?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}
