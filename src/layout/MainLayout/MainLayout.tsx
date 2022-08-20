import Header from '~/layout/components/Header/Header';
import SideBar from '~/layout/components/SideBar/SideBar';
import './MainLayout.css';

type Props = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
    return (
        <div className='MainLayout__wrapper'>
            <SideBar />
            <div className='MainLayout__container'>
                <Header />
                <div className='MainLayout__content'>
                    <div className='MainLayout__container'>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
