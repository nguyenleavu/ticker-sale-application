import NextCalendar from '~/assets/icons/NextCalendar';
import PreviousCalendar from '~/assets/icons/PreviousCalendar';
import './Calendar.css';

type Props = {};

const Calendar = (props: Props) => {
    return (
        <div className='Calendar__wrapper'>
            <div className='Calendar__container'>
                <div className='Calendar__title'>
                    <span>
                        <PreviousCalendar />
                    </span>
                    <p>Tháng 4, 2021</p>
                    <span>
                        <NextCalendar />
                    </span>
                </div>
                <div className='Calendar__btn'>
                    <label>
                        <input
                            className='radio-custom'
                            type='radio'
                            name='a'
                            id=''
                        />
                        <span className='radio-custom-label text calendar-text'>
                            Theo ngày
                        </span>
                    </label>
                    <label>
                        <input
                            className='radio-custom'
                            type='radio'
                            name='a'
                            id=''
                        />
                        <span className='radio-custom-label text calendar-text'>
                            Theo tuần
                        </span>
                    </label>
                </div>
                <div className='Calendar__calendar'>
                    <ul className='Calendar__weekdays'>
                        <li>T2</li>
                        <li>T3</li>
                        <li>T4</li>
                        <li>T5</li>
                        <li>T6</li>
                        <li>T7</li>
                        <li>CN</li>
                    </ul>
                    <ul className='Calendar__days'>
                        <li>
                            <span className='Calendar__days-old'>29</span>
                        </li>
                        <li>
                            <span className='Calendar__days-old'>30</span>
                        </li>
                        <li>
                            <span className='Calendar__days-old'>31</span>
                        </li>
                        <li>
                            <span>1</span>
                        </li>
                        <li>
                            <span>2</span>
                        </li>
                        <li>
                            <span>3</span>
                        </li>
                        <li>
                            <span>4</span>
                        </li>
                        <li>
                            <span className='Calendar__days-active'>5</span>
                        </li>
                        <li>
                            <span>6</span>
                        </li>
                        <li>
                            <span>7</span>
                        </li>
                        <li>
                            <span>8</span>
                        </li>
                        <li>
                            <span>9</span>
                        </li>
                        <li>
                            <span>10</span>
                        </li>
                        <li>
                            <span>11</span>
                        </li>
                        <li>
                            <span>12</span>
                        </li>
                        <li>
                            <span>13</span>
                        </li>
                        <li>
                            <span>14</span>
                        </li>
                        <li>
                            <span>15</span>
                        </li>
                        <li>
                            <span>16</span>
                        </li>
                        <li>
                            <span>17</span>
                        </li>
                        <li>
                            <span>18</span>
                        </li>
                        <li>
                            <span>19</span>
                        </li>
                        <li>
                            <span>20</span>
                        </li>
                        <li>
                            <span>21</span>
                        </li>
                        <li>
                            <span>22</span>
                        </li>
                        <li>
                            <span>23</span>
                        </li>
                        <li>
                            <span>24</span>
                        </li>
                        <li>
                            <span>25</span>
                        </li>
                        <li>
                            <span>26</span>
                        </li>
                        <li>
                            <span>27</span>
                        </li>
                        <li>
                            <span>28</span>
                        </li>
                        <li>
                            <span>29</span>
                        </li>
                        <li>
                            <span>30</span>
                        </li>
                        <li>
                            <span className='Calendar__days-old'>1</span>
                        </li>
                        <li>
                            <span className='Calendar__days-old'>2</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
