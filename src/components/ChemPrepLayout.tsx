
"use client";

import * as React from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
  SidebarRail,
  SidebarSeparator, 
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

import { Logo } from '@/components/icons/Logo';
import { ClassList } from '@/components/ClassList';
import { ClassViewer } from '@/components/ClassViewer';
import { StudyTool } from '@/components/StudyTool';
import { ExternalResources } from '@/components/ExternalResources';

import { classes as defaultClasses } from '@/lib/data';
import type { Class, Lecture } from '@/types';
import { useSidebar } from '@/components/ui/sidebar'; 

const getInitialSidebarOpen = () => {
  if (typeof window === 'undefined') return true; 
  const storedValue = localStorage.getItem('sidebarOpen');
  return storedValue ? JSON.parse(storedValue) : true;
};

const AppContent = () => {
  const [selectedClassId, setSelectedClassId] = React.useState<string | undefined>(defaultClasses[0]?.id);
  const [selectedLectureId, setSelectedLectureId] = React.useState<string | undefined>(defaultClasses[0]?.lectures[0]?.id);
  const { open, toggleSidebar, isMobile } = useSidebar();

  React.useEffect(() => {
    if (defaultClasses.length > 0) {
      const firstClass = defaultClasses[0];
      if (!selectedClassId || !defaultClasses.find(c => c.id === selectedClassId)) {
        setSelectedClassId(firstClass.id);
        if (firstClass.lectures.length > 0) {
          setSelectedLectureId(firstClass.lectures[0].id);
        } else {
          setSelectedLectureId(undefined);
        }
      } else {
        const currentClass = defaultClasses.find(c => c.id === selectedClassId);
        if (currentClass && (!selectedLectureId || !currentClass.lectures.find(l => l.id === selectedLectureId))) {
          if (currentClass.lectures.length > 0) {
            setSelectedLectureId(currentClass.lectures[0].id);
          } else {
            setSelectedLectureId(undefined);
          }
        }
      }
    }
  }, []); 


  const selectedClass = React.useMemo(
    () => defaultClasses.find((c) => c.id === selectedClassId),
    [selectedClassId]
  );

  const selectedLecture = React.useMemo(
    () => selectedClass?.lectures.find((l) => l.id === selectedLectureId),
    [selectedClass, selectedLectureId]
  );

  const handleSelectLecture = (classId: string, lectureId: string) => {
    setSelectedClassId(classId);
    setSelectedLectureId(lectureId);
    if (isMobile && open) { 
        toggleSidebar(); 
    }
  };
  
  React.useEffect(() => {
    if (defaultClasses.length > 0 && !selectedClassId && !selectedLectureId) {
      const firstClass = defaultClasses[0];
      setSelectedClassId(firstClass.id);
      if (firstClass.lectures.length > 0) {
        setSelectedLectureId(firstClass.lectures[0].id);
      }
    }
  }, [defaultClasses, selectedClassId, selectedLectureId]);


  return (
    <>
      <Sidebar collapsible="icon" variant="sidebar" defaultOpen={getInitialSidebarOpen()} onOpenChange={(isOpen) => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('sidebarOpen', JSON.stringify(isOpen));
        }
      }}>
        <SidebarHeader className="h-16 flex items-center justify-between p-3">
          <Logo />
          <SidebarTrigger className="md:hidden" /> 
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent className="flex-grow overflow-y-auto">
          <ClassList
            classes={defaultClasses}
            selectedClassId={selectedClassId}
            selectedLectureId={selectedLectureId}
            onSelectLecture={handleSelectLecture}
          />
        </SidebarContent>
        <SidebarSeparator />
        {/* ExternalResources removed from here */}
        <SidebarFooter className="p-3">
            <Button variant="ghost" className="w-full justify-start gap-2" asChild>
                <a href="https://github.com/firebase/genkit/tree/main/studio" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className={open || isMobile ? 'opacity-100' : 'opacity-0 group-hover/sidebar-wrapper:opacity-100 transition-opacity duration-200'}>
                        View on GitHub
                    </span>
                </a>
            </Button>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset className="flex flex-col p-4 md:p-6 gap-6 bg-background">
        <div className="flex items-center justify-between md:justify-end">
            <SidebarTrigger className="md:hidden" /> 
        </div>
        <ClassViewer selectedLecture={selectedLecture || null} />
        <ExternalResources /> 
        <StudyTool selectedLecture={selectedLecture || null} selectedClass={selectedClass || null} />
         <footer className="text-center py-4 text-sm text-muted-foreground">
          © {new Date().getFullYear()} ChemPrep HQ. All rights reserved.
        </footer>
      </SidebarInset>
    </>
  );
};


export function ChemPrepLayout() {
  return (
    <SidebarProvider defaultOpen={getInitialSidebarOpen()}>
      <AppContent />
    </SidebarProvider>
  );
}
