
import React, { use, useEffect, useState } from 'react'


import Service from '../utils/http'
import { Center, Text } from '@mantine/core';
const obj = new Service();


export default function Profil() {


   const [user, setUser] = useState({})


   const getProfileData = async () => {
       try {
           let data = await obj.get("user/me")
           setUser(data)
           console.log(data);
       } catch (error) {
           console.log(error);
       }
   }
   useEffect(() => {


       getProfileData();
   }, [])


   return (
       <div>
           {
               <Center>
                   <Text color='red' size={"lg"} > {user?.name} </Text>
               </Center>


           }
       </div>
   )
}

