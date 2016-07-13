This is WIP and just meant as a bit of boiler plate including react native, redux and 
immutable in one place so that I get started quicker and learn about how these 
technologies interact.

If you intend to use this follow these instructions to get going:

1. install node if you don't have it for its package manager npm
2. from the command line run: npm install -g react-native-cli
3. initialise your react native project with your app name by going to the directory 
    you want to installing it on the command line and running
    react-native init [appName]
    this will create the project structure
4. clone this into the same directory overwriting files where necessary
    git clone https://github.com/paulsmith998/react-native-redux-boiler-plate.git
5. run npm install to pick up the extra packages (redux, immutable)
6. to install on an emulator load prestart it as the run command expects either a device
    or emulator to be present and wont auto start it
7. again on the command line from the root of the project run 
    react-native run-[platform] ie run-android

The boiler plate doesn't do much it loads a component using a reducer to set a state variable
printing 'all' to screen. But it is meant to get me off the ground with learning to develop 
using this framework coming from an angular background.

To learn about [Redux] (https://github.com/reactjs/redux) and [Immutable] (https://facebook.github.io/immutable-js/) 
i am obviously still learning this myself :D