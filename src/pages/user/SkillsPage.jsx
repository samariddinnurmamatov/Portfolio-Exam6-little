import BallCanvas from "../../components/canvas/Ball";
import { technologies } from "../../const";
import { SectionWrapper } from "../../hoc";

const SkillsPage = () => {
  return (
    <>
    <div className="bal">
      {technologies.map((technologies) => (
        <div key={technologies.name}>
          <BallCanvas icon={technologies.icon} />
        </div>
      ))}
    </div>
      
    </>
  );
}

export default SectionWrapper( SkillsPage, "" );