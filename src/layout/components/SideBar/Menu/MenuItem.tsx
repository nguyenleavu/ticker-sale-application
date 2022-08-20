import { NavLink } from 'react-router-dom';
import './MenuItem.css';

type Props = {
    title: string;
    to: string;
    icon: any;
};

const MenuItem = ({ title, to, icon }: Props) => {
    return (
        <NavLink
            className={({ isActive }) => (isActive ? 'MenuItem__active' : 'MenuItem')}
            to={to}
        >
            <li className='MenuItem__item'>
                <span className='MenuItem__icon'>{icon}</span>
                <span className='MenuItem__title'>{title}</span>
            </li>
        </NavLink>
    );
};

export default MenuItem;
