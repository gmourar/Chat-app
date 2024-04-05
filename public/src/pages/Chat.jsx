
import React,  { useState , } from 'react'
import styled from 'styled-components'
import { Link , useNavigate} from 'react-router-dom'
import {ToastContainer , toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import { registerRoute } from '../utils/APIroutes'
import backgroundImage from '../assets/background.jpg'
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Box, Center, NativeBaseProvider , View , HStack, ScrollView, FlatList , Text , Avatar, VStack, Button, Input} from 'native-base'
import { FaBars } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { RiEmojiStickerLine } from "react-icons/ri";

function Chat({route}) {

  const [show, setShow] = useState(false); 
  const [selectedName, setSelectedName] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate =  useNavigate();
  const loginPage = () =>{
    navigate("/login");
}

const DATA = [
  {
    id:'1' ,
    nome:'Gabriel' , 
    mensagem: 'lorem 1'
  } ,
  {
    id:'2' ,
    nome:'Moves' , 
    mensagem: 'lorem 2'
  },
  {
    id:'3' ,
    nome:'Braga' , 
    mensagem: 'lorem 3'
  } ,
  {
    id:'4' ,
    nome:'Miguel' , 
    mensagem: 'lorem 4'
  } ,
  {
    id:'5' ,
    nome:'User 5' , 
    mensagem: 'lorem 5'
  },
  {
    id:'6' ,
    nome:'User 6' , 
    mensagem: 'lorem 6'
  },
  {
    id:'7' ,
    nome:'User 7' , 
    mensagem: 'lorem 7'
  },
  {
    id:'8' ,
    nome:'User 8' , 
    mensagem: 'lorem 8'
  },
  {
    id:'9' ,
    nome:'User 9' , 
    mensagem: 'lorem 9'
  },
  {
    id:'10' ,
    nome:'User 10' , 
    mensagem: 'lorem 10'
  }
]


const backtoLogin = () =>{
  navigate("/login")
}
  return (
    <>
<NativeBaseProvider>
     <Header>
      <div className="brand">
        <h1>
          slacky
         </h1>
      </div>
    </Header> 

    <View  style={{ height: '100vh', width: '100vw', backgroundColor: '#131324', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <View display={'flex'} w={'90%'} h={'90%'} justifyContent={'center'} alignItems={'center'}>
        <Box w={'100%'} height={'90%'} bg={"#202124"}  borderRadius={50} shadow={8}  >
          <HStack w={'100%'} h={'100%'} margin={'1%'}>
            <Box bg={'#18181a'} h={'95%'} w={'30%'} borderRadius={50}>
              <Box w={'100%'} h={'18%'} borderBottomColor={'gray.700'} borderBottomWidth={4} flexDirection={'row'} alignItems={'center'}>
               <Box w={'15%'} justifyContent={'center'} ml={4}>
                    <Avatar size="lg" bg="gray.500" mr={4} />
                </Box>
                <Text color={'white'} fontWeight={'bold'} ml={2} fontSize={16}>
                 Username
                </Text>
              </Box>
              <ScrollView >
              <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <Button bg={'#18181a'} w={'100%'} h={'100%'} key={item.id} p={6} borderTopWidth={1} borderTopColor="gray.700" justifyContent={'flex-start'} onPress={ () => setSelectedName(item.nome)} colorScheme={'purple'} >
                  <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                    <Avatar size="md" bg="gray.500" />
                    <Box ml={4}>
                      <VStack justifyContent="flex-start">
                        <Text color="white">{item.nome}</Text>
                        <Text color="gray.400">Mensagem: {item.mensagem}</Text>
                      </VStack>
                    </Box>
                  </Box>
                </Button>
                )}
                />


              </ScrollView>
            </Box>

            <Box bg={'#18181a'} h={'95%'} w={'67%'} marginLeft={'1%'} borderRadius={50}>
            {selectedName && (
              <Box   h={'100%'}  w={'100%'} alignItems={'center'}>
                <Box justifyContent={'space-between'} flexDirection={'row'} h={'15%'} mt={4} borderBottomColor={'gray.700'} borderBottomWidth={2} width={'95%'} alignItems={'center'}>  
                <Avatar size="lg" bg="gray.500" ml={4}/>
                <Text color={'white'} fontSize={30} ml={4}>
                  {selectedName}
                </Text>
                <Box ml={30}>
                  <Button bg={'#18181a'} colorScheme={'#18181a'} size={10}>
                    <CiSettings color='white' size={35}/>
                  </Button>
                  </Box>
                  </Box>
                    <Box w={'95%'} marginTop={'58%'} h={'10%'}  justifyContent={'center'} flexDirection={'row'}>
                      
                    <Input colorScheme={'purple'} placeholder='Mensagem' type='text'  borderColor={'purple'} borderRadius={10} h={'45%'} w={'90%'} />
                    <Button w={'8%'} h={'45%'} colorScheme={'purple'} marginLeft={'2%'}>
                      Enviar
                    </Button>
                 </Box>
                </Box>
                )}          
              </Box>
          </HStack>

        </Box>

      </View>
    </View>
      <View display={'flex'} justifyContent={'flex-start'} position={'absolute'} margin={'1%'}>
        <Button onPress={handleShow} borderWidth={1} borderColor={'gray.400'} color={'#20203d'} backgroundColor={'#20203d'}>
        <FaBars color='gray' />
          </Button>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Slacky</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Button onPress={backtoLogin}>
                  Sair 
                </Button>
            </Offcanvas.Body>
          </Offcanvas>
      </View>
    </NativeBaseProvider>
    </>
  )
}


const Header =  styled.header`
  width: 100vw;
  height: 7vh;
  background-color: #20203d;
  justify-content: center;
  align-items: center;
  display: flex;
  .brand{
    h1{
      color: white;
      text-transform: uppercase; 
      cursor: pointer;
  }

  


}
`



export default Chat;