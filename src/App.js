import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <img src={logo} className="App-logo" alt="logo" />

        
            <h1>CPS 530 - Lab10 Problem 3</h1>
            <h2>Framework chosen: ReactJS</h2>
            <h3>Installing the framework: </h3>
            <p>Installing the framework was pretty simple,
              as there are many simple tutorials on how to do it.
              The first I took was installing node.js on my computer.
                Then in a folder, I ran the command
              <code> npx create-react-app lab10-react</code> to create a folder for my project,
              along with all the necessary template files for the page.</p>

              <h3>Building the page:</h3>
              <p>To build this webpage, I had to run the <code> npm start</code> command within the terminal.
                This created a page where I could see the updates I did to my
                page's HTML, CSS and JS in real time, which made it easy to see what did what.
                To invoke changes, I edited the HTML within the App.js file of react,
              along with the App.css file to change certain properties to work in my favour.</p>

              <h3>Difficulties Encountered:</h3>
              <p>While creating this webpage,
                  I found a little tricky to figure out edit the webpage,
                  as I was unfamiliar with the behavior of the default CSS properties for the HTML elements.
                This made it difficult for me to make the webpage exactly how I wanted it to be.
                It was also tricky to figure out how to host my page on my chosen server,
                GitHub Pages, as I didn't understand how it worked entirely.
                Though, for these problems,
                there was also an abundance of tutorials to help me complete this webpage.</p>
            </div>
        </header>
        
      </div>
  );
}

export default App;
