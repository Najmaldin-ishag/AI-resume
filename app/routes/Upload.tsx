import NavBar from "~/Components/NavBar";
import {type FormEvent, useState} from "react";
import FileUploader from "~/Components/FileUploader";

export const meta = () => ([
    {title: "Upload "}
])
const Upload = () => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [statusText, setStatusText] = useState("")
    const [file, setFile] = useState<File | null>(null)

    const handleFileSelect = (file: File | null) => {
        setFile(file)
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget.closest("form");
        if (!form) return
        const formData = new FormData(form)

        const companyName = formData.get("company-name")
        const jobTitle = formData.get("job-title")
        const jobDescription = formData.get("job-description")
        console.log(companyName, jobTitle, jobDescription)

    }
    return (
        <main className="bg-[url(/images/bg-main.svg)] bg-cover">
            <NavBar/>


            <section className="main-section">
                <div className="page-heading py-16">
                    <h1>Smart feedback for your dream job</h1>
                    {isProcessing ? (
                        <>
                            <h2>{statusText}</h2>
                            <img src="/images/resume-scan.gif" alt="icon" className="w-full"/>
                        </>
                    ) : (
                        <h2>Drop your resume for an ATS score and improvment</h2>
                    )}

                    {!isProcessing && (
                        <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                            <div className="form-div">
                                <label htmlFor="company-name">Company Name</label>
                                <input type="text" name="company-name" id="company-name"
                                       placeholder="Company Name"/>
                            </div>
                            <div className="form-div">
                                <label htmlFor="job-title">Job Title</label>
                                <input type="text" name="job-title" id="job-title"
                                       placeholder="Job Title"/>
                            </div>
                            <div className="form-div">
                                <label htmlFor="job-description">Job Description</label>
                                <textarea rows={5} name="job-description" id="job-description"/>
                            </div>
                            <div className="form-div">
                                <label htmlFor="uploader">Uploader</label>
                                <FileUploader onFileSelect={handleFileSelect}/>
                            </div>
                            <button type="submit" className="primary-button">Analyze Resume</button>
                        </form>
                    )}
                </div>
            </section>
        </main>
    )
}
export default Upload
