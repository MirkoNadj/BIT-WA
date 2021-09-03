import React from 'react';

const AboutContent = (props) => {
    return (
        <div className='container about-us'>
            <div className='row'>
                <h1>{props.title}</h1>
                <p> Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque luctus felis sodales mollis efficitur. Nulla iaculis ornare massa, vitae vulputate risus. Fusce ut nulla molestie, condimentum sapien et, dignissim sem. Suspendisse enim turpis, elementum quis pharetra non, vehicula ut urna. Vivamus iaculis tempus ex, in varius nulla vestibulum ut. Phasellus vehicula ex eget erat semper tempus. Etiam id pulvinar sapien. In venenatis placerat posuere. Fusce venenatis nisi id aliquet interdum. Praesent quis ex laoreet neque gravida laoreet. Ut porttitor efficitur ultricies. Ut nec ex non mauris commodo tristique.
                Duis eleifend nec sapien in rhoncus. Aenean nec lacus nisl. Nunc suscipit eros neque, at cursus mi efficitur ut. Duis viverra justo non urna blandit, et rhoncus mauris ultricies. Suspendisse finibus libero eget faucibus commodo. Nullam maximus erat vitae nibh volutpat tempor. Mauris eget interdum leo. Sed elementum euismod dui, sed aliquet massa accumsan non. Aenean efficitur, massa placerat dignissim tincidunt, metus ligula luctus mi, eget venenatis lacus ex ac sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam ac mauris suscipit, egestas ipsum at, lacinia nisl. Nullam nulla libero, molestie vitae iaculis et, luctus id erat. </p>
                <h3>What we do</h3>
                <p>Etiam consectetur imperdiet nibh, eu tincidunt diam gravida eget. Quisque blandit mattis ante non semper. Suspendisse faucibus lectus nec nibh vestibulum, sed auctor sem ullamcorper. Sed mollis interdum leo. Cras vel lacinia tellus. Pellentesque in pellentesque nulla, vitae pellentesque augue. Etiam pretium placerat facilisis. Aenean mattis et neque eget pretium. Morbi ut erat tristique, interdum turpis ullamcorper, condimentum augue. Maecenas rhoncus purus a est commodo, id viverra massa elementum. Phasellus blandit dictum urna id varius. Morbi lacinia quam dui, vitae congue felis posuere vitae.</p>
            </div>
        </div>
    )
}

export default AboutContent;