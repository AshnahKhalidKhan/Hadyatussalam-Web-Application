import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import './Community.css';
import HelpLogo from './Help.png';
import CommunityLogo from './community.png';
import MentorLogo from './Mentor.png';

function Community() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="community-container">
        <h1>Community & Contact</h1>
        <div className="button-container">
          <a href="mailto:HadyaHelpline@outlook.com">
            <button>
              <div className="logo-container">
                <img src={HelpLogo} alt="HelpLogo" />
                <span className="no-underline">Email us your Feedback</span>
              </div>
            </button>
          </a>
          <a href="https://www.facebook.com/groups/576935027825187/" target="_blank" rel="noopener noreferrer">
            <button>
              <div className="logo-container">
                <img src={CommunityLogo} alt="CommunityLogo" />
                <span className="no-underline">Join our Support Group</span>
              </div>
            </button>
          </a>
          <a href="mailto:HadyaMentoring@outlook.com">
            <button>
              <div className="logo-container">
                <img src={MentorLogo} alt="MentorLogo" />
                <span className="no-underline">Email us your Mentoring Issues</span>
              </div>
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Community;
