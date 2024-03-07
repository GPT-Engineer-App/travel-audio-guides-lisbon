import React, { useState } from "react";
import { Box, Heading, Container, VStack, HStack, IconButton, Text, Input, UnorderedList, ListItem, AspectRatio, Image, Button, useToast } from "@chakra-ui/react";
import { FaPlay, FaPause, FaMapMarkedAlt, FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const addTodo = () => {
    if (!inputValue) {
      toast({
        title: "Please enter a guide name.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, { title: inputValue, isPlaying: false }]);
    setInputValue("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  const togglePlay = (index) => {
    setTodos(
      todos.map((todo, todoIndex) => {
        if (todoIndex === index) {
          return { ...todo, isPlaying: !todo.isPlaying };
        }
        return todo;
      }),
    );
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading>Travel Audio Guides for Lisbon</Heading>

        <HStack width="100%">
          <Input
            placeholder="Enter a guide name..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                addTodo();
              }
            }}
          />
          <IconButton aria-label="Add guide" icon={<FaPlus />} onClick={addTodo} />
        </HStack>

        <UnorderedList spacing={3} width="100%" styleType="none">
          {todos.map((todo, index) => (
            <ListItem key={index} p={2} bg="gray.100" borderRadius="md">
              <HStack justifyContent="space-between">
                <Text>{todo.title}</Text>
                <HStack>
                  <IconButton aria-label={todo.isPlaying ? "Pause guide" : "Play guide"} icon={todo.isPlaying ? <FaPause /> : <FaPlay />} onClick={() => togglePlay(index)} />
                  <IconButton aria-label="Delete guide" icon={<FaTrash />} onClick={() => deleteTodo(index)} />
                </HStack>
              </HStack>
            </ListItem>
          ))}
        </UnorderedList>

        {todos.length > 0 && (
          <AspectRatio ratio={16 / 9} width="100%">
            <Image src="https://images.unsplash.com/photo-1533421821268-87e42c1d70b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMaXNib24lMjBtYXB8ZW58MHx8fHwxNzA5NzcwOTIwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Map of Lisbon tourist spots" />
          </AspectRatio>
        )}

        <Button leftIcon={<FaMapMarkedAlt />} colorScheme="blue">
          Open Tour Map
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
