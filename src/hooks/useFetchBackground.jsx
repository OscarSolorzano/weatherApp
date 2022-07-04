import React from 'react';

const useFetchBackground = (iconId) => {


    let backgroundImage = ''

    if (iconId === '01d') {
        backgroundImage = '/assets/clearSkyD.gif'
    }
    if (iconId === '01n') {
        backgroundImage = '/assets/clearSkyN.gif'
    }
    if (iconId === '02d' ||
        iconId === '03d') {
        backgroundImage = '/assets/cloudyD.gif'
    }
    if (iconId === '02n' ||
        iconId === '03n') {
        backgroundImage = '/assets/cloudyN.gif'
    }
    if (iconId === '04d') {
        backgroundImage = '/assets/rainCloudsD.gif'
    }
    if (iconId === '04n') {
        backgroundImage = '/assets/rainCloudsN.gif'
    }
    if (iconId === '09d' ||
        iconId === '10d') {
        backgroundImage = '/assets/rainD.gif'
    }
    if (iconId === '09n' ||
        iconId === '10n') {
        backgroundImage = '/assets/rainN.webp'
    }
    if (iconId === '11d' ||
        iconId === '11n') {
        backgroundImage = '/assets/thunder.gif'
    }
    if (iconId === '13d') {
        backgroundImage = '/assets/snowD.gif'
    }
    if (iconId === '13n') {
        backgroundImage = '/assets/snowN.gif'
    }
    if (iconId === '50d') {
        backgroundImage = '/assets/mistD.gif'
    }
    if (iconId === '50n') {
        backgroundImage = '/assets/mistN.gif'
    }
    return backgroundImage
};

export default useFetchBackground;