import React from 'react';
import './internshipdetail.css';
import design from "../../components/assets/images/DesignChallenge.jpg"

const InternshipDetails = () => {
  return (
    <div className='container1'>
    <div className="internship-details">
      <h1>Internship Instructions</h1>
      <ul>
        <li>
          <strong>LinkedIn Profile Improvement</strong> (Mandatory)
        </li>
        <li>
          Complete all tasks for the <strong>Tech Internship Completion Certificate</strong>.
        </li>
        <li>
          Share all your achievements (Offer Letter / Internship Completion Certificate) received from us. Tag <strong>Simplbyte</strong> and use hashtags <strong>#simplbyte</strong>, <strong>#simplbyteintern</strong>, <strong>#learnwithsimplbyte</strong>.
        </li>
        <li>
          Create a <strong>GitHub</strong> account. Create a separate repository for all tasks. Upload tasks to GitHub with names like <strong>SIMBT_task-no</strong> (e.g., SIMBT_01, SIMBT_02).
        </li>
        <li>
          <strong>Peer Evaluation:</strong> Watch and comment on at least two task videos on LinkedIn posted by fellow interns.
        </li>
      </ul>

      <div className="challenges">
        <div className="challenge">
          <h2>Beginner Task</h2>
          <p><strong>Task:</strong> Replicate the given UI.</p>
          <p><strong>Objective:</strong> Improve basic HTML, CSS, and JavaScript skills by replicating a provided design.</p>
          <p><strong>Requirements:</strong></p>
          <ul>
            <li>Use HTML and CSS for structure and styling.</li>
            <li>Ensure the design is responsive.</li>
            <li>Maintain pixel-perfect accuracy to the provided design.</li>
          </ul>
          <p><strong>Technology Stack:</strong> HTML, CSS, JavaScript</p>
          <img src={design} alt="UI to Replicate" />
        </div>

        <div className="challenge">
          <h2>Intermediate Task</h2>
          <p><strong>Task:</strong> Real-time PDF Uploader and Viewer Website</p>
          <p><strong>Objective:</strong> Build a functional web application to upload, store, and view PDF files in real-time.</p>
          <p><strong>Requirements:</strong></p>
          <ul>
            <li>Allow users to upload PDF files.</li>
            <li>Provide a real-time viewing feature for uploaded PDFs.</li>
            <li>Implement security measures to protect file uploads.</li>
          </ul>
          <p><strong>Technology Stack:</strong> React.js, Node.js, Express, MongoDB</p>
          <p><strong>Deadline:</strong> One Month</p>
          <p><strong>Note:</strong>It is mandatory to complete <strong>both tasks within the deadline mentioned in your email.</strong> Please ensure that you read the internship instructions carefully to understand all requirements and guidelines.

          <strong>Additionally, plagiarism is strictly prohibited.</strong> Make sure to write original code and incorporate your own ideas and solutions to enhance the quality of your work. If you have any questions or need further clarification, feel free to reach out for assistance.</p>
          <button onClick={() => window.open( 'https://forms.gle/Qc89BjKS3AJDeFFR9')}>
            Submission Form
          </button>
        </div>
      </div>

      <div className="evaluation">
        <h2>Evaluation Criteria</h2>
        <ul>
          <li>Functionality and usability.</li>
          <li>Code quality, organization, and reusability.</li>
          <li>Security and validation measures.</li>
          <li>User interface and user experience.</li>
          <li>Report clarity and thoroughness.</li>
        </ul>
      </div>

      <div className="resources">
        <h2>Tips and Resources</h2>
        <ul>
          <li>Refer to online tutorials for HTML, CSS, and JavaScript basics.</li>
          <li>Use React documentation for understanding component-based architecture.</li>
          <li>Look into Node.js and Express guides for backend development.</li>
          <li>Explore MongoDB documentation for database management.</li>
          <li>Keep security best practices in mind while developing your project.</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default InternshipDetails;
