import * as React from 'react';
import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import Input from '@mui/joy/Input';
import FileDetailsSheet from './FileDetailsSheet';

interface Message {
    sender: 'user' | 'bot';
    text: string;
  }
  
  interface ChatbotProps {
    onDetailsCommand: () => void;
  }
  
  const Chatbot: React.FC<ChatbotProps> = ({ onDetailsCommand }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');
  
    const handleSend = (): void => {
      if (input.trim()) {
        const lowerInput = input.toLowerCase();
        setMessages((prev) => [
          ...prev,
          { sender: 'user', text: input },
          { sender: 'bot', text: mockChatResponse(lowerInput) },
        ]);
        setInput('');
  
        // Switch to the FileDetailsSheet if the user types "details"
        if (lowerInput === 'details') {
          onDetailsCommand();
        }
      }
    };
  
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setInput(event.target.value);
    };
  
    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
      if (event.key === 'Enter') {
        handleSend();
      }
    };
  
    const mockChatResponse = (question: string): string => {
      const responses: Record<string, string> = {
        hello: 'Hi there! How can I assist you today?',
        help: "I'm here to assist you with any questions about your files.",
        details: 'Switching to file details view...',
        default: "Sorry, I didn't understand that. Can you please rephrase?",
      };
      return responses[question] || responses.default;
    };
  
    return (
      <Sheet
        variant="outlined"
        sx={{
          p: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography level="title-md" sx={{ textAlign: 'center', mt: 2, mb: 1 }}>
          Chatbot Assistant
        </Typography>
        <Box sx={{ flex: 1, overflowY: 'auto', mb: 2, px: 1 }}>
          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                mb: 1,
              }}
            >
              <Chip
                sx={{ maxWidth: '60%' }}
                variant={msg.sender === 'user' ? 'soft' : 'outlined'}
              >
                {msg.text}
              </Chip>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 1, mt: 1, px: 1, mb: 2 }}>
          <Input
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Ask me anything..."
            sx={{ flex: 1 }}
          />
          <Button onClick={handleSend}>Send</Button>
        </Box>
      </Sheet>
    );
  };
  
  const FileDetailsSheetWithChatbot: React.FC = () => {
    const [showFileDetails, setShowFileDetails] = useState<boolean>(false);
  
    const handleDetailsCommand = () => {
      setShowFileDetails(true);
    };
  
    return (
      <CssVarsProvider>
        <CssBaseline />
        <Box sx={{ display: 'flex', height: '100vh' }}>
          <Sheet
            sx={{
              display: { xs: 'none', sm: 'initial' },
              borderLeft: '1px solid',
              borderColor: 'divider',
            }}
          >
            {/* Toggle between Chatbot and FileDetailsSheet */}
            {showFileDetails ? (
              <FileDetailsSheet />
            ) : (
              <Chatbot onDetailsCommand={handleDetailsCommand} />
            )}
          </Sheet>
        </Box>
      </CssVarsProvider>
    );
  };
  
  export default FileDetailsSheetWithChatbot;