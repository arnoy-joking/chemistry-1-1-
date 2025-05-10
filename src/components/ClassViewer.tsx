
"use client";

import type { Lecture } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { FileText, Video, Download } from 'lucide-react';
import Image from 'next/image';

interface ClassViewerProps {
  selectedLecture: Lecture | null;
}

export function ClassViewer({ selectedLecture }: ClassViewerProps) {
  if (!selectedLecture) {
    return (
      <Card className="flex flex-col items-center justify-center min-h-[400px] shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Welcome to ChemPrep HQ</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <Image 
            src="https://picsum.photos/seed/chemistry/400/300" 
            alt="Chemistry lab" 
            width={400} 
            height={300}
            className="rounded-md mb-4 shadow-md"
            data-ai-hint="chemistry lab"
          />
          <p className="text-lg">Select a class and lecture from the sidebar to begin.</p>
          <p className="text-sm text-muted-foreground mt-2">
            Explore interactive lessons, generate study plans, and ace your chemistry exams!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">{selectedLecture.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" defaultValue={['video', 'pdf']} className="w-full">
          <AccordionItem value="video">
            <AccordionTrigger className="text-lg hover:no-underline">
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                Lecture Video
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="aspect-video rounded-md overflow-hidden border border-border shadow-inner">
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedLecture.videoUrl}
                  title={`${selectedLecture.name} Video Player`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pdf">
            <AccordionTrigger className="text-lg hover:no-underline">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Lecture Notes (PDF)
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {selectedLecture.pdfUrl ? (
                <>
                  <Button asChild variant="outline" className="mb-3">
                    <a href={selectedLecture.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                  <div className="aspect-[4/3] rounded-md overflow-hidden border border-border shadow-inner">
                    <iframe
                      src={selectedLecture.pdfUrl}
                      width="100%"
                      height="100%"
                      title={`${selectedLecture.name} PDF Viewer`}
                    >
                      Your browser does not support PDFs. Please download the PDF to view it.
                    </iframe>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full bg-muted p-4 rounded-md">
                  <p>No PDF available for this lecture.</p>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
