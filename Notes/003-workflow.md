# Starting node project properly
- npm init: to initialize the project
- the package.json config file is generated
- the scripts section is an object of scripts we can use to run our node project.
- add this:
```json
"scripts": {
    "start": "node app.js", // this is a node recognized key, type 'npm start'
    "start-server": "node app.js" // not node recognied key so we do "npm run start-server"
}
```

# Third party packages
- installing nodemon: **npm i --save-dev nodemon**
    - only development related dependency it is not globally needed, not needed for deployment
    - **--save** is a main dependency
    - *-g* installling nodemon globally allows us to run nodemon without npm prefix.
    - in package.json there is: nodemon: "^18.3", the arrow by the version is used by node to upgrade when the npm install version is run
    - package-lock.json is the same as the package.json but it only saves the initial versions of the packages and not the latest ones.

    # Understanding Errors
    - Types of errors:
        **Syntax errors**
            - types in the code, are automatially thrown and are easy to fix.
            - are statically detected by the Editor
        **Runtime errors**
            - are errors that appear at runtime.
            - eg: put res.write() after res.end()
        **Logical errors**
            - the app runs but behaves incorrectly
# Debugging with VS Code
- Debug > Start debugging > node js
    - set breakpoints
- View > Debug : debug pane opens and the call stack.
- write code in the debug console or call variables
- to restart the debugger after editing code
    Debug > Config > NodeJS > lanch.jsson file, then add
```json
{
    "restart" : true,
    "runtimeExecutable": "nodemon",
    "console": "integratedTerminal",    
}

```
    - then install nodemon globally, starting the debugger will start with nodemon. we can still use the debug window
    - in the debug pane we can change variable values under the variables segment

