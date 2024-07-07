// src/api.js

import axiosInstance from './axiosInstance';

const API_URL_USERS = 'users/';
const API_URL_FRIENDS = 'friends/';

export const addUser = async (user) => {
  const response = await axiosInstance.post(API_URL_USERS, user);
  return response.data;
};

export const getUsers = async () => {
  const response = await axiosInstance.get(API_URL_USERS);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await axiosInstance.put(`${API_URL_USERS}${id}/`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axiosInstance.delete(`${API_URL_USERS}${id}/`);
  return response.data;
};

export const addFriend = async (friend) => {
  const { userId, friendName, friendEmail } = friend;
  const data = {
    user: userId,
    friend_name: friendName,
    friend_email: friendEmail
  };

  const response = await axiosInstance.post(API_URL_FRIENDS, data);
  return response.data;
};


export const updateFriend = async (id, friend) => {
  const response = await axiosInstance.put(`${API_URL_FRIENDS}${id}/`, friend);
  return response.data;
};

export const deleteFriend = async (id) => {
  const response = await axiosInstance.delete(`${API_URL_FRIENDS}${id}/`);
  return response.data;
};
