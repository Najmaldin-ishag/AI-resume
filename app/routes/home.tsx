import type { Route } from "./+types/home";
import NavBar from "~/Components/NavBar";
import {resumes} from "~/Constants";
import ResumeCard from "~/Components/ResumeCard";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job" },
  ];
}

export default function Home() {
  return <main className="bg-[url(/images/bg-main.svg)] bg-cover">
    <NavBar/>
    <section>
    <div className="main-section">
      <h1>Track Your Application & Resume Rating</h1>
      <h2>Review Your submission and check AI-powered feedback</h2>
    </div>
    </section>

    {resumes.length > 0 && (
      <div className="resume-section">
        {resumes.map(resume=>(

        <ResumeCard key={resume.id} resume={resume}/>
        ))}
      </div>
    )}

  </main>
}
