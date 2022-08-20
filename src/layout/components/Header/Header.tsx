import BellIcon from '~/assets/icons/BellIcon';
import MainIcon from '~/assets/icons/MainIcon';
import SearchIcon from '~/assets/icons/SearchIcon';
import images from '~/assets/images';
import './Header.css';

type Props = {};

const Header = (props: Props) => {
    return (
        <header className='Header__wrapper'>
            <div className='Header__search'>
                <input type='text' placeholder='Search' />
                <span>
                    <SearchIcon />
                </span>
            </div>
            <div className='Header___btn'>
                <span>
                    <MainIcon />
                </span>
                <span>
                    <BellIcon />
                </span>
                <img src={images.imagesAvatar} alt='avatar' />
            </div>
        </header>
    );
};

export default Header;
