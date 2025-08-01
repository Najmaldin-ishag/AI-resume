import type {Route} from "./+types/home";
import NavBar from "~/Components/NavBar";
import {resumes} from "~/Constants";
import ResumeCard from "~/Components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {useNavigate} from "react-router";
import {useEffect} from "react";


export function meta({}: Route.MetaArgs) {
    return [
        {title: "Resumind"},
        {name: "description", content: "Smart feedback for your dream job"},
    ];
}

export default function Home() {
    const {auth} = usePuterStore()
    const navigate = useNavigate()

    useEffect(() => {
        if (!auth.isAuthenticated) navigate("/auth?next=/")
    }, [auth.isAuthenticated]);
    return <main className="bg-[url(/images/bg-main.svg)] bg-cover">
        <NavBar/>
        <section className="main-section">
            <div className="page-heading py-16">
                <h1>Track Your Application & Resume Rating</h1>
                <h2>Review Your submission and check AI-powered feedback</h2>
            </div>


            {resumes.length > 0 && (
                <div className="resumes-section">
                    {resumes.map(resume => (

                        <ResumeCard key={resume.id} resume={resume}/>
                    ))}
                </div>
            )}
        </section>

    </main>
}
