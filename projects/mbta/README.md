# MBTA Data
With project overlays MBTA data onto a MapBox map. By selecting a Bus, or Train from the Action button users will see all current vehicles on that route and it's current capacity. 

## Getting Started
The steps below will get you up and running MBTA DATA locally for testing and development

### Prerequisites
What you will need first to get started
```
npm install -g npx
```

Sign up for https://www.mapbox.com and create a developer API Key

### Install
Download to your local machine

Place key in ./js/config.js as shown
```javascript
const mapAccessToken = API_KEY
export { mapAccessToken }
```

Uncomment below code in ./js/app.js
```
/*
  initMap();
  setRouteID(1);
  run();
*/
```
### Run
Navigate to mbta folder and spin up a local session
```
npx http-server
```
In your web browser navigate to your localhost root

#### Roadmap
- Build out Popups
- Select Route
- Clear Map
- Add user location
- ETA
- Commuter Rail Status

### License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE