import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  FileText,
  Home,
  MessageSquareText,
  Newspaper,
  Presentation,
  type LucideProps,
} from 'lucide-react';
import type { NavigationIcon as NavigationIconName } from '../data/navigation';

const iconMap = {
  home: Home,
  book: BookOpen,
  file: FileText,
  blog: Newspaper,
  calendar: CalendarDays,
  workshop: Presentation,
  evaluation: CheckCircle2,
  feedback: MessageSquareText,
};

export function NavigationIcon({ name = 'file', ...props }: { name?: NavigationIconName } & LucideProps) {
  const Icon = iconMap[name];
  return <Icon {...props} />;
}
