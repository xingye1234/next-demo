'use client'
import React, {useEffect } from 'react';


export default function client() {
  useEffect(() => {
    (async () => {
      const data = await fetch('/api/dashboard').then(
        (res) => res.json(),
      );
      console.log(data);
    })()
  });

  return <div>client</div>;
}
