import React from "react";

const CourseJourney = () => {
  return (
    <div
      name="courses journey"
      className="w-full  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            About the Courses
          </p>
        </div>
        <h4 className="text-3xl font-semibold mt-20  text-cyan-200">
          {" "}
          UI/UX Designing
        </h4>
        <p className="text-xl">
          Enhance user experiences with our UI/UX Designing course. Learn the
          essentials of interface and experience design, from creating
          wireframes and prototypes to conducting user research and usability
          testing
        </p>
        <br />
        <h4 className="text-3xl font-semibold text-cyan-200">
          Java Full Stack Development
        </h4>
        <p className="text-xl">
          Become a full-stack developer with our comprehensive Java course.
          Covering front-end technologies like HTML, CSS, and JavaScript, as
          well as back-end development with Java and database management with
          MySQL, you'll build and deploy complete web applications.
        </p>
        <br />
        <h4 className="text-3xl font-semibold  text-cyan-200">
          Amazon Web Services (AWS)
        </h4>
        <p className="text-xl">
          Master the cloud with AWS. Explore core services like EC2, Lambda, S3,
          and RDS, and learn to manage cloud infrastructure, implement storage
          solutions, and ensure security and efficiency in your cloud
          operations.
        </p>
        <br />
        <h4 className="text-3xl font-semibold  text-cyan-200">
          Machine Learning
        </h4>
        <p className="text-xl">
          Dive into Machine Learning with our hands-on course. Learn the
          fundamentals of algorithm development, supervised and unsupervised
          learning, deep learning techniques, and real-world applications across
          various industries.
        </p>
        <br />
        <h4 className="text-3xl font-semibold  text-cyan-200">
          Cyber Security
        </h4>
        <p className="text-xl">
          Protect digital assets with our Cyber Security course. Cover key areas
          including network security, ethical hacking, threat detection, and
          cryptography to safeguard against cyber threats and vulnerabilities.
        </p>
        <br />
        <h4 className="text-3xl font-semibold  text-cyan-200">
          Blockchain Technology
        </h4>
        <p className="text-xl">
          Explore the world of Blockchain Technology. Understand decentralized
          ledger technology, cryptographic security, smart contracts, and
          blockchain development, and discover real-world applications of this
          innovative technology.
        </p>{" "}
      </div>
    </div>
  );
};

export default CourseJourney;
