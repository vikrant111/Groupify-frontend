export function HTML_WRAPPER(html: any, manifestJSON: any){
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            ${Object.keys(manifestJSON).map((key) => `<script src="${manifestJSON[key]}" defer></script>`)}
        </head>
        <body>
            <div id="root">${html}</div>
        </body>
        </html>
    `
}