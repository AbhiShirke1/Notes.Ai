
import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>

            <p className='text-2xl font-semibold font-nunito text-[#72C358] p-1'>{date.toLocaleDateString()}</p>

        </div>
    )
}

export default DateTime