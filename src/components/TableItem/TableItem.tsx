import EditIcon from '~/assets/icons/EditIcon';
import './TableItem.css';

type Props = {
    stt: number;
    code?: string;
    state?: string;
    usedDate?: string;
    outDate?: string;
    noTitle?: string;
    nameTicket?: string;
    numberTicket?: string;
    checkIn?: string;
    nameEvent?: string;
    number?: string;
    nameTypeTicket?: string;
    endDate?: string;
    price?: string;
    combo?: string;
    stateTicket?: string;
    none?: boolean;
    startDate?: string;
    setShowModalEdit?:
        | React.Dispatch<React.SetStateAction<boolean>>
        | undefined;
};

const TableItem = (props: Props) => {
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
        number,
        nameTypeTicket,
        endDate,
        price,
        combo,
        stateTicket,
        none,
        startDate,
        setShowModalEdit,
    } = props;
    return (
        <>
            <tr
                className='TableItem__wrapper'
                style={
                    stt % 2 !== 0
                        ? { backgroundColor: 'transparent' }
                        : { backgroundColor: '#F7F8FB' }
                }
            >
                <td className='TableItem__stt'>
                    <span>{stt}</span>
                </td>
                {code && (
                    <td className='TableItem__code'>
                        <span>{code}</span>
                    </td>
                )}
                {numberTicket && (
                    <td className='TableItem__number-ticket'>
                        <span>{numberTicket}</span>
                    </td>
                )}
                {state && (
                    <td className='RowItem__p'>
                        <div
                            className={
                                state === 'Đã sử dụng'
                                    ? 'RowItem__state-used-grey'
                                    : state === 'Chưa sử dụng'
                                    ? 'RowItem__state-used-green'
                                    : state === 'Đang áp dụng'
                                    ? 'RowItem__state-used-green'
                                    : 'RowItem__state-used-red'
                            }
                        >
                            <div className='RowItem__state-content'>
                                <span
                                    className={
                                        state === 'Đã sử dụng'
                                            ? 'RowItem__dot-grey'
                                            : state === 'Chưa sử dụng'
                                            ? 'RowItem__dot-green'
                                            : state === 'Đang áp dụng'
                                            ? 'RowItem__dot-green'
                                            : 'RowItem__dot-red'
                                    }
                                ></span>
                                <p className='RowItem__state-title'>{state}</p>
                            </div>
                        </div>
                    </td>
                )}
                {number && (
                    <td className='TableItem__settings-number'>
                        <span>{number}</span>
                    </td>
                )}
                {nameTypeTicket && (
                    <td className='TableItem__settings-name'>
                        <span>{nameTypeTicket}</span>
                    </td>
                )}
                {startDate && (
                    <td className='TableItem__settings-date'>
                        <span>{startDate}</span>
                    </td>
                )}
                {endDate && (
                    <td className='TableItem__settings-date2'>
                        <span>{endDate}</span>
                    </td>
                )}
                {price && (
                    <td className='TableItem__settings'>
                        <span>{price}</span>
                    </td>
                )}
                {combo && (
                    <td className='TableItem__settings-compo'>
                        <span>{combo}</span>
                    </td>
                )}
                {stateTicket && (
                    <td className='RowItem__p-c'>
                        <div
                            className={
                                stateTicket === 'Đã sử dụng'
                                    ? 'RowItem__state-used-greyc'
                                    : stateTicket === 'Chưa sử dụng'
                                    ? 'RowItem__state-used-greenc'
                                    : stateTicket === 'Đang áp dụng'
                                    ? 'RowItem__state-used-greenc'
                                    : 'RowItem__state-used-redc'
                            }
                        >
                            <div className='RowItem__state-contentc'>
                                <span
                                    className={
                                        stateTicket === 'Đã sử dụng'
                                            ? 'RowItem__dot-greyc'
                                            : stateTicket === 'Chưa sử dụng'
                                            ? 'RowItem__dot-greenc'
                                            : stateTicket === 'Đang áp dụng'
                                            ? 'RowItem__dot-greenc'
                                            : 'RowItem__dot-redc'
                                    }
                                ></span>
                                <p className='RowItem__state-title'>
                                    {stateTicket}
                                </p>
                            </div>
                        </div>
                    </td>
                )}
                {none && (
                    <td className='TableItem__settings-none'>
                        {setShowModalEdit && (
                            <span onClick={() => setShowModalEdit(true)}>
                                <EditIcon />
                                <label>Cập nhật</label>
                            </span>
                        )}
                    </td>
                )}
                {usedDate && (
                    <td className='TableItem__th'>
                        <span>{usedDate}</span>
                    </td>
                )}
                {nameTicket && (
                    <td className='TableItem__th'>
                        <span>{nameTicket}</span>
                    </td>
                )}
                {outDate && (
                    <td className='TableItem__th'>
                        <span>{outDate}</span>
                    </td>
                )}
                {checkIn && (
                    <td className='TableItem__th'>
                        <span>Cổng 1</span>
                    </td>
                )}
                {noTitle && (
                    <td className='TableItem__no-title'>
                        <span>{noTitle}</span>
                    </td>
                )}
            </tr>
        </>
    );
};

export default TableItem;
