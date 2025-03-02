export default function SkillsTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✅</span>
            <span><strong>Programming Languages:</strong> Java, JavaScript, Python, Dart/Flutter, Golang</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✅</span>
            <span><strong>Web Development:</strong> React, NextJS, Spring boot, Laravel, Ruby on Rails</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✅</span>
            <span><strong>Mobile Development:</strong> Flutter, React Native</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✅</span>
            <span><strong>Database Management:</strong> SQL, NoSQL</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✅</span>
            <span><strong>Tools & Platforms:</strong> Git, GitHub, Agile methodologies</span>
          </li>
        </ul>
      </div>
      
      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Other Skills & Languages</h3>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Soft Skills</h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Communication</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Leadership</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Teamwork</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Problem-Solving</span>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Languages</h4>
          <ul className="space-y-1">
            <li>English (Fluent)</li>
            <li>Dzongkha (Fluent)</li>
            <li>Hindi (Fluent)</li>
            <li>Nepali (Fluent)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
