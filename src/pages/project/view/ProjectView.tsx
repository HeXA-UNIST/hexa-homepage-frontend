import { observer } from "mobx-react";
import { ProjectViewModel } from "@pages/project/vm/ProjectViewModel";

import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

import SubMain from "@components/subMain/SubMain";
import Project from "@models/project/Project";

function ProjectItem({ projectData }: { projectData: Project }) {
    return (
        <a
            href="home"
            className="flex flex-col min-w-min w-[22rem] h-96 bg-neutral-800 rounded-2xl p-7 text-left font-bold"
        >
            <div className="flex justify-center items-center bg-emerald-500 rounded-xl h-40 mb-4">
                <img className="" src={projectData.thumbnailUrl} alt="" />
            </div>
            <div className="text-white text-3xl mb-3">{projectData.title}</div>
            <div className="text-zinc-500 text-xl">{projectData.content}</div>
        </a>
    );
}

function ProjectView({ viewModel }: { viewModel: ProjectViewModel }) {
    return (
        <div>
            <Header />
            <SubMain
                shownTitle="프로젝트"
                description="HeXA는, UNIST 학우들을 위해 다양한 서비스를 제공합니다"
            />
            {viewModel.projectsQueryResult.projects.map((project) => (
                <ProjectItem projectData={project} />
            ))}
            <Footer />
        </div>
    );
}

export default observer(ProjectView);
