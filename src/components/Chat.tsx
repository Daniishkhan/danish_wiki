import { useState } from 'react';
import OpenAI from 'openai';
import knowledgeBase from '../lib/knowledge-base.md?raw';


const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

interface Message {
  content: string;
  isBot: boolean;
}

export function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { content: 'Hello! How can I help you today?', isBot: true },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSend = async (e?: React.FormEvent) => {
    // Prevent default form submission
    if (e) {
      e.preventDefault();
    }

    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    setMessages((prev) => [...prev, { content: input, isBot: false }]);

    try {
      const completion = await client.chat.completions.create({
        messages: [
            {
                role: 'system',
                content: `You are a helpful AI assistant for Online Remote Recruiting (ORR). 
                Here is the company's knowledge base in markdown format:
                
                ${knowledgeBase}
                
                Use this information to answer questions accurately about ORR. 
                Keep responses concise and friendly. If you're not sure about something, say so rather than making assumptions or ask them to contact ORR at info@onlineremoterecruit.com`,
              },
          { role: 'user', content: input },
        ],
        model: 'gpt-3.5-turbo',
      });

      const botResponse = completion.choices[0]?.message?.content || "Sorry, I couldn't process that.";
      setMessages((prev) => [...prev, { content: botResponse, isBot: true }]);
    } catch (error) {
      console.error('OpenAI Error:', error);
      setMessages((prev) => [...prev, { content: 'Sorry, I encountered an error.', isBot: true }]);
    } finally {
      setIsLoading(false);
      setInput('');
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 w-14 h-14 bg-blue-600 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 text-white"
        aria-label="Open chat"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" 
          />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      <div 
        className={`${
          isExpanded 
            ? 'w-[80vw] h-[80vh] max-w-4xl' 
            : 'w-96 h-[500px]'
        } bg-gray-900 rounded-lg shadow-xl flex flex-col transition-all duration-300 border border-gray-700`}
      >
        <div 
          className="p-4 border-b border-gray-700 flex justify-between items-center cursor-pointer bg-gray-800 rounded-t-lg"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h2 className="text-lg font-semibold text-white">ORR Chat Assistant</h2>
          <div className="flex gap-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isExpanded ? '⌃' : '⌄'}
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        <div className={`flex-1 overflow-y-auto p-4 ${
          isExpanded ? 'max-h-[calc(80vh-120px)]' : 'max-h-[380px]'
        } scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800`}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${
                message.isBot 
                  ? 'flex flex-row' 
                  : 'flex flex-row-reverse'
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot
                    ? 'bg-gray-800 text-white mr-auto'
                    : 'bg-blue-600 text-white ml-auto'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-300">
              <div className="animate-bounce">●</div>
              <div className="animate-bounce delay-100">●</div>
              <div className="animate-bounce delay-200">●</div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-700 bg-gray-800 rounded-b-lg">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }} 
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 