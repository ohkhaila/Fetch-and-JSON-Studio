// TODO: add code here

/* Requirements
1. Add code that runs on the window load event.
		a. This is done because we can't interact with the HTML elements until the page has loaded.
2. Make a GET request using fetch to the astronauts API https://handlers.education.launchcode.org/static/astronauts.json
		a. Do this part inside the load event handler.
3. Add each astronaut returned to the web page.
		a. Use the HTML template shown below.
        b. Be sure to use the exact HTML including the CSS classes. (starter code contains CSS definitions)
*/

//1 & 2
    window.addEventListener('load', function(){
        
        fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
            return response.json();
//3            
    }).then(function(json) { //the json() method is used to gain access to the JSON data contained in the response object.
                const container = document.getElementById("container");
                let displayAstronauts = ''; /
                for(let astronaut=0; astronaut< json.length; astronaut++){
                    
                    displayAstronauts += `
                    <div class = "astronaut">
                        <div class = "bio">
                            <h3> ${json[astronaut].firstName} ${json[astronaut].lastName}</h3>
                            <ul>
                                <li>Hours in Space: ${json[astronaut].hoursInSpace}</li>
                                <li>Active: ${json[astronaut].active}</li>
                                <li>Skills: ${json[astronaut].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${json[astronaut].picture}"/>
                    </div>
                `;
                }
                container.innerHTML = astronauts;
            });
        })

       // let getAstronaughtId = document.getElementById
  
