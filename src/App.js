import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import React, { useState, useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.css';
import User from './components/User';
import Post from './components/Post';

import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userActiveId, setUserActiveId] = useState(null);
  const [activeUser, setActiveUser] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      await axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((data) => setUsers(data.data));
    };
    fetchUsers();
  }, []);

  const clickOnUser = (user) => {
    setUserActiveId(user.id);
    setActiveUser(user.company.name);
    const fetchComments = async () => {
      await axios
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        .then((data) => {
          setPosts(data.data.slice(0, 3));
        });
    };
    fetchComments();
  };

  return (
    <div className="App">
      <div className="slider-block">
        <div className="app-svg first">
          <svg
            width="244"
            height="330"
            viewBox="0 0 244 330"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="74.5" cy="2.5" r="2.5" fill="#FE8700" />
            <circle cx="74.5" cy="106.5" r="2.5" fill="#FE8700" />
            <circle cx="74.5" cy="54.5" r="2.5" fill="#FE8700" />
            <circle cx="74.5" cy="158.5" r="2.5" fill="#FE8700" />
            <circle cx="74.5" cy="28.5" r="2.5" fill="#FE8700" />
            <circle cx="74.5" cy="132.5" r="2.5" fill="#FE8700" />
            <circle cx="74.5" cy="80.5" r="2.5" fill="#FE8700" />
            <circle cx="74.5" cy="184.5" r="2.5" fill="#FE8700" />
            <circle cx="74.5" cy="15.5" r="2.5" fill="#FE8700" />
            <circle cx="74.5" cy="119.5" r="2.5" fill="#FE8700" />
            <circle cx="74.5" cy="67.5" r="2.5" fill="#FE8700" />
            <circle cx="74.5" cy="171.5" r="2.5" fill="#FE8700" />
            <circle cx="74.5" cy="41.5" r="2.5" fill="#FE8700" />
            <circle cx="74.5" cy="145.5" r="2.5" fill="#FE8700" />
            <circle cx="74.5" cy="93.5" r="2.5" fill="#FE8700" />
            <circle cx="74.5" cy="197.5" r="2.5" fill="#FE8700" />
            <circle cx="87.5" cy="2.5" r="2.5" fill="#FE8700" />
            <circle cx="87.5" cy="106.5" r="2.5" fill="#FE8700" />
            <circle cx="87.5" cy="54.5" r="2.5" fill="#FE8700" />
            <circle cx="87.5" cy="158.5" r="2.5" fill="#FE8700" />
            <circle cx="87.5" cy="28.5" r="2.5" fill="#FE8700" />
            <circle cx="87.5" cy="132.5" r="2.5" fill="#FE8700" />
            <circle cx="87.5" cy="80.5" r="2.5" fill="#FE8700" />
            <circle cx="87.5" cy="184.5" r="2.5" fill="#FE8700" />
            <circle cx="87.5" cy="15.5" r="2.5" fill="#FE8700" />
            <circle cx="87.5" cy="119.5" r="2.5" fill="#FE8700" />
            <circle cx="87.5" cy="67.5" r="2.5" fill="#FE8700" />
            <circle cx="87.5" cy="171.5" r="2.5" fill="#FE8700" />
            <circle cx="87.5" cy="41.5" r="2.5" fill="#FE8700" />
            <circle cx="87.5" cy="145.5" r="2.5" fill="#FE8700" />
            <circle cx="87.5" cy="93.5" r="2.5" fill="#FE8700" />
            <circle cx="87.5" cy="197.5" r="2.5" fill="#FE8700" />
            <circle cx="100.5" cy="2.5" r="2.5" fill="#FE8700" />
            <circle cx="100.5" cy="106.5" r="2.5" fill="#FE8700" />
            <circle cx="100.5" cy="54.5" r="2.5" fill="#FE8700" />
            <circle cx="100.5" cy="158.5" r="2.5" fill="#FE8700" />
            <circle cx="100.5" cy="28.5" r="2.5" fill="#FE8700" />
            <circle cx="100.5" cy="132.5" r="2.5" fill="#FE8700" />
            <circle cx="100.5" cy="80.5" r="2.5" fill="#FE8700" />
            <circle cx="100.5" cy="184.5" r="2.5" fill="#FE8700" />
            <circle cx="100.5" cy="15.5" r="2.5" fill="#FE8700" />
            <circle cx="100.5" cy="119.5" r="2.5" fill="#FE8700" />
            <circle cx="100.5" cy="67.5" r="2.5" fill="#FE8700" />
            <circle cx="100.5" cy="171.5" r="2.5" fill="#FE8700" />
            <circle cx="100.5" cy="41.5" r="2.5" fill="#FE8700" />
            <circle cx="100.5" cy="145.5" r="2.5" fill="#FE8700" />
            <circle cx="100.5" cy="93.5" r="2.5" fill="#FE8700" />
            <circle cx="100.5" cy="197.5" r="2.5" fill="#FE8700" />
            <circle cx="113.5" cy="2.5" r="2.5" fill="#FE8700" />
            <circle cx="113.5" cy="106.5" r="2.5" fill="#FE8700" />
            <circle cx="113.5" cy="54.5" r="2.5" fill="#FE8700" />
            <circle cx="113.5" cy="158.5" r="2.5" fill="#FE8700" />
            <circle cx="113.5" cy="28.5" r="2.5" fill="#FE8700" />
            <circle cx="113.5" cy="132.5" r="2.5" fill="#FE8700" />
            <circle cx="113.5" cy="80.5" r="2.5" fill="#FE8700" />
            <circle cx="113.5" cy="184.5" r="2.5" fill="#FE8700" />
            <circle cx="113.5" cy="15.5" r="2.5" fill="#FE8700" />
            <circle cx="113.5" cy="119.5" r="2.5" fill="#FE8700" />
            <circle cx="113.5" cy="67.5" r="2.5" fill="#FE8700" />
            <circle cx="113.5" cy="171.5" r="2.5" fill="#FE8700" />
            <circle cx="113.5" cy="41.5" r="2.5" fill="#FE8700" />
            <circle cx="113.5" cy="145.5" r="2.5" fill="#FE8700" />
            <circle cx="113.5" cy="93.5" r="2.5" fill="#FE8700" />
            <circle cx="113.5" cy="197.5" r="2.5" fill="#FE8700" />
            <circle cx="126.5" cy="2.5" r="2.5" fill="#FE8700" />
            <circle cx="126.5" cy="106.5" r="2.5" fill="#FE8700" />
            <circle cx="126.5" cy="54.5" r="2.5" fill="#FE8700" />
            <circle cx="126.5" cy="158.5" r="2.5" fill="#FE8700" />
            <circle cx="126.5" cy="28.5" r="2.5" fill="#FE8700" />
            <circle cx="126.5" cy="132.5" r="2.5" fill="#FE8700" />
            <circle cx="126.5" cy="80.5" r="2.5" fill="#FE8700" />
            <circle cx="126.5" cy="184.5" r="2.5" fill="#FE8700" />
            <circle cx="126.5" cy="15.5" r="2.5" fill="#FE8700" />
            <circle cx="126.5" cy="119.5" r="2.5" fill="#FE8700" />
            <circle cx="126.5" cy="67.5" r="2.5" fill="#FE8700" />
            <circle cx="126.5" cy="171.5" r="2.5" fill="#FE8700" />
            <circle cx="126.5" cy="41.5" r="2.5" fill="#FE8700" />
            <circle cx="126.5" cy="145.5" r="2.5" fill="#FE8700" />
            <circle cx="126.5" cy="93.5" r="2.5" fill="#FE8700" />
            <circle cx="126.5" cy="197.5" r="2.5" fill="#FE8700" />
            <circle cx="139.5" cy="2.5" r="2.5" fill="#FE8700" />
            <circle cx="139.5" cy="106.5" r="2.5" fill="#FE8700" />
            <circle cx="139.5" cy="54.5" r="2.5" fill="#FE8700" />
            <circle cx="139.5" cy="158.5" r="2.5" fill="#FE8700" />
            <circle cx="139.5" cy="28.5" r="2.5" fill="#FE8700" />
            <circle cx="139.5" cy="132.5" r="2.5" fill="#FE8700" />
            <circle cx="139.5" cy="80.5" r="2.5" fill="#FE8700" />
            <circle cx="139.5" cy="184.5" r="2.5" fill="#FE8700" />
            <circle cx="191.5" cy="2.5" r="2.5" fill="#FE8700" />
            <circle cx="191.5" cy="106.5" r="2.5" fill="#FE8700" />
            <circle cx="191.5" cy="54.5" r="2.5" fill="#FE8700" />
            <circle cx="191.5" cy="158.5" r="2.5" fill="#FE8700" />
            <circle cx="191.5" cy="28.5" r="2.5" fill="#FE8700" />
            <circle cx="191.5" cy="132.5" r="2.5" fill="#FE8700" />
            <circle cx="191.5" cy="80.5" r="2.5" fill="#FE8700" />
            <circle cx="191.5" cy="184.5" r="2.5" fill="#FE8700" />
            <circle cx="139.5" cy="15.5" r="2.5" fill="#FE8700" />
            <circle cx="139.5" cy="119.5" r="2.5" fill="#FE8700" />
            <circle cx="139.5" cy="67.5" r="2.5" fill="#FE8700" />
            <circle cx="139.5" cy="171.5" r="2.5" fill="#FE8700" />
            <circle cx="139.5" cy="41.5" r="2.5" fill="#FE8700" />
            <circle cx="139.5" cy="145.5" r="2.5" fill="#FE8700" />
            <circle cx="139.5" cy="93.5" r="2.5" fill="#FE8700" />
            <circle cx="139.5" cy="197.5" r="2.5" fill="#FE8700" />
            <circle cx="191.5" cy="15.5" r="2.5" fill="#FE8700" />
            <circle cx="191.5" cy="119.5" r="2.5" fill="#FE8700" />
            <circle cx="191.5" cy="67.5" r="2.5" fill="#FE8700" />
            <circle cx="191.5" cy="171.5" r="2.5" fill="#FE8700" />
            <circle cx="191.5" cy="41.5" r="2.5" fill="#FE8700" />
            <circle cx="191.5" cy="145.5" r="2.5" fill="#FE8700" />
            <circle cx="191.5" cy="93.5" r="2.5" fill="#FE8700" />
            <circle cx="191.5" cy="197.5" r="2.5" fill="#FE8700" />
            <circle cx="152.5" cy="2.5" r="2.5" fill="#FE8700" />
            <circle cx="152.5" cy="106.5" r="2.5" fill="#FE8700" />
            <circle cx="152.5" cy="54.5" r="2.5" fill="#FE8700" />
            <circle cx="152.5" cy="158.5" r="2.5" fill="#FE8700" />
            <circle cx="152.5" cy="28.5" r="2.5" fill="#FE8700" />
            <circle cx="152.5" cy="132.5" r="2.5" fill="#FE8700" />
            <circle cx="152.5" cy="80.5" r="2.5" fill="#FE8700" />
            <circle cx="152.5" cy="184.5" r="2.5" fill="#FE8700" />
            <circle cx="204.5" cy="2.5" r="2.5" fill="#FE8700" />
            <circle cx="204.5" cy="106.5" r="2.5" fill="#FE8700" />
            <circle cx="204.5" cy="54.5" r="2.5" fill="#FE8700" />
            <circle cx="204.5" cy="158.5" r="2.5" fill="#FE8700" />
            <circle cx="204.5" cy="28.5" r="2.5" fill="#FE8700" />
            <circle cx="204.5" cy="132.5" r="2.5" fill="#FE8700" />
            <circle cx="204.5" cy="80.5" r="2.5" fill="#FE8700" />
            <circle cx="204.5" cy="184.5" r="2.5" fill="#FE8700" />
            <circle cx="152.5" cy="15.5" r="2.5" fill="#FE8700" />
            <circle cx="152.5" cy="119.5" r="2.5" fill="#FE8700" />
            <circle cx="152.5" cy="67.5" r="2.5" fill="#FE8700" />
            <circle cx="152.5" cy="171.5" r="2.5" fill="#FE8700" />
            <circle cx="152.5" cy="41.5" r="2.5" fill="#FE8700" />
            <circle cx="152.5" cy="145.5" r="2.5" fill="#FE8700" />
            <circle cx="152.5" cy="93.5" r="2.5" fill="#FE8700" />
            <circle cx="152.5" cy="197.5" r="2.5" fill="#FE8700" />
            <circle cx="204.5" cy="15.5" r="2.5" fill="#FE8700" />
            <circle cx="204.5" cy="119.5" r="2.5" fill="#FE8700" />
            <circle cx="204.5" cy="67.5" r="2.5" fill="#FE8700" />
            <circle cx="204.5" cy="171.5" r="2.5" fill="#FE8700" />
            <circle cx="204.5" cy="41.5" r="2.5" fill="#FE8700" />
            <circle cx="204.5" cy="145.5" r="2.5" fill="#FE8700" />
            <circle cx="204.5" cy="93.5" r="2.5" fill="#FE8700" />
            <circle cx="204.5" cy="197.5" r="2.5" fill="#FE8700" />
            <circle cx="165.5" cy="2.5" r="2.5" fill="#FE8700" />
            <circle cx="243.5" cy="2.5" r="2.5" fill="#FE8700" />
            <circle cx="165.5" cy="106.5" r="2.5" fill="#FE8700" />
            <circle cx="243.5" cy="106.5" r="2.5" fill="#FE8700" />
            <circle cx="165.5" cy="54.5" r="2.5" fill="#FE8700" />
            <circle cx="243.5" cy="54.5" r="2.5" fill="#FE8700" />
            <circle cx="165.5" cy="158.5" r="2.5" fill="#FE8700" />
            <circle cx="243.5" cy="158.5" r="2.5" fill="#FE8700" />
            <circle cx="165.5" cy="28.5" r="2.5" fill="#FE8700" />
            <circle cx="243.5" cy="28.5" r="2.5" fill="#FE8700" />
            <circle cx="165.5" cy="132.5" r="2.5" fill="#FE8700" />
            <circle cx="243.5" cy="132.5" r="2.5" fill="#FE8700" />
            <circle cx="165.5" cy="80.5" r="2.5" fill="#FE8700" />
            <circle cx="243.5" cy="80.5" r="2.5" fill="#FE8700" />
            <circle cx="165.5" cy="184.5" r="2.5" fill="#FE8700" />
            <circle cx="243.5" cy="184.5" r="2.5" fill="#FE8700" />
            <circle cx="217.5" cy="2.5" r="2.5" fill="#FE8700" />
            <circle cx="217.5" cy="106.5" r="2.5" fill="#FE8700" />
            <circle cx="217.5" cy="54.5" r="2.5" fill="#FE8700" />
            <circle cx="217.5" cy="158.5" r="2.5" fill="#FE8700" />
            <circle cx="217.5" cy="28.5" r="2.5" fill="#FE8700" />
            <circle cx="217.5" cy="132.5" r="2.5" fill="#FE8700" />
            <circle cx="217.5" cy="80.5" r="2.5" fill="#FE8700" />
            <circle cx="217.5" cy="184.5" r="2.5" fill="#FE8700" />
            <circle cx="165.5" cy="15.5" r="2.5" fill="#FE8700" />
            <circle cx="243.5" cy="15.5" r="2.5" fill="#FE8700" />
            <circle cx="165.5" cy="119.5" r="2.5" fill="#FE8700" />
            <circle cx="243.5" cy="119.5" r="2.5" fill="#FE8700" />
            <circle cx="165.5" cy="67.5" r="2.5" fill="#FE8700" />
            <circle cx="243.5" cy="67.5" r="2.5" fill="#FE8700" />
            <circle cx="165.5" cy="171.5" r="2.5" fill="#FE8700" />
            <circle cx="243.5" cy="171.5" r="2.5" fill="#FE8700" />
            <circle cx="165.5" cy="41.5" r="2.5" fill="#FE8700" />
            <circle cx="243.5" cy="41.5" r="2.5" fill="#FE8700" />
            <circle cx="165.5" cy="145.5" r="2.5" fill="#FE8700" />
            <circle cx="243.5" cy="145.5" r="2.5" fill="#FE8700" />
            <circle cx="165.5" cy="93.5" r="2.5" fill="#FE8700" />
            <circle cx="243.5" cy="93.5" r="2.5" fill="#FE8700" />
            <circle cx="165.5" cy="197.5" r="2.5" fill="#FE8700" />
            <circle cx="243.5" cy="197.5" r="2.5" fill="#FE8700" />
            <circle cx="217.5" cy="15.5" r="2.5" fill="#FE8700" />
            <circle cx="217.5" cy="119.5" r="2.5" fill="#FE8700" />
            <circle cx="217.5" cy="67.5" r="2.5" fill="#FE8700" />
            <circle cx="217.5" cy="171.5" r="2.5" fill="#FE8700" />
            <circle cx="217.5" cy="41.5" r="2.5" fill="#FE8700" />
            <circle cx="217.5" cy="145.5" r="2.5" fill="#FE8700" />
            <circle cx="217.5" cy="93.5" r="2.5" fill="#FE8700" />
            <circle cx="217.5" cy="197.5" r="2.5" fill="#FE8700" />
            <circle cx="178.5" cy="2.5" r="2.5" fill="#FE8700" />
            <circle cx="178.5" cy="106.5" r="2.5" fill="#FE8700" />
            <circle cx="178.5" cy="54.5" r="2.5" fill="#FE8700" />
            <circle cx="178.5" cy="158.5" r="2.5" fill="#FE8700" />
            <circle cx="178.5" cy="28.5" r="2.5" fill="#FE8700" />
            <circle cx="178.5" cy="132.5" r="2.5" fill="#FE8700" />
            <circle cx="178.5" cy="80.5" r="2.5" fill="#FE8700" />
            <circle cx="178.5" cy="184.5" r="2.5" fill="#FE8700" />
            <circle cx="230.5" cy="2.5" r="2.5" fill="#FE8700" />
            <circle cx="230.5" cy="106.5" r="2.5" fill="#FE8700" />
            <circle cx="230.5" cy="54.5" r="2.5" fill="#FE8700" />
            <circle cx="230.5" cy="158.5" r="2.5" fill="#FE8700" />
            <circle cx="230.5" cy="28.5" r="2.5" fill="#FE8700" />
            <circle cx="230.5" cy="132.5" r="2.5" fill="#FE8700" />
            <circle cx="230.5" cy="80.5" r="2.5" fill="#FE8700" />
            <circle cx="230.5" cy="184.5" r="2.5" fill="#FE8700" />
            <circle cx="178.5" cy="15.5" r="2.5" fill="#FE8700" />
            <circle cx="178.5" cy="119.5" r="2.5" fill="#FE8700" />
            <circle cx="178.5" cy="67.5" r="2.5" fill="#FE8700" />
            <circle cx="178.5" cy="171.5" r="2.5" fill="#FE8700" />
            <circle cx="178.5" cy="41.5" r="2.5" fill="#FE8700" />
            <circle cx="178.5" cy="145.5" r="2.5" fill="#FE8700" />
            <circle cx="178.5" cy="93.5" r="2.5" fill="#FE8700" />
            <circle cx="178.5" cy="197.5" r="2.5" fill="#FE8700" />
            <circle cx="230.5" cy="15.5" r="2.5" fill="#FE8700" />
            <circle cx="230.5" cy="119.5" r="2.5" fill="#FE8700" />
            <circle cx="230.5" cy="67.5" r="2.5" fill="#FE8700" />
            <circle cx="230.5" cy="171.5" r="2.5" fill="#FE8700" />
            <circle cx="230.5" cy="41.5" r="2.5" fill="#FE8700" />
            <circle cx="230.5" cy="145.5" r="2.5" fill="#FE8700" />
            <circle cx="230.5" cy="93.5" r="2.5" fill="#FE8700" />
            <circle cx="230.5" cy="197.5" r="2.5" fill="#FE8700" />
            <path
              d="M273 193.5C273 220.497 264.994 246.888 249.996 269.335C234.997 291.783 213.678 309.278 188.736 319.61C163.794 329.941 136.349 332.644 109.87 327.377C83.3918 322.11 59.0698 309.11 39.9799 290.02L136.5 193.5H273Z"
              fill="#FFDA44"
            />
          </svg>
        </div>
        <h2 className="slider-block__header">Наши топ-блогеры</h2>
        <p className="slider-block__description">
          Лучше специалисты в своем деле,
          <br /> средний опыт работы в профессии - 27 лет
        </p>

        {/* ---------------------------------------------------------------- */}
        <div className="slider-block__navigation">
          <div className="prev-slide">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1044_33)">
                <path
                  d="M24 0C17.6348 0 11.5303 2.52856 7.02944 7.02944C2.52856 11.5303 0 17.6348 0 24C0 30.3652 2.52856 36.4697 7.02944 40.9706C11.5303 45.4714 17.6348 48 24 48C30.3652 48 36.4697 45.4714 40.9706 40.9706C45.4714 36.4697 48 30.3652 48 24C48 17.6348 45.4714 11.5303 40.9706 7.02944C36.4697 2.52856 30.3652 0 24 0V0ZM34.5 22.5C34.8978 22.5 35.2794 22.658 35.5607 22.9393C35.842 23.2206 36 23.6022 36 24C36 24.3978 35.842 24.7794 35.5607 25.0607C35.2794 25.342 34.8978 25.5 34.5 25.5H17.121L23.562 31.938C23.7015 32.0775 23.8121 32.243 23.8876 32.4252C23.963 32.6075 24.0019 32.8028 24.0019 33C24.0019 33.1972 23.963 33.3925 23.8876 33.5748C23.8121 33.757 23.7015 33.9225 23.562 34.062C23.4225 34.2015 23.257 34.3121 23.0748 34.3876C22.8925 34.463 22.6972 34.5019 22.5 34.5019C22.3028 34.5019 22.1075 34.463 21.9252 34.3876C21.743 34.3121 21.5775 34.2015 21.438 34.062L12.438 25.062C12.2983 24.9227 12.1875 24.7571 12.1119 24.5749C12.0362 24.3927 11.9973 24.1973 11.9973 24C11.9973 23.8027 12.0362 23.6073 12.1119 23.4251C12.1875 23.2429 12.2983 23.0773 12.438 22.938L21.438 13.938C21.7197 13.6563 22.1017 13.4981 22.5 13.4981C22.8983 13.4981 23.2803 13.6563 23.562 13.938C23.8437 14.2197 24.0019 14.6017 24.0019 15C24.0019 15.3983 23.8437 15.7803 23.562 16.062L17.121 22.5H34.5Z"
                  fill="#FE8700"
                />
              </g>
              <defs>
                <clipPath id="clip0_1044_33">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="next-slide">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 0C30.3652 0 36.4697 2.52856 40.9706 7.02944C45.4714 11.5303 48 17.6348 48 24C48 30.3652 45.4714 36.4697 40.9706 40.9706C36.4697 45.4714 30.3652 48 24 48C17.6348 48 11.5303 45.4714 7.02944 40.9706C2.52856 36.4697 0 30.3652 0 24C0 17.6348 2.52856 11.5303 7.02944 7.02944C11.5303 2.52856 17.6348 0 24 0V0ZM13.5 22.5C13.1022 22.5 12.7206 22.658 12.4393 22.9393C12.158 23.2206 12 23.6022 12 24C12 24.3978 12.158 24.7794 12.4393 25.0607C12.7206 25.342 13.1022 25.5 13.5 25.5H30.879L24.438 31.938C24.2985 32.0775 24.1879 32.243 24.1124 32.4252C24.037 32.6075 23.9981 32.8028 23.9981 33C23.9981 33.1972 24.037 33.3925 24.1124 33.5748C24.1879 33.757 24.2985 33.9225 24.438 34.062C24.5775 34.2015 24.743 34.3121 24.9252 34.3876C25.1075 34.463 25.3028 34.5019 25.5 34.5019C25.6972 34.5019 25.8925 34.463 26.0748 34.3876C26.257 34.3121 26.4225 34.2015 26.562 34.062L35.562 25.062C35.7017 24.9227 35.8125 24.7571 35.8881 24.5749C35.9638 24.3927 36.0027 24.1973 36.0027 24C36.0027 23.8027 35.9638 23.6073 35.8881 23.4251C35.8125 23.2429 35.7017 23.0773 35.562 22.938L26.562 13.938C26.4225 13.7985 26.257 13.6879 26.0748 13.6124C25.8925 13.537 25.6972 13.4981 25.5 13.4981C25.3028 13.4981 25.1075 13.537 24.9252 13.6124C24.743 13.6879 24.5775 13.7985 24.438 13.938C24.2985 14.0775 24.1879 14.243 24.1124 14.4252C24.037 14.6075 23.9981 14.8028 23.9981 15C23.9981 15.1972 24.037 15.3925 24.1124 15.5748C24.1879 15.757 24.2985 15.9225 24.438 16.062L30.879 22.5H13.5Z"
                fill="#FE8700"
              />
            </svg>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={52}
          slidesPerView={4}
          navigation={{
            nextEl: '.next-slide',
            prevEl: '.prev-slide',
          }}>
          {users.map((user) => (
            <SwiperSlide>
              <User user={user} userActiveId={userActiveId} clickOnUser={clickOnUser} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="posts-block">
        <svg
          className="app-svg second"
          width="206"
          height="330"
          viewBox="0 0 206 330"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="2" r="2" fill="#FE8700" />
          <circle cx="9" cy="106" r="2" fill="#FE8700" />
          <circle cx="9" cy="54" r="2" fill="#FE8700" />
          <circle cx="9" cy="158" r="2" fill="#FE8700" />
          <circle cx="9" cy="28" r="2" fill="#FE8700" />
          <circle cx="9" cy="132" r="2" fill="#FE8700" />
          <circle cx="9" cy="80" r="2" fill="#FE8700" />
          <circle cx="9" cy="184" r="2" fill="#FE8700" />
          <circle cx="9" cy="15" r="2" fill="#FE8700" />
          <circle cx="9" cy="119" r="2" fill="#FE8700" />
          <circle cx="9" cy="67" r="2" fill="#FE8700" />
          <circle cx="9" cy="171" r="2" fill="#FE8700" />
          <circle cx="9" cy="41" r="2" fill="#FE8700" />
          <circle cx="9" cy="145" r="2" fill="#FE8700" />
          <circle cx="9" cy="93" r="2" fill="#FE8700" />
          <circle cx="9" cy="197" r="2" fill="#FE8700" />
          <circle cx="22" cy="2" r="2" fill="#FE8700" />
          <circle cx="22" cy="106" r="2" fill="#FE8700" />
          <circle cx="22" cy="54" r="2" fill="#FE8700" />
          <circle cx="22" cy="158" r="2" fill="#FE8700" />
          <circle cx="22" cy="28" r="2" fill="#FE8700" />
          <circle cx="22" cy="132" r="2" fill="#FE8700" />
          <circle cx="22" cy="80" r="2" fill="#FE8700" />
          <circle cx="22" cy="184" r="2" fill="#FE8700" />
          <circle cx="22" cy="15" r="2" fill="#FE8700" />
          <circle cx="22" cy="119" r="2" fill="#FE8700" />
          <circle cx="22" cy="67" r="2" fill="#FE8700" />
          <circle cx="22" cy="171" r="2" fill="#FE8700" />
          <circle cx="22" cy="41" r="2" fill="#FE8700" />
          <circle cx="22" cy="145" r="2" fill="#FE8700" />
          <circle cx="22" cy="93" r="2" fill="#FE8700" />
          <circle cx="22" cy="197" r="2" fill="#FE8700" />
          <circle cx="35" cy="2" r="2" fill="#FE8700" />
          <circle cx="35" cy="106" r="2" fill="#FE8700" />
          <circle cx="35" cy="54" r="2" fill="#FE8700" />
          <circle cx="35" cy="158" r="2" fill="#FE8700" />
          <circle cx="35" cy="28" r="2" fill="#FE8700" />
          <circle cx="35" cy="132" r="2" fill="#FE8700" />
          <circle cx="35" cy="80" r="2" fill="#FE8700" />
          <circle cx="35" cy="184" r="2" fill="#FE8700" />
          <circle cx="87" cy="2" r="2" fill="#FE8700" />
          <circle cx="165" cy="2" r="2" fill="#FE8700" />
          <circle cx="87" cy="106" r="2" fill="#FE8700" />
          <circle cx="165" cy="106" r="2" fill="#FE8700" />
          <circle cx="87" cy="54" r="2" fill="#FE8700" />
          <circle cx="165" cy="54" r="2" fill="#FE8700" />
          <circle cx="87" cy="158" r="2" fill="#FE8700" />
          <circle cx="165" cy="158" r="2" fill="#FE8700" />
          <circle cx="87" cy="28" r="2" fill="#FE8700" />
          <circle cx="165" cy="28" r="2" fill="#FE8700" />
          <circle cx="87" cy="132" r="2" fill="#FE8700" />
          <circle cx="165" cy="132" r="2" fill="#FE8700" />
          <circle cx="87" cy="80" r="2" fill="#FE8700" />
          <circle cx="165" cy="80" r="2" fill="#FE8700" />
          <circle cx="87" cy="184" r="2" fill="#FE8700" />
          <circle cx="165" cy="184" r="2" fill="#FE8700" />
          <circle cx="35" cy="15" r="2" fill="#FE8700" />
          <circle cx="35" cy="119" r="2" fill="#FE8700" />
          <circle cx="35" cy="67" r="2" fill="#FE8700" />
          <circle cx="35" cy="171" r="2" fill="#FE8700" />
          <circle cx="35" cy="41" r="2" fill="#FE8700" />
          <circle cx="35" cy="145" r="2" fill="#FE8700" />
          <circle cx="35" cy="93" r="2" fill="#FE8700" />
          <circle cx="35" cy="197" r="2" fill="#FE8700" />
          <circle cx="87" cy="15" r="2" fill="#FE8700" />
          <circle cx="165" cy="15" r="2" fill="#FE8700" />
          <circle cx="87" cy="119" r="2" fill="#FE8700" />
          <circle cx="165" cy="119" r="2" fill="#FE8700" />
          <circle cx="87" cy="67" r="2" fill="#FE8700" />
          <circle cx="165" cy="67" r="2" fill="#FE8700" />
          <circle cx="87" cy="171" r="2" fill="#FE8700" />
          <circle cx="165" cy="171" r="2" fill="#FE8700" />
          <circle cx="87" cy="41" r="2" fill="#FE8700" />
          <circle cx="165" cy="41" r="2" fill="#FE8700" />
          <circle cx="87" cy="145" r="2" fill="#FE8700" />
          <circle cx="165" cy="145" r="2" fill="#FE8700" />
          <circle cx="87" cy="93" r="2" fill="#FE8700" />
          <circle cx="165" cy="93" r="2" fill="#FE8700" />
          <circle cx="87" cy="197" r="2" fill="#FE8700" />
          <circle cx="165" cy="197" r="2" fill="#FE8700" />
          <circle cx="48" cy="2" r="2" fill="#FE8700" />
          <circle cx="48" cy="106" r="2" fill="#FE8700" />
          <circle cx="48" cy="54" r="2" fill="#FE8700" />
          <circle cx="48" cy="158" r="2" fill="#FE8700" />
          <circle cx="48" cy="28" r="2" fill="#FE8700" />
          <circle cx="48" cy="132" r="2" fill="#FE8700" />
          <circle cx="48" cy="80" r="2" fill="#FE8700" />
          <circle cx="48" cy="184" r="2" fill="#FE8700" />
          <circle cx="100" cy="2" r="2" fill="#FE8700" />
          <circle cx="178" cy="2" r="2" fill="#FE8700" />
          <circle cx="100" cy="106" r="2" fill="#FE8700" />
          <circle cx="178" cy="106" r="2" fill="#FE8700" />
          <circle cx="100" cy="54" r="2" fill="#FE8700" />
          <circle cx="178" cy="54" r="2" fill="#FE8700" />
          <circle cx="100" cy="158" r="2" fill="#FE8700" />
          <circle cx="178" cy="158" r="2" fill="#FE8700" />
          <circle cx="100" cy="28" r="2" fill="#FE8700" />
          <circle cx="178" cy="28" r="2" fill="#FE8700" />
          <circle cx="100" cy="132" r="2" fill="#FE8700" />
          <circle cx="178" cy="132" r="2" fill="#FE8700" />
          <circle cx="100" cy="80" r="2" fill="#FE8700" />
          <circle cx="178" cy="80" r="2" fill="#FE8700" />
          <circle cx="100" cy="184" r="2" fill="#FE8700" />
          <circle cx="178" cy="184" r="2" fill="#FE8700" />
          <circle cx="48" cy="15" r="2" fill="#FE8700" />
          <circle cx="48" cy="119" r="2" fill="#FE8700" />
          <circle cx="48" cy="67" r="2" fill="#FE8700" />
          <circle cx="48" cy="171" r="2" fill="#FE8700" />
          <circle cx="48" cy="41" r="2" fill="#FE8700" />
          <circle cx="48" cy="145" r="2" fill="#FE8700" />
          <circle cx="48" cy="93" r="2" fill="#FE8700" />
          <circle cx="48" cy="197" r="2" fill="#FE8700" />
          <circle cx="100" cy="15" r="2" fill="#FE8700" />
          <circle cx="178" cy="15" r="2" fill="#FE8700" />
          <circle cx="100" cy="119" r="2" fill="#FE8700" />
          <circle cx="178" cy="119" r="2" fill="#FE8700" />
          <circle cx="100" cy="67" r="2" fill="#FE8700" />
          <circle cx="178" cy="67" r="2" fill="#FE8700" />
          <circle cx="100" cy="171" r="2" fill="#FE8700" />
          <circle cx="178" cy="171" r="2" fill="#FE8700" />
          <circle cx="100" cy="41" r="2" fill="#FE8700" />
          <circle cx="178" cy="41" r="2" fill="#FE8700" />
          <circle cx="100" cy="145" r="2" fill="#FE8700" />
          <circle cx="178" cy="145" r="2" fill="#FE8700" />
          <circle cx="100" cy="93" r="2" fill="#FE8700" />
          <circle cx="178" cy="93" r="2" fill="#FE8700" />
          <circle cx="100" cy="197" r="2" fill="#FE8700" />
          <circle cx="178" cy="197" r="2" fill="#FE8700" />
          <circle cx="61" cy="2" r="2" fill="#FE8700" />
          <circle cx="139" cy="2" r="2" fill="#FE8700" />
          <circle cx="61" cy="106" r="2" fill="#FE8700" />
          <circle cx="139" cy="106" r="2" fill="#FE8700" />
          <circle cx="61" cy="54" r="2" fill="#FE8700" />
          <circle cx="139" cy="54" r="2" fill="#FE8700" />
          <circle cx="61" cy="158" r="2" fill="#FE8700" />
          <circle cx="139" cy="158" r="2" fill="#FE8700" />
          <circle cx="61" cy="28" r="2" fill="#FE8700" />
          <circle cx="139" cy="28" r="2" fill="#FE8700" />
          <circle cx="61" cy="132" r="2" fill="#FE8700" />
          <circle cx="139" cy="132" r="2" fill="#FE8700" />
          <circle cx="61" cy="80" r="2" fill="#FE8700" />
          <circle cx="139" cy="80" r="2" fill="#FE8700" />
          <circle cx="61" cy="184" r="2" fill="#FE8700" />
          <circle cx="139" cy="184" r="2" fill="#FE8700" />
          <circle cx="113" cy="2" r="2" fill="#FE8700" />
          <circle cx="191" cy="2" r="2" fill="#FE8700" />
          <circle cx="113" cy="106" r="2" fill="#FE8700" />
          <circle cx="191" cy="106" r="2" fill="#FE8700" />
          <circle cx="113" cy="54" r="2" fill="#FE8700" />
          <circle cx="191" cy="54" r="2" fill="#FE8700" />
          <circle cx="113" cy="158" r="2" fill="#FE8700" />
          <circle cx="191" cy="158" r="2" fill="#FE8700" />
          <circle cx="113" cy="28" r="2" fill="#FE8700" />
          <circle cx="191" cy="28" r="2" fill="#FE8700" />
          <circle cx="113" cy="132" r="2" fill="#FE8700" />
          <circle cx="191" cy="132" r="2" fill="#FE8700" />
          <circle cx="113" cy="80" r="2" fill="#FE8700" />
          <circle cx="191" cy="80" r="2" fill="#FE8700" />
          <circle cx="113" cy="184" r="2" fill="#FE8700" />
          <circle cx="191" cy="184" r="2" fill="#FE8700" />
          <circle cx="61" cy="15" r="2" fill="#FE8700" />
          <circle cx="139" cy="15" r="2" fill="#FE8700" />
          <circle cx="61" cy="119" r="2" fill="#FE8700" />
          <circle cx="139" cy="119" r="2" fill="#FE8700" />
          <circle cx="61" cy="67" r="2" fill="#FE8700" />
          <circle cx="139" cy="67" r="2" fill="#FE8700" />
          <circle cx="61" cy="171" r="2" fill="#FE8700" />
          <circle cx="139" cy="171" r="2" fill="#FE8700" />
          <circle cx="61" cy="41" r="2" fill="#FE8700" />
          <circle cx="139" cy="41" r="2" fill="#FE8700" />
          <circle cx="61" cy="145" r="2" fill="#FE8700" />
          <circle cx="139" cy="145" r="2" fill="#FE8700" />
          <circle cx="61" cy="93" r="2" fill="#FE8700" />
          <circle cx="139" cy="93" r="2" fill="#FE8700" />
          <circle cx="61" cy="197" r="2" fill="#FE8700" />
          <circle cx="139" cy="197" r="2" fill="#FE8700" />
          <circle cx="113" cy="15" r="2" fill="#FE8700" />
          <circle cx="191" cy="15" r="2" fill="#FE8700" />
          <circle cx="113" cy="119" r="2" fill="#FE8700" />
          <circle cx="191" cy="119" r="2" fill="#FE8700" />
          <circle cx="113" cy="67" r="2" fill="#FE8700" />
          <circle cx="191" cy="67" r="2" fill="#FE8700" />
          <circle cx="113" cy="171" r="2" fill="#FE8700" />
          <circle cx="191" cy="171" r="2" fill="#FE8700" />
          <circle cx="113" cy="41" r="2" fill="#FE8700" />
          <circle cx="191" cy="41" r="2" fill="#FE8700" />
          <circle cx="113" cy="145" r="2" fill="#FE8700" />
          <circle cx="191" cy="145" r="2" fill="#FE8700" />
          <circle cx="113" cy="93" r="2" fill="#FE8700" />
          <circle cx="191" cy="93" r="2" fill="#FE8700" />
          <circle cx="113" cy="197" r="2" fill="#FE8700" />
          <circle cx="191" cy="197" r="2" fill="#FE8700" />
          <circle cx="74" cy="2" r="2" fill="#FE8700" />
          <circle cx="152" cy="2" r="2" fill="#FE8700" />
          <circle cx="74" cy="106" r="2" fill="#FE8700" />
          <circle cx="152" cy="106" r="2" fill="#FE8700" />
          <circle cx="74" cy="54" r="2" fill="#FE8700" />
          <circle cx="152" cy="54" r="2" fill="#FE8700" />
          <circle cx="74" cy="158" r="2" fill="#FE8700" />
          <circle cx="152" cy="158" r="2" fill="#FE8700" />
          <circle cx="74" cy="28" r="2" fill="#FE8700" />
          <circle cx="152" cy="28" r="2" fill="#FE8700" />
          <circle cx="74" cy="132" r="2" fill="#FE8700" />
          <circle cx="152" cy="132" r="2" fill="#FE8700" />
          <circle cx="74" cy="80" r="2" fill="#FE8700" />
          <circle cx="152" cy="80" r="2" fill="#FE8700" />
          <circle cx="74" cy="184" r="2" fill="#FE8700" />
          <circle cx="152" cy="184" r="2" fill="#FE8700" />
          <circle cx="126" cy="2" r="2" fill="#FE8700" />
          <circle cx="204" cy="2" r="2" fill="#FE8700" />
          <circle cx="126" cy="106" r="2" fill="#FE8700" />
          <circle cx="204" cy="106" r="2" fill="#FE8700" />
          <circle cx="126" cy="54" r="2" fill="#FE8700" />
          <circle cx="204" cy="54" r="2" fill="#FE8700" />
          <circle cx="126" cy="158" r="2" fill="#FE8700" />
          <circle cx="204" cy="158" r="2" fill="#FE8700" />
          <circle cx="126" cy="28" r="2" fill="#FE8700" />
          <circle cx="204" cy="28" r="2" fill="#FE8700" />
          <circle cx="126" cy="132" r="2" fill="#FE8700" />
          <circle cx="204" cy="132" r="2" fill="#FE8700" />
          <circle cx="126" cy="80" r="2" fill="#FE8700" />
          <circle cx="204" cy="80" r="2" fill="#FE8700" />
          <circle cx="126" cy="184" r="2" fill="#FE8700" />
          <circle cx="204" cy="184" r="2" fill="#FE8700" />
          <circle cx="74" cy="15" r="2" fill="#FE8700" />
          <circle cx="152" cy="15" r="2" fill="#FE8700" />
          <circle cx="74" cy="119" r="2" fill="#FE8700" />
          <circle cx="152" cy="119" r="2" fill="#FE8700" />
          <circle cx="74" cy="67" r="2" fill="#FE8700" />
          <circle cx="152" cy="67" r="2" fill="#FE8700" />
          <circle cx="74" cy="171" r="2" fill="#FE8700" />
          <circle cx="152" cy="171" r="2" fill="#FE8700" />
          <circle cx="74" cy="41" r="2" fill="#FE8700" />
          <circle cx="152" cy="41" r="2" fill="#FE8700" />
          <circle cx="74" cy="145" r="2" fill="#FE8700" />
          <circle cx="152" cy="145" r="2" fill="#FE8700" />
          <circle cx="74" cy="93" r="2" fill="#FE8700" />
          <circle cx="152" cy="93" r="2" fill="#FE8700" />
          <circle cx="74" cy="197" r="2" fill="#FE8700" />
          <circle cx="152" cy="197" r="2" fill="#FE8700" />
          <circle cx="126" cy="15" r="2" fill="#FE8700" />
          <circle cx="204" cy="15" r="2" fill="#FE8700" />
          <circle cx="126" cy="119" r="2" fill="#FE8700" />
          <circle cx="204" cy="119" r="2" fill="#FE8700" />
          <circle cx="126" cy="67" r="2" fill="#FE8700" />
          <circle cx="204" cy="67" r="2" fill="#FE8700" />
          <circle cx="126" cy="171" r="2" fill="#FE8700" />
          <circle cx="204" cy="171" r="2" fill="#FE8700" />
          <circle cx="126" cy="41" r="2" fill="#FE8700" />
          <circle cx="204" cy="41" r="2" fill="#FE8700" />
          <circle cx="126" cy="145" r="2" fill="#FE8700" />
          <circle cx="204" cy="145" r="2" fill="#FE8700" />
          <circle cx="126" cy="93" r="2" fill="#FE8700" />
          <circle cx="204" cy="93" r="2" fill="#FE8700" />
          <circle cx="126" cy="197" r="2" fill="#FE8700" />
          <circle cx="204" cy="197" r="2" fill="#FE8700" />
          <path
            d="M169 193.5C169 220.497 160.994 246.888 145.996 269.335C130.997 291.783 109.678 309.278 84.7363 319.61C59.7942 329.941 32.3486 332.644 5.87017 327.377C-20.6082 322.11 -44.9302 309.11 -64.0201 290.02L32.5 193.5H169Z"
            fill="#FFDA44"
          />
        </svg>
        <div className="post-block__header">
          <svg
            width="100"
            height="78"
            viewBox="0 0 100 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M92.8571 0H71.4286L57.1429 31.2V78H100V31.2H78.5714L92.8571 0ZM35.7143 0H14.2857L0 31.2V78H42.8571V31.2H21.4286L35.7143 0Z"
              fill="#FEE9CD"
            />
          </svg>
          <h2 className="post-block__heading">3 актуальных поста {activeUser}</h2>
        </div>
        <div className="posts-block__posts">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
