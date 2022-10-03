import * as React from "react";
import * as Types from "../../Types";
import { useNavigate } from "react-router-dom";

const Profile = (props: Types.ProfileProps) => {
  const nav = useNavigate();

  return (
    <div className="my-4">
      <h1 className="text-center">Profile</h1>
      <hr style={{ width: "50%", height: "5px", margin: "auto" }}></hr>

      <div className="d-flex justify-content-center">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <p>profile picture here</p>
              <h3>About Me</h3>
              <p>Hello! I'm Eric Moran.</p>
              <p>
                I started my career in middle school math education to share my joy of math and learning with the next
                generation. I loved witnessing the moment when the gears started turning in a student's mind and the
                concept finally clicked for them. However, I personally didn't feel challenged in my career; I was
                missing something. The level of math I was teaching made me feel as if I wasn't growing my own
                understanding, and I wanted to stay mentally engaged with the material while also helping others. I
                remembered thinking about the Number Theory and Sets and Logic classes I took in college, and how
                rigorous, yet enjoyable they were; I wanted to find a career that would be as rewarding and resourceful
                as those classes were for me.
              </p>
              <p>
                After attending and graduating from Covalence, a software development boot camp, I have once again found
                the challenging and rewarding environment that I've wanted to return to professionally, and I've already
                put it to use by helping my family and friends solve real-world problems. For one brief example, I have
                a friend who works at Gundam Planet that needed help with their manual release date tracking system. To
                test my newfound skills, I offered to build an app that would collect release date information for them
                and update it for them automatically - saving them hours of manual, tedious data entry work every day.
                This project won't change the world, but it changed their world - and they absolutely loved it. Now
                they're using my software, and it has made their work life easier while it simultaneously helped me grow
                as a software developer. It gives me a tremendous amount of joy to know that the work I'm doing is
                improving someone else's life, and I have a greater sense of personal fulfillment because I am growing
                personally and professionally while still helping someone else. I'm still early in my software career,
                but I am extremely eager to continue developing this new skillset and passion as I help others along the
                way.
              </p>
            </div>
            <hr></hr>
            <div className="card-body">
              <h3>Socials</h3>
              <a
                className="btn btn-primary btn-sm m-2"
                href={"https://www.linkedin.com/in/ejm-dev/"}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="btn btn-primary btn-sm m-2"
                href={"https://github.com/emoran0403"}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
            {/* <hr></hr>

            <div className="card-body">
              <h3>Block 3</h3>
              <p></p>
            </div>
            <hr></hr> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
