import "./Home.css";
import TextInfo from "../TextInfo/TextInfo";

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <div className="main-container">
          <h2>Discover Your Community!</h2>
          <input type="text" placeholder="Enter address, city, state, zip" />
        </div>
      </div>
      <div className="text-info-container">
        <TextInfo title="About Us" content="Buzz is an online platform designed to help residents of neighborhoods build and strengthen their community. The website provides a space where individuals can post and browse a range of content, including upcoming events, social gatherings, job listings, and crime watch reports. Through Buzz, residents can connect with one another and stay informed about what's happening in their local area." />
        <TextInfo title="Why You Should Use Our Platform" content="By facilitating community engagement and communication, Buzz aims to create a safer and more connected environment for everyone. Whether you're new to the neighborhood or a long-time resident, Buzz is the perfect tool for building a strong and vibrant community." />
      </div>
    </div>
  );
};

export default Home;
