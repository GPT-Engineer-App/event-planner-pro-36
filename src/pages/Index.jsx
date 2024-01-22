import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, Input, Stack, Text, VStack, HStack, Textarea, useToast, Image } from "@chakra-ui/react";
import { FaPlus, FaCalendarAlt, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const addEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.location) {
      toast({
        title: "Error",
        description: "Please fill in all fields to add an event.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    setEvents([...events, newEvent]);
    setNewEvent({
      title: "",
      date: "",
      location: "",
      description: "",
    });
    toast({
      title: "Success",
      description: "Event added successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Event Planner Pro
        </Heading>
        <Flex align="center" justify="space-between">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading size="md" my="2">
              Create New Event
            </Heading>
            <Stack spacing={4}>
              <Input placeholder="Event Title" size="md" name="title" value={newEvent.title} onChange={handleInputChange} />
              <HStack>
                <FaCalendarAlt />
                <Input placeholder="Date" size="md" type="date" name="date" value={newEvent.date} onChange={handleInputChange} />
              </HStack>
              <HStack>
                <FaMapMarkerAlt />
                <Input placeholder="Location" size="md" name="location" value={newEvent.location} onChange={handleInputChange} />
              </HStack>
              <Textarea placeholder="Description" size="md" name="description" value={newEvent.description} onChange={handleInputChange} />
              <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={addEvent}>
                Add Event
              </Button>
            </Stack>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" ml={5}>
            <Heading size="md" my="2">
              Upcoming Events
            </Heading>
            <Stack spacing={4} overflowY="auto" maxHeight="lg">
              {events.map((event, index) => (
                <Box key={index} p={5} shadow="sm" borderWidth="1px" borderRadius="md">
                  <Heading size="lg" my="2">
                    {event.title}
                  </Heading>
                  <HStack>
                    <FaCalendarAlt />
                    <Text>{event.date}</Text>
                  </HStack>
                  <HStack>
                    <FaMapMarkerAlt />
                    <Text>{event.location}</Text>
                  </HStack>
                  <HStack>
                    <FaUsers />
                    <Text>{event.description}</Text>
                  </HStack>
                </Box>
              ))}
            </Stack>
          </Box>
        </Flex>
      </VStack>
      <Image src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBsYW5uaW5nfGVufDB8fHx8MTcwNTk1NzIyOXww&ixlib=rb-4.0.3&q=80&w=1080" mt={10} />
    </Container>
  );
};

export default Index;
