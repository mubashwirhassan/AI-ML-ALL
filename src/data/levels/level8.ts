import { Level } from '../../types';

export const level8: Level = {
  id: 8,
  slug: 'specialized-fields',
  title: {
    en: 'Level 8 — Specialized Fields (NLP, CV, Time Series, RecSys)',
    bn: 'লেভেল ৮ — বিশেষায়িত ক্ষেত্রসমূহ (NLP, CV, টাইম সিরিজ ও রিকমেন্ডার)',
  },
  subtitle: {
    en: 'Computer Vision, Natural Language Processing, Sequential Forecasting, and Recommendation Engines',
    bn: 'কম্পিউটার ভিশন, ল্যাঙ্গুয়েজ প্রসেসিং, টাইম সিরিজ ফোরকাস্টিং এবং রিকমেন্ডেশন সিস্টেম',
  },
  description: {
    en: 'Dive into real-world AI applications. Explore CNNs for images, Tokenization & Transformers for natural language, ARIMA & Prophet for time-series forecasting, and Collaborative Filtering for personalization.',
    bn: 'বাস্তব জীবনের ৪টি বড় বিশেষায়িত ক্ষেত্র শিখুন: ছবির জন্য CNN, টেক্সটের জন্য টোকেনাইজেশন ও ট্রান্সফরমার, ভবিষ্যৎ পূর্বাভাসের জন্য টাইম সিরিজ এবং ব্যক্তিগত পছন্দের জন্য রিকমেন্ডেশন সিস্টেম।',
  },
  iconName: 'Sparkle',
  color: 'from-purple-500 to-indigo-600',
  badge: 'Specialized Domains',
  lessons: [
    {
      id: 'l8-nlp',
      levelId: 8,
      slug: 'natural-language-processing-and-llms',
      title: {
        en: 'Natural Language Processing (NLP) & Modern Transformers',
        bn: 'ন্যাচারাল ল্যাঙ্গুয়েজ প্রসেসিং (NLP) ও আধুনিক ট্রান্সফরমার',
      },
      subtitle: {
        en: 'Tokenization, TF-IDF, Word Embeddings, and the Self-Attention Revolution',
        bn: 'টোকেনাইজেশন, টিএফ-আইডিএফ, ওয়ার্ড এমবেডিং এবং সেলফ-অ্যাটেনশন বিপ্লব',
      },
      difficulty: 'Advanced',
      estimatedMinutes: 35,
      category: 'NLP',
      whatIsIt: {
        en: 'NLP empowers computers to understand, interpret, and generate human written and spoken text. Modern NLP uses Tokenization to convert words into numeric IDs, Embeddings to capture semantic meaning, and Transformers (Self-Attention) to model long-range context.',
        bn: 'NLP হলো কম্পিউটারকে মানুষের ভাষা বুঝতে ও তৈরি করতে সক্ষম করার প্রযুক্তি। এতে টেক্সটকে টোকেনে ভাগ করা হয়, ভেক্টর এমবেডিং দিয়ে শব্দের আসল অর্থ প্রকাশ করা হয় এবং ট্রান্সফরমারের মাধ্যমে পুরো বাক্যের ভাব অনুধাবন করা হয়।',
      },
      analogy: {
        en: 'In high school language class, memorizing a translation dictionary word-for-word is like TF-IDF. A fluent multilingual native speaker who understands cultural puns, sarcasm, and grammar context in real time is like a Transformer!',
        bn: 'শব্দকোষ দেখে আক্ষরিক অর্থ বের করা হলো TF-IDF এর মতো। আর একজন স্থানীয় বক্তা যেভাবে ব্যঙ্গ, রূপক এবং পুরো বাক্যের ভাব মুহূর্তেই বোঝেন—ট্রান্সফরমার ঠিক সেভাবে কাজ করে।',
      },
      whyItMatters: {
        en: 'Transformers are the foundational backbone of ChatGPT, Claude, Gemini, modern machine translation, and speech-to-text assistants.',
        bn: 'বর্তমান বিশ্বের সব বড় বড় ল্যাঙ্গুয়েজ মডেল (জেমিনি, চ্যাটজিপিটি) এবং গুগল ট্রানস্লেট এই ট্রান্সফরমার আর্কিটেকচারের ওপর দাঁড়িয়ে আছে।',
      },
      howItWorks: {
        en: 'Text is split into subword tokens. Tokens are mapped to continuous vector coordinates (Embeddings). Multi-Head Self-Attention calculates Query-Key dot products to discover how words relate to each other: Attention(Q, K, V) = softmax(QK^T / √d_k) * V.',
        bn: 'টেক্সটকে টোকেনে ভাগ করে এমবেডিং ভেক্টরে রূপান্তর করা হয়। সেলফ-অ্যাটেনশন মেকানিজম প্রতিটি শব্দের সাথে অন্য সব শব্দের গুরুত্ব (Affinity) হিসাব করে।',
      },
      practicalApplication: {
        en: 'Sentiment analysis on product reviews, automated customer support chatbots, and summarization of 50-page legal contracts.',
        bn: 'পণ্যের রিভিউর অনুভূতি বিশ্লেষণ (পজিটিভ নাকি নেগেটিভ) এবং বড় বড় আইনি চুক্তিপত্রের স্বয়ংক্রিয় সারসংক্ষেপ তৈরি।',
      },
      codeExample: {
        title: 'TF-IDF Vectorizer and Sentiment Classification',
        language: 'python',
        code: `from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

# Training text corpus
reviews = [
    "Amazing product, highly recommended and fast delivery!",
    "Terrible customer service, completely broken on arrival",
    "Great quality, loved the packaging and colors",
    "Worst purchase ever, waste of hard earned money"
]
labels = [1, 0, 1, 0] # 1 = Positive, 0 = Negative

# 1. Convert raw text to TF-IDF numerical matrix
vectorizer = TfidfVectorizer()
X_tfidf = vectorizer.fit_transform(reviews)

# 2. Train Naive Bayes text classifier
classifier = MultinomialNB()
classifier.fit(X_tfidf, labels)

# 3. Test on a completely new review
test_review = ["Fast delivery and wonderful quality!"]
test_vector = vectorizer.transform(test_review)
prediction = classifier.predict(test_vector)[0]

print("Test Text:", test_review[0])
print("Predicted Sentiment:", "POSITIVE (1)" if prediction == 1 else "NEGATIVE (0)")`,
        expectedOutput: `Test Text: Fast delivery and wonderful quality!
Predicted Sentiment: POSITIVE (1)`,
        explanation: {
          en: [
            'TfidfVectorizer converted words into weighted frequency vectors.',
            'MultinomialNB accurately predicted POSITIVE based on learned word affinities.',
          ],
          bn: [
            'TfidfVectorizer টেক্সটকে সংখ্যাসূচক ওজনে রূপান্তর করেছে।',
            'মডেলটি নতুন বাক্যে "Fast delivery" ও "wonderful quality" দেখে পজিটিভ বলে রায় দিয়েছে।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Using simple bag-of-words without lowercasing, treating "Apple", "apple", and "apple!" as 3 different words.',
            bn: 'টেক্সট পরিষ্কার না করে ছোট ও বড় হাতের অক্ষরকে আলাদা শব্দ ভাবা।',
          },
          solution: {
            en: 'Always preprocess text with lowercasing, punctuation stripping, and tokenization.',
            bn: 'আগে টেক্সটকে ছোট হাতের করে এবং অপ্রয়োজনীয় বিরামচিহ্ন ফেলে দিন।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Identify the Attention Mechanism', bn: 'সেলফ-অ্যাটেনশনের কাজ' },
        instructions: {
          en: 'In the sentence "The animal didn\'t cross the street because it was too tired", what does "it" refer to?',
          bn: '"The animal didn\'t cross the street because it was too tired" বাক্যে "it" কাকে বোঝাচ্ছে?',
        },
        hint: {
          en: 'Self-Attention links "it" strongly with "animal" (not "street") based on contextual semantics!',
          bn: 'অ্যাটেনশন মেকানিজম "it" শব্দটিকে "animal"-এর সাথে যুক্ত করে।',
        },
      },
      nextLessonId: 'l8-computer-vision',
    },
    {
      id: 'l8-computer-vision',
      levelId: 8,
      slug: 'computer-vision-cnn-and-object-detection',
      title: {
        en: 'Computer Vision: Image Processing, CNNs & Object Detection',
        bn: 'কম্পিউটার ভিশন: ছবি বিশ্লেষণ, সিএনএন ও অবজেক্ট ডিটেকশন',
      },
      subtitle: {
        en: 'Spatial convolutions, pooling filters, YOLO object detection, and segmentation',
        bn: 'স্থানিক কনভলিউশন, ম্যাক্স পুলিং, ইয়োলো অবজেক্ট ডিটেকশন ও সেগমেন্টেশন',
      },
      difficulty: 'Advanced',
      estimatedMinutes: 35,
      category: 'Computer Vision',
      whatIsIt: {
        en: 'Computer Vision enables machines to extract meaningful understanding from visual inputs like images and videos. Convolutional Neural Networks (CNNs) preserve spatial relationships by sliding small feature filters across pixels.',
        bn: 'কম্পিউটার ভিশন হলো যন্ত্রকে ছবি বা ভিডিও দেখে মানুষের মতো চিনতে ও বুঝতে শেখানো। সিএনএন (CNN) ছোট ছোট ফিল্টার ছবির ওপর দিয়ে ঘুরিয়ে দাগ, কোণ, গঠন এবং চূড়ান্ত বস্তু চিনে নেয়।',
      },
      analogy: {
        en: 'Looking at an impressionist painting through a small cardboard magnifying square: you slide the square across the canvas to detect brush strokes, textures, and outlines without losing track of where they sit in relation to each other.',
        bn: 'একটি ম্যাগনিফাইং গ্লাস দিয়ে বড় ছবির প্রতিটি অংশ পর্যবেক্ষণ করে গুরুত্বপূর্ণ বৈশিষ্ট্যগুলো চিহ্নিত করার মতো।',
      },
      whyItMatters: {
        en: 'Powers autonomous driving, medical CT/MRI anomaly detection, facial biometric security, and satellite imagery analysis.',
        bn: 'সেলফ-ড্রাইভিং কার, এমআরআই স্ক্যানে টিউমার শনাক্তকরণ, ফেস আনলক এবং স্যাটেলাইট থেকে ফসলের মান পর্যবেক্ষণে এটি ব্যবহৃত হয়।',
      },
      howItWorks: {
        en: '1) Convolution Layer slides 3x3 kernels over pixel matrices; 2) ReLU activations add non-linearity; 3) MaxPooling downsamples dimensions while retaining sharpest signals; 4) Dense classification head outputs category.',
        bn: '১) ৩x৩ ফিল্টার ছবির পিক্সেল ম্যাট্রিক্সে ঘুরে ফিচার ম্যাপ তৈরি করে; ২) ম্যাক্স পুলিং ছবির সাইজ ছোট করে মূল সিগন্যাল ধরে রাখে; ৩) ক্লাসিফিকেশন হেড চূড়ান্ত লেবেল দেয়।',
      },
      practicalApplication: {
        en: 'YOLO (You Only Look Once) detecting pedestrians, bicycles, and traffic lights at 60 frames per second in self-driving cars.',
        bn: 'স্বয়ংক্রিয় গাড়িতে সেকেন্ডে ৬০ ফ্রেম গতিতে পথচারী, ট্রাফিক সাইন ও গাড়ি শনাক্তকরণ (YOLO)।',
      },
      codeExample: {
        title: 'Inspecting Image Tensors & Pixel Dimensions',
        language: 'python',
        code: `import numpy as np

# A simulated color RGB image tensor: [Batch, Height, Width, Channels]
image_batch = np.random.randint(0, 256, size=(1, 224, 224, 3), dtype=np.uint8)

print(f"Batch Shape: {image_batch.shape}")
print(f"Height x Width: {image_batch.shape[1]} x {image_batch.shape[2]} pixels")
print(f"Color Channels: {image_batch.shape[3]} (Red, Green, Blue)")

# Normalizing pixels to [0, 1] range for CNN processing
image_normalized = image_batch.astype(np.float32) / 255.0
print(f"Normalized pixel range: [{image_normalized.min():.1f}, {image_normalized.max():.1f}]")`,
        expectedOutput: `Batch Shape: (1, 224, 224, 3)
Height x Width: 224 x 224 pixels
Color Channels: 3 (Red, Green, Blue)
Normalized pixel range: [0.0, 1.0]`,
        explanation: {
          en: [
            'Every color digital photograph is a 3D matrix of RGB pixel intensity integers (0 to 255).',
            'Dividing by 255.0 standardizes pixel values into [0.0, 1.0] for stable gradient descent.',
          ],
          bn: [
            'প্রতিটি রঙিন ডিজিটাল ছবি হলো লাল, সবুজ ও নীল (RGB) পিক্সেল মানের একটি ত্রিমাত্রিক ম্যাট্রিক্স।',
            '২৫৫ দিয়ে ভাগ করে মানগুলোকে ০.০ থেকে ১.০ এর মধ্যে এনে মডেলের উপযোগী করা হয়।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Feeding unnormalized raw 0-255 pixel values into neural networks, causing gradient saturation.',
            bn: 'পিক্সেল মান স্বাভাবিক (০ থেকে ১) না করেই সরাসরি নিউরাল নেটওয়ার্কে দেওয়া।',
          },
          solution: {
            en: 'Always rescale pixel inputs by dividing by 255.0 or apply standard ImageNet mean/std normalization.',
            bn: 'সবসময় পিক্সেলকে ২৫৫ দিয়ে ভাগ করে স্কেল করে নিন।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Identify the role of MaxPooling', bn: 'ম্যাক্স পুলিংয়ের উদ্দেশ্য' },
        instructions: {
          en: 'Why do CNNs apply MaxPooling after convolutional layers?',
          bn: 'সিএনএন-এ কনভলিউশনের পর কেন ম্যাক্স পুলিং লেয়ার দেওয়া হয়?',
        },
        hint: {
          en: 'To reduce spatial dimensions, lower compute load, and provide translation invariance (robustness to slight object shifts).',
          bn: 'ছবির সাইজ ছোট করে দ্রুত কম্পিউট করতে এবং সামান্য স্থান পরিবর্তনেও যেন বস্তু চেনা যায় তা নিশ্চিত করতে।',
        },
      },
      previousLessonId: 'l8-nlp',
    },
  ],
};
