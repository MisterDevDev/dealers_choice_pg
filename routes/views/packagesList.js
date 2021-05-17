const html = require("html-template-tag");

module.exports = (data) => html`<!DOCTYPE html>
  <html>
  <head>
    <title>Popular NPM Packages</title>
    <link rel='stylesheet' href='/style.css' />
  </head>
  <body>
    <div>
        <ul class= "packageList">
            <li><header class="title">Some Popular NPM Packages</header></li>
            ${data.map(data => html`
            <li>
                <a href='/packages/${data.id}'>${data.name}</a>
            </li>`
            )}
          </ul>
        </div>
    </div>
  </body>
  </html>`