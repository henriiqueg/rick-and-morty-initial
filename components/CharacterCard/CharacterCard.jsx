import {
  Box,
  Flex,
  Image,
  Center,
  Text,
  Tooltip,
  // Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalFooter,
  // ModalBody,
  // ModalCloseButton,
  // Button,
  // useDisclosure,
  // useColorModeValue,
} from '@chakra-ui/react';

const CharacterCard = ({ name, image }) => {
  return (
    <>
      <Tooltip label="Click to see more" aria-label="A tooltip">
        <Box
          w="xs"
          maxH="20"
          borderRadius="xl"
          overflow="hidden"
          bg={image}
          // onClick={onOpen}
          cursor="pointer"
        >
          <Flex>
            <Image
              src={image}
              alt={`${name} Thumb`}
              fallbackSrc="https://via.placeholder.com/80"
              maxW="20"
              mr="4"
            />
            <Center flex="1" justifyContent="start">
              <Text fontSize="xl" fontWeight="bold">
                {name}
              </Text>
            </Center>
          </Flex>
        </Box>
      </Tooltip>
    </>
  );
};

export default CharacterCard;
