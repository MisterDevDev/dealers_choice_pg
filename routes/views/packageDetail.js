const html = require("html-template-tag");

module.exports = (data) =>`<!DOCTYPE html>
        <html>
            <head>
                <link rel='stylesheet' href='/style.css' />
            </head>
            <body>
                <table class='detail-sheet'>
                    <tr>
                        <th>${data.name}'s Detail Sheet</th>
                    </tr>
                    <tr>
                        <td>ID #</td>
                        <td>${data.id}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>${data.description}</td>
                    </tr>                    
                    <tr>
                        <td>Weekly Downloads (as of 5/16/21)</td>
                        <td>${data.weekly_downloads}</td>
                    </tr>                    
                    <tr>
                        <td>Main Weapon</td>
                        <td>${data.num_dependencies}</td>
                    </tr>
                </table>
                <div class = 'return-button'>
                    <h3><a href="/">Home Page</a></h3>
                </div>
            </body>`