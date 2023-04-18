import { parseISO, format } from 'date-fns';

export default function FormatDate({ dateString }) {
    // console.log(dateString)
    const date = parseISO(dateString);
    // console.log(date)

    // console.log(format(new Date(dateString), 'LLLL d, yyyy'))
    return <time dateTime={dateString}>
        {format(date, 'LLLL d, yyyy')}
    </time>;
    // return <time dateTime={dateString}>
    //     {format(new Date(dateString), 'LLLL d, yyyy')}
    // </time>;
}
