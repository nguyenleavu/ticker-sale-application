import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layout/MainLayout/MainLayout';
import PageRoutes from './routes/routes';

function App() {
    return (
        <Routes>
            {PageRoutes.map((route, index) => {
                const Page = route.component;
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <MainLayout>
                                <Page />
                            </MainLayout>
                        }
                    />
                );
            })}
        </Routes>
    );
}

export default App;
