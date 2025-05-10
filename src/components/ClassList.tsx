"use client";

import type { Class, Lecture } from '@/types';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar';
import { ChevronRight } from 'lucide-react';
import * as React from 'react';

interface ClassListProps {
  classes: Class[];
  selectedClassId?: string;
  selectedLectureId?: string;
  onSelectLecture: (classId: string, lectureId: string) => void;
}

export function ClassList({
  classes,
  selectedClassId,
  selectedLectureId,
  onSelectLecture,
}: ClassListProps) {
  const [openClassId, setOpenClassId] = React.useState<string | undefined>(selectedClassId);

  React.useEffect(() => {
    // Keep the selected class expanded if a lecture from it is selected
    if (selectedClassId && selectedClassId !== openClassId) {
      setOpenClassId(selectedClassId);
    }
  }, [selectedClassId, openClassId]);

  const handleClassToggle = (classId: string) => {
    setOpenClassId(prevOpenClassId => (prevOpenClassId === classId ? undefined : classId));
  };

  return (
    <SidebarMenu>
      {classes.map((cls) => (
        <SidebarMenuItem key={cls.id}>
          <SidebarMenuButton
            onClick={() => handleClassToggle(cls.id)}
            isActive={cls.id === selectedClassId && !selectedLectureId}
            className="justify-between"
            aria-expanded={openClassId === cls.id}
            aria-controls={`lectures-${cls.id}`}
          >
            <div className="flex items-center gap-2">
              {cls.Icon && <cls.Icon className="h-5 w-5" />}
              <span>{cls.name}</span>
            </div>
            <ChevronRight
              className={`h-4 w-4 transition-transform duration-200 ${
                openClassId === cls.id ? 'rotate-90' : ''
              }`}
            />
          </SidebarMenuButton>
          {openClassId === cls.id && (
            <SidebarMenuSub id={`lectures-${cls.id}`}>
              {cls.lectures.map((lecture) => (
                <SidebarMenuSubItem key={lecture.id}>
                  <SidebarMenuSubButton
                    onClick={() => onSelectLecture(cls.id, lecture.id)}
                    isActive={lecture.id === selectedLectureId}
                  >
                    {lecture.name}
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          )}
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
