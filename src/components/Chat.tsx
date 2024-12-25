import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { openai } from "../lib/openai";
import { portfolioInfo } from "../lib/knowledge-base";

interface Message {
  content: string;
  isBot: boolean;
}

export function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hello! How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    setIsLoading(true);
    // Add user message
    setMessages(prev => [...prev, { content: input, isBot: false }]);
    
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant on Danish Khan's portfolio website. 
            Keep responses concise and friendly. Here's the information about Danish:
            ${JSON.stringify(portfolioInfo, null, 2)}
            
            Use this information to answer questions accurately. If you don't find specific information in the knowledge base, 
            provide general guidance or ask for clarification. Always maintain a professional and friendly tone.`
          },
          ...messages.map(msg => ({
            role: msg.isBot ? "assistant" : "user",
            content: msg.content
          })),
          { role: "user", content: input }
        ],
        max_tokens: 150
      });

      const botResponse = response.choices[0]?.message?.content || "Sorry, I couldn't process that.";
      setMessages(prev => [...prev, { content: botResponse, isBot: true }]);
    } catch (error) {
      console.error('OpenAI Error:', error);
      setMessages(prev => [...prev, { 
        content: "Sorry, I encountered an error. Please try again.", 
        isBot: true 
      }]);
    } finally {
      setIsLoading(false);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-80 h-96 flex flex-col bg-[#1a1a1a] border border-[#33ff00] glow-border">
          <div className="p-4 border-b border-[#33ff00] flex justify-between">
            <h3 className="text-[#33ff00]">Chat Assistant</h3>
            <button onClick={() => setIsOpen(false)}>&times;</button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`rounded-lg p-2 max-w-[80%] ${
                  msg.isBot ? 'bg-[#2a2a2a]' : 'bg-[#33ff00] text-[#0a0a0a]'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#2a2a2a] rounded-lg p-2">
                  <span className="animate-pulse">...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-[#33ff00]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 p-2 bg-[#2a2a2a] border border-[#33ff00] text-[#33ff00] rounded"
                placeholder="Type a message..."
                disabled={isLoading}
              />
              <Button 
                onClick={handleSend}
                className="bg-[#33ff00] text-[#0a0a0a] hover:bg-[#33ff00]/80"
                disabled={isLoading}
              >
                {isLoading ? '...' : 'Send'}
              </Button>
            </div>
          </div>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-[#33ff00] text-[#0a0a0a] hover:bg-[#33ff00]/80 rounded-full h-12 w-12 flex items-center justify-center"
        >
          💬
        </Button>
      )}
    </div>
  );
} 