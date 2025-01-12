import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1994-11-28T20:45:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  // {
  //   key: 'countries',
  //   label: 'Countries visited',
  //   value: 1,
  //   // link:
  //   //   'https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2',
  // },
  {
    key: 'location',
    label: 'Current city',
    value: 'Bogotá, Colombia',
  },
  {
    key: 'languages',
    label: 'Languages',
    // value: 'English, Spanish, German/Ingles, Español, Alemán/Spanisch, Englisch, Deutsch',
    value: 'English, Spanish, German',
  },
  {
    key: 'languages',
    label: 'P. Languages',
    value: 'C, C++, Python, Javascript',
  },
];

export default data;
