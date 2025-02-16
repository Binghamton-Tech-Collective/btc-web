import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { Connect } from "../components/Connect";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projects = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        projects.sort((a, b) => a.priority - b.priority);
        setProjects(projects);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the projects: ", error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <section className="min-h-screen flex flex-col justify-start items-center bg-[url(/btc_element.png)] bg-contain bg-no-repeat bg-[#F5F5F5] pt-20 md:pt-12">
        <div className="flex flex-col gap-4 items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/btc_logo.png" alt="btc_logo" className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-6 items-center mx-5">
            <h2 className="text-[#212529] text-center md:text-5xl text-4xl font-bold font-inter mt-10 md:mt-0">
              Digital products made <br />
              <span className="text-btc">by students, for students</span>
            </h2>
            <p className="text-[#212529] text-center md:text-lg text-base font-normal font-inter leading-[30px] max-w-[700px]">
              The Binghamton Tech Collective was founded in 2023 based on the
              lack of cross-functional team-based product opportunities at
              Binghamton University.
            </p>
          </div>
        </div>
      </section>

      {/* Render projects dynamically */}
      {loading ? (
        <section className="min-h-screen flex justify-center items-center">
          <h1 className="text-[#212529] text-center md:text-4xl text-3xl font-bold font-inter">
            Loading projects...
          </h1>
        </section>
      ) : projects.length > 0 ? (
        projects.map((project, index) => {
          // Convert tech stack string to array
          const techStackArray = project.techStack
            ?.split(",")
            .map((stack) => stack.trim())
            .filter(Boolean);

          return (
            <section
              key={project.id}
              className={`min-h-screen bg-white flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } justify-center items-center gap-20 md:px-20 px-5`}
            >
              <div className="flex flex-col md:gap-10 gap-5">
                {project.images?.length > 0 && (
                  <img
                    src={project.images[0]}
                    alt={`${project.title}_logo`}
                    className="w-1/6 h-auto"
                  />
                )}
                <h1 className="text-[#212529] text-left md:text-5xl text-4xl font-bold font-inter md:mt-10 mt-5 md:mt-0">
                  {project.title}
                </h1>
                <p className="text-[#212529] text-left md:text-lg text-base font-normal font-inter leading-[30px] max-w-[500px]">
                  {project.description}
                </p>

                {/* Tech Stack Chips */}
                {techStackArray?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {techStackArray.map((stack, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm font-semibold text-white bg-btc rounded-full"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                )}

                {/* Project Links */}
                <div className="flex gap-4 mt-4">
                  {project.projectUrls?.[0] && (
                    <a
                      href={project.projectUrls[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#212529] hover:text-btc transition-all"
                    >
                      <FaGithub className="text-2xl" />
                      <span className="hidden md:inline">GitHub</span>
                    </a>
                  )}
                  {project.appUrl && (
                    <a
                      href={project.appUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#212529] hover:text-btc transition-all"
                    >
                      <FaExternalLinkAlt className="text-2xl" />
                      <span className="hidden md:inline">Website</span>
                    </a>
                  )}
                  {project.figmaUrl && (
                    <a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#212529] hover:text-btc transition-all"
                    >
                      <SiFigma className="text-2xl" />
                      <span className="hidden md:inline">Figma</span>
                    </a>
                  )}
                </div>
              </div>
              {project.images?.length > 1 && (
                <div className="w-full md:w-1/2">
                  <img
                    src={project.images[1]}
                    alt={`${project.title}_display`}
                  />
                </div>
              )}
            </section>
          );
        })
      ) : (
        <section className="min-h-screen flex justify-center items-center">
          <h1 className="text-[#212529] text-center md:text-5xl text-4xl font-bold font-inter mt-10 md:mt-0">
            More Coming Soon ...
          </h1>
        </section>
      )}

      <Connect />
    </div>
  );
};
