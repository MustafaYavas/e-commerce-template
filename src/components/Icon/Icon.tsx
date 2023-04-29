import { GiHamburgerMenu, GiCargoShip } from 'react-icons/gi';
import {
  AiOutlineSearch,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillCaretRight,
  AiOutlineLogout,
  AiOutlineCheck,
} from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import { FaShippingFast, FaHome } from 'react-icons/fa';
import { BsPinterest } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  color?: string;
}

const Icon = ({ name, size, className, color }: IconProps) => {
  if (name === 'GiHamburgerMenu') {
    return (
      <GiHamburgerMenu
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'AiOutlineSearch') {
    return (
      <AiOutlineSearch
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'MdShoppingCart') {
    return (
      <MdShoppingCart
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'GrClose') {
    return (
      <GrClose
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'FaShippingFast') {
    return (
      <FaShippingFast
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'GiCargoShip') {
    return (
      <GiCargoShip
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'FaHome') {
    return (
      <FaHome
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'AiOutlineTwitter') {
    return (
      <AiOutlineTwitter
        className={className}
        size={size}
        // color={color ? color : 'black'}
      />
    );
  } else if (name === 'AiFillFacebook') {
    return (
      <AiFillFacebook
        className={className}
        size={size}
        // color={color ? color : 'black'}
      />
    );
  } else if (name === 'BsPinterest') {
    return (
      <BsPinterest
        className={className}
        size={size}
        // color={color ? color : 'black'}
      />
    );
  } else if (name === 'AiOutlineInstagram') {
    return (
      <AiOutlineInstagram
        className={className}
        size={size}
        // color={color ? color : 'black'}
      />
    );
  } else if (name === 'AiFillCaretRight') {
    return (
      <AiFillCaretRight
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'AiOutlineLogout') {
    return (
      <AiOutlineLogout
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'FcGoogle') {
    return (
      <FcGoogle
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'AiOutlineCheck') {
    return (
      <AiOutlineCheck
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else {
    return null;
  }
};

export default Icon;
