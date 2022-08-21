import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import FilterIcon from '~/assets/icons/FilterIcon';
import NextIcon from '~/assets/icons/NextIcon';
import PrevIcon from '~/assets/icons/PrevIcon';
import SearchIcon from '~/assets/icons/SearchIcon';
import Calendar from '~/components/Calendar/Calendar';
import ModalAddTicket from '~/components/ModalAddTicket/ModalAddTicket';
import ModalEditInfo from '~/components/ModalEditInfo/ModalEditInfo';
import TableItem from '~/components/TableItem/TableItem';
import TableTitle from '~/components/TableTitle/TableTitle';

type Props = {};

const Settings = (props: Props) => {
    const data: any = [
        {
            stt: 1,
            number: 'ALT20210501',
            nameTypeTicket: 'Gói gia đình',
            startDate: '14/04/2021',
            endDate: '14/04/2021',
            price: '90.000 VNĐ',
            combo: '360.000 VNĐ/4 Vé',
            stateTicket: 'Đang áp dụng',
        },
        {
            stt: 2,
            number: 'ALT20210501',
            nameTypeTicket: 'Gói gia đình',
            startDate: '14/04/2021',
            endDate: '14/04/2021',
            price: '90.000 VNĐ',
            combo: '360.000 VNĐ/4 Vé',
            stateTicket: 'Hết',
        },
    ];
    const itemsPerPage: number = 12;
    const [currentItems, setCurrentItems] = useState<any>([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
    return (
        <div className='ManagerTicket__wrapper'>
            {/* <ModalEditInfo /> */}
            {/* <ModalAddTicket /> */}
            {/* <Calendar /> */}
            <h1 className='ManagerTicket__title'>Danh sách vé</h1>
            <div className='ManagerTicket__navbar'>
                <div className='ManagerTicket__input-wrapper'>
                    <input
                        className='ManagerTicket__input'
                        type='text'
                        name=''
                        id=''
                        placeholder='Tìm bằng số vé'
                    />
                    <span className='ManagerTicket__icon-search'>
                        <SearchIcon />
                    </span>
                </div>
                <div className='ManagerTicket__buttons'>
                    <button>
                        <span className='ManagerTicket__button-icon-filter'>
                            <FilterIcon />
                        </span>
                        <span>Lọc vé</span>
                    </button>
                    <button>
                        <span>Xuất file (.csv)</span>
                    </button>
                </div>
            </div>
            <div className='ManagerTicket__container'>
                <TableTitle
                    stt={true}
                    number={true}
                    nameTypeTicket={true}
                    startDate={true}
                    endDate={true}
                    price={true}
                    combo={true}
                    stateTicket={true}
                    none={true}
                />
                {currentItems.map((item: any, index: number) => (
                    <TableItem
                        key={index}
                        stt={item.stt}
                        number={item.number}
                        nameTypeTicket={item.nameTypeTicket}
                        startDate={item.startDate}
                        endDate={item.endDate}
                        price={item.price}
                        combo={item.combo}
                        stateTicket={item.stateTicket}
                        none={true}
                    />
                ))}
            </div>
            <ReactPaginate
                breakLabel='...'
                nextLabel={<NextIcon />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<PrevIcon />}
                pageClassName='page-num'
                containerClassName='pagination'
                previousClassName='page-num'
                nextClassName='page-num'
                activeLinkClassName='active'
                activeClassName='page-num'
                nextLinkClassName='orange'
                marginPagesDisplayed={1}
                renderOnZeroPageCount={() => null}
            />
        </div>
    );
};

export default Settings;
