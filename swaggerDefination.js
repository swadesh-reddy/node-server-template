const swaggerJsdoc = require('swagger-jsdoc');
const projectInfo = require('./package.json');

module.exports = (appEnv, basePath, schemes) => {
    const host = 'localhost:3000';
    console.log(host)
    const jsdocOptions = {
        swaggerDefinition: {
            // All of the information in the 'info' object is derived from package.json. It is best
            // practice to keep your package.json up-to-date, especially when it comes to versioning.
            info: {
                title: projectInfo.name,
                version: projectInfo.version,
                description: projectInfo.description,
                'x-ibm-name': projectInfo.name,
            },
            externalDocs: {
                description: "homepage",
                url: projectInfo.homepage
            },
            host,
            basePath,
            schemes,
            "x-ibm-configuration": {
                "testable": true,
                "enforced": true,
                "cors": {
                    "enabled": true
                },
                // Default APIC assembly script will make APIC forward requests to this API as-is
                "assembly": {
                    "execute": [
                        {
                            "invoke": {
                                "title": "invoke",
                                "timeout": 60,
                                "verb": "keep",
                                "cache-response": "protocol",
                                "cache-ttl": 900,
                                "stop-on-error": [],
                                "version": "1.0.0",
                                "target-url": "https://$(targetUrl)$(request.path)"
                            }
                        }
                    ],
                    "catch": []
                },
                "phase": "realized",
                "properties": {
                    "targetUrl": {
                        "value": host,
                        "description": "",
                        "encoded": false
                    }
                }
            }
        },
        // List of files to be processes. You can also set globs './routes/*.js'
        // This is where the paths and definitions objects will be programatically added
        // to the Swagger document based on the JSDOC comments you add in your routes.
        apis: ['./routes/*.js'],
    };

    const specs = swaggerJsdoc(jsdocOptions);

    return specs
}