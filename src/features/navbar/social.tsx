'use client';
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';

export default function Social() {
  return (
    <div className='md:flex items-center justify-evenly hidden'>
      <div className='flex items-center gap-3'>
        {platform.map((el) => (
          <span title={el.name} key={el.name}>
            {el.icon}
          </span>
        ))}
      </div>
      <button>woo hoo</button>
    </div>
  );
}

const platform = [
  {
    name: 'facebook',
    icon: <BsFacebook className='text-2xl' />,
  },
  {
    name: 'twitter',
    icon: <BsTwitter className='text-2xl' />,
  },
  {
    name: 'linkedin',
    icon: <BsLinkedin className='text-2xl' />,
  },
  {
    name: 'youtube',
    icon: <BsYoutube className='text-2xl' />,
  },
];
