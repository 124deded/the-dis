export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed' | 'current';
}

export interface DayTimeline {
  date: string;
  dayNumber: number;
  tasks: Task[];
}

export const TIMELINE_DATA: DayTimeline[] = [
  {
    date: "March 16",
    dayNumber: 1,
    tasks: [
      { id: "1", title: "Introduction", description: "", status: 'current' },
      { id: "2", title: "1.1. Symbolism in Literary Studies", description: "", status: 'pending' }
    ]
  },
  {
    date: "March 17",
    dayNumber: 2,
    tasks: [
      { id: "3", title: "1.2. Food as Cultural Text", description: "", status: 'pending' },
      { id: "4", title: "1.3. Theoretical Approaches to Food Symbolism", description: "", status: 'pending' }
    ]
  },
  {
    date: "March 18",
    dayNumber: 3,
    tasks: [
      { id: "5", title: "1.3.1 Marxist Theory (talk about food as economic resource and link it to class hierarchy and power...)", description: "", status: 'pending' },
      { id: "6", title: "1.3.2. Postcolonial Theory (talk abut food as cultural preservation, Afghan identity and diasporic nostalgia through food,,,,,)", description: "", status: 'pending' }
    ]
  },
  {
    date: "March 19",
    dayNumber: 4,
    tasks: [
      { id: "7", title: "1.3.3. Feminist Theory ( talk about the use of food to show patriarchal control, cooking as gendered obligation to women….)", description: "", status: 'pending' },
      { id: "8", title: "1.4. Historical and Cultural Background of Afghanistan ( briefly talk about pre soviet Afghanistan, Soviet invasion, Taliban period, and Afghan diaspora)", description: "", status: 'pending' }
    ]
  },
  {
    date: "March 20",
    dayNumber: 5,
    tasks: [
      { id: "9", title: "1.5.Biography of the Writer: (talk about Khaled Hosseini's Life, Literary works and his vision…)", description: "", status: 'pending' },
      { id: "10", title: "1.6. Overview of the Novels", description: "", status: 'pending' }
    ]
  },
  {
    date: "March 21",
    dayNumber: 6,
    tasks: [
      { id: "11", title: "1.6.1. The Kite Runner", description: "", status: 'pending' },
      { id: "12", title: "1.6.2. A Thousand Splendid Suns", description: "", status: 'pending' }
    ]
  },
  {
    date: "March 22",
    dayNumber: 7,
    tasks: [
      { id: "13", title: "Conclusion", description: "", status: 'pending' }
    ]
  }
];
