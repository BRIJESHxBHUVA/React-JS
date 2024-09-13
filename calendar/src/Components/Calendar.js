import React from 'react'
import { useState, useEffect } from 'react'
import './Calendar.css'

const Calendar = () => {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [daysInMonth, setDaysInMonth] = useState([]);
    const [startDay, setStartDay] = useState(0)
    const [selectedDate, setSelectedDate] = useState(null)

    useEffect(()=>{
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const date = new Date(year, month, 1);
        const days = []

        while(date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1)
        }

        setDaysInMonth(days)
        setStartDay(new Date(year, month, 1).getDate());

    },[currentDate])

    const dayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

    const prevMonth = ()=> {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))
    }
    const nextMonth = ()=> {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))
    }

    const handleSelectedDate = (date)=>{
        setSelectedDate(date)
    }

  return (
    <>
     <div className="main">
        <div className="calendar">
            <div className="header">
                <button onClick={prevMonth}>&lt;</button>
                <div>{currentDate.toLocaleString('default', {month: 'long'})}{''}{currentDate.getFullYear()}</div>
                <button onClick={nextMonth}>&gt;</button>
            </div>    
            <div className="week">
                {dayNames.map((days)=>(
                    <strong key={days} className='days-name'>{days}</strong>
                ))}
            </div>
            <div className="days">
                {daysInMonth.map((day)=>(
                    <div key={day} className={`day ${day.getDate() === new Date().getDate() && day.getMonth === new Date().getMonth() ? 'today' : ''} ${selectedDate && selectedDate.toDateString() === day.toDateString() ? 'selected' : ''} `} onClick={()=> handleSelectedDate(day)}>
                        {day.getDate()}
                    </div>
                ))}
            </div>
        </div>    
    </div> 
    </>
  )
}

export default Calendar
