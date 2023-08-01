import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import User from '../UsersPage/types/User';

export default function UserCard(): JSX.Element {
  const initialUser: User = {
    id: 0,
    email: '',
    username: '',
    password: '',
    name: {
      firstname: '',
      lastname: '',
    },
    address: {
      city: '',
      street: '',
      number: 0,
      zipcode: '',
      geolocation: {
        lat: '',
        long: '',
      },
    },
    phone: '',
  };
  const { userId } = useParams();
  const [user, setUser] = useState<User>(initialUser);
  useEffect(() => {
    async function loadUser(): Promise<void> {
      const res = await fetch(`https://fakestoreapi.com/users/${userId}`);
      const obj = await res.json();
      setUser(obj);
    }
    loadUser();
  }, [userId]);
  return (
    <div>
      <p>
        <Link to="..">Назад к списку товаров</Link>
      </p>
      <img
        style={{ height: '100px' }}
        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
        alt={user.username}
      />
      <h1>{user.name.lastname}, {user.name.firstname}</h1>
      <div>
        <p>Username: {user.username}</p>
        <p>Password: {user.password}</p>
        <p>E-mail: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Address:</p>
        <p>{user.address.zipcode} {user.address.city},</p>
        <p>{user.address.street}, {user.address.number}</p>
        <p>
          Geolocation:
          lat({user.address.geolocation.lat}),
          long({user.address.geolocation.long})
        </p>
      </div>
    </div>
  );
}
