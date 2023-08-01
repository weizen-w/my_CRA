import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import User from './types/User';

export default function UsersPage(): JSX.Element {
  const { userId } = useParams();
  const [users, setUsers] = useState<User[]>([]);
  async function loadUsers(): Promise<void> {
    const res = await fetch('https://fakestoreapi.com/users');
    const obj = await res.json();
    setUsers(obj);
  }
  function getUsers(arr: User[]): JSX.Element {
    return (
      <div>
        {arr.map((user: User) => (
          <Link to={String(user.id)}>
            <h1 key={user.id}>{user.name.lastname}, {user.name.firstname}</h1>
            <img style={{ height: '100px' }} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt={user.username} />
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
          </Link>
        ))}
      </div>
    );
  }
  useEffect(() => {
    loadUsers();
  }, []);
  return userId ? <Outlet /> : getUsers(users);
}
