"use client"

import React, { useState, useEffect, useRef } from 'react';

interface DealCountdownProps {
    endDate: Date;
}

const Countdown: React.FC<DealCountdownProps> = ({ endDate }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const intervalRef: any = useRef<NodeJS.Timeout | null>(null);

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = endDate.getTime() - now.getTime();

        if (difference <= 0) {
            clearInterval(intervalRef.current);
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
            return;
        }

        const oneDay = 1000 * 60 * 60 * 24;
        const oneHour = 1000 * 60 * 60;
        const oneMinute = 1000 * 60;
        const oneSecond = 1000;

        setDays(Math.floor(difference / oneDay));
        setHours(Math.floor((difference % oneDay) / oneHour));
        setMinutes(Math.floor((difference % oneHour) / oneMinute));
        setSeconds(Math.floor((difference % oneMinute) / oneSecond));
    };

    useEffect(() => {
        calculateTimeLeft();
        intervalRef.current = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(intervalRef.current);
    }, [endDate]);

    const timeUnits = [
        { label: 'd', value: days },
        { label: 'h', value: hours },
        { label: 'm', value: minutes },
        { label: 's', value: seconds },
    ];

    const formattedTime = timeUnits.map((unit) => (
        unit.label === "s" ? (
            <span key={unit.label} className="">
                { } {unit.value.toString().padStart(2, '0')}{unit.label}
            </span>
        ) : (
            <span key={unit.label} className="">
                { } {unit.value.toString().padStart(2, '0')}{unit.label} :
            </span>
        )
    ));

    return (
        <div className="flex items-center gap-2 min-[500px]:gap-3">
            <span className="text-gray900 font-medium text-xs min-[500px]:text-sm lg:text-base hidden min-[400px]:block">Deals ends in </span>
            <div className='py-1 px-2 lg:px-3 lg:py-2 bg-warning300 text-gray900 text-xs min-[500px]:text-sm md:text-base lg:text-xl rounded-sm'>
                {formattedTime}
            </div>
        </div>
    );
};

export default Countdown;
