import './App.css';
import profilePic from './images/avatar-passport-photo.jpg';
import Resume from './docs/resume.pdf';

function App() {
  return (
    <header>
    <div class="logo-img">
      {/*  <!-- Avatar image at LEFT TOP CORNER --> */}
    <img src={profilePic} width="150px" />
      
    </div>
        <h2>Murad Ali</h2>
        {/* <!-- Navigation on the TOP RIGHt side --> */}
        <nav>
            <ul>
                <li><a href="#link-about-me">About Me</a></li>
                <li><a href="#link-my-work">Work</a></li>
                <li><a href="#link-contact-me">Contact Me</a></li>
                <li><a href={Resume}>Resume</a></li>
            </ul>
        </nav>
  </header>
    );
}

export default App;
