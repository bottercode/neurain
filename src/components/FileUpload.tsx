'use client';

import {uploadToS3} from '@/lib/s3';
import {useMutation} from '@tanstack/react-query';
import {Inbox, Loader2} from 'lucide-react';
import React from 'react';
import {useDropzone} from 'react-dropzone';
import axios from 'axios';
import {useToast} from '@/components/ui/use-toast';
import {useRouter} from 'next/navigation';

const FileUpload = () => {
  const router = useRouter();
  const [uploading, setUploading] = React.useState(false);
  const {toast} = useToast();
  const {mutate, isPending} = useMutation({
    mutationFn: async ({
      file_key,
      file_name
    }: {
      file_key: string;
      file_name: string;
    }) => {
      const response = await axios.post('/api/create-chat', {
        file_key,
        file_name
      });
      return response.data;
    }
  });

  const {getRootProps, getInputProps} = useDropzone({
    accept: {'application/pdf': ['pdf'], text: ['url']},
    maxFiles: 1,
    onDrop: async acceptedFiles => {
      const file = acceptedFiles[0];
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: 'Error',
          description: 'File too large. Please upload a file smaller than 10MB',
          variant: 'destructive'
        });

        alert('please upload a smaller file');
        return;
      }

      try {
        setUploading(true);
        const data = await uploadToS3(file);
        if (!data?.file_key || !data?.file_name) {
          toast({
            title: 'Error',
            description: 'Something went wrong!',
            variant: 'destructive'
          });
          return;
        }
        mutate(data, {
          onSuccess: ({chat_id}) => {
            toast({
              title: 'Success',
              description: 'File uploaded successfully',
              variant: 'default'
            });
            router.push(`/chat/${chat_id}`);
          },
          onError: err => {
            toast({
              title: 'Error',
              description: 'Failed to upload file',
              variant: 'destructive'
            });
          }
        });
      } catch (error) {
        console.error(error);
        alert('Failed to upload file');
      } finally {
        setUploading(false);
      }
    }
  });

  return (
    <div className='p-2 bg-white rounded-xl'>
      <div
        {...getRootProps({
          className:
            'border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col'
        })}>
        <input {...getInputProps()} />
        {uploading || isPending ? (
          <div className='flex flex-col gap-2 items-center'>
            <Loader2 className='w-10 h-10 text-blue-500 animate-spin' />
            <p className='text-sm text-slate-400'>Uploading your file!</p>
          </div>
        ) : (
          <div className='flex flex-col gap-2 items-center'>
            <Inbox className='w-10 h-10 text-blue-500' />
            <p className='text-sm text-slate-400'>Drop PDF Here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
