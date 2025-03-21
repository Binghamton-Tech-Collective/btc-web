import { motion } from "framer-motion";
import { TeamMember } from "../components/TeamMember";
import { Connect } from "../components/Connect";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";


export const Team = () => {

  const [eboard, setEboard] = useState([]);
  const [pm, setPm] = useState([]);
  const [swe, setSwe] = useState([]);
  const [uiux, setUiux] = useState([]);
  const [loading, setLoading] = useState(true);


  // Fetching the Team Members and adding the to different category from firebase

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "teamMembers"));
        const teamMembers = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Filter team members based on roles
        const eboardMembers = teamMembers
          .filter((member) => member.isEboardMember)
          .sort((a, b) => a.priority - b.priority || a.firstName.localeCompare(b.firstName));

        const pmMembers = teamMembers
          .filter((member) => member.isProductManager)
          .sort((a, b) => a.priority - b.priority || a.firstName.localeCompare(b.firstName));

        const sweMembers = teamMembers
          .filter((member) => member.isSoftwareEngineer)
          .sort((a, b) => a.priority - b.priority || a.firstName.localeCompare(b.firstName));

        const uiuxMembers = teamMembers
          .filter((member) => member.isUIDesigner)
          .sort((a, b) => a.priority - b.priority || a.firstName.localeCompare(b.firstName));

        setEboard(eboardMembers);
        setPm(pmMembers);
        setSwe(sweMembers);
        setUiux(uiuxMembers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team members:", error);
        setLoading(false);
      }
    };
    fetchTeamData();
  }, []);

  if (loading) return <p>Loading team members...</p>;

  return (
    <div>
      <section
        className="min-h-screen w-full flex flex-col md:flex-row justify-center items-center gap-8 md:px-20 px-10 bg-[#F5F5F5] bg-[url(/btc_background.png)] bg-no-repeat bg-[length:30%_auto] bg-[left_bottom_5rem] bg-left py:10 md:py-20"
        id="about"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6 md:w-1/2 w-full md:order-1 order-2"
        >
          <h2 className="text-[#212529] md:text-left text-center md:text-5xl text-4xl font-bold font-inter mt-10 md:mt-0">
            Meet the BTC Team <br />
          </h2>
          <p className="text-[#212529] md:text-left text-center md:text-lg text-base font-normal font-inter max-w-[600px]">
            Behind every great product is a team of passionate innovators, problem-solvers, and collaborators. Our diverse group of students brings together expertise in engineering, design, and product management to create solutions that make an impact. We’re driven by curiosity, fueled by teamwork, and committed to pushing the boundaries of what’s possible. Get to know the faces behind the work!
          </p>
          <button className="bg-btc mb-10 md:mb-0 hover:bg-btcdark text-white py-4 px-4 rounded-lg transition-colors items-center justify-center gap-2 md:w-1/4 w-1/2 md:mx-0 mx-auto font-bold">
            Join Now <i className="fa-solid fa-arrow-right text-sm"></i>
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:w-[735px] md:h-[547px] w-[300px] h-[250px] md:order-2 order-1 mt-10 md:mt-0 flex items-center justify-center"
        >
          <img src="/IMG_3287.jpg" alt="BTC Team Image" className="w-full h-full object-contain" />
        </motion.div> 
      </section>
      <TeamMember title={"Executive Board"} position={eboard} />
      <TeamMember title={"Product Managers"} position={pm} />
      <TeamMember title={"Software Engineers"} position={swe} />
      <TeamMember title={"UX/UI Designers"} position={uiux} />
      <Connect />
    </div>
  );
};
