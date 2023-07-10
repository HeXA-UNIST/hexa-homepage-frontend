import Project from "@models/project/Project";
import "@css/activities/ProjectCard.css";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <img src={project.thumbnailUrl} alt="thumbnailUrl" />
      <div className="project-card__content">
        <div className="project-card__content__title">{project.title}</div>
        <div className="project-card__content__discription">
          시작일 : {project.startDate} 종료일 : {project.endDate ?? "진행중"}
        </div>
        <div className="project-card__content__tags">
          {project.techStackList.map((tag) => (
            <div className="project-card__content__tag-item">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
