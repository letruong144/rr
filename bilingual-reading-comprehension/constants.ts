
import { Passage } from './types';

export const READING_PASSAGES: Passage[] = [
  {
    id: 'passage-1',
    titleVi: 'Bài Đọc 1: Lợi Ích Của Việc Tập Thể Dục',
    titleEn: 'The Benefits of Exercise',
    passage: 'Exercise is physical activity that is planned, structured, and repetitive for the purpose of conditioning the body. It plays a significant role in maintaining physical and mental health. People who exercise regularly often feel more energetic and optimistic. Regular physical activity can greatly reduce the risk of developing chronic diseases such as heart disease, diabetes, and high blood pressure. Moreover, exercise helps in weight control by burning calories, which is essential for maintaining a healthy body weight. It also strengthens your bones and muscles, making daily activities easier and reducing the risk of injuries. Besides the physical benefits, exercise is a powerful mood booster. When you work out, your body releases endorphins, which are natural mood elevators, leading to reduced stress and anxiety. Finding an activity you enjoy, like swimming, cycling, or team sports, will make it easier to stick to a routine. Even a moderate amount of daily activity can make a huge difference in your overall well-being.',
    questions: [
      {
        id: 1,
        question: 'What is the main idea of the passage?',
        options: [
          { id: 'A', text: 'The best types of exercise for weight loss.' },
          { id: 'B', text: 'How to find a fun exercise routine.' },
          { id: 'C', text: 'The importance and benefits of regular physical activity.' },
          { id: 'D', text: 'The risks of not exercising enough.' },
        ],
        correctAnswer: 'C',
        explanation: 'Đoạn văn tập trung vào tầm quan trọng và những lợi ích tổng thể (sức khỏe thể chất và tinh thần) của việc tập thể dục.'
      },
      {
        id: 2,
        question: 'Which of the following chronic diseases can be reduced by regular exercise?',
        options: [
          { id: 'A', text: 'Flu' },
          { id: 'B', text: 'Heart disease' },
          { id: 'C', text: 'Cancer' },
          { id: 'D', text: 'Pneumonia' },
        ],
        correctAnswer: 'B',
        explanation: 'Dòng 3 nhắc đến: "reduce the risk of developing chronic diseases such as heart disease, diabetes, and high blood pressure."'
      },
      {
        id: 3,
        question: 'What substance does the body release during exercise that helps to reduce stress and anxiety?',
        options: [
          { id: 'A', text: 'Vitamins' },
          { id: 'B', text: 'Calories' },
          { id: 'C', text: 'Endorphins' },
          { id: 'D', text: 'Minerals' },
        ],
        correctAnswer: 'C',
        explanation: 'Dòng 6 chỉ ra: "your body releases endorphins, which are natural mood elevators..."'
      },
      {
        id: 4,
        question: 'According to the passage, what is one non-physical benefit of exercise?',
        options: [
          { id: 'A', text: 'It helps you save money.' },
          { id: 'B', text: 'It improves your memory.' },
          { id: 'C', text: 'It serves as a powerful mood booster.' },
          { id: 'D', text: 'It makes you a better athlete.' },
        ],
        correctAnswer: 'C',
        explanation: 'Dòng 6: "...exercise is a powerful mood booster."'
      },
      {
        id: 5,
        question: 'The word "repetitive" in the first sentence is closest in meaning to:',
        options: [
          { id: 'A', text: 'Boring' },
          { id: 'B', text: 'Done again and again' },
          { id: 'C', text: 'Difficult' },
          { id: 'D', text: 'Quick' },
        ],
        correctAnswer: 'B',
        explanation: 'Repetitive (lặp đi lặp lại) có nghĩa là được thực hiện nhiều lần (Done again and again).'
      },
    ]
  },
  {
    id: 'passage-2',
    titleVi: 'Bài Đọc 2: Một Ngôi Làng Truyền Thống Việt Nam',
    titleEn: 'A Traditional Vietnamese Village',
    passage: 'Imagine a typical traditional Vietnamese village. It is often surrounded by a bamboo hedge or a thick wall of trees, providing both protection and a clear boundary. At the entrance, you might see an old communal house (Đình) and a small temple (Chùa). The Đình is the spiritual and cultural heart of the village; it is where villagers hold important meetings, festivals, and ceremonies to worship the Village Guardian Spirit. The houses are usually clustered together, and the main occupation is farming, with rice paddies stretching out around the residential area. Life in the village is generally peaceful and close-knit. Villagers often help each other with planting and harvesting, demonstrating a strong sense of community. Although modern life is changing many aspects of these villages, the core values of respect for elders, tradition, and community spirit remain remarkably strong. The sound of a water buffalo bell and the sight of children playing near the pond are still common scenes.',
    questions: [
      {
        id: 1,
        question: 'What typically surrounds a traditional Vietnamese village?',
        options: [
          { id: 'A', text: 'A modern concrete wall' },
          { id: 'B', text: 'A bamboo hedge or a thick wall of trees' },
          { id: 'C', text: 'A river and a high fence' },
          { id: 'D', text: 'Shopping malls' },
        ],
        correctAnswer: 'B',
        explanation: 'Dòng 2: "It is often surrounded by a bamboo hedge or a thick wall of trees..."'
      },
      {
        id: 2,
        question: 'What is the Đình mainly used for in the village?',
        options: [
          { id: 'A', text: 'A place for selling goods' },
          { id: 'B', text: 'A school for children' },
          { id: 'C', text: 'Holding important meetings, festivals, and ceremonies' },
          { id: 'D', text: 'A clinic for the sick' },
        ],
        correctAnswer: 'C',
        explanation: 'Dòng 3: "...it is where villagers hold important meetings, festivals, and ceremonies..."'
      },
      {
        id: 3,
        question: 'What is the main occupation of the people in the village?',
        options: [
          { id: 'A', text: 'Fishing' },
          { id: 'B', text: 'Teaching' },
          { id: 'C', text: 'Farming' },
          { id: 'D', text: 'Trading' },
        ],
        correctAnswer: 'C',
        explanation: 'Dòng 5: "...the main occupation is farming, with rice paddies stretching out..."'
      },
      {
        id: 4,
        question: 'The word "close-knit" in the second paragraph means:',
        options: [
          { id: 'A', text: 'Easily broken' },
          { id: 'B', text: 'Connected by fishing nets' },
          { id: 'C', text: 'Having strong, supportive relationships' },
          { id: 'D', text: 'Always arguing' },
        ],
        correctAnswer: 'C',
        explanation: 'Close-knit (gắn bó chặt chẽ) mô tả một cộng đồng có mối quan hệ mạnh mẽ và hỗ trợ lẫn nhau (Having strong, supportive relationships).'
      },
      {
        id: 5,
        question: 'What is one core value that remains strong in these traditional villages?',
        options: [
          { id: 'A', text: 'The desire for high-tech gadgets.' },
          { id: 'B', text: 'Respect for elders, tradition, and community spirit.' },
          { id: 'C', text: 'Individualism and self-reliance.' },
          { id: 'D', text: 'Focus on industrial development.' },
        ],
        correctAnswer: 'B',
        explanation: 'Dòng 7: "...the core values of respect for elders, tradition, and community spirit remain remarkably strong."'
      }
    ]
  }
];
