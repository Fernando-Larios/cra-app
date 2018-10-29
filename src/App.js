import React, { Component } from "react";
import { Flex, Box, Text } from "rebass";

class App extends Component {
  render() {
    return (
      <div>
        <Flex justifyContent="center">
          <img
            width="100"
            height="75"
            alt=""
            src="https://d33wubrfki0l68.cloudfront.net/bbd480befe9483487d3817be2cb81921c350246b/309d0/images/nerd.png"
          />
        </Flex>
        <Box m={50}>
          <Text
            fontSize={[3, 4, 5]}
            fontWeight="bold"
            color="gray"
            textAlign="center"
          >
            Nerdify
          </Text>
        </Box>
      </div>
    );
  }
}

export default App;
