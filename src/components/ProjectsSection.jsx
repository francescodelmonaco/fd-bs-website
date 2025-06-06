// images
import KickShopScreen from "/img/kick-shop-screen.webp"
import RandomMailGeneratorScreen from "/img/random-mail-generator-screen.webp"
import BooRoadScreen from "/img/booroad-screen.webp"
import TaskManager from "/img/task-manager-screen.webp"

// components
import ProjectCard from "./ProjectCard"

export default function ProjectsSection() {
    return (
        <div className="pb-5">
            <h2 className="text-center pb-2">Progetti</h2>

            <div className="d-flex justify-content-center gap-3 flex-column flex-md-wrap">
                {/* <ProjectCard
                    name={"React"}
                    image={KickShopScreen}
                    year={2025}
                    link={"https://github.com/francescodelmonaco/kick-shop"}
                /> */}

                <ProjectCard
                    name={"Kick Shop"}
                    image={KickShopScreen}
                    year={2025}
                    link={"https://github.com/francescodelmonaco/kick-shop"}
                />

                <ProjectCard
                    name={"BooRoad"}
                    image={BooRoadScreen}
                    year={2025}
                    link={"https://github.com/francescodelmonaco/BooRoad"}
                />

                <ProjectCard
                    name={"Task manager"}
                    image={TaskManager}
                    year={2025}
                    link={"https://github.com/francescodelmonaco/ex-react-task-manager"}
                />

                <ProjectCard
                    name={"Random mail generator"}
                    image={RandomMailGeneratorScreen}
                    year={2025}
                    link={"https://github.com/francescodelmonaco/js-email-list"}
                />
            </div>
        </div>
    )
}