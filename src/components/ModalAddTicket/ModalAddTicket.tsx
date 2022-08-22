import ArrowIcon from '~/assets/icons/ArrowIcon';
import CalendarIcon from '~/assets/icons/CalendarIcon';
import IconClock from '~/assets/icons/IconClock';
import './ModalAddTicket.css';

type Props = {
    setShowModalAddTicket: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalAddTicket = ({ setShowModalAddTicket }: Props) => {
    return (
        <div
            className='ModalAddTicket__wrapper'
            onClick={() => setShowModalAddTicket(false)}
        >
            <div
                className='ModalAddTicket__container'
                onClick={(e) => e.stopPropagation()}
            >
                <h2>Thêm gói vé</h2>
                <div className='ModalAddTicket__content'>
                    <div className='ModalAddTicket__box'>
                        <div className='ModalAddTicket__event'>
                            <p>Tên gói vé</p>
                            <input type='text' placeholder='Nhập tên gói vé' />
                        </div>
                    </div>
                    <div className='ModalAddTicket__box ModalAddTicket__space'>
                        <div className='ModalAddTicket__event'>
                            <p>Ngày áp dụng</p>
                            <div className='ModalAddTicket__calendar'>
                                <div>
                                    <span>dd/mm/yy</span>
                                    <CalendarIcon />
                                </div>
                                <div>
                                    <span>hh:mm:ss</span>
                                    <IconClock />
                                </div>
                            </div>
                        </div>
                        <div className='ModalAddTicket__event'>
                            <div className='ModalAddTicket__event'>
                                <p>Ngày hết hạn</p>
                                <div className='ModalAddTicket__calendar'>
                                    <div>
                                        <span>dd/mm/yy</span>
                                        <CalendarIcon />
                                    </div>
                                    <div>
                                        <span>hh/mm/yy</span>
                                        <IconClock />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ModalAddTicket__price'>
                        <p>Giá vé áp dụng</p>
                        <div className='ModalAddTicket__input'>
                            <div>
                                <label>
                                    <input
                                        className='styled-checkbox'
                                        id='styled-checkbox-edit1'
                                        type='checkbox'
                                        value='value1'
                                    />
                                    <label htmlFor='styled-checkbox-edit1'></label>
                                </label>{' '}
                                <span>Vé lẻ (vnđ/vé) với giá</span>{' '}
                                <input
                                    placeholder='Giá vé'
                                    className='input-space'
                                />{' '}
                                <span>/ vé</span>
                            </div>
                        </div>
                        <div className='ModalAddTicket__input'>
                            <div>
                                <label>
                                    <input
                                        className='styled-checkbox'
                                        id='styled-checkbox-edit2'
                                        type='checkbox'
                                        value='value1'
                                    />
                                    <label htmlFor='styled-checkbox-edit2'></label>
                                </label>
                                <span>Combo vé với giá</span>{' '}
                                <input
                                    placeholder='Giá vé'
                                    className='input-space'
                                />{' '}
                                <span>/</span> {'  '}
                                <input
                                    placeholder='Giá vé'
                                    className='input-space-small'
                                />{' '}
                                <span>vé</span>
                            </div>
                        </div>
                    </div>
                    <div className='ModalAddTicket__select'>
                        <p>Tình trạng</p>
                        <select>
                            <option>Đang áp dụng</option>
                        </select>
                    </div>
                    <span className='ModalAddTicket__note'>
                        * <span>là thông tin bắt buộc</span>
                    </span>
                </div>
                <div className='ModalAddTicket__btn'>
                    <button
                        onClick={() => setShowModalAddTicket(false)}
                        className='ModalAddTicket__btn-delete'
                    >
                        Huỷ
                    </button>
                    <button className='ModalAddTicket__btn-save'>Lưu</button>
                </div>
            </div>
        </div>
    );
};

export default ModalAddTicket;
