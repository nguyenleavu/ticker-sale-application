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
                            <input type='checkbox' />
                            <span>Tất cả</span>
                        </label>
                        <label>
                            <input type='checkbox' />
                            <span>Cổng 1</span>
                        </label>
                        <label>
                            <input type='checkbox' />
                            <span>Cổng 2</span>
                        </label>
                        <label>
                            <input type='checkbox' />
                            <span>Cổng 3</span>
                        </label>
                        <label>
                            <input type='checkbox' />
                            <span>Cổng 4</span>
                        </label>
                        <label>
                            <input type='checkbox' />
                            <span>Cổng 5</span>
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
