import Button from "react-bootstrap/Button";

const InternshipDetails = () => {
  return (
    <div>

      {/* Header Section */}
      <section className="bg-dark text-light text-center py-4 mb-4 rounded">
        <h1 className="h4 fw-bold">
          Welcome to GlitchLabs Internship Program
        </h1>
        <p className="text-muted">
          Technology alone is not enough
        </p>

        <Button
          variant="primary"
          size="sm"
          href="https://payments.cashfree.com/forms/SummerInternshipProgram2026"
          target="_blank"
          rel="noopener noreferrer"
        >
           Register  
        </Button>

      </section>

      {/* About Program */}
      <section className="mb-4">
        <div className="container">
          <h4 className="fw-bold">About this program</h4>
          <p>
            This is a 2 month internship program where you will be assigned into
            a live running project. It will be a major project. Domains offered
            include Data Science, Machine Learning, Frontend Web Development,
            Backend Web Development, and Full Stack Web Development. Upcoming
            programs include Deep Learning, Blockchain, and more.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="mb-4">
        <div className="container">
          <h4 className="fw-bold">Perks you will be getting</h4>
          <ul>
            <li>Internship completion certificate</li>
            <li>
              Letter of Recommendation & Appreciation (Based on performance)
            </li>
            <li>Full-time job offer opportunity (Based on performance)</li>
            <li>Industry exposure</li>
            <li>Chance to win awesome GlitchLabs merchandise</li>
          </ul>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="mb-4">
        <div className="container">
          <h4 className="fw-bold">
            Responsibilities & Expectations from Interns
          </h4>
          <ul>
            <li>Basic knowledge of programming and computer skills</li>
            <li>Regularly check email for updates and communication</li>
            <li>Attend webinars and live sessions if arranged</li>
            <li>Timely completion of assignments and projects</li>
            <li>Maintain professionalism and decency</li>
            <li>For issues, contact support@GlitchLabs.com</li>
          </ul>
        </div>
      </section>

      {/* Terms */}
      <section className="mb-4">
        <div className="container">
          <h4 className="fw-bold">Terms & Conditions</h4>
          <p>Welcome to GlitchLabs Edu!</p>
          <p>
            By accessing this website, you agree to accept all terms and
            conditions stated by the company.
          </p>
          <Button variant="link" className="p-0">
            Know more...
          </Button>
        </div>
      </section>


    </div>
  );
};

export default InternshipDetails;
