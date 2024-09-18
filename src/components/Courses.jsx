import React from "react";
import AWSimg from "../assests/AWSimg.png";
import javafullstackimg from "../assests/javafullstackimg.png";
import uiuximg from "../assests/uiuximg.jpg";
import blockchainimg from "../assests/blockchainimg.png";
import mlimg from "../assests/mlimg.png";
import cybersecurityimg from "../assests/cybersecurityimg.png";

const Courses = () => {
  const courses = [
    {
      id: 1,
      src: uiuximg,
      title: "UI/UX Designing",
      description: (
        <ul className="list-disc pl-5">
          <li>Introduction to UI/UX: Basics of user interface and experience design.</li>
          <li>Design Principles: Understanding aesthetics and functionality in digital products.</li>
          <li>Wireframing and Prototyping: Creating visual representations and interactive models.</li>
          <li>User Research: Methods for understanding user needs and behaviors.</li>
          <li>Usability Testing: Evaluating designs to ensure they meet user requirements.</li>
        </ul>
      ),
          },
    {
      id: 2,
      src: javafullstackimg,
      title: "Java Full Stack Development",
      description: (
        <ul className="list-disc pl-5">
          <li>Introduction to Full Stack: Basics of building complete web applications.</li>
          <li>Front-End Technologies: Skills in HTML, CSS, and JavaScript for creating user interfaces.</li>
          <li>Back-End Development: Using Java for server-side logic and application management.</li>
          <li>Database Management: Managing data with MySQL and integrating it with applications.</li>
          <li>End-to-End Project: Building and deploying a full-stack application.</li>
        </ul>
      ),
         },
    {
      id: 3,
      src: AWSimg,
      title: "Amazon Web Services (AWS)",
      description: (
        <ul className="list-disc pl-5">
          <li>Introduction to AWS: Overview of cloud services and infrastructure.</li>
          <li>Compute Services: Using EC2, Lambda, and other tools for scalable computing.</li>
          <li>Storage Solutions: Implementing S3, EBS, and other storage options.</li>
          <li>Database Services: Managing databases with RDS and DynamoDB.</li>
          <li>Cloud Security and Management: Ensuring secure and efficient cloud operations.</li>
        </ul>
      ),
          },
    {
      id: 4,
      src: mlimg,
      title: "Machine Learning",
      description:(
<ul className="list-disc pl-5">
          <li>Introduction to Machine Learning: Basics of developing algorithms that learn from data.</li>
          <li>Supervised Learning: Techniques for building models that make predictions based on labeled data.</li>
          <li>Unsupervised Learning: Methods for uncovering patterns in data without predefined labels.</li>
          <li>Deep Learning: Advanced models using neural networks for complex tasks.</li>
          <li>Applications: Practical uses of machine learning in various industries.</li>
        </ul>
      ),    },
    {
      id: 5,
      src: cybersecurityimg,
      title: "Cyber Security",
      description: (
        <ul className="list-disc pl-5">
          <li>
            Introduction to Cybersecurity: Basics of protecting digital assets
            from cyber threats.
          </li>
          <li>
            Network Security: Techniques for securing network infrastructure and
            preventing breaches.
          </li>
          <li>
            Ethical Hacking: Methods for finding and fixing security
            vulnerabilities.
          </li>
          <li>
            Threat Detection: Skills for identifying and responding to cyber
            threats.
          </li>
          <li>
            Cryptography: Encryption methods to secure data and communications.
          </li>
        </ul>
      ),
    },
    {
      id: 4,
      src: mlimg,
      title: "Machine Learning",
      description: (
        <ul className="list-disc pl-5">
          <li>Introduction to Blockchain: Fundamentals of decentralized ledger technology.</li>
          <li>Cryptographic Security: Principles of securing blockchain transactions.</li>
          <li>Smart Contracts: Developing and deploying self-executing contracts.</li>
          <li>Blockchain Development: Hands-on experience with blockchain platforms.</li>
          <li>Real-World Applications: Exploring uses of blockchain in various industries.</li>
        </ul>
      ),
          },
  ];

  return (
    <div
      name="courses"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Courses Offering
          </p>
          <p className="py-6 text-xl">
            It's not just a course, it's an experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {courses.map(({ id, src, title, description }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 hover:scale-105 hover:shadow-amber-400 duration-500 rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-fit w-full"
              />

              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
                <p className=" px-2 py-1 text-4xl font-bold text-cyan-200">
                  {title}
                </p>
              </div>
              <div>
                <p className=" px-2 py-1 ">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
