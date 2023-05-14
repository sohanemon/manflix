'use client';
import LinkBtn from '@/components/link-btn';
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';

export default function Social() {
  return (
    <div className='items-center hidden md:flex justify-evenly'>
      <div className='items-center hidden gap-3 lg:flex'>
        {platform.map((el) => (
          <span title={el.name} key={el.name}>
            {el.icon}
          </span>
        ))}
      </div>
      <LinkBtn className='ml-5'>Add video</LinkBtn>
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
