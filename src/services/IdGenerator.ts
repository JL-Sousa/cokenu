import { v4 as uuidv4 } from 'uuid';

export class IdGenerator {
  public generateId(): string {
    return uuidv4();
  }
}