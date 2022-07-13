import React from 'react';

const Date = ({d}) => {
    
    const months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const day =daysInWeek[d.getDay()]
    const date =  d.getDate()
    const month = months[d.getMonth()]
    const year = d.getFullYear()

    return (
        <div>
            <h3>{`${day} ${date} ${month} ${year}`}</h3>
        </div>
    );
};

export default Date;