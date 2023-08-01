import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import User from './types/User';
import styles from './UsersPage.module.css';

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
      <div className={styles.divStyle}>
        {arr.map((user: User) => (
          <div className={styles.boxStyle}>
            <Link to={String(user.id)} style={{ textDecoration: 'none' }}>
              <h1 className={styles.nameStyle} key={user.id}>
                {user.name.lastname}, {user.name.firstname}
              </h1>
            </Link>
            <div className={styles.boxCardStyle}>
              <img
                className={styles.imgStyle}
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                alt={user.username}
              />
              <div className={styles.datenBoxStyle}>
                <p>Username: {user.username}</p>
                <p>Password: {user.password}</p>
                <p>E-mail: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Address:</p>
                <p>{user.address.zipcode} {user.address.city},</p>
                <p>{user.address.street}, {user.address.number}</p>
                <p>
                  Geolocation: lat({user.address.geolocation.lat}), long(
                  {user.address.geolocation.long})
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  useEffect(() => {
    loadUsers();
  }, []);
  return userId ? <Outlet /> : getUsers(users);
}
