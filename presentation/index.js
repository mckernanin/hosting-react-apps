// Import React
import React from "react";

// Import Spectacle Core tags
import {
  // BlockQuote,
  // Cite,
  Deck,
  Heading,
  ListItem,
  List,
  // Quote,
  Slide,
  CodePane,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#0a60ac",
    whitish: "#CECECE"
  },
  {
    primary: "Fira Code",
    secondary: "Fira Code"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit lineHeight={1} textColor="whitish">
            Hosting React Apps
          </Heading>
          <br />
          <Text margin="10px 0 0" textColor="whitish" size={2} bold>
            with Kevin McKernan
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit lineHeight={1} textColor="whitish">
            Who is this guy?
          </Heading>
          <br />
          <List textColor="whitish">
            <ListItem>Senior Front End Engineer @ AirDNA</ListItem>
            <ListItem>Co-Organizer @ React Denver</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit lineHeight={1} textColor="whitish">
            What are we talking about?
          </Heading>
          <br />
          <List textColor="whitish">
            <ListItem>What makes up a React app?</ListItem>
            <ListItem>What do I need to host it?</ListItem>
            <ListItem>What are some different options?</ListItem>
            <ListItem>How to deploy this thing?</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit lineHeight={1} textColor="whitish">
            What makes up a React app?
          </Heading>
          <br />
          <CodePane
            textFont="Fira Code"
            size={1}
            source={`
          ├── [ 160]  static
          │   ├── [ 128]  css
          │   │   ├── [ 13K]  main.51ffbe60.css
          │   │   └── [ 18K]  main.51ffbe60.css.map
          │   ├── [ 128]  js
          │   │   ├── [717K]  main.ea42fe6b.js
          │   │   └── [6.2M]  main.ea42fe6b.js.map
          │   └── [  96]  media
          │       └── [ 388]  downarrow.c26c0e33.svg
          ├── [ 267]  asset-manifest.json
          ├── [3.8K]  favicon.ico
          ├── [1.1K]  index.html
          ├── [ 298]  manifest.json
          └── [3.2K]  service-worker.js

          4 directories, 10 files
          `}
          />
        </Slide>
      </Deck>
    );
  }
}
