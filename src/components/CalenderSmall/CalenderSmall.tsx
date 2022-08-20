import './CalenderSmall.css';
import CalenderDateIcon from '~/assets/icons/CalenderDateIcon';
import CalendarIcon from '~/assets/icons/CalendarIcon';
import IconClock from '~/assets/icons/IconClock';

type Props = {
    date?: string;
    borderColor?: boolean;
    icon?: boolean;
    time?: string;
    iconClock?: boolean;
};

const CalenderSmall = ({
    date,
    borderColor,
    icon = false,
    time,
    iconClock = false,
}: Props) => {
    return (
        <div
            className={
                borderColor
                    ? 'CalendarSmall__wrapper border'
                    : 'CalendarSmall__wrapper'
            }
        >
            <div className='CalendarSmall__content'>
                <span>{time || date || 'dd/mm/yy'}</span>
                {iconClock ? (
                    <IconClock />
                ) : icon ? (
                    <CalendarIcon />
                ) : (
                    <CalenderDateIcon />
                )}
            </div>
        </div>
    );
};

export default CalenderSmall;
