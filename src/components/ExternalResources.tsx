
"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ExternalLink, BookOpen } from 'lucide-react';

export function ExternalResources() {
  return (
    <Accordion type="single" collapsible className="w-full" defaultValue="external-resources-item">
      <AccordionItem value="external-resources-item">
        <AccordionTrigger className="text-lg hover:no-underline">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" /> 
            External Resources
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Useful Links</CardTitle>
              <CardDescription>
                Explore these external resources for more chemistry learning materials.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={() => window.open('https://www.youtube.com/@BondiPathshala', '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
                Bondi Pathshala YouTube
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={() => window.open('https://khanacademy.org/science/chemistry', '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
                Khan Academy Chemistry
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={() => window.open('https://www.acs.org/education.html', '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
                ACS Education
              </Button>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
