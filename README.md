## Available Scripts

[Here's a live example](https://react-hooks-demo-ttpzyqpdhh.now.sh/)

OR 

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Notes

The lights are the boxes with green, yellow and red circles.

The cars are the dark gray circles.

I approached this by building one component at a time. It worked out fairly well with just one bigger refactor.

I started with one traffic light and the state that it required. Then I added a lane and got it adding cars on an interval. This is when I needed the traffic light to talk to the lane that corresponded to it. I decided to use context because I needed to get the state of the light to both the lights and the streets. I decided to use an object with the keys north, east, south, and west to account for each lane facing each of those ways.

The hardest part for me was getting the lights and lanes to point the right direction. This is where most of the code duplication is and that is what I would refactor in the future if I was to spend more time on this. Each of the lights/lanes are directional and need slightly different css. All the logic is the same though, depending on the direction they are facing.