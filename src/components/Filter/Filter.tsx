import CalenderSmall from '../CalenderSmall/CalenderSmall';
import './Filter.css';

const Filter = () => {
    return (
        <>
            <h2 className='Filter__title'>Lọc vé</h2>
            <div className='Filter__state'>
                <p>Tình trạng đối soát</p>
                <div className='Filter__radio'>
                    <label>
                        <input
                            className='radio-custom'
                            type='radio'
                            name='a'
                            id=''
                        />
                        <span className='radio-custom-label text'>Tất cả</span>
                    </label>
                    <label>
                        <input
                            className='radio-custom'
                            type='radio'
                            name='a'
                            id=''
                        />
                        <span className='radio-custom-label text'>
                            Đã đối soát
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
                            Chưa đối soát
                        </span>
                    </label>
                </div>
            </div>
            <div className='Filter__ticket-type'>
                <p>Loại vé</p>
                <span>Vé cổng</span>
            </div>
            <div className='Filter__ticket-date'>
                <p>Từ ngày</p>
                <CalenderSmall date='01/05/2022' />
            </div>
            <div className='Filter__ticket-date Filter__ticket-date-end'>
                <p>Đến ngày</p>
                <CalenderSmall />
            </div>

            <div className='Filter__filter'>
                <button className='Filter__btn'>Lọc</button>
            </div>
        </>
    );
};

export default Filter;
