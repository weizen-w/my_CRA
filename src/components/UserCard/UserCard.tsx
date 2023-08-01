import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import User from '../UsersPage/types/User';
import styles from './UserCard.module.css';

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
    <div className={styles.boxStyle}>
      <p className={styles.btnStyle}>
        <Link to="..">← Назад к списку пользователей</Link>
      </p>
      <img
        className={styles.imgStyle}
        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
        alt={user.username}
      />
      <h1 className={styles.nameStyle}>{user.name.lastname}, {user.name.firstname}</h1>
      <div>
      <table className={styles.tableStyle}>
        <tr>
          <td className={styles.firstColumnStyle}>Username:</td>
          <td className={styles.secondColumnStyle}>{user.username}</td>
        </tr>
        <tr>
          <td className={styles.firstColumnStyle}>Password:</td>
          <td className={styles.secondColumnStyle}>{user.password}</td>
        </tr>
        <tr>
          <td className={styles.firstColumnStyle}>E-mail:</td>
          <td className={styles.secondColumnStyle}>{user.email}</td>
        </tr>
        <tr>
          <td className={styles.firstColumnStyle}>Phone:</td>
          <td className={styles.secondColumnStyle}>{user.phone}</td>
        </tr>
        <tr>
          <td className={styles.firstColumnStyle}>Address:</td>
          <td className={styles.secondColumnStyle}>
            {user.address.zipcode} {user.address.city},<br />
            {user.address.street}, {user.address.number}
          </td>
        </tr>
        <tr>
          <td className={styles.firstColumnStyle}>Geolocation:</td>
          <td className={styles.secondColumnStyle}>
            lat({user.address.geolocation.lat}),
            long({user.address.geolocation.long})
          </td>
        </tr>
      </table>
      </div>
    </div>
  );
}
