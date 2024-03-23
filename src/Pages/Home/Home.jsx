import React, { useEffect, useState } from 'react';
import Profile from '../../assets/relaxed.png';
import './Home.css';
import { NavLink, Link } from 'react-router-dom';
import { RiArrowRightDoubleLine } from 'react-icons/ri';

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true after the component is mounted
    setMounted(true);
  }, []);

  return (
    <div className={`home ${mounted ? 'fade-in' : ''}`}>
      <div className="border">
        <div className="name">
          <h2>HellooooOoOOooo Woooo0orld!</h2>
          <h1>HONEYVHEN VILLALUZ</h1>
        </div>
        <div className="details">
          <img src={Profile} alt="" className="profile" />
          <div className="me">
            <p>
              I’m a 4th-year IT student ready for real-world challenges. Seeking
              a growth-focused team for a rewarding experience. Let's connect
              and make things happen
            </p>
            <Link to="/about" className="button">
              Know Me More{' '}
              <span className="buttonIcon">
                <RiArrowRightDoubleLine />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
