import React from 'react';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import Calendar from 'rc-calendar';
import 'rc-calendar/assets/index.css'

/* eslint-disable no-unused-vars */
function dateRender(current, value) {
    return <span>{new Date(current).getDate()}</span>
}

function HuaCalendar(props) {
    return <div>
        <RangeCalendar />
        <br />
        {/* 自定义渲染日期cell dateRender={(current, value) => dateRender(current, value)} */}
        <Calendar
            showOk
            showDateInput={true}
            onOk={props.onChange}
        />
    </div>
}

export default HuaCalendar
