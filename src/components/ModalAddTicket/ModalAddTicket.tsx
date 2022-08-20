import CalendarIcon from '~/assets/icons/CalendarIcon';
import IconClock from '~/assets/icons/IconClock';
import './ModalAddTicket.css';

type Props = {};

const ModalAddTicket = (props: Props) => {
    return (
        <div className='ModalAddTicket__wrapper'>
            <div className='ModalAddTicket__container'>
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
                                <input
                                    type='checkbox'
                                    className='ModalAddTicket__input-checkbox'
                                />{' '}
                                Vé lẻ (vnđ/vé) với giá{' '}
                                <input
                                    placeholder='Giá vé'
                                    className='input-space'
                                />{' '}
                                / vé
                            </div>
                        </div>
                        <div className='ModalAddTicket__input'>
                            <div>
                                <input
                                    type='checkbox'
                                    className='ModalAddTicket__input-checkbox'
                                />
                                Combo vé với giá{' '}
                                <input
                                    placeholder='Giá vé'
                                    className='input-space'
                                />{' '}
                                / {'  '}
                                <input
                                    placeholder='Giá vé'
                                    className='input-space-small'
                                />{' '}
                                vé
                            </div>
                        </div>
                    </div>
                    <div className='ModalAddTicket__select'>
                        <p>Tình trạng</p>
                        <select>
                            <option>
                                <span>Đang áp dụng</span>
                            </option>
                        </select>
                    </div>
                    <span className='ModalAddTicket__note'>
                        * <span>là thông tin bắt buộc</span>
                    </span>
                </div>
                <div className='ModalAddTicket__btn'>
                    <button className='ModalAddTicket__btn-delete'>Huỷ</button>
                    <button className='ModalAddTicket__btn-save'>Lưu</button>
                </div>
            </div>
        </div>
    );
};

export default ModalAddTicket;
