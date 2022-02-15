import Logo from "./images/reactlogo.jpg";
import Reactimg from "./images/reactimage.jpg";
import Language from "./images/language.png";
import Search from "./images/search.png";
import Arrow from "./images/arrow.png";
import "./navstyles.css";
function Nav() {
  return (
    <div className="nav">
      <ul>
        <li style={{ paddingLeft: "45px" }}>
          <a href="#">
            <img
              src={Logo}
              style={{ width: "25px", height: "25px" }}
              className="logo"
            />
          </a>
        </li>
        <li>
          <a href="#" style={{ color: "skyblue", marginLeft: "-28px" }}>
            React
          </a>
        </li>
        <li style={{ paddingLeft: "150px" }}>
          <a href="#">Docs</a>
        </li>
        <li>
          <a href="#">Tutorial</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
        <li>
          <a href="#" style={{ paddingLeft: "100px", color: "gray" }}>
            <span><img
              src={Search}
              style={{ width: "20px", height: "20px",marginRight : "4px"}}
              className="searchlogo"
            /></span>
            <span>Search</span>
          </a>
        </li>
        <li>
          <a href="#" style={{ paddingLeft: "100px" }}>
            v17.0.2
          </a>
        </li>
        <li>
          <a href="">
            <span><img
              src={Language}
              style={{ width: "25px", height: "25px",marginRight : "3px"}}
              className="logo"
            /></span>
            <span>Languages</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>GitHub</span>
            <span>
            <img
              src={Arrow}
              style={{ width: "18px", height: "18px", paddingLeft : "5px"}}
            />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
function Intro() {
  return (
    <div className="intro">
      <img src={Reactimg} style={{ height: "325px", width: "1355px" }} />
      <div className="text">
        <h1
          style={{ fontSize: "50px", paddingLeft: "250px", color: "skyblue" }}
        >
          React
        </h1>
        <h2 style={{ fontSize: "30px", marginTop: "-15px", color: "white" }}>
          A JavaScript library for building user interfaces
        </h2>
        <a href="#">
          <button
            style={{
              border: "none",
              width: "110px",
              height: "40px",
              marginLeft: "200px",
              backgroundColor: "skyblue",
              textDecoration: "none",
            }}
          >
            <b>Get Started</b>
          </button>
        </a>
        <a
          style={{
            marginLeft: "40px",
            color: "skyblue",
            fontSize: "18px",
            textDecoration: "none",
          }}
          href="#"
        >
          Take the Tutorial {">"}
        </a>
      </div>
    </div>
  );
}
function Features() {
  const feature = [
    {
      id: 1,
      head: "Declarative",
      des1: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
      des2: "Declarative views make your code more predictable and easier to debug.",
    },
    {
      id: 2,
      head: "Component-Based",
      des1: "Build encapsulated components that manage their own state, then compose them to make complex UIs.",
      des2: "Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",
    },
    {
      id: 3,
      head: "Learn Once, Write Anywhere",
      des1: "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.",
      des2: "React can also render on the server using Node and power mobile apps using React Native.",
    },
  ];
  const features = feature.map((item) => (
      <div key={item.id}>
        <div className="ui card">
          <div className="content">
            <div className="meta"><h3>{item.head}</h3></div><br/>
            <div className="description">
              <p>{item.des1}</p><br/>
              <p>{item.des2}</p>
            </div>
          </div>
        </div>
      </div>
  ));
  return <div class="ui cards">{features}</div>
}
export { Nav, Intro, Features};
