

export async function getTime(){
    const response = await fetch('http://worldtimeapi.org/api/timezone/Europe/Warsaw', {
        cache: 'no-cache',
    });

    const data = await response.json();
    const toReturn = new Date(data.datetime);
    return toReturn.toLocaleTimeString();
}