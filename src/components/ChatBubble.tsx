import {Message} from 'ai';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card';
import Balancer from 'react-wrap-balancer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from './ui/accordion';
import Markdown from 'react-markdown';
import {formattedSourceText} from '@/lib/utils';

const wrappedText = (text: string) => {
  return text.split('\n').map((line, index) => (
    <p key={index}>
      {line}
      <br />
    </p>
  ));
};

interface ChatBubbleProps extends Partial<Message> {
  sources: string[];
}

export default function ChatBubble({
  role = 'assistant',
  content,
  sources
}: ChatBubbleProps) {
  if (!content) return null;

  const formattedMessage = wrappedText(content);

  return (
    <div>
      <Card className='mb-2'>
        <CardHeader>
          <CardTitle
            className={
              role !== 'assistant' ? 'text-emerald-500' : 'text-blue-500'
            }>
            {role === 'assistant' ? 'neurain' : 'You'}
          </CardTitle>
        </CardHeader>
        <CardContent className='text-sm'>
          <Balancer>{formattedMessage}</Balancer>
        </CardContent>
        <CardFooter>
          <CardDescription className='w-full'>
            {sources && sources.length > 0 ? (
              <Accordion type='single' collapsible className='w-full'>
                {sources.map((source, index) => (
                  <AccordionItem value={`source-${index}`} key={index}>
                    <AccordionTrigger>{`Source ${index + 1}`}</AccordionTrigger>
                    <AccordionContent>
                      <Markdown>{formattedSourceText(source)}</Markdown>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <></>
            )}
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}
