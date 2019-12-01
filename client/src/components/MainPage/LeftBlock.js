import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.svg';
import infoGraphic from '../../img/info_graphic.svg';

export default function LeftBlock() {
  return (
    <div className="col-lg-6 content-left">
				<div className="content-left-wrapper">
					<Link to={process.env.PUBLIC_URL + "/"} id="logo">
            <img src={logo} alt="" width="49" height="35" />
            <h1 className="title title-light">Sj Projects</h1>
          </Link>
					<div id="social">
						<ul>
							<li><a href="https://t.me/sjprojects" target="blank"><i className="fab fa-telegram"></i></a></li>
						</ul>
					</div>
					<div>
						<figure><img src={infoGraphic} alt="" className="img-fluid" /></figure>
						<h2>Store Files Simple.<br/>Free. Forever</h2>
						<p>Used by <a href="https://t.me/filedlbot">@filedlbot</a> in Backend.</p>
						<a href="https://t.me/sjprojects" target="blank" className="btn_1 rounded">Join Channel!</a>
            <Link to="https://github.com/cyberboysumanjay/" style={{marginLeft: "10px"}} className="btn_1 rounded">GitHub</Link>
					</div>
					<div className="copy">© 2020 Sj Projects</div>
				</div>
			</div>
  );
}
