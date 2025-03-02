import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="bg-muted/50 rounded-lg p-6 w-full max-w-3xl">
      <div>
        <h3 className="text-xl font-bold mb-4">Let's Connect!</h3>
        <p className="mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href="mailto:salimpradhan.tech@gmail.com" className="hover:underline">salimpradhan.tech@gmail.com</a>
        </p>
        <p className="text-muted-foreground mb-4">Available for projects, consulting, and collaborations.</p>
        
        <Link 
          href="/contact" 
          className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-center inline-block"
        >
          Let's Connect!
        </Link>
      </div>
    </div>
  );
}
