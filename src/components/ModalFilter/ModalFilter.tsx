import CalenderSmall from '../CalenderSmall/CalenderSmall';
import './ModalFilter.css';

type Props = {};

const ModalFilter = (props: Props) => {
    return (
        <div className='ModalFilter__wrapper'>
            <div className='ModalFilter__container'>
                <p>
                    <strong>Lọc vé</strong>
                </p>
                <div className='ModalFilter__calendar'>
                    <section>
                        Từ ngày <CalenderSmall borderColor={true} icon={true} />
                    </section>
                    <section>
                        Đến ngày{' '}
                        <CalenderSmall borderColor={true} icon={true} />
                    </section>
                </div>
                <div className='ModalFilter__options'>
                    <p>Tình trạng sử dụng</p>
                    <div className='ModalFilter__radio'>
                        <label>
                            <input
                                className='radio-custom'
                                type='radio'
                                name='a'
                                id=''
                            />
                            <span className='radio-custom-label text'>
                                Tất cả
                            </span>
                        </label>
                        <label>
                            <input
                                className='radio-custom'
                                type='radio'
                                name='a'
                                id=''
                            />
                            <span className='radio-custom-label text'>
                                Đã sử dụng
                            </span>
                        </label>
                        <label>
                            <input
                                className='radio-custom'
                                type='radio'
                                name='a'
                                id=''
                            />
                            <span className='radio-custom-label text'>
                                Chưa sử dụng
                            </span>
                        </label>
                        <label>
                            <input
                                className='radio-custom'
                                type='radio'
                                name='a'
                                id=''
                            />
                            <span className='radio-custom-label text'>
                                Hết hạn
                            </span>
                        </label>
                    </div>
                </div>
                <div className='ModalFilter__check-in'>
                    <p>Cổng Check - in</p>
                    <div className='ModalFilter__check-in-btn'>
                        <label>
                            <input
                                className='styled-checkbox'
                                id='styled-checkbox-1'
                                type='checkbox'
                                value='value1'
                            />
                            <label htmlFor='styled-checkbox-1'>
                                <span>Tất cả</span>
                            </label>
                        </label>
                        <label>
                            <input
                                className='styled-checkbox'
                                id='styled-checkbox-2'
                                type='checkbox'
                                value='value2'
                            />
                            <label htmlFor='styled-checkbox-2'>
                                <span>Cổng 1</span>
                            </label>
                        </label>
                        <label>
                            <input
                                className='styled-checkbox'
                                id='styled-checkbox-3'
                                type='checkbox'
                                value='value3'
                            />
                            <label htmlFor='styled-checkbox-3'>
                                <span>Cổng 2</span>
                            </label>
                        </label>
                        <label>
                            <input
                                className='styled-checkbox'
                                id='styled-checkbox-4'
                                type='checkbox'
                                value='value4'
                            />
                            <label htmlFor='styled-checkbox-4'>
                                <span>Cổng 3</span>
                            </label>
                        </label>
                        <label>
                            <input
                                className='styled-checkbox'
                                id='styled-checkbox-5'
                                type='checkbox'
                                value='value5'
                            />
                            <label htmlFor='styled-checkbox-5'>
                                <span>Cổng 4</span>
                            </label>
                        </label>
                        <label>
                            <input
                                className='styled-checkbox'
                                id='styled-checkbox-6'
                                type='checkbox'
                                value='value6'
                            />
                            <label htmlFor='styled-checkbox-6'>
                                <span>Cổng 5</span>
                            </label>
                        </label>
                    </div>
                </div>
                <div className='ModalFilter__filter'>
                    <button>Lọc</button>
                </div>
            </div>
        </div>
    );
};

export default ModalFilter;
