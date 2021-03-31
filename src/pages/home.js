import React from "react";

export const HomePage = () => {
  return (
    <div>
      <h1>This is the homepage.</h1>

      <div className="for-dev-testing">
      <h1>Not Logged In</h1>
      <h2>Resourc.us</h2>
      <h2>Sign up today to share and find resources.</h2>
      <button className="btn btn-success">Get Started</button>
      <h2>Here's what other teams are sharing:</h2>
      <p>(Top 5 Popular Teams)</p>
      </div>
      
      <div className="for-dev-testing">
      <h1>Logged In But Hasn't Joined a Team</h1>
      <h2>Join a team to view resources</h2>
      <h2>Here are some you may be interested in:</h2>
      <p>(Top 5 Popular Teams)</p>
      </div>
      
      <div className="for-dev-testing">
      <h1>Logged In + Has a Teams and Resource Feed</h1>
      <p>Resources Feed Goes Here</p>
      </div>
      
    </div>
  )
}