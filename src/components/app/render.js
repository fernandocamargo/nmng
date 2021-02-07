import React from 'react';
import { Sequelize } from 'sequelize';

export const getUrlFrom = ({
  REACT_APP_DB_HOST,
  REACT_APP_DB_NAME,
  REACT_APP_DB_PASS,
  REACT_APP_DB_PORT,
  REACT_APP_DB_SSL,
  REACT_APP_DB_USER,
}) =>
  `postgres://${REACT_APP_DB_USER}:${REACT_APP_DB_PASS}@${REACT_APP_DB_HOST}:${REACT_APP_DB_PORT}/${REACT_APP_DB_NAME}?sslmode=${REACT_APP_DB_SSL}`;

const sequelize = new Sequelize(getUrlFrom(process.env));

console.log({ sequelize });

export default ({ className }) => <h1 className={className}>App();</h1>;
