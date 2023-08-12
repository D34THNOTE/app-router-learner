import TimeWindow from "@/app/getServerSidePropsWorkaround/TimeWindow";


// This is a server component, here we fetch the data - we can learn to utilize something like react-query to cache the last data we fetched for better user experience.
// The cached data can be used to populate the webpage before rehydrating it with the freshly fetched data, as I understood it

import {getTime} from "@/app/fetchingMethods/getTime";


// const fetchTimeOnReq = async () => {
//     const response = await fetch('http://worldtimeapi.org/api/timezone/Europe/Warsaw', {
//         cache: 'no-cache',
//     });
//
//     const data = await response.json();
//     const toReturn = new Date(data.datetime);
//     return toReturn.toLocaleTimeString();
// };

export default async function WorkaroundMaybe() {
    const initialData = await getTime();

    return (
        <>
            <TimeWindow toDisplay={initialData}/>
            <h3 className="mx-5 my-5">TEXT GOES HERE</h3>
        </>
    );
}
