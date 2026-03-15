import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { Task } from '../types';

interface TimelineItemProps {
  date: string;
  dayNumber: number;
  tasks: Task[];
  isLast: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ date, dayNumber, tasks, isLast }) => {
  return (
    <div className="relative flex gap-8 md:gap-16 pb-16">
      {/* Connector Line */}
      {!isLast && (
        <div className="absolute left-[20px] top-[40px] bottom-0 w-[1px] bg-muted md:left-[24px]" />
      )}

      {/* Date Marker */}
      <div className="relative z-10 flex-shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent bg-bg text-xs font-mono font-medium text-accent md:h-12 md:w-12 md:text-sm">
          {dayNumber.toString().padStart(2, '0')}
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow pt-1">
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-accent/60 mb-1">{date}</h3>
          <h2 className="text-3xl font-serif italic md:text-4xl">Day {dayNumber}</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg ${
                task.status === 'current'
                  ? 'border-accent bg-white shadow-md'
                  : 'border-muted bg-white/50 hover:bg-white'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    {task.status === 'completed' && <CheckCircle2 className="h-4 w-4 text-emerald-600" />}
                    {task.status === 'current' && <Clock className="h-4 w-4 text-accent animate-pulse" />}
                    {task.status === 'pending' && <Circle className="h-4 w-4 text-muted" />}
                    <span className={`text-[10px] font-mono uppercase tracking-tighter ${
                      task.status === 'current' ? 'text-accent font-bold' : 'text-accent/40'
                    }`}>
                      {task.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-serif font-medium mb-2 leading-tight group-hover:text-accent transition-colors">
                    {task.title}
                  </h4>
                </div>
              </div>
              
              {/* Subtle background decoration */}
              <div className="absolute -right-4 -bottom-4 h-24 w-24 opacity-[0.03] transition-transform duration-500 group-hover:scale-110">
                <div className="h-full w-full rounded-full border-[8px] border-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
