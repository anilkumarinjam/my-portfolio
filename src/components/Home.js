import { motion } from 'framer-motion';
import Retrogrid from "./magicui/Retrogrid";
import ProfileSection from './ProfileSection.js';
import SkillsSection from './SkillsSection.js';
import '../css/Home.css';

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 2 }}>
      
      <div className="">
        <Retrogrid />
        <ProfileSection />
      </div>

      <div className="">
        <SkillsSection />
      </div>
    </motion.div>
  );
};

export default Home;
