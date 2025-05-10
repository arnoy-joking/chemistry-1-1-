
"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ExternalLink, BookOpen } from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebar'; // Import useSidebar

export function ExternalResources() {
  const { open, isMobile } = useSidebar(); // Get sidebar state

  // Conditionally render title/description based on sidebar state for better UX in collapsed mode.
  // Or, simplify the component if it's always in the sidebar.
  // For now, keeping it simple. If the accordion is open, it will expand.
  // If the sidebar itself is collapsed (icon-only mode on desktop), this might look crammed.
  // A better approach for icon-only sidebar might be to show just an icon that expands to these links on click (e.g. using a Popover).
  // However, sticking to the current structure with Accordion.

  return (
    // Use `type="multiple"` if you want multiple accordions to be open, or `type="single"` for one at a time.
    // `collapsible` allows the single accordion item to be closed.
    <Accordion type="single" collapsible className="w-full" defaultValue={isMobile || open ? undefined : "external-resources-item"}>
      <AccordionItem value="external-resources-item" className="border-none">
        <AccordionTrigger className="text-sm hover:no-underline py-2 px-2 hover:bg-sidebar-accent rounded-md">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-sidebar-primary" />
            {(open || isMobile) && <span>External Resources</span>}
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-0">
          {/* Removed Card for a more integrated look within sidebar accordion */}
          <div className="space-y-2 p-2 mt-1 bg-sidebar rounded-md border border-sidebar-border">
            <Button
              variant="ghost" // Changed to ghost for better fit in sidebar
              className="w-full justify-start gap-2 text-xs h-auto py-1.5 px-2 hover:bg-sidebar-accent/80"
              onClick={() => window.open('https://www.youtube.com/@BondiPathshala', '_blank')}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Bondi Pathshala YouTube
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 text-xs h-auto py-1.5 px-2 hover:bg-sidebar-accent/80"
              onClick={() => window.open('https://khanacademy.org/science/chemistry', '_blank')}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Khan Academy Chemistry
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 text-xs h-auto py-1.5 px-2 hover:bg-sidebar-accent/80"
              onClick={() => window.open('https://www.acs.org/education.html', '_blank')}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              ACS Education
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
