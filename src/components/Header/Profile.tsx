import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align='center'>
      <Box
        mr='4'
        textAlign='right'
      >
        <Text>Fernanda Leite</Text>
        <Text color='gray.300' fontSize='small'>
          devfernanda.leite@gmail.com
        </Text>
      </Box>

      <Avatar size='md' name='Fernanda Leite' src='https://github.com/fekleite.png' />
    </Flex>
  )
}