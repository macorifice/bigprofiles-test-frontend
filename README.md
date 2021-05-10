# Big Profiles API performance, usage, and errors

[![macorifice - bigprofiles-test-frontend](https://img.shields.io/static/v1?label=macorifice&message=bigprofiles-test-frontend&color=blue&logo=github)](https://github.com/macorifice/bigprofiles-test-frontend) [![Angular](https://img.shields.io/badge/Angular-~11.2.12-red)](https://angular.io/guide/releases) [![ExpressJS](https://img.shields.io/badge/ExpressJS-~4.16.1-yellow)](https://expressjs.com/) [![Mongoose](https://img.shields.io/badge/Mongoose-~^5.12.7-darkred)](https://mongoosejs.com/) [![ChartJS](https://img.shields.io/badge/ChartJS-~^2.9.4-lightblue)](https://www.chartjs.org/)

This project allows you to analyze your API.

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed the latest version of npm or yarn
* You have installed a version of MongoDB on your local machine or you need to update the `.env` file inside the root folder of the backend
* If you want to put your database credentials you need to update the `docker.env` file at ` bin/init/src/docker.env` this file allows you to check the connection at startup on your MongoDB instance
## Installation

To install this project, follow these steps:

Clone
```
git clone https://github.com/macorifice/bigprofiles-test-frontend
```

Spin up the containers

* Launching the `start.sh` file at `bin/`

To use this project, follow these steps:

After all frontend / backend / mongodb instances are in place, you can start the data import process

* Launching the `import_data.sh` file at `bin/`

* Finally go to `http://localhost:4200` to see your stats

## Contributing to the project
To contribute to this project, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

If you want to contribute follow this guide : https://github.com/macorifice/first-contributions
## Contact

If you want to contact me you can reach me at diceccostefano87@gmail.com

## License

This project uses the following license: 

MIT License

Copyright (c) 2021 Stefano Di Cecco

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.