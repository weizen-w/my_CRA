import Address from './Address';
import Name from './Name';

export default interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  address: Address;
  phone: string;
}
