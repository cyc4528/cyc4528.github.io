import "./styles.css";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Switch, FormControl, FormLabel } from "@chakra-ui/react";

import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from "@chakra-ui/react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup
} from "@chakra-ui/react";

export default function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const asdf = async () => {
      const resp = await fetch("https://api.github.com/users/cyc4528");
      const json = await resp.json();
      setData(json);
    };
    asdf();
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Button colorScheme="green">asasdf</Button>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="banana" mb="0">
          혜민이를 싫어하십니까?
        </FormLabel>
        <Switch id="banana" />
      </FormControl>
      <Stat>
        <StatLabel>Collected Fees</StatLabel>
        <StatNumber>£0.00</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Stat>
      <StatGroup>
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Clicked</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
          <Tab>Four</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>하나</p>
          </TabPanel>
          <TabPanel>
            <p>둘</p>
          </TabPanel>
          <TabPanel>
            <p>셋</p>
          </TabPanel>
          <TabPanel>
            <p>넷</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <CircularProgress value={30} size="150px" />
      <CircularProgress value={40} color="green.400">
        <CircularProgressLabel>90%</CircularProgressLabel>
      </CircularProgress>
      <CircularProgress isIndeterminate color="green.300" />
    </>
  );
}
