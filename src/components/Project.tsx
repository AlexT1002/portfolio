interface ProjectInfos{
    name: string,
    description: string,
    url: string,
}

function Project({name, description, url}: ProjectInfos){
    return(
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <a>{url}</a>
        </div>
    );
}

export default Project;