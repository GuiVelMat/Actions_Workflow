const fs = require("fs");
const core = require("@actions/core");

try {
    // Obtener el resultado de los tests
    const outcome = core.getInput("outcome");

    // Leer el archivo README.md
    const readmePath = "./README.md";
    let readmeContent = fs.readFileSync(readmePath, "utf8");

    // Badge según el resultado
    let badge;
    if (outcome.includes("failure")) {
        badge = "![Test Result](https://img.shields.io/badge/test-failure-red)";
    } else {
        badge = "![Test Result](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)";
    }

    // Reemplazar o añadir el badge después del texto 'RESULTAT DELS ÚLTIMS TESTS'
    const badgePlaceholder = "Resultado del último test: ";
    const regex = new RegExp(`${badgePlaceholder}(.*)`, "s");

    if (regex.test(readmeContent)) {
        readmeContent = readmeContent.replace(regex, `${badgePlaceholder}\n\n${badge}`);
    } else {
        readmeContent += `\n\n${badgePlaceholder}\n\n${badge}`;
    }

    // Guardar cambios en el README.md
    fs.writeFileSync(readmePath, readmeContent, "utf8");

    console.log("README.md actualizado con el badge.");
} catch (error) {
    core.setFailed(`Error actualizando el README.md: ${error.message}`);
}
