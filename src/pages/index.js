import { useState, useEffect } from 'react'
import axios from "axios";



export default function Home() {
  // new line start
  const [currentTime, setCurrentTime] = useState(0)




  useEffect(() => {
    function getData() {
      axios({
        method: "GET",
        url: "http://localhost:5000/time",
      })
        .then((response) => {
          const res = response.data
          var myDate = new Date(res.time*1000);
          console.log(res.time)
          setCurrentTime(({
            current_time: myDate.toLocaleString()
          }))
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
        })
    }

    getData();

  }, [])






  return (
    <div className="App">
      <header className="App-header">

        {/* new line start*/}

        <div className="flex justify-center items-center h-screen bg-gray-700">
          <div className='text-green-300'>
            <p className='flex justify-center text-xl font-bold'>Current Time</p>
            <p className='text-xl font-bold'> {currentTime.current_time}</p>
          </div>
        </div>

        {/* end of new line */}
      </header>
    </div>
  );

}


