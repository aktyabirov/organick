import React, { useState } from 'react';
import { Button } from './buttons/Button';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  };

  return (
    <div className="bg-blue-500 container flex justify-center w-[1350px] p-4 bg-cover bg-center rounded-lg relative h-[200px]" style={{ backgroundImage: 'url(https://github.com/aktyabirov/assets/blob/main/organic/Photo_10.png?raw=true)' }}>
      <div className="container mx-auto flex items-center justify-between absolute top-[35%]">
        <h2 className="text-white text-3xl font-bold">Subscribe to <br /> our Newsletter</h2>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            placeholder="Your Email Address"
            className="px-4 py-2 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" variant="primary">Subscribe</Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
