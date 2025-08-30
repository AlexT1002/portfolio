function MainSection(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
            <div className="text-white">
                <h1 className="text-6xl" style={{ fontFamily: "Asimovian, sans-serif" }}>AlexT1002</h1>
            </div>
            <div className="text-gray-400 mt-2">
                <h3 className="text-2xl" style={{ fontFamily: "Bebas Neue, sans-serif" }}>A german developer</h3>
            </div>
            <div className="flex gap-2.5 mt-5">
                <img className="w-12 h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java-Icon"/>
                <img className="w-12 h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="Javascript-Icon"/>
                <img className="w-12 h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="Typescript-Icon"/>
                <img className="w-12 h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React-Icon"/>
                <img className="w-12 h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" alt="Intellij-Icon"/>
                <img className="w-12 h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webstorm/webstorm-original.svg" alt="Webstorm-Icon"/>
            </div>
        </div>
    );
}

export default MainSection;