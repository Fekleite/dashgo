import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box
          mr='4'
          textAlign='right'
        >
          <Text>Fernanda Leite</Text>
          <Text color='gray.300' fontSize='small'>
            devfernanda.leite@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size='md' name='Fernanda Leite' src='https://github.com/fekleite.png' />
    </Flex>
  )
}