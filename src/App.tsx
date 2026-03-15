import { motion } from 'motion/react';
import { BookOpen, Calendar, GraduationCap, ArrowDown } from 'lucide-react';
import { TIMELINE_DATA } from './types';
import { TimelineItem } from './components/TimelineItem';

export default function App() {
  const totalTasks = TIMELINE_DATA.reduce((acc, day) => acc + day.tasks.length, 0);
  const completedTasks = TIMELINE_DATA.reduce((acc, day) => 
    acc + day.tasks.filter(t => t.status === 'completed').length, 0
  );
  const progress = (completedTasks / totalTasks) * 100;

  return (
    <div className="min-h-screen selection:bg-accent/20">
      {/* Header Section */}
      <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/5 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-accent" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-accent/60">Academic Roadmap</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif italic mb-8 leading-[0.9] tracking-tight">
            Dissertation <br />
            <span className="text-accent">Timeline</span>
          </h1>
          
          <p className="text-lg md:text-xl text-ink/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Chapter One: Theoretical, Historical and Cultural Framework. 
            A structured progression from March 16th to April 2nd.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-left">
              <div className="text-xs font-mono uppercase tracking-widest text-accent/40 mb-1">Timeline</div>
              <div className="text-xl font-serif">18 Days</div>
            </div>
            <div className="text-left">
              <div className="text-xs font-mono uppercase tracking-widest text-accent/40 mb-1">Milestones</div>
              <div className="text-xl font-serif">13 Sections</div>
            </div>
            <div className="text-left">
              <div className="text-xs font-mono uppercase tracking-widest text-accent/40 mb-1">Status</div>
              <div className="text-xl font-serif">In Progress</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent/40">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown className="h-4 w-4 text-accent/40" />
            </motion.div>
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-24">
        {/* Progress Bar */}
        <div className="sticky top-8 z-50 mb-24">
          <div className="bg-white/80 backdrop-blur-md border border-muted rounded-full p-2 pr-6 flex items-center gap-4 shadow-sm">
            <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-white">
              <BookOpen className="h-5 w-5" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-end mb-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent">Overall Progress</span>
                <span className="text-xs font-mono font-bold">{Math.round(progress)}%</span>
              </div>
              <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-accent" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {TIMELINE_DATA.map((day, index) => (
            <TimelineItem 
              key={day.date}
              date={day.date}
              dayNumber={day.dayNumber}
              tasks={day.tasks}
              isLast={index === TIMELINE_DATA.length - 1}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-muted py-24 px-6 text-center bg-white/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Calendar className="h-5 w-5 text-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-accent/60">Final Deadline</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif italic mb-6">April 2nd, 2026</h2>
          <p className="text-ink/40 font-light mb-12">
            "The secret of getting ahead is getting started." — Mark Twain
          </p>
          <div className="h-[1px] w-24 bg-accent/20 mx-auto" />
        </div>
      </footer>
    </div>
  );
}
