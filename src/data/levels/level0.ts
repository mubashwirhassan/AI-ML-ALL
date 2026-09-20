import { Level } from '../../types';

export const level0: Level = {
  id: 0,
  slug: 'absolute-beginner',
  title: {
    en: 'Level 0 — Absolute Beginner',
    bn: 'লেভেল ০ — একদম শুরু থেকে শুরু',
  },
  subtitle: {
    en: 'Zero to first concepts: How computers learn without memorizing rules',
    bn: 'কোনো পূর্ব অভিজ্ঞতা ছাড়াই: কম্পিউটার কিভাবে নিয়ম মুখস্থ না করে শিখে নেয়',
  },
  description: {
    en: 'Build your foundation with zero technical jargon. Understand what programming, data, Artificial Intelligence, and Machine Learning truly mean through real-world intuition.',
    bn: 'কোনো জটিল পরিভাষা ছাড়া ভিত্তি তৈরি করুন। বাস্তব উদাহরণের মাধ্যমে জানুন প্রোগ্রামিং, ডেটা, এআই এবং মেশিন লার্নিংয়ের প্রকৃত অর্থ।',
  },
  iconName: 'Sparkles',
  color: 'from-emerald-500 to-teal-600',
  badge: 'Foundation',
  lessons: [
    {
      id: 'l0-what-is-programming',
      levelId: 0,
      slug: 'what-is-programming',
      title: {
        en: 'What is Programming & What is Python?',
        bn: 'প্রোগ্রামিং কী এবং পাইথন কী?',
      },
      subtitle: {
        en: 'Giving instructions to computers vs letting them learn from data',
        bn: 'কম্পিউটারকে নির্দেশ দেওয়া বনাম ডেটা থেকে শিখতে দেওয়ার পার্থক্য',
      },
      difficulty: 'Beginner',
      estimatedMinutes: 10,
      category: 'Foundations',
      whatIsIt: {
        en: 'Programming is the process of writing precise instructions (code) that tell a computer what to do step-by-step. Python is the world\'s most popular language for Machine Learning because its syntax reads almost like plain English.',
        bn: 'প্রোগ্রামিং হলো কম্পিউটারকে ধাপে ধাপে কী করতে হবে তার স্পষ্ট নির্দেশ (কোড) দেওয়ার প্রক্রিয়া। পাইথন হলো মেশিন লার্নিংয়ের জন্য বিশ্বের সবচেয়ে জনপ্রিয় ভাষা, কারণ এর সিনট্যাক্স সাধারণ ইংরেজির মতোই পড়তে সহজ।',
      },
      analogy: {
        en: 'Traditional programming is like a detailed cooking recipe: you must specify every teaspoon of salt and cooking temperature. If a sudden guest has a gluten allergy and your recipe didn\'t write a rule for it, the chef crashes.',
        bn: 'প্রথাগত প্রোগ্রামিং হলো রান্নার বইয়ের সুনির্দিষ্ট রেসিপির মতো— প্রতি চামচ লবণের পরিমাণ মেপে দিতে হয়। কিন্তু কোনো নতুন অতিথি এসে ভিন্ন কিছু চাইলে যদি সেই নিয়ম আগে থেকে লেখা না থাকে, তবে বাবুর্চি আটকে যায়।',
      },
      whyItMatters: {
        en: 'Python gives you hundreds of pre-built ML toolkits (NumPy, Scikit-Learn, PyTorch) so you don\'t have to rebuild complex math from scratch.',
        bn: 'পাইথনের রয়েছে হাজার হাজার তৈরি টুল ও লাইব্রেরি, ফলে জটিল সব অ্যালগরিদম আমাদের শূন্য থেকে বানাতে হয় না।',
      },
      howItWorks: {
        en: 'You write human-readable Python code in a file or Jupyter Notebook, and the Python interpreter translates it into machine instructions that your CPU or GPU executes.',
        bn: 'আপনি ফাইলে বা জুপিটার নোটবুকে কোড লেখেন, আর পাইথন ইন্টারপ্রেটার সেটি কম্পিউটারের প্রসেসরকে বুঝিয়ে কাজ করিয়ে নেয়।',
      },
      practicalApplication: {
        en: 'Automating repetitive tasks, calculating statistics on student exam scores, and loading data files into memory.',
        bn: 'প্রতিদিনের একঘেঁয়ে কাজ স্বয়ংক্রিয় করা এবং ডেটাসেট লোড করে হিসাব-নিকাশ বের করা।',
      },
      codeExample: {
        title: 'Your First Python ML Greeting',
        language: 'python',
        code: `# Traditional rule-based if-else
def greet_student(name, score):
    print(f"Welcome to ML Path, {name}!")
    if score >= 80:
        return "Distinction predicted!"
    return "Keep practicing, you will master it!"

status = greet_student("Rahim", 92)
print("Result:", status)`,
        expectedOutput: `Welcome to ML Path, Rahim!
Result: Distinction predicted!`,
        explanation: {
          en: [
            'Line 2 defines a reusable function named greet_student taking name and score.',
            'Line 3 uses formatted strings (f-strings) to inject dynamic text.',
            'Lines 4-6 demonstrate conditional decision logic (if-else).',
          ],
          bn: [
            '২ নম্বর লাইনে greet_student নামে একটি ফাংশন তৈরি করা হয়েছে যা নাম ও স্কোর ইনপুট নেয়।',
            '৩ নম্বর লাইনে f-string দিয়ে নাম প্রিন্ট করা হয়েছে।',
            '৪-৬ নম্বর লাইনে সাধারণ শর্ত (if-else) দিয়ে সিদ্ধান্ত নেওয়া হয়েছে।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Thinking you need a computer science degree to start Python for ML.',
            bn: 'ভাবা যে মেশিন লার্নিং বা পাইথন শেখার জন্য সিএস ডিগ্রি থাকা বাধ্যতামূলক।',
          },
          solution: {
            en: 'You only need basic arithmetic and curiosity. Python is designed for human readability.',
            bn: 'শুধু সাধারণ যুক্তি আর কৌতূহল থাকলেই শেখা সম্ভব। পাইথন মানুষের পড়ার উপযোগী করেই তৈরি।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Write a simple greeting', bn: 'সহজ একটি ফাংশন লিখুন' },
        instructions: {
          en: 'Define a function predict_pass(hours_studied) that returns "Pass" if hours >= 5, else "Needs more study".',
          bn: 'predict_pass(hours_studied) নামে ফাংশন লিখুন যা পড়া ৫ ঘণ্টার বেশি হলে "Pass" রিটার্ন করবে।',
        },
        hint: {
          en: 'Use standard if hours_studied >= 5: return "Pass"',
          bn: 'if hours_studied >= 5: ব্যবহার করুন।',
        },
      },
      quiz: [
        {
          id: 'q0-1',
          question: {
            en: 'Why is Python the standard language for Machine Learning?',
            bn: 'মেশিন লার্নিংয়ের জন্য পাইথন কেন সবচেয়ে জনপ্রিয়?',
          },
          type: 'multiple_choice',
          options: [
            { id: 'a', en: 'It is very fast to write and has vast ML libraries', bn: 'কোড লেখা খুব সহজ এবং প্রচুর তৈরি লাইব্রেরি রয়েছে' },
            { id: 'b', en: 'It is the only language that runs on computers', bn: 'এটি একমাত্র ভাষা যা কম্পিউটারে চলে' },
            { id: 'c', en: 'It never throws any errors', bn: 'এতে কোনো এরর হয় না' },
          ],
          correctAnswerId: 'a',
          explanation: {
            en: 'Python combines simple syntax with powerful libraries like NumPy, Scikit-Learn, and PyTorch.',
            bn: 'পাইথনের সহজ গঠন এবং সমৃদ্ধ লাইব্রেরি ইকোসিস্টেমের কারণে এটি বিশ্বজুড়ে সমাদৃত।',
          },
        },
      ],
      nextLessonId: 'l0-what-is-data',
    },
    {
      id: 'l0-what-is-data',
      levelId: 0,
      slug: 'what-is-data',
      title: {
        en: 'What is Data? (The Fuel of AI)',
        bn: 'ডেটা কী? (এআই-এর জ্বালানি)',
      },
      subtitle: {
        en: 'Structured tables, text, pixels, and audio signals',
        bn: 'টেবিলের সংখ্যা, টেক্সট, ছবির পিক্সেল ও অডিও সিগন্যাল',
      },
      difficulty: 'Beginner',
      estimatedMinutes: 12,
      category: 'Foundations',
      whatIsIt: {
        en: 'Data is factual information—such as measurements, numbers, words, or images—collected and stored in a form that computers can process.',
        bn: 'ডেটা হলো তথ্য বা উপাত্ত—যেমন সংখ্যা, শব্দ, ছবি বা অডিও—যা কম্পিউটারে প্রসেস ও বিশ্লেষণের জন্য সংরক্ষণ করা হয়।',
      },
      analogy: {
        en: 'If a machine learning algorithm is a high-performance sports car engine, data is the fuel. Without high-octane, clean fuel, the finest car cannot run.',
        bn: 'যদি মেশিন লার্নিং অ্যালগরিদম একটি স্পোর্টস কারের ইঞ্জিন হয়, তবে ডেটা হলো সেই ইঞ্জিনের জ্বালানি। পরিষ্কার জ্বালানি ছাড়া সেরা ইঞ্জিনও চলতে পারে না।',
      },
      whyItMatters: {
        en: 'An algorithm can only be as intelligent as the data it was trained on: "Garbage In, Garbage Out".',
        bn: 'অ্যালগরিদমকে ভুল বা অগোছালো ডেটা দিলে তার সিদ্ধান্তও ভুল হবে ("Garbage In, Garbage Out")।',
      },
      howItWorks: {
        en: 'Data is organized into Features (input columns like house size, number of bedrooms) and Targets (the output label you want to predict, like house price).',
        bn: 'ডেটা সাধারণত ইনপুট ফিচার (যেমন বাড়ির আয়তন, বেডরুমের সংখ্যা) এবং টার্গেট ভ্যালু (যা আমরা অনুমান করতে চাই, যেমন দাম)-এ বিভক্ত থাকে।',
      },
      practicalApplication: {
        en: 'Collecting customer transaction history to identify fraudulent credit card purchases.',
        bn: 'গ্রাহকদের কেনাকাটার ইতিহাস সংগ্রহ করে জালিয়াতি চিহ্নিত করা।',
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Assuming all real-world data is clean, complete, and ready for modeling.',
            bn: 'মনে করা যে বাস্তব জীবনের সব ডেটা সাজানো এবং মিসিং ভ্যালুমুক্ত থাকে।',
          },
          solution: {
            en: 'In reality, 80% of an ML engineer\'s work is cleaning, normalizing, and exploring messy data.',
            bn: 'বাস্তবে একজন এমএল ইঞ্জিনিয়ারের ৮০% সময় যায় ডেটা পরিষ্কার ও গুছিয়ে নিতে।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Identify Features and Target', bn: 'ফিচার ও টার্গেট আলাদা করুন' },
        instructions: {
          en: 'In a medical dataset with [Age, Blood Pressure, Cholesterol, HasHeartDisease], identify the Target column.',
          bn: '[বয়স, রক্তচাপ, কোলেস্টেরল, হৃদরোগ_আছে_কিনা] এর মধ্যে টার্গেট কলাম কোনটি?',
        },
        hint: {
          en: 'The target is the outcome you wish to diagnose or predict.',
          bn: 'যা আমরা অনুমান করতে চাই সেটিই টার্গেট।',
        },
      },
      nextLessonId: 'l0-what-is-ai',
      previousLessonId: 'l0-what-is-programming',
    },
    {
      id: 'l0-what-is-ai',
      levelId: 0,
      slug: 'what-is-ai',
      title: {
        en: 'What is Artificial Intelligence (AI)?',
        bn: 'আর্টিফিশিয়াল ইন্টেলিজেন্স (AI) কী?',
      },
      subtitle: {
        en: 'From human perception and reasoning to autonomous digital systems',
        bn: 'মানুষের বুদ্ধিমত্তা থেকে শুরু করে স্বয়ংক্রিয় ডিজিটাল ব্যবস্থা',
      },
      difficulty: 'Beginner',
      estimatedMinutes: 15,
      category: 'Concepts',
      whatIsIt: {
        en: 'Artificial Intelligence (AI) is the broad scientific discipline dedicated to creating software and systems capable of performing cognitive tasks normally requiring human intelligence.',
        bn: 'আর্টিফিশিয়াল ইন্টেলিজেন্স (AI) হলো কম্পিউটার বিজ্ঞানের সেই শাখা, যার লক্ষ্য এমন সিস্টেম তৈরি করা যা মানুষের মতোই বুদ্ধি খাটিয়ে কাজ করতে পারে।',
      },
      analogy: {
        en: 'Think of AI as the broad category of "Vehicles". Just as vehicles include bicycles, steam trains, and supersonic jets, AI includes simple chess algorithms, expert rules, and modern self-driving cars.',
        bn: 'AI-কে আপনি "যানবাহন" ধারণার সাথে তুলনা করতে পারেন। যেমন গাড়ির মধ্যে সাইকেল থেকে শুরু করে জেট প্লেন সবকিছুই পড়ে, তেমনি এআই-এর ভেতরেও সাধারণ হিসাব থেকে শুরু করে সেলফ ড্রাইভিং কার পর্যন্ত সবই অন্তর্ভুক্ত।',
      },
      whyItMatters: {
        en: 'AI is transforming medicine, scientific discovery, customer automation, climate modeling, and software engineering.',
        bn: 'চিকিৎসাবিজ্ঞান, স্বয়ংক্রিয় রোবোটিক্স, ভাষা অনুবাদ এবং মহাকাশ গবেষণায় এআই বৈপ্লবিক পরিবর্তন এনেছে।',
      },
      howItWorks: {
        en: 'AI systems sense their environment through sensors or data inputs, process relationships, reason over possible actions, and output decisions.',
        bn: 'এআই সিস্টেম ডেটা বা সেন্সরের মাধ্যমে চারপাশের তথ্য গ্রহণ করে, যুক্তির মাধ্যমে তুলনা করে এবং কার্যকর সিদ্ধান্ত নেয়।',
      },
      practicalApplication: {
        en: 'Navigation apps computing the fastest route considering real-time traffic jams.',
        bn: 'গুগল ম্যাপে ট্রাফিকের অবস্থা দেখে দ্রুততম বিকল্প পথ দেখানো।',
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Believing AI means sentient, self-aware humanoid robots.',
            bn: 'ভাবা যে এআই মানেই মানুষের মতো রক্ত-মাংসহীন স্বচেতন রোবট যা পৃথিবী দখল করবে।',
          },
          solution: {
            en: 'Modern AI is "Narrow AI" (ANI), excelling at very specific mathematical pattern recognition tasks.',
            bn: 'বর্তমান এআই হলো "Narrow AI", যা নির্দিষ্ট কিছু কাজে অসাধারণ পারদর্শী হলেও নিজে থেকে সচেতন নয়।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Spot the AI Application', bn: 'এআই প্রয়োগ চিহ্নিত করুন' },
        instructions: {
          en: 'List 3 applications you used today that rely on AI.',
          bn: 'আজকে ব্যবহার করেছেন এমন ৩টি এআই ফিচারের নাম ভাবুন (যেমন: ফেস আনলক, ইউটিউব রেকমেন্ডেশন)।',
        },
        hint: {
          en: 'Think about predictive search, spam filters, or voice assistants.',
          bn: 'ইউটিউব, সার্চ ইঞ্জিন বা কিবোর্ডের পরের শব্দ অনুমান করার কথা ভাবুন।',
        },
      },
      nextLessonId: 'l0-what-is-ml',
      previousLessonId: 'l0-what-is-data',
    },
    {
      id: 'l0-what-is-ml',
      levelId: 0,
      slug: 'what-is-ml',
      title: {
        en: 'What is Machine Learning? How Computers Learn',
        bn: 'মেশিন লার্নিং কী? কম্পিউটার কীভাবে শেখে?',
      },
      subtitle: {
        en: 'Data + Answers = Rules! The shift from manual coding to pattern discovery',
        bn: 'ডেটা + উত্তর = ফর্মুলা! নিয়ম লেখার বদলে উদাহরণের মাধ্যমে শেখার জাদু',
      },
      difficulty: 'Beginner',
      estimatedMinutes: 15,
      category: 'Concepts',
      whatIsIt: {
        en: 'Machine Learning is a subset of AI where computers learn from past experience (historical data) to identify mathematical patterns and make future predictions without being hardcoded.',
        bn: 'মেশিন লার্নিং (ML) হলো এআই-এর সেই অংশ যেখানে কম্পিউটারকে প্রতিটি নিয়মের জন্য আলাদা কোড না লিখে, প্রচুর ডেটা ও উদাহরণের মাধ্যমে ভেতরের প্যাটার্ন নিজে নিজে খুঁজে নিতে দেওয়া হয়।',
      },
      analogy: {
        en: 'How do toddlers learn what a cat is? Parents don\'t lecture them with geometric equations: "A cat is a mammal with ears at 45 degrees, whisker length 3cm". Instead, they show 50 cats in picture books: "Look, that is a cat!". The child\'s brain abstracts the concept.',
        bn: 'একটি ছোট শিশু কীভাবে বিড়াল চেনে? বাবা-মা তাকে কোনো জ্যামিতিক সংজ্ঞা মুখস্থ করান না। বরং তাকে বইয়ে ২০-৩০টি বিড়ালের ছবি দেখিয়ে বলেন "এটি বিড়াল"। শিশুর মস্তিষ্ক নিজেই বিড়ালের বৈশিষ্ট্য চিনে নেয়। মেশিন লার্নিং ঠিক এভাবেই কাজ করে!',
      },
      whyItMatters: {
        en: 'For complex problems like recognizing handwritten digits or predicting stock values, humans cannot write complete if-else rules. ML figures out the formula automatically.',
        bn: 'হাতের লেখা অক্ষর চেনা বা ক্যান্সার শনাক্তকরণের ক্ষেত্রে মানুষের পক্ষে লক্ষ লক্ষ if-else রুল লেখা অসম্ভব। এমএল স্বয়ংক্রিয়ভাবে সেই ফর্মুলা বের করে ফেলে।',
      },
      howItWorks: {
        en: '1) Gather training data with known labels; 2) Feed it into a learning algorithm; 3) The algorithm adjusts its internal parameters to minimize mistakes; 4) Save the trained Model for testing on new data.',
        bn: '১) ডেটাসেট সংগ্রহ করা; ২) অ্যালগরিদমে পাঠানো; ৩) মডেল ভুল কমাতে তার প্যারামিটার সামঞ্জস্য করা; ৪) নতুন ডেটা দিয়ে পরীক্ষা করা।',
      },
      practicalApplication: {
        en: 'Email spam detectors sorting millions of incoming emails by recognizing words and senders frequently associated with spam.',
        bn: 'ইমেইল স্প্যাম ফিল্টারিং: অতীতে আসা লক্ষ লক্ষ ইমেইল দেখে সিস্টেম নিজে নিজেই স্প্যামের প্যাটার্ন চিনে নেয়।',
      },
      codeExample: {
        title: 'Comparing Traditional Programming vs Machine Learning',
        language: 'python',
        code: `# Traditional Programming: Human writes explicit rules
def predict_price_rules(sqft):
    return sqft * 3000 + 50000

# Machine Learning (Scikit-Learn style):
# We give Data (X) and Answers (y), Model discovers the weights!
from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([[600], [800], [1000], [1400]]) # Sizes
y = np.array([230000, 290000, 350000, 470000]) # Prices

model = LinearRegression()
model.fit(X, y) # The model learns!

prediction = model.predict([[1200]])
print("Predicted price for 1200 sqft:", round(prediction[0]))`,
        expectedOutput: `Predicted price for 1200 sqft: 410000`,
        explanation: {
          en: [
            'In traditional code, we guessed the slope (3000) and bias (50000).',
            'In ML, model.fit(X, y) discovered the exact optimal relationship on its own from data!',
          ],
          bn: [
            'সাধারণ কোডে আমরা নিজেরা ফর্মুলা ঠিক করে দিতাম।',
            'মেশিন লার্নিংয়ে model.fit() ডেটা দেখে নিজেই সঠিক সম্পর্কটি বের করে নিয়েছে!',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Believing machine learning gives 100% correct answers every time.',
            bn: 'মনে করা যে মেশিন লার্নিং সবসময় ১০০% নির্ভুল উত্তর দেবে।',
          },
          solution: {
            en: 'ML models produce probabilistic estimations, not mathematical certainty. Evaluation metrics measure how reliable those probabilities are.',
            bn: 'এমএল মডেল সম্ভাব্যতা (Probability) হিসাব করে। তাই মডেলের পারফরম্যান্স যাচাই করতে মেট্রিক্স ব্যবহার করা হয়।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Run a simple ML fit', bn: 'সহজ মডেল ফিট করুন' },
        instructions: {
          en: 'Try imagining 3 data points of temperature vs ice cream sales. How would an ML model find the trend?',
          bn: 'তাপমাত্রা বাড়লে আইসক্রিম বিক্রির সংখ্যা বাড়ে— এমএল মডেল কীভাবে এই সম্পর্কটি শিখবে তা চিন্তা করুন।',
        },
        hint: {
          en: 'The model draws a best-fit line through the points to minimize prediction errors.',
          bn: 'মডেলটি পয়েন্টগুলোর মধ্য দিয়ে এমন একটি রেখা টানে যাতে ভুলের পরিমাণ সর্বনিম্ন হয়।',
        },
      },
      quiz: [
        {
          id: 'q0-ml',
          question: {
            en: 'What is the key difference between Traditional Programming and Machine Learning?',
            bn: 'প্রথাগত প্রোগ্রামিং এবং মেশিন লার্নিংয়ের মূল পার্থক্য কী?',
          },
          type: 'multiple_choice',
          options: [
            { id: 'a', en: 'Traditional: Data + Rules = Answers; ML: Data + Answers = Rules', bn: 'প্রথাগত: ডেটা + রুল = উত্তর; এমএল: ডেটা + উত্তর = রুল বা মডেল' },
            { id: 'b', en: 'ML does not require computers', bn: 'এমএল-এর জন্য কম্পিউটারের দরকার নেই' },
            { id: 'c', en: 'Traditional programming can only run on phones', bn: 'প্রথাগত প্রোগ্রামিং শুধু ফোনে চলে' },
          ],
          correctAnswerId: 'a',
          explanation: {
            en: 'In ML, computers deduce the mathematical rules themselves directly from pairs of inputs and outputs.',
            bn: 'মেশিন লার্নিংয়ে কম্পিউটার ডেটা ও উত্তরের মধ্যকার অন্তর্নিহিত সম্পর্ক বা রুল স্বয়ংক্রিয়ভাবে আবিষ্কার করে।',
          },
        },
      ],
      nextLessonId: 'l0-ai-vs-ml-vs-dl',
      previousLessonId: 'l0-what-is-ai',
    },
    {
      id: 'l0-ai-vs-ml-vs-dl',
      levelId: 0,
      slug: 'ai-vs-ml-vs-dl',
      title: {
        en: 'AI vs Machine Learning vs Deep Learning',
        bn: 'AI বনাম Machine Learning বনাম Deep Learning',
      },
      subtitle: {
        en: 'The Russian Nesting Dolls of Intelligent Computing',
        bn: 'রাশিয়ান পুতুলের মতো একের ভেতর আরেক স্তরের স্বচ্ছ ধারণা',
      },
      difficulty: 'Beginner',
      estimatedMinutes: 10,
      category: 'Concepts',
      whatIsIt: {
        en: 'AI is the outermost circle (any smart behavior). Machine Learning is a subset within AI (learning from data). Deep Learning is a specialized subset within Machine Learning (using multi-layered neural networks).',
        bn: 'AI হলো সবচেয়ে বড় পরিধি (বুদ্ধিমান যেকোনো সিস্টেম)। মেশিন লার্নিং হলো এআই-এর ভেতরে একটি অংশ (ডেটা থেকে শেখা)। আর ডিপ লার্নিং হলো মেশিন লার্নিংয়ের ভেতরের একটি বিশেষ অংশ (বহুস্তরের কৃত্রিম নিউরাল নেটওয়ার্ক)।',
      },
      analogy: {
        en: 'Think of Russian Matryoshka nesting dolls: Outer big doll = AI. Middle doll = Machine Learning. Innermost doll = Deep Learning.',
        bn: 'রাশিয়ান পুতুলের মতো চিন্তা করুন: সবচেয়ে বড় পুতুলটি হলো AI। তার পেটের ভেতরের পুতুলটি হলো ML। আর তারও ভেতরের সবচেয়ে গভীর পুতুলটি হলো Deep Learning।',
      },
      whyItMatters: {
        en: 'Helps you choose the right tool: you don\'t need massive Deep Learning for simple tabular sales forecasts, but you do need it for facial recognition.',
        bn: 'কোন সমস্যায় সাধারণ এমএল আর কোনটায় ডিপ লার্নিং লাগবে তা সঠিকভাবে বাছাই করতে এই পার্থক্য বোঝা জরুরি।',
      },
      howItWorks: {
        en: 'Classical ML requires human engineers to manually engineer features. Deep Learning learns features automatically from raw pixels, audio waves, or tokens.',
        bn: 'চিরাচরিত এমএল-এ মানুষকে ফিচার বানিয়ে দিতে হয়। কিন্তু ডিপ লার্নিং কাঁচা ছবি বা অডিও থেকে নিজে নিজেই জটিল সব ফিচার শিখে ফেলে।',
      },
      practicalApplication: {
        en: 'Classical ML: Credit card fraud detection on tabular numbers. Deep Learning: ChatGPT understanding conversational language.',
        bn: 'ক্লাসিক্যাল এমএল: ব্যাংকের ডেটা দেখে ঋণ অনুমোদন। ডিপ লার্নিং: চ্যাটজিপিটি বা স্বয়ংক্রিয় গাড়ি চালানো।',
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Using Deep Learning for every single problem even when data is tiny.',
            bn: 'ছোটখাটো সব সমস্যার জন্যই অকারণে বিশাল ডিপ লার্নিং মডেল ব্যবহার করা।',
          },
          solution: {
            en: 'For small or tabular datasets, algorithms like XGBoost and Random Forest often outperform complex Neural Networks with fraction of the compute.',
            bn: 'টেবুলার ডেটার জন্য র‍্যান্ডম ফরেস্ট বা এক্সজিবুস্ট অনেক সময় নিউরাল নেটওয়ার্কের চেয়েও দ্রুত ও ভালো ফল দেয়।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Categorize the application', bn: 'সঠিক স্তর নির্বাচন করুন' },
        instructions: {
          en: 'Identify whether "Recognizing cats in 4K video" is best suited for Classical ML or Deep Learning.',
          bn: 'ভিডিও থেকে বিড়াল চেনার জন্য ক্লাসিক্যাল এমএল নাকি ডিপ লার্নিং বেশি উপযোগী?',
        },
        hint: {
          en: 'High-dimensional perceptual data like pixels requires deep hierarchical representations.',
          bn: 'ছবির মতো জটিল ডেটার জন্য ডিপ লার্নিং (CNN) সেরা।',
        },
      },
      previousLessonId: 'l0-what-is-ml',
    },
  ],
};
