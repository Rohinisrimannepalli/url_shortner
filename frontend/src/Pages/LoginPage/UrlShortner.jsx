import { Container, TextInput } from '@mantine/core'
import { useState } from 'react';
import UrlResponse from '../../Components/PrivateRoute/UrlResponse';
import UrlForm from '../../Components/PrivateRoute/UrlForm';


export default function UrlShortener() {
  const [ response, setResponse ] = useState(null);
 
   return (
       <Container size={"xs"}>
           {response?<UrlResponse response = {response}/>:<UrlForm setResponse={setResponse}/>}
       </Container>
   )
}

