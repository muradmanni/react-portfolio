import Reach from 'react';
import Project1 from '../images/project1.jpg';
import Project2 from '../images/project2.jpg';
import Project3 from '../images/project3.jpg';



function MyWork() {
     return (
        // <!-- WORK SECTION -->
        <section class="section-my-work">
          <div class="my-work" id="link-my-work">
            <h3>Work</h3>
          </div>
          <div class="really-my-work">
              {/* <!-- Project one  section  --> */}
              <div class="work1">
                <a class="work1" href="https://muradmanni.github.io/rotten-thesaurus/" >
                  <img class="work1cover"  src={Project1} alt="Project one image"/>
                  <h4 class="project-desc">Rotten Thesaurus</h4>  
                </a>
                
              </div>
              <div><p class="pa">Rotten Thesaurus is a website that allows users to search thousands of movies with a search bar. Selecting a movie will show the alternative name(synonym) of the movie title however, it’s genre, and other details remain the same. There are randomised trigger warnings which will allow users to inform them of content that may affect them negatively.. 
              </p></div>
              {/* <!-- Project two section  --> */}
              <div class="multiple-work-screen">
                <div class="work2">
                  <a class="work2" href="https://muradmanni.github.io/homework-weather-dashboard/" >
                  <img class="work1cover" src={Project2} alt="Project two image"/>  
                  <h4 class="project-desc2">Weather Dashboard</h4>  
                </a>
                <div><p class="pa">
                  Using Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. 
                  Developers are often tasked with retrieving data from another application's API and using it in the context of their own. 
                  This weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.</p></div>  
              </div>
                
                  {/* <!-- Project three section  --> */}
                <div class="work3">
                  <a class="work3" href="https://muradmanni.github.io/homework-workday-schedule/sh" >
                  <img class="work1cover" src={Project3} alt="Project three image"/>  
                  <h4 class="project-desc3">Work Schedule</h4>  
                  </a>
                  <div><p class="pa">This is a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.</p></div>
                </div>
                
              </div>  
          </div>
          </section>)
}

export default MyWork;
