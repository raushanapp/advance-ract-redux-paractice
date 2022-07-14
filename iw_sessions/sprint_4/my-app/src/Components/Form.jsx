import { Box, Button, Heading, HStack, Input, PinInput, PinInputField, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

function Form() {
    const [isLoading,setLoading]=useState(false);
    const [otp,setOpt]=useState("")
  return (
    <Box>
       <Heading>Forms</Heading>
       <Stack gap="0.5rem">
          <Box>
              <Input type='email' placeholder='email'/>
          </Box>
          <Box>
              <Input type='password' placeholder='password'/>
          </Box>
          <Box>
              <HStack>
                <PinInput value={otp} onChange={(value)=>setOpt(value)}>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
              </HStack>
          </Box>
          <Box>
            <Text>Otp is {otp}</Text>
          </Box>
          <Box>
             <Button isLoading={isLoading}
              onClick={()=>{
                 setLoading(true);
                 setTimeout(()=>{
                    setLoading(false)
                 },3000)
              }}
             >Sign Up</Button>
          </Box>
       </Stack>
    </Box>
  )
}

export default Form