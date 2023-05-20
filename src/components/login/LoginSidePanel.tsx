import ImageWithText from '../imageWithText/ImageWithText';

interface LoginSidePanelProps {
  isLogin: boolean;
  onChangeLogin: () => void;
  onChangeSignup: () => void;
}

const LoginSidePanel = ({
  isLogin,
  onChangeLogin,
  onChangeSignup,
}: LoginSidePanelProps) => {
  const imageOverElement = () => {
    return (
      <div className="flex flex-col justify-between items-center gap-40">
        <div className="w-full flex flex-col justify-center items-center gap-5 font-medium">
          <h4 className="text-4xl tracking-wider">
            {isLogin ? 'New here?' : 'Already member?'}
          </h4>
          <p className="w-3/4 text-center text-lg tracking-wide">
            {isLogin
              ? 'Sign up and decorate your home with the furnitures of your dreams!'
              : 'Login and discover amazing furnitures!'}
          </p>
        </div>
        <button
          className="border-2 border-white px-5 py-2 hover:bg-white
        hover:text-black rounded text-lg font-medium w-1/2"
          onClick={() => {
            isLogin ? onChangeSignup() : onChangeLogin();
          }}
        >
          {isLogin ? 'SIGN UP' : 'LOGIN'}
        </button>
      </div>
    );
  };

  return (
    <div className="w-2/5 relative h-full hidden md:flex justify-center items-center text-white ">
      <ImageWithText
        image="/images/login.jpg"
        textComp={imageOverElement()}
        isFill={true}
        className="opacity-40"
      />
    </div>
  );
};

export default LoginSidePanel;
