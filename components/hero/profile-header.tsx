import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center">
      <div className="rounded-full overflow-hidden border-4 border-primary/20">
        <Image
          src="/salim.jpeg"
          alt="Profile picture"
          width={150}
          height={150}
          className="rounded-full"
          priority
        />
      </div>
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold mb-2">Salim Pradhan</h1>
        <h2 className="text-xl lg:text-2xl text-muted-foreground">Analyst</h2>
        <h2 className="text-xl lg:text-2xl text-muted-foreground">Tashi InfoComm Private Limited</h2>
        <p className="text-sm text-muted-foreground mt-1">Thimphu, Bhutan</p>
      </div>
    </div>
  );
}
