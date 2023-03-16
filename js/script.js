const projets_list = [
    {
        "name" : "Path Optimizer",
        "description" : "lorem",
        "github_url" : "github.com",
        "tags_techno" : ["React.js", "TypeScript"]
    }
]

const add_project = (projets_list) =>{

    let projetSection = document.getElementById("project")
    console.log(projetSection)

    let i = 1
    projets_list.forEach(projet => {
        
        let section = document.createElement("section")
        section.id = `projet-${i}`
        i ++

        let h1 = document.createElement("h1")
        h1.textContent = projet.name
        section.appendChild(h1)

        let p = document.createElement("p")
        p.textContent = projet.description
        section.appendChild(p)

        let a = document.createElement("a")
        a.textContent = "Voir le projet"
        a.href = projet.github_url
        section.appendChild(a)

        let tag_div = document.createElement("div")

        projet.tags_techno.forEach(tag => {
            let span = document.createElement("span")
            span.className = "tag"
            span.textContent = tag
            tag_div.appendChild(span)
        })
        section.appendChild(tag_div)

        console.log(section)

        projetSection.appendChild(section)
    });
}


add_project(projets_list)