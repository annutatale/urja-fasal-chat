import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Mic, MicOff, Volume2, Camera } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "नमस्कार! मैं आपका खेती सहायक हूं। आप मुझसे फसल, मौसम, बीमारी, या खेती से जुड़े कोई भी सवाल पूछ सकते हैं। 🌾",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "धन्यवाद आपके सवाल के लिए! मैं जल्दी ही इसका जवाब दूंगा। कृपया Supabase को कनेक्ट करें ताकि मैं बेहतर सहायता कर सकूं। 🤖",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
    // Voice recognition implementation would go here
  };

  const quickQuestions = [
    "🌾 गेहूं की बुवाई कब करें?",
    "🌧️ बारिश में क्या करें?",
    "🐛 फसल में कीड़े लगे हैं",
    "💰 आज की मंडी भाव क्या है?",
    "🏛️ सरकारी योजना की जानकारी",
    "📸 फसल की बीमारी पहचानें"
  ];

  return (
    <div className="min-h-screen bg-background pt-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">🤖 AI खेती सहायक</h1>
          <p className="text-xl text-muted-foreground">आपके खेती के सवालों का तुरंत जवाब</p>
        </div>

        <Card className="h-[600px] flex flex-col">
          {/* Chat Messages */}
          <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <p className="text-lg">{message.text}</p>
                    <p className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString('hi-IN')}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted p-4 rounded-2xl">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Quick Questions */}
          <div className="p-4 border-t">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-left justify-start h-auto p-3 whitespace-normal"
                  onClick={() => setInputText(question)}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 border-t">
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleVoice}
                className={`h-12 w-12 ${isListening ? 'bg-red-500 text-white' : ''}`}
              >
                {isListening ? <MicOff /> : <Mic />}
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Camera />
              </Button>
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="अपना सवाल यहां लिखें..."
                className="flex-1 h-12 text-lg"
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <Button onClick={sendMessage} className="h-12 px-6" disabled={isLoading}>
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chatbot;