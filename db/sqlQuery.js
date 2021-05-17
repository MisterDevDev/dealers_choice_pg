const seed =`
    DROP TABLE IF EXISTS packages;
    CREATE TABLE packages (
        id SERIAL PRIMARY KEY,
        name VARCHAR (100) NOT NULL,
        description VARCHAR (255) NOT NULL,
        weekly_downloads VARCHAR (100) NOT NULL,
        num_dependencies INTEGER NOT NULL
        );
    INSERT INTO packages (name, description, weekly_downloads, num_dependencies) VALUES ('React', 'used to create user interfaces', '10,965,933', 2);
    INSERT INTO packages (name, description, weekly_downloads, num_dependencies) VALUES ('prop-types', 'documents intended types of React properties passed to components', '11,221,263', 3);
    INSERT INTO packages (name, description, weekly_downloads, num_dependencies) VALUES ('Movement', 'time manipulation library', '17,736,573', 0);
    INSERT INTO packages (name, description, weekly_downloads, num_dependencies) VALUES ('Express', 'webframe for node', '17,128,152', 30);
    INSERT INTO packages (name, description, weekly_downloads, num_dependencies) VALUES ('Lodash', 'utility library with methods for dealing with arrays, numbers, objects, etc.', '44,617,034', 0);
    INSERT INTO packages (name, description, weekly_downloads, num_dependencies) VALUES ('Async', 'provides functions for dealing with asynchronous Javascript', '41,105,929', 0);
    INSERT INTO packages (name, description, weekly_downloads, num_dependencies) VALUES ('Chalk', 'used to style terminal strings', '94,153,123', 2);
    INSERT INTO packages (name, description, weekly_downloads, num_dependencies) VALUES ('Commander', 'lightweight solution for creating CLI apps', '62,932,876', 0);
    INSERT INTO packages (name, description, weekly_downloads, num_dependencies) VALUES ('Debug', 'debugging utility modeled after the node.js debugging model', '109,265,683', 1);
    `;

const baseQuery = `
    SELECT * FROM packages;
` 

const addPackage = `
    INSERT INTO packages (name, description, weekly_downloads, num_dependencies) VALUES ($1, $2, $3, $4) RETURNING *;
`;

const selectPackage = `
    SELECT * FROM packages as p WHERE p.id = $1
`
module.exports = {seed, baseQuery, addPackage, selectPackage};