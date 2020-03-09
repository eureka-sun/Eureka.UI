import React from 'react';
import './App.css';

import Button from './components/Button';
import Input from './components/Input';

export default () => {
  return (
    <div className="container">
      <Button />
      <div className="content">
        <Input />
      </div>
    </div>
  );
}