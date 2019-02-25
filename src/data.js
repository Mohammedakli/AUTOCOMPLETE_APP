import axios from 'axios';

export function getStocks() {
     axios.get('https://www-uat.tictactrip.eu/api/cities/popular/5')
     .then(response => {
       console.log(response.data);
         return response.data
    }) 
    var a = [
      { abbr: 'ADANIPORTS', name: 'Adani Ports & Special Economic Zone Ltd.' },
      { abbr: 'ASIANPAINT', name: 'Asian Paints Ltd.' },
      { abbr: 'AXISBANK', name: 'Axis Bank Ltd.' },
      { abbr: 'BAJAJ-AUTO', name: 'Bajaj Auto Ltd.' },
      { abbr: 'BAJFINANCE', name: 'Bajaj Finance' }
    ];  
    console.log(a);
}

  export function matchStocks(state, value) {
    return (
      state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
      state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }