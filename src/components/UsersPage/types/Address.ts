import Geo from './Geo';

export default interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: Geo;
}
