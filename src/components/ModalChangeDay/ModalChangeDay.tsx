import CalendarIcon from '~/assets/icons/CalendarIcon';
import CalenderSmall from '../CalenderSmall/CalenderSmall';
import './ModalChangeDay.css';

type Props = {};

const ModalChangeDay = (props: Props) => {
    return (
        <div className='ModalChangeDay__wrapper'>
            <div className='ModalChangeDay__container'>
                <h2>Đổi ngày sử dụng vé</h2>
                <div className='ModalChangeDay__content'>
                    <section>
                        <p>Số vé</p>
                        <span>PKG20210502</span>
                    </section>
                    <section>
                        <p>Số vé</p>
                        <span>Vé cổng - Gói sự kiện</span>
                    </section>
                    <section>
                        <p>Tên sự kiện</p>
                        <span>Hội trợ triển lãm hàng tiêu dùng 2021</span>
                    </section>
                    <section>
                        <h4>Hạn sử dụng</h4>
                        <span>
                            <CalenderSmall
                                date='15/04/2021'
                                borderColor={true}
                                icon={true}
                            />
                        </span>
                    </section>
                </div>
                <div className='ModalChangeDay__btn'>
                    <button className='ModalChangeDay__btn-delete'>Huỷ</button>
                    <button className='ModalChangeDay__btn-save'>Lưu</button>
                </div>
            </div>
        </div>
    );
};

export default ModalChangeDay;
