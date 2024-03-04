##Frontend Developer Challenge - CAMB.AI 
###Write Up 
###Description:
Create an audio pill player where files can be added individually on an audio track, shifted around in a timeline, and that changes the playback. Think about how iMovie works. Make it iMovie just for audio with the ability to create, upload, shift around multiple tracks and dynamically allow for playback on an ever-changing timeline in React on a browser. This challenge is designed to assess your ability to work with dynamic content and user interactions.

###Tech-Stack and Libraries/Packages:
1. ReactJS
2. Material UI
3. Crunker
4. Wavesurfer.JS

###Steps:
• Made an layout of overall dashboard
• Made the “Songs Uploading Form” component with the feature of multiple songs uploading and further adding to our Playlist..
• Made the “Playlist” component for the List of uploaded songs with the features of:
1. Changing the order of songs by drag and drop.
2. Deleting the song from the list.
• Made “Individual Player” component with the features of:
1. Changing songs forward/backward from the Playlist.
2. Moving 10sec ahead/back in the current playing song.
• Made “Combined Player” component with the following features:
1. Concatenating songs into one track using the “Crunker” package.
2. Transforming the concatenated audio source in the form of wave using the “Wavesurfer.js” package.

###Challenges:
• Some features I made on which I had no prior experience, they are:
• Working on the “Drag and Drop”  feature of Playlist, I watched some tutorials on youtube for help.
• Concatenating the songs to make a single track, I could not find any youtube tutorial, thus searched on google and tried multiple packages like Crunker, AudioConcat, WebAPIContext etc. Finally the Crunker documentations helped in resolving this issue.
• Last challenge was importing the waveForm, and their documentation helped.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
