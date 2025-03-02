export default function ProjectsTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Druk Abroad</h3>
        <p className="text-sm mb-3">Mobile App & Full Stack Platform</p>
        <p>Developed and deployed Druk Abroad Mobile application for the Ministry of Foreign Affairs and External Trade.</p>
      </div>
      
      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Smart Attendance Manager</h3>
        <p className="text-sm mb-3">Mobile Application</p>
        <p>Led a team of students to create a smart attendance management mobile app using the least amount of infrastructure during the final year of college.</p>
      </div>
      
      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Inventory Management System</h3>
        <p className="text-sm mb-3">Web Application</p>
        <p>Developed during the internship at New Edge Technologies Pvt Ltd, this system streamlined inventory tracking and management for the company.</p>
      </div>
      
      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Leave Management System</h3>
        <p className="text-sm mb-3">Web Application</p>
        <p>Created during the internship, this system facilitated efficient leave tracking and approval processes within the organization.</p>
      </div>
    </div>
  );
}
