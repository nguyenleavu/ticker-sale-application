import { Link } from 'react-router-dom';
import DeviceManagerIcon from '~/assets/icons/DeviceManagerIcon';
import ExchangeIcon from '~/assets/icons/ExchangeIcon';
import HomeIcon from '~/assets/icons/HomeIcon';
import ListEventsIcon from '~/assets/icons/ListEventsIcon';
import SettingsIcon from '~/assets/icons/SettingsIcon';
import TicketManagerIcon from '~/assets/icons/TicketManagerIcon';
import images from '~/assets/images';
import routes from '~/config/routes';
import MenuItem from './Menu/MenuItem';
import './SideBar.css';

type Props = {};

const SideBar = (props: Props) => {
    return (
        <aside className='SideBar__wrapper'>
            <Link to={routes.dashboard} className='SideBar__logo-link'>
                <img src={images.imagesLogo} alt='Logo' />
            </Link>
            <nav className='SideBar__nav'>
                <MenuItem
                    title='Trang Chủ'
                    to={routes.dashboard}
                    icon={<HomeIcon />}
                />
                <MenuItem
                    title='Quản lý vé'
                    to={routes.managerTicket}
                    icon={<TicketManagerIcon />}
                />
                <MenuItem
                    title='Đổi soát vé'
                    to={routes.exchange}
                    icon={<ExchangeIcon />}
                />
                <MenuItem
                    title='Danh sách sự kiện'
                    to={routes.list}
                    icon={<ListEventsIcon />}
                />
                <MenuItem
                    title='Quản lý thiết bị'
                    to={routes.managerDevice}
                    icon={<DeviceManagerIcon />}
                />
                <MenuItem
                    title='Cài đặt'
                    to={routes.settings}
                    icon={<SettingsIcon />}
                />
            </nav>
            <div className='SideBar__text-logo'>
                <img src={images.imagesCopy} alt='copy' />
                <img
                    className='SideBar__icon'
                    src={images.imagesIcon}
                    alt='@'
                />
                <img src={images.images2020} alt='2020' />
            </div>
        </aside>
    );
};

export default SideBar;
