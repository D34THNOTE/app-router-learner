import TimeWindow from "@/app/getServerSidePropsWorkaround/TimeWindow";


// This is a server component, here we fetch the data - we can learn to utilize something like react-query to cache the last data we fetched for better user experience.
// The cached data can be used to populate the webpage before rehydrating it with the freshly fetched data, as I understood it

import {getTime} from "@/app/fetchingMethods/getTime";


export default async function WorkaroundMaybe() {
    const initialData = await getTime();

    return (
        <>
            <TimeWindow toDisplay={initialData}/>
            <h3 className="mx-5 my-5">So this page utilizes the react-query library which can be found here with literal code showing how to start
                using it in Next.js https://tanstack.com/query/v4/docs/react/guides/ssr</h3>
        </>
    );
}
