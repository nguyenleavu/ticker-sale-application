import CalendarIcon from '~/assets/icons/CalendarIcon';
import IconClock from '~/assets/icons/IconClock';
import './ModalEditInfo.css';

type Props = {};

const ModalEditInfo = (props: Props) => {
    return (
        <div className='ModalEditInfo__wrapper'>
            <div className='ModalEditInfo__container'>
                <h2>Cập nhật thông tin gói vé</h2>
                <div className='ModalEditInfo__content'>
                    <div className='ModalEditInfo__box'>
                        <div className='ModalEditInfo__event'>
                            <p>Mã sự kiện</p>
                            <div className='ModalEditInfo__code'>
                                <span>PKG20210502</span>
                            </div>
                        </div>
                        <div className='ModalEditInfo__event'>
                            <p>Tên sự kiện</p>
                            <div className='ModalEditInfo__name-event'>
                                <span>
                                    Hội chợ triển lãm hàng tiêu dùng 2021
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='ModalEditInfo__box ModalEditInfo__space'>
                        <div className='ModalEditInfo__event'>
                            <p>Ngày áp dụng</p>
                            <div className='ModalEditInfo__calendar'>
                                <div>
                                    <span>01/04/2021</span>
                                    <CalendarIcon />
                                </div>
                                <div>
                                    <span>08:00:00</span>
                                    <IconClock />
                                </div>
                            </div>
                        </div>
                        <div className='ModalEditInfo__event'>
                            <div className='ModalEditInfo__event'>
                                <p>Ngày hết hạn</p>
                                <div className='ModalEditInfo__calendar'>
                                    <div>
                                        <span>01/04/2021</span>
                                        <CalendarIcon />
                                    </div>
                                    <div>
                                        <span>08:00:00</span>
                                        <IconClock />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ModalEditInfo__price'>
                        <p>Giá vé áp dụng</p>
                        <div className='ModalEditInfo__input'>
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
                        <div className='ModalEditInfo__input'>
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
                    <div className='ModalEditInfo__select'>
                        <p>Tình trạng</p>
                        <select>
                            <option>
                                <span>Đang áp dụng</span>
                            </option>
                        </select>
                    </div>
                    <span className='ModalEditInfo__note'>
                        * <span>là thông tin bắt buộc</span>
                    </span>
                </div>
                <div className='ModalEditInfo__btn'>
                    <button className='ModalEditInfo__btn-delete'>Huỷ</button>
                    <button className='ModalEditInfo__btn-save'>Lưu</button>
                </div>
            </div>
        </div>
    );
};

export default ModalEditInfo;
