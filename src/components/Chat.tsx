import {Message} from 'ai';
import ChatBubble from './ChatBubble';
import {Input} from './ui/input';
import {Button} from './ui/button';
import {ArrowUp} from 'lucide-react';

export function Chat() {
  const messages: Message[] = [
    {role: 'assistant', content: 'Hello', id: '1'},
    {role: 'user', content: 'Hi', id: '2'}
  ];

  const sources = ['source1', 'source2'];

  return (
    <div className='rounded-2xl border h-[75vh] flex flex-col justify-between'>
      <div className='p-6 overflow-auto'>
        {messages.map(({id, role, content}: Message, index) => (
          <ChatBubble
            key={id}
            role={role}
            content={content}
            sources={role !== 'assistant' ? [] : sources}
          />
        ))}
      </div>

      <form className='p-4 flex clear-both'>
        <Input placeholder='Type a message' className='mr-2' />
        <Button type='submit' className='w-16 rounded-full'>
          <ArrowUp size={24} />
        </Button>
      </form>
    </div>
  );
}
