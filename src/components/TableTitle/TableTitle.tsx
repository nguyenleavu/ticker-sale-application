import './TableTitle.css';

type Props = {
    stt: boolean;
    code?: boolean;
    state?: boolean;
    usedDate?: boolean;
    outDate?: boolean;
    noTitle?: boolean;
    nameTicket?: boolean;
    numberTicket?: boolean;
    checkIn?: boolean;
    nameEvent?: boolean;
    space?: boolean;
    number?: boolean;
    nameTypeTicket?: boolean;
    endDate?: boolean;
    price?: boolean;
    combo?: boolean;
    stateTicket?: boolean;
    none?: boolean;
    startDate?: boolean;
};

const TableTitle = (props: Props) => {
    const {
        stt,
        code,
        numberTicket,
        state,
        usedDate,
        outDate,
        noTitle,
        nameTicket,
        checkIn,
        nameEvent,
        space,
        number,
        nameTypeTicket,
        endDate,
        price,
        combo,
        stateTicket,
        none,
        startDate,
    } = props;
    return (
        <tr className='TableTitle__wrapper'>
            <th className='TableTitle__stt'>
                <span>STT</span>
            </th>
            {code && (
                <th className='TableTitle__code'>
                    <span>Booking code</span>
                </th>
            )}
            {numberTicket && (
                <th
                    className={
                        space
                            ? 'TableTitle__number-ticket-hight'
                            : 'TableTitle__number-ticket'
                    }
                >
                    <span>Số vé</span>
                </th>
            )}
            {nameEvent && (
                <th className='TableTitle__th'>
                    <span>Tên sự kiện</span>
                </th>
            )}
            {number && (
                <th className='TableTitle__number'>
                    <span>Mã gói</span>
                </th>
            )}
            {nameTypeTicket && (
                <th className='TableTitle__ths'>
                    <span>Tên gói vé</span>
                </th>
            )}
            {startDate && (
                <th className='TableTitle__ths'>
                    <span>Ngày áp dụng</span>
                </th>
            )}
            {endDate && (
                <th className='TableTitle__ths'>
                    <span>Ngày hết hạn</span>
                </th>
            )}
            {price && (
                <th className='TableTitle__ths'>
                    <span>Giá vé (VNĐ/Vé)</span>
                </th>
            )}
            {combo && (
                <th className='TableTitle__compo'>
                    <span>Giá Combo (VNĐ/Combo)</span>
                </th>
            )}
            {stateTicket && (
                <th className='TableTitle__ths'>
                    <span>Tình trạng</span>
                </th>
            )}
            {none && (
                <th className='TableTitle__ths'>
                    <span></span>
                </th>
            )}
            {state && (
                <th className='TableTitle__state'>
                    <span>Tình trạng sử dụng</span>
                </th>
            )}
            {usedDate && (
                <th
                    className={
                        space ? 'TableTitle__th-hight' : 'TableTitle__usedDate'
                    }
                >
                    <span>Ngày sử dụng</span>
                </th>
            )}
            {nameTicket && (
                <th
                    className={
                        space ? 'TableTitle__th-hight-name' : 'TableTitle__th'
                    }
                >
                    <span>Tên loại vé</span>
                </th>
            )}
            {outDate && (
                <th className='TableTitle__outDate'>
                    <span>Ngày xuất vé</span>
                </th>
            )}
            {checkIn && (
                <th
                    className={
                        space ? 'TableTitle__th-hight-name' : 'TableTitle__check-in'
                    }
                >
                    <span>Cổng check - in</span>
                </th>
            )}
            {noTitle && <th className='TableTitle__th'></th>}
        </tr>
    );
};

export default TableTitle;
