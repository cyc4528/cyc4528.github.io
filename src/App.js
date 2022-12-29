import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Switch, FormControl, FormLabel } from "@chakra-ui/react";
import './App.css'


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
  StatGroup,
  Box,
  Image,
  Text,
  Card,
  CardHeader,
  Flex,
  Avatar,
  Heading,
  IconButton,
  CardBody,
  CardFooter,

} from "@chakra-ui/react";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { Step } from "@mui/material";

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
    
    <><Text fontSize={'5xl'} id = 'header'>20429 최예철</Text>
    <Text fontSize={'3xl'} id = 'header'>어렸을 때</Text>
    <Box boxSize='400px'>
  <img src={require('./picture1.jpg')} />
</Box>
<Box boxSize='400px'>
  <img src={require('./picture2.jpg')} />
</Box>

    
<Text fontSize={'5xl'} id = 'header'>배우고 싶은 운동!</Text>
<Image
    boxSize='350px'
    objectFit='cover'
    src='http://image.newsis.com/2013/05/18/NISI20130518_0008193024_web.jpg'
    alt='Dan Abramov'

    
  />

  
      <Button  colorScheme="green" size='md' href="https://www.youtube.com/@Brand_story" width="400px" height="400px">좋아하는 유튜버-클릭</Button> 
      

      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="banana" mb="0">
          동탄중앙고인가요?
        </FormLabel>
        <Switch id="banana" />
      </FormControl>
      <Stat>
        <StatLabel>그냥 만들어본 거</StatLabel>
        <StatNumber>$10000.00</StatNumber>
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

      <Text fontSize={'3xl'} id = 'header'>좋아하는 음식!</Text>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
          <Tab>Four</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
          <Box boxSize='500px'>
  <Image src='https://cdn.huffingtonpost.kr/news/photo/201811/77299_146809.jpeg' />
</Box>
          </TabPanel>
          <TabPanel>
          <Box boxSize='500px'>
          <Image src='https://mashija.com/wp-content/uploads/2022/02/%EC%A0%9C%EB%AA%A9%EC%9D%84-%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94_-001-1.png' />
          </Box>
          </TabPanel>
          <TabPanel>
          <Box boxSize='500px'>
          <Image src='https://recipe1.ezmember.co.kr/cache/recipe/2018/01/15/cf840c6080beb637bb1cd714dac3803a1.jpg' />
          </Box>
          </TabPanel>
          <TabPanel>
          <Box boxSize='500px'>
          <Image src='https://recipe1.ezmember.co.kr/cache/recipe/2020/11/12/35513ffcea33a30da59d4a8394e06d8b1.jpg' />
          </Box>
          </TabPanel>
        </TabPanels>
        <Text fontSize={'3xl'} id = 'header'>최근에 읽은 책!!</Text>
        <Image src='https://shopping-phinf.pstatic.net/main_3244570/32445709801.20220527053923.jpg?type=w300' />

        <Text fontSize={'3xl'} id = 'header'>잘 웃고 웃는 게 예쁜 사람 좋아함!!</Text>
  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjKMk_f4ChEyIW7LEsIxLf5OAxfPca0eB715dvcHuAEGd9qItO-MP0PHNX6cqZcY2LZ0&usqp=CAU' />


  <Text fontSize={'3xl'} id = 'header'>최근에 많이 들은 음악!!</Text>
  <Text fontSize={'2xl'} id = 'header'>볼빨간사춘기-심술</Text>
  <Box boxSize='250px'>
  <Image src='https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/812/214/80812214_1461230485395_1_600x600.JPG/dims/resize/Q_80,0' />
</Box>


  <Text fontSize={'3xl'} id = 'header'>있어 보여서 넣어 봄!!</Text>
      </Tabs>
      <CircularProgress value={30} size="150px" />
      <CircularProgress value={40} color="green.400">
        <CircularProgressLabel>90%</CircularProgressLabel>
      </CircularProgress>
      <CircularProgress isIndeterminate color="green.300" />
      
      <Text fontSize={'2xl'} id = 'header'>동탄중앙고 클릭!</Text>
      <Tooltip title="동탄중앙고등학교">
    </Tooltip>
    <Button icon={<SearchOutlined />}href="https://dtja.hs.kr/">Search</Button>
    <br />
    <br />
  
    <Card maxW='md'>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='이석훈' src='https://image.bugsm.co.kr/artist/images/1000/800433/80043328.jpg' />

        <Box>
          <Heading size='sm'>이석훈</Heading>
          <Text>좋아하는 가수</Text>
        </Box>
      </Flex>
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
      목소리가 진짜 좋고 노래도 잘하고 잘생김!!
    </Text>
  </CardBody>
  <Image
    objectFit='cover'
    src='http://cdn.bosa.co.kr/news/photo/202112/2165677_197142_5132.jpg'
    alt='Chakra UI'
  />

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    
  </CardFooter>
</Card>
    </>

    
  );
}

