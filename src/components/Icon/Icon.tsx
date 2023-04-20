import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  color: string;
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
  } else {
    return null;
  }
};

export default Icon;
