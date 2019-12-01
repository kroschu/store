import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer () {
  return (
    <footer className="clearfix">
      <div className="container">
        <p>© 2020 Sj Projects</p>
        <ul>
          <li><Link to={process.env.PUBLIC_URL + "/"} className="animated_link">Home</Link></li>
          <li><Link to={process.env.PUBLIC_URL + "/docs"} className="animated_link">Docs</Link></li>
          <li><a href="https://github.com/cyberboysumanjay" target="blank" className="animated_link">GitHub</a></li>
          <li><a href="https://t.me/sjprojects" target="blank" className="animated_link">Telegram</a></li>
        </ul>
      </div>
    </footer>
  );
}
