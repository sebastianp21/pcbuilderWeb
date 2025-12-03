

### Built With

[![React][React.js]][React-url]



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.


### Installation
## Frontend
1. Clone the repo branch or download it
   ```sh
   git clone https://github.com/sebastianp21/pcbuilderWeb.git
   ```
2. Install NPM packages in project directory (in pcbuilderWeb)
   ```sh
   npm install
   ```
3. To run 
   ```sh
   npm run dev
   ```
4. if doesnt run, install node.js
## Backend
1. Cd to api folder
   ```sh
   cd api
   ```
2. install flask, flask_cors
   ```sh
   pip install flask flask_cors
   ```

4. run api
   ```sh
   python api.py
   ```
5. If doesnt run, install python, pip
   Here is a guide:
   https://blog.miguelgrinberg.com/post/create-a-react-flask-project-in-2025



## Usage

Still in progress
Website the help pick computer components that are compatible with each other

link: https://pcpartpicker.com/list/ 
DB from https://github.com/buildcores/buildcores-open-db#

For ssh and git access comands:
Starting with a ssh key:(setupa, connnect and test) (look for your OS)
https://docs.github.com/en/get-started/git-basics/setting-your-username-in-git
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection

For github keep asking for username and password but no ssh:
https://mkyong.com/git/github-keep-asking-for-username-password-when-git-push/


## FOR MAC USERS
## To run the program once installed, do frontend and backend in different terminals 
## Frontend
1. Go to your project folder (go to the pcbuilderWeb folder)
   ```sh
   cd pcbuilderWeb
   ```
2. To run 
   ```sh
   npm run dev
   ```
## Backend 
### in another terminal
(repeat every time run the backend)(each command is run in the api folder)
1. Go to the api folder(once in pcbuilderWeb folder)
```sh
   cd api
   ```
2. Create enviroment in the api folder(the api folder is in the pcbuilderWeb folder)
```sh
   python3 -m venv venv
   source ./venv/bin/activate
   ```
3. Install flask and flask_cors
   ```sh
   pip install flask flask_cors
   ```
4. Run api.py
   ```sh
   python api.py
   ```