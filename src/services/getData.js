

// export async function getData (length,breadth){
  
//     const weatherData = await fetch('https://goweather.herokuapp.com/weather/newyork')
//     const data = await weatherData.json()
    
 
//     return weatherData;
// }


// export default getData


fetch('https://goweather.herokuapp.com/weather/newyork').then((weatherData)=>{
    return weatherData.json()

}).then((data)=>{

})