import routes from '~/config/routes';
import Dashboard from '~/pages/Dashboard/Dashboard';
import Exchange from '~/pages/Exchange/Exchange';
import List from '~/pages/List/List';
import ManagerDevice from '~/pages/ManagerDevice/ManagerDevice';
import ManagerTicket from '~/pages/ManagerTicket/ManagerTicket';
import Settings from '~/pages/Settings/Settings';

const PageRoutes = [
    { path: routes.dashboard, component: Dashboard },
    { path: routes.exchange, component: Exchange },
    { path: routes.managerTicket, component: ManagerTicket },
    { path: routes.managerDevice, component: ManagerDevice },
    { path: routes.list, component: List },
    { path: routes.settings, component: Settings },
];

export default PageRoutes;
