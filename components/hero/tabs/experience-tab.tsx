export default function ExperienceTab() {
  return (
    <>
      <div className="bg-muted/50 rounded-lg p-6">
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold">Software Developer</h3>
            <span className="text-sm text-muted-foreground">July 2024 - Present</span>
          </div>
          <h4 className="text-lg mb-2">New Edge Technologies Pvt Ltd</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Developed and deployed Druk Abroad Mobile application and the Full Stack backend application.</li>
            <li>Maintained and Helped with Data Analysis and Reporting of EMIS.</li>
          </ul>
        </div>
        
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold">Software Intern</h3>
            <span className="text-sm text-muted-foreground">Dec 2023 - Feb 2024</span>
          </div>
          <h4 className="text-lg mb-2">New Edge Technologies Pvt Ltd</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Developed an Inventory Management System</li>
            <li>Developed Leave Management System</li>
            <li>Collaborated with team members to enhance system functionalities</li>
            <li>Gained practical experience in software development and project management</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-muted/50 rounded-lg p-6 mt-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">Deputy Chief Councilor</h3>
          <span className="text-sm text-muted-foreground">Volunteer Experience</span>
        </div>
        <h4 className="text-lg mb-2">College of Science and Technology, Royal University of Bhutan</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Led student council activities and initiatives</li>
          <li>Organized events and facilitated communication between students and administration</li>
        </ul>
      </div>
    </>
  );
}
