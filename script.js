
    //find single country


    const country=()=>{
        const input=document.getElementById('inpt').value;
    
        if(input.length>0){
           const url=`https://restcountries.com/v3.1/name/${input}` 
           fetch(url)
           .then(response=>response.json())
           .then(data=>displayAll(data[0]))
        }
        
    }
    
    const displayAll=(country)=>{
    const container=document.getElementById('country');
    container.innerHTML='';
    
    const div=document.createElement('div');
    div.innerHTML=`
                            <h1>Country name: ${country.name.common}</h1> 
                            <h1>Capital: ${country.capital}</h1>
                            <h1>Population: ${country.population}</h1>
                            <h1>Flag</h1>
                            <img src=${country.flags.png}>
                            <div id='hide'>
                                <h1>Official name:${country.name.official}</h1>
                                <h1>Independent status:${country.independent}</h1>
                                <h1>Languages:${country.languages[1]}</h1>
                            </div>
                            <br>
                            <div id='button'>
                            <button onclick=details('${country.name.common}') id='show-more-btn'> Show more details </button>
                            <button  onclick="showLess()" id='show-less-btn' >Show less</button>
                            </div>
    `
    container.appendChild(div)
    }

    const details=(param)=>{
       const url=`https://restcountries.com/v3.1/name/${param}`
       fetch(url)
       .then(response=>response.json())
       .then(data=>displayDetails(data))
    }


    const displayDetails=(info)=>{
        const container=document.getElementById('more-details');
    
    const div=document.createElement('div');
    div.innerHTML=`
                            <h1>Country name: ${info.name.common}</h1> 
                            <h1>Capital: ${info.capital}</h1>
                            <h1>Population: ${info.population}</h1>
                            <h1>Flag</h1>
                            <img src=${info.flags.png}>
                                <h1>Official name:${info.name.official}</h1>
                                <h1>Independent status:${info.independent}</h1>
                                <h1>Languages:${info.languages[1]}</h1>
                                `
     container.appendChild(div)
    }
    
    
    
    
    function showMore(){
        document.getElementById('hide').style.display='block';
        document.getElementById('show-more-btn').style.display='none';
        document.getElementById('show-less-btn').style.display='block';
    }
    function showLess(){
        document.getElementById('hide').style.display='none';
        document.getElementById('show-more-btn').style.display='block';
        document.getElementById('show-less-btn').style.display='none';
    }
    
    
    document.getElementById('inpt').addEventListener('keypress',function(even){
        if(even.keyCode===13){
            document.getElementById('search-btn').click();
        }
    })
    