import express from 'express';
import { axiosGet } from './axiosWrapper.js';
import dotenv from 'dotenv';

export async function index(req, res) {
  dotenv.config();

  let data = await axiosGet(`${process.env.API_URL}/methods`, process.env.LOG_ERRORS); 

  res.render("index", data);
};